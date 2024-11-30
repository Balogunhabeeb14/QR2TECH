import { motion } from 'framer-motion';

const products = [
  {
    name: "Rem Farm",
    description: "A marketplace connecting farmers with resources and opportunities.",
    href: "#"
  },
  {
    name: "Better life",
    description: "An innovative solution for improving quality of life through technology.",
    href: "#"
  },
  {
    name: "Gidi Up",
    description: "Provides comprehensive urban mobility solutions.",
    href: "#"
  },
  {
    name: "Xplorer",
    description: "Offers unparalleled data exploration and visualization capabilities.",
    href: "#"
  }
];

export default function Products() {
  return (
    <section className="py-20 bg-white" id="products">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4">Our Products</h2>
        <p className="text-center text-gray-600 mb-16">Explore our innovative solutions</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <a
                  href={product.href}
                  className="text-primary-600 hover:text-primary-700 font-medium"
                >
                  Read more →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}