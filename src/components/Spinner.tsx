'use client';

import React, { useEffect, useRef, useState } from 'react';
import './Spinner.css';
import { BoxReveal } from './magicui/box-reveal';
import SlideText from './SlideText';
import { motion } from 'framer-motion'
import { Spotlight } from './ui/Spotlight';
import { TextReveal } from './magicui/text-reveal';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import { Cover } from './ui/cover';
interface GalleryItem {
    id: number;
    title: string;
    images: string[]; // Changed from single image to array of images
    description: string;
}

interface SpinnerProps {
    items?: GalleryItem[];
    radius?: number;
    mobileRadius?: number;
    repeat?: number;
    dragSpeed?: number;
}

const defaultItems: GalleryItem[] = [
    {
        id: 1,
        title: "Managed Offices",
        images: [
            "/offerings/managedoffices/1.jpg",
            "/offerings/managedoffices/2.jpg",
            "/offerings/managedoffices/3.jpg",
            "/offerings/managedoffices/4.jpg"
        ],
        description: "The Hive offers fully managed office spaces with premium amenities, housekeeping, and dedicated support for growing teams and established businesses."
    },
    {
        id: 2,
        title: "Enterprise Solutions",
        images: [
            "/offerings/enterprisesolutions/1.jpg",
            "/offerings/enterprisesolutions/2.jpg",
            "/offerings/enterprisesolutions/3.jpg",
            "/offerings/enterprisesolutions/4.jpg",
            "/offerings/enterprisesolutions/5.jpg",
            "/offerings/enterprisesolutions/6.jpg"
        ],
        description: "Customized workspace solutions for large corporations, featuring scalable infrastructure, advanced security, and tailored services to meet enterprise needs."
    },
    {
        id: 3,
        title: "Private Cabins",
        images: [
            "/offerings/privatecabins/1.jpg",
            "/offerings/privatecabins/2.jpg",
            "/offerings/privatecabins/3.jpg",
            "/offerings/privatecabins/4.jpg",
            "/offerings/privatecabins/5.jpg"
        ],
        description: "Secure, soundproof private cabins perfect for focused work, confidential meetings, and professionals who value privacy and concentration."
    },
    {
        id: 4,
        title: "Dedicated Desks",
        images: [
            "/offerings/dedicateddesks/1.jpg",
            "/offerings/dedicateddesks/2.jpg",
            "/offerings/dedicateddesks/3.jpg",
            "/offerings/dedicateddesks/4.jpg",
            "/offerings/dedicateddesks/5.jpg",
            "/offerings/dedicateddesks/6.jpg"
        ],
        description: "Your own personal workspace with storage, consistent seating, and access to all amenities - ideal for professionals seeking routine and stability."
    },
    {
        id: 5,
        title: "Hot Desks",
        images: [
            "/offerings/hotdesks/1.jpg",
            "/offerings/hotdesks/2.jpg",
            "/offerings/hotdesks/3.jpg"
        ],
        description: "Flexible, on-demand workspace access with high-speed internet, printing facilities, and collaborative environment for digital nomads and freelancers."
    },
    {
        id: 6,
        title: "Meetings & Event Spaces",
        images: [
            "/offerings/meetingsandevents/1.jpg",
            "/offerings/meetingsandevents/2.jpg",
            "/offerings/meetingsandevents/3.jpg",
            "/offerings/meetingsandevents/4.jpg",
            "/offerings/meetingsandevents/5.jpg",
            "/offerings/meetingsandevents/6.jpg",
            "/offerings/meetingsandevents/7.jpg"
        ],
        description: "Professional meeting rooms, conference halls, and event spaces equipped with AV technology, catering options, and flexible booking arrangements."
    },
];




