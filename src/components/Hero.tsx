import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-4 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          We Know the Technology of the Future
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
        >
          Be it an idea, or an established challenge that you face, we can help you use the technologies of the future to automate and reach a lasting solution.
        </motion.p>
      </div>
    </section>
  );
}