const Navbar = () => {
  return (
    <nav className="bg-gray-600 text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold mb-2 md:mb-0">BrowserStack Application</h1>
        <div className="flex flex-col md:flex-row items-center">
          <a href="mailto:sonusahu050502@gmail.com" className="text-lg font-medium hover:underline">
            sonusahu050502@gmail.com
          </a>
          <span className="mt-2 md:mt-0 md:ml-4">8828488959</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;