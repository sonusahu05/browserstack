const Navbar = () => {
    return (
      <nav className="bg-gray-600 text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">BrowserStack Application</h1>
        <div>
        <a href="mailto:sonusahu050502@gmail.com" className="text-lg font-medium hover:underline">
          sonusahu050502@gmail.com
        </a>
        <span className="ml-4">8828488959</span>
        </div>
      </div>
      </nav>
    );
  };
  
  export default Navbar;