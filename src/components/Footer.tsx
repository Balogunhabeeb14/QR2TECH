export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="text-gray-400 hover:text-white">
              LinkedIn
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Twitter
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              GitHub
            </a>
          </div>
          <p className="text-gray-400">
            &copy; {currentYear} QR2TECH. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}