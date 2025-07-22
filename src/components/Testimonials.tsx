import { motion } from 'framer-motion';
import { BorderBeam } from './magicui/border-beam';

const testimonials = [
  {
    quote: `We’ve had a great time working out of the spaces at The Hive! The environment here has always been a plus point for us. It's bright, happy and full of ‘good entrepreneurial energy’, offering a great mix of both privacy and interaction. We’ve actually been able to interact with fairly like-minded people here. Some have become friends, some clients and some partners, even! The beauty is that while walking down the corridors of The Hive, you are bumping into people at similar stages of their business life cycles. Interactions with them have been nothing but enriching!`,
    name: 'Shenaz Bapooji',
    title: 'CEO, Shopmatic',
  },
  {
    quote: `If you live in Bangalore, work in tech and are looking for a place for your team, this one is a no-brainer! We wanted to be inside a growing ecosystem to exchange ideas freely and we needed to have easy access to tech talent. We looked at quite a few of the more “popular” options but their private offices left us disappointed. In contrast, the Hive’s office spaces are much more vibrant and airy. It’s located in one of the biggest IT districts in Bangalore and gives us access to a lot of local talent staying nearby.`,
    name: 'Avishek Basu Mallick',
    title: 'Product Lead, Decathlon',
  },
  {
    quote: `Moving to Hive was one of the important decisions for iD. We were not comfortable to work in a co-working environment. I am very happy to have taken the right decision. It gives you peace of mind. We are able to focus more on our core business deliverables. We feel younger and more energetic after working in such an environment. It is just a feeling.`,
    name: 'P C Mustafa',
    title: 'CEO & Co-Founder, iD Fresh',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 px-4 md:px-12 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        What Our Clients Say
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all relative"
          >
            <BorderBeam duration={8} size={100} />
            <p className="text-gray-600 text-sm leading-relaxed mb-6">“{testimonial.quote}”</p>
            <div className="text-right">
              <p className="font-semibold text-gray-800">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
