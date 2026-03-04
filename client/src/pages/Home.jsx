


import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-white text-black">

      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Create your Resume
        </motion.h1>

        

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 px-8 py-3 bg-black text-white rounded-full text-lg"
        >
          Create Website
        </motion.button>

        {/* Floating Decorative Elements */}
<motion.div
  animate={{ y: [0, -15, 0] }}
  transition={{ duration: 5, repeat: Infinity }}
  className="absolute top-28 left-20 w-60 p-4 bg-white rounded-xl shadow-xl"
>
  <div className="flex items-center gap-3 mb-3">
    <div className="w-8 h-8 bg-black rounded-full"></div>
    <div>
      <p className="text-xs font-semibold">John Doe</p>
      <p className="text-[10px] text-gray-500">Frontend Developer</p>
    </div>
  </div>

  <div className="space-y-2">
    {/* <div className="h-1.5 bg-gray-300 rounded w-full"></div>
    <div className="h-1.5 bg-gray-300 rounded w-3/4"></div>
    <div className="h-1.5 bg-gray-300 rounded w-1/2"></div> */}
  </div>
</motion.div>

<motion.div
  animate={{ y: [0, 20, 0] }}
  transition={{ duration: 6, repeat: Infinity }}
  className="absolute bottom-24 right-20 w-64 p-4 bg-white rounded-xl shadow-xl"
>
  <p className="text-xs font-semibold mb-3">Skills</p>

  <div className="space-y-3">
    <div>
      <div className="flex justify-between text-[10px] mb-1">
        <span>React</span>
        <span>90%</span>
      </div>
      <div className="h-1.5 bg-gray-200 rounded">
        <div className="h-1.5 bg-black rounded w-[90%]"></div>
      </div>
    </div>

    <div>
      <div className="flex justify-between text-[10px] mb-1">
        <span>Node</span>
        <span>80%</span>
      </div>
      <div className="h-1.5 bg-gray-200 rounded">
        <div className="h-1.5 bg-black rounded w-[80%]"></div>
      </div>
    </div>
  </div>
</motion.div>

      </section>


      {/* Scroll Animation Section */}
      <section className="min-h-screen relative flex flex-col justify-center items-center text-center px-6">

        <motion.div
          initial={{ opacity: 0, y: 120, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.3 }}
          className="bg-black text-white p-16 rounded-3xl shadow-2xl max-w-2xl text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Your Resume Becomes a Website
          </h2>

          <p className="text-gray-300 text-lg">
            Instantly generate a modern, shareable resume website
            with your own custom link.
          </p>
          {/* Template Preview Bars */}
<div className="mt-8 text-left max-w-2xl mx-auto">

  <p className="text-gray-300 mb-4">
    Turn your traditional resume into a fully interactive personal website.
    Showcase your projects, skills, and experience in a clean,
    modern format recruiters actually want to see.
  </p>

  <ul className="space-y-3 text-gray-400 text-sm">
    <li>• Custom shareable link</li>
    <li>• Built-in portfolio sections</li>
    <li>• Responsive mobile design</li>
    <li>• Easy template switching</li>
  </ul>

</div>

{/* Mini Templates */}
<div className="mt-10 grid grid-cols-2 gap-4">
  <div className="bg-white text-black p-4 rounded-xl">
    <h4 className="font-semibold text-sm mb-2">Minimal</h4>
    {/* <div className="h-2 bg-gray-300 rounded mb-2"></div>
    <div className="h-2 bg-gray-300 rounded w-3/4"></div> */}
  </div>

  <div className="bg-white text-black p-4 rounded-xl">
    <h4 className="font-semibold text-sm mb-2">Modern</h4>
    {/* <div className="h-2 bg-gray-300 rounded mb-2"></div>
    <div className="h-2 bg-gray-300 rounded w-2/3"></div> */}
  </div>
</div>

        </motion.div>

      </section>
      {/* Templates Showcase Section */}
<section className="min-h-screen bg-white flex items-center px-12">

  <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-16 items-center">

    {/* Left Content */}
    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2 className="text-5xl md:text-7xl font-bold leading-tight">
        50+ Templates
      </h2>

      <p className="mt-6 text-gray-600 text-lg max-w-md">
        Choose from professionally designed resume templates
        crafted for developers, designers, and creators.
      </p>
    </motion.div>


    {/* Right Floating Templates */}
    <div className="relative h-[500px]">

        {/* Background Grid Glow */}
<div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-white rounded-3xl"></div>

{/* Large Faded Background Text */}
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
  <h3 className="text-[120px] font-bold text-black/5 select-none">
    Resume
  </h3>
</div>

{/* Decorative Lines */}
<div className="absolute top-10 right-10 w-40 h-40 border border-black/10 rounded-2xl rotate-12"></div>
<div className="absolute bottom-16 left-6 w-32 h-32 border border-black/10 rounded-xl -rotate-12"></div>

      {/* Template Card 1 */}
      <motion.div
  animate={{ y: [0, -15, 0] }}
  transition={{ duration: 5, repeat: Infinity }}
  className="absolute top-32 left-20 w-56 p-4 bg-white rounded-xl shadow-lg"
>
  <div className="flex items-center gap-3 mb-3">
    <div className="w-8 h-8 bg-black rounded-full"></div>
    <div>
      <p className="text-xs font-semibold">John Doe</p>
      <p className="text-[10px] text-gray-500">Frontend Developer</p>
    </div>
  </div>

  <div className="space-y-2">
    {/* <div className="h-1.5 bg-gray-300 rounded w-full"></div>
    <div className="h-1.5 bg-gray-300 rounded w-3/4"></div> */}
  </div>
</motion.div>

      {/* Template Card 2 */}
      <motion.div
  animate={{ y: [0, 20, 0] }}
  transition={{ duration: 6, repeat: Infinity }}
  className="absolute bottom-32 right-24 w-64 p-4 bg-white rounded-xl shadow-lg"
>
  <p className="text-xs font-semibold mb-3">Skills</p>

  <div className="space-y-2">
    <div className="flex justify-between text-[10px]">
      <span>React</span>
      <span>90%</span>
    </div>
    <div className="h-1.5 bg-gray-200 rounded">
      <div className="h-1.5 bg-black rounded w-[90%]"></div>
    </div>

    <div className="flex justify-between text-[10px]">
      <span>Node</span>
      <span>80%</span>
    </div>
    <div className="h-1.5 bg-gray-200 rounded">
      <div className="h-1.5 bg-black rounded w-[80%]"></div>
    </div>
  </div>
</motion.div>

      {/* Template Card 3 */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute bottom-0 left-20 w-72 bg-white p-6 rounded-2xl shadow-2xl border"
      >
        <h4 className="font-semibold mb-4">Creative Portfolio</h4>
        <p className="text-sm text-gray-600 mb-3">
  Visual-first layout ideal for designers and creative professionals.
</p>

<div className="flex gap-2 mt-2">
  <span className="text-xs bg-gray-200 px-2 py-1 rounded">Portfolio</span>
  <span className="text-xs bg-gray-200 px-2 py-1 rounded">Gallery</span>
  <span className="text-xs bg-gray-200 px-2 py-1 rounded">Branding</span>
</div>
      </motion.div>

    </div>

  </div>

</section>

    </div>
  );
};

export default Home;