const Spinner: React.FC<SpinnerProps> = ({
    items = defaultItems,
    radius = 250,
    mobileRadius = 140,
    repeat = 2,
    dragSpeed = 3
}) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const galleryRef = useRef<HTMLDivElement>(null);
    const [currentItem, setCurrentItem] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // New state for current image within item
    const [isDragging, setIsDragging] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    // Create flattened array of all images for the circle
    const allImages = items.flatMap(item => item.images);
    const totalImages = allImages.length;

    // Gallery state
    const galleryStateRef = useRef({
        currentRadius: typeof window !== 'undefined' && window.innerWidth > 767 ? radius : mobileRadius,
        total: totalImages * repeat,
        offset: -90 - 180 / (totalImages * repeat),
        prevOffset: -90 - 180 / (totalImages * repeat),
        rotation: 0,
        prevCoordinate: 0,
        startAngle: 0,
        currentImage: 0,
        clickLock: false,
        renderLock: false
    });

    const speed = dragSpeed * 0.1;

    // Helper function to get item and image index from flat index
    const getItemAndImageIndex = (flatIndex: number) => {
        let currentIndex = 0;
        for (let i = 0; i < items.length; i++) {
            if (flatIndex < currentIndex + items[i].images.length) {
                return {
                    itemIndex: i,
                    imageIndex: flatIndex - currentIndex
                };
            }
            currentIndex += items[i].images.length;
        }
        return { itemIndex: 0, imageIndex: 0 };
    };

    useEffect(() => {
        const state = galleryStateRef.current;
        state.total = totalImages * repeat;
        state.offset = -90 - 180 / state.total;
        state.prevOffset = state.offset;

        setTimeout(() => {
            setIsAnimating(true);
            render(); // Initial render after animation starts
        }, 100);

        const handleResize = () => {
            state.currentRadius = window.innerWidth > 767 ? radius : mobileRadius;
            render();
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [items, radius, mobileRadius, repeat, totalImages]);

    const render = () => {
        if (!containerRef.current) return;

        const state = galleryStateRef.current;
        const images = containerRef.current.querySelectorAll('.mdw-3d-circle-gallery-circle img');

        for (let i = 0; i < state.total; i++) {
            const angleD = i * 360 / state.total + state.offset;
            const angleR = angleD * Math.PI / 180;
            const x = state.currentRadius * Math.cos(angleR);
            const y = state.currentRadius * Math.sin(angleR);
            const opacity = Math.abs(Math.cos(angleR));

            const img = images[i] as HTMLElement;
            if (img) {
                img.style.setProperty('--x', x + 'px');
                img.style.setProperty('--y', y + 'px');
                img.style.setProperty('--r', angleD + 'deg');
                img.style.setProperty('--o', opacity.toString());
            }
        }
    };

    const getAngle = (e: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent): number => {
        if (!containerRef.current) return 0;

        const state = galleryStateRef.current;
        const rect = containerRef.current.getBoundingClientRect();

        let currentX: number, currentY: number;

        if ('touches' in e) {
            currentX = e.touches[0]?.clientX || 0;
            currentY = e.touches[0]?.clientY || 0;
        } else {
            currentX = e.clientX;
            currentY = e.clientY;
        }

        currentX -= rect.left + rect.width / 2;
        currentY = -(currentY - rect.top - rect.height / 2);

        const angleT = Math.atan(Math.abs(currentY / currentX)) * 180 / Math.PI;
        let angle = angleT;
        let currentCoordinate = 0;

        if (currentX >= 0 && currentY >= 0) {
            angle = angleT;
            currentCoordinate = 0;
        }
        if (currentX < 0 && currentY >= 0) {
            angle = 180 - angleT;
            currentCoordinate = 1;
        }
        if (currentX <= 0 && currentY < 0) {
            angle = 180 + angleT;
            currentCoordinate = 2;
        }
        if (currentX > 0 && currentY < 0) {
            angle = 360 - angleT;
            currentCoordinate = 3;
        }

        if (state.prevCoordinate === 3 && currentCoordinate === 0) {
            state.rotation += 1;
        }
        if (state.prevCoordinate === 0 && currentCoordinate === 3) {
            state.rotation -= 1;
        }

        const finalAngle = state.rotation * 360 + angle;
        state.prevCoordinate = currentCoordinate;
        return finalAngle;
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        const state = galleryStateRef.current;
        setIsDragging(true);
        state.startAngle = getAngle(e);
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        const state = galleryStateRef.current;
        setIsDragging(true);
        state.startAngle = getAngle(e);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;

        const state = galleryStateRef.current;
        const angle = getAngle(e);
        const angleDiff = angle - state.startAngle;
        state.offset = -1 * angleDiff * speed + state.prevOffset;

        if (!state.renderLock) {
            state.renderLock = true;
            requestAnimationFrame(() => {
                render();
                state.renderLock = false;
            });
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (!isDragging) return;

        const state = galleryStateRef.current;
        const angle = getAngle(e);
        const angleDiff = angle - state.startAngle;
        state.offset = -1 * angleDiff * speed + state.prevOffset;

        if (!state.renderLock) {
            state.renderLock = true;
            requestAnimationFrame(() => {
                render();
                state.renderLock = false;
            });
        }
    };

    const handleMouseUp = () => {
        if (isDragging) {
            const state = galleryStateRef.current;
            setIsDragging(false);
            state.rotation = 0;
            state.prevOffset = state.offset;
        }
    };

    const handleTouchEnd = () => {
        if (isDragging) {
            const state = galleryStateRef.current;
            setIsDragging(false);
            state.rotation = 0;
            state.prevOffset = state.offset;
        }
    };

    const changeSlide = (next: boolean = true) => {
        const state = galleryStateRef.current;
        if (state.clickLock) return;

        state.clickLock = true;
        state.currentImage = next ? state.currentImage + 1 : state.currentImage - 1;

        if (state.currentImage >= totalImages) state.currentImage = 0;
        if (state.currentImage < 0) state.currentImage = totalImages - 1;

        const { itemIndex, imageIndex } = getItemAndImageIndex(state.currentImage);
        setCurrentItem(itemIndex);
        setCurrentImageIndex(imageIndex);

        state.offset = next ? state.offset + 360 / state.total : state.offset - 360 / state.total;
        state.prevOffset = state.offset;
        render();

        setTimeout(() => {
            state.clickLock = false;
        }, 260);
    };

    const handleImageHover = (index: number) => {
        if (isDragging) return;

        const state = galleryStateRef.current;
        const flatIndex = index % totalImages;
        state.currentImage = flatIndex;

        const { itemIndex, imageIndex } = getItemAndImageIndex(flatIndex);
        setCurrentItem(itemIndex);
        setCurrentImageIndex(imageIndex);
        setIsHovering(true);
    };

    const handleImageLeave = () => {
        setTimeout(() => {
            setIsHovering(false);
        }, 3000)
    };

    // Generate repeated images for the circle
    const repeatedImages = [];
    for (let i = 0; i < repeat; i++) {
        repeatedImages.push(...allImages);
    }

    useEffect(() => {
        // Initial render when component mounts
        setTimeout(() => {
            render();
        }, 150);
    }, [repeatedImages]);

    // Get current image URL
    const getCurrentImageUrl = () => {
        return items[currentItem]?.images[currentImageIndex] || '';
    };

    return (
        <>
       <div> 
  <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white leading-[1.3]">
    Power your growth <br /> with <Cover>lightning-fast solutions</Cover>
  </h1>
  <p className="text-center max-w-xl mx-auto text-muted-foreground text-base md:text-lg mt-4">
    Discover premium solutions for all your enterprise needs. All options are fully managed with access to common amenities such as meeting rooms, event spaces, games lounge, and more.
  </p>
</div>
        
        
        <div
            ref={containerRef}
            className={`gallery-container mdw-3d-circle-gallery-area ${isAnimating ? 'anim' : ''} ${isDragging ? 'dragging' : ''} ${isHovering ? 'hovering' : ''}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <motion.div
                className='sidebar left relative p-4 backdrop-blur-md bg-white/5 rounded-xl shadow-md'
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <Spotlight
                    className="absolute -top-10 -left-10 w-[300px] h-[300px] z-0"
                    fill="white"
                />
                <div className="relative z-10">
                    <TypewriterEffectSmooth words={[{ text: "2024" }, { text: "-" }, { text: "Present" }]} />
                    <TextGenerateEffect words="Workspace Solutions" className="text-2xl md:text-3xl font-bold text-white" />
                </div>
            </motion.div>

            <div ref={galleryRef} className='gallery-main mdw-3d-circle-gallery' onMouseLeave={handleImageLeave}>
                {/* Center content display */}
                <div className="gallery-center-content">
                    {!isHovering ? (
                        <SlideText word="The Hive" />
                    ) : (
                        <>
                            <h2 id="center-title">{items[currentItem]?.title}</h2>
                            <img
                                id="center-image"
                                className="center-image"
                                src={getCurrentImageUrl()}
                                alt={items[currentItem]?.title}
                            />
                            <p id="center-description">{items[currentItem]?.description}</p>
                            {items[currentItem] && items[currentItem].images.length > 1 && (
                                <div className="image-indicator">
                                    {currentImageIndex + 1} of {items[currentItem].images.length}
                                </div>
                            )}
                        </>
                    )}
                </div>


                {/* Navigation buttons */}
                <div className="gallery-navigation">
                    <button
                        className="nav-button mdw-3d-circle-gallery-prev"
                        onClick={() => changeSlide(false)}
                    >
                        ← Previous
                    </button>
                    <button
                        className="nav-button mdw-3d-circle-gallery-next"
                        onClick={() => changeSlide(true)}
                    >
                        Next →
                    </button>
                </div>

                {/* Hidden gallery items for data */}
                {items.map((item, index) => (
                    <div key={item.id} className={` hidden gallery-item e-con ${index === currentItem ? 'active' : ''}`}>
                        <h1>{item.title}</h1>
                        <img src={getCurrentImageUrl()} alt={item.title} />
                        <p>{item.description}</p>
                    </div>
                ))}

                {/* 3D Circle Gallery */}
                <div className="mdw-3d-circle-gallery-circle"

                >
                    {repeatedImages.map((imagePath, index) => (
                        <img
                            key={`image-${index}`}
                            src={imagePath}
                            alt={`Gallery image ${index + 1}`}
                            className={index === galleryStateRef.current.currentImage ? 'active' : ''}
                            onMouseEnter={() => handleImageHover(index)}

                            onDragStart={(e) => e.preventDefault()}
                        />
                    ))}
                </div>
            </div>

            <motion.div
                className='sidebar right relative p-4 backdrop-blur-md bg-white/5 rounded-xl shadow-md'
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <Spotlight
                    className="absolute -bottom-10 -right-10 w-[300px] h-[300px] z-0"
                    fill="black"
                />
                <div className="relative z-10">

                    <TypewriterEffectSmooth words={[{ text: "The" }, { text: " " }, { text: "Hive" }]} />
                    <TextGenerateEffect words="Premium Coworking" className="text-2xl md:text-3xl font-bold text-white" />
                </div>
            </motion.div>
        </div>
        </>
    );
};

export default Spinner;