const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white px-10 py-6 flex justify-between items-center">
      
      {/* Logo */}
      <h1 className="text-2xl font-bold text-black">
        ResumeX
      </h1>

      {/* Login Button */}
      <button className="px-6 py-2 bg-black text-white rounded-full">
        Login
      </button>

    </nav>
  );
};

export default Navbar;