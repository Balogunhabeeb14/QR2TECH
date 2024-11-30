import { Search } from 'lucide-react';

export default function SearchBar() {
  return (
    <div className="max-w-3xl mx-auto">
      <form className="relative">
        <input
          type="search"
          placeholder="Search for datasets..."
          className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        />
        <Search
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
      </form>
    </div>
  );
}