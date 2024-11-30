import { motion } from 'framer-motion';

const stats = [
  { label: "Partners", value: "3+" },
  { label: "Projects Done", value: "5+" },
  { label: "Happy Clients", value: "5+" },
  { label: "Products", value: "3+" }
];

export default function Stats() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}