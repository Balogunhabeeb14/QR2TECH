interface TopicCardProps {
  title: string;
  description: string;
  href: string;
}

export default function TopicCard({ title, description, href }: TopicCardProps) {
  return (
    <a
      href={href}
      className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
    >
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </a>
  );
}