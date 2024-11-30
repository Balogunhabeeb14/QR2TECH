import { motion } from 'framer-motion';

const team = [
  {
    name: "Mike",
    role: "Engineering",
    description: "Our Engineering team collaborate seamlessly with our researchers, synergize their expertise to propel us into the future."
  },
  {
    name: "Dan",
    role: "Research",
    description: "Our researchers delve deep into the realms of machine learning, cloud services, big data analytics, and virtual reality."
  }
];

export default function Team() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">The Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-50 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
              <h4 className="text-xl text-primary-600 mb-4">{member.role}</h4>
              <p className="text-gray-600">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}