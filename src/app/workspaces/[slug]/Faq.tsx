import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "Are Hive private offices or coworking spaces open 24×7?",
        answer:
            "Yes — members of Hive’s long‑term plans enjoy 24×7 access, secured via two‑level access control systems. This allows you to work at any hour 365 days a year. The facility staff is typically available during standard business hours for query support or meeting room bookings.",
    },
    {
        question: "How much does an office space cost?",
        answer:
            "Pricing varies by city, location, and seating configuration. Day passes can start at around ₹750/day. Dedicated desks or private offices are customized per seat and team size, and quotes are provided upon enquiry.",
    },
    {
        question: "Can I work from a different Hive centre than the one I’m registered with?",
        answer:
            "Tray-type memberships are tied to your primary location. However, enterprise or multi-center plans may include cross-site privileges. Day passes are typically restricted to the location they are booked for.",
    },
    {
        question: "How do I book a tour of a Hive workspace?",
        answer:
            "Visit the 'Enquiry' or 'Book a Tour' page on hiveworkspaces.com, fill in your preferences, and submit the form. A Hive representative will contact you to confirm and schedule the tour.",
    },
    {
        question: "What’s the minimum commitment term (tenure) for membership?",
        answer:
            "Most memberships require a one‑month security deposit and a one‑month notice period. This effectively makes the minimum tenure around two months unless stated otherwise in enterprise contracts.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);


    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="flex max-w-5xl mx-auto  border-b-1 bg-white">
            {/* Left: Heading */}
            <div className="w-1/3 pl-8 pt-16">
                <h2 className="text-2xl font-serif text-black">FAQs</h2>
            </div>
            {/* Right: FAQ List */}
            <div className="w-2/3 pr-8 pt-16">
                <div className="space-y-0">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className="border-b border-gray-200"
                        >
                            <button
                                className="flex justify-between items-center w-full text-left py-6 focus:outline-none cursor-pointer"
                                onClick={() => toggle(idx)}
                            >
                                <span className="text-base font-medium text-black">
                                    {faq.question}
                                </span>
                                {openIndex === idx ? (
                                    <ChevronUp size={20} className="text-black" />
                                ) : (
                                    <ChevronDown size={20} className="text-black" />
                                )}
                            </button>
                            {openIndex === idx && (
                                <p className="text-sm text-gray-700 pb-6 pl-1">
                                    {faq.answer}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}