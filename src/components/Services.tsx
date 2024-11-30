import { motion } from 'framer-motion';
import { Brain, Code, Lightbulb, HeadphonesIcon } from 'lucide-react';

const services = [
  {
    title: "Artificial Intelligence & Machine Learning",
    description: "We find patterns in data using the latest scientific techniques and advanced analytical methods.",
    icon: Brain
  },
  {
    title: "Engineering",
    description: "We design real-time platforms for processing massive datasets with unparalleled speed and scale.",
    icon: Code
  },
  {
    title: "Technology Innovation",
    description: "We identify and on-board the latest tech solutions to keep our engineers innovating.",
    icon: Lightbulb
  },
  {
    title: "Support",
    description: "We listen and innovate to provide comprehensive solutions for our clients.",
    icon: HeadphonesIcon
  }
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <service.icon className="w-12 h-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}