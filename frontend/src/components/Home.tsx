import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { PenTool } from 'lucide-react';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-20, 0, -20],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="py-4 px-6"
      >
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <motion.div 
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <PenTool className="w-6 h-6 text-purple-600" />
            </motion.div>
            <span className="text-xl font-bold text-purple-800">BlogVerse</span>
          </motion.div>

          <motion.div 
            className="hidden md:flex items-center space-x-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {['Course', 'Pricing', 'Tutor', 'Admission', 'About'].map((item) => (
              <motion.div
                key={item}
                variants={navItemVariants}
                whileHover={{ scale: 1.1 }}
              >
                <Link to="#" className="text-gray-600 hover:text-gray-900">
                  {item}
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link to="/signin">
              <Button variant="outline" className="rounded-full">
                Join us
              </Button>
            </Link>
          </motion.div>
        </nav>
      </motion.header>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl font-bold text-gray-900 leading-tight"
            >
              Unleash Your Creativity with BlogVerse
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600"
            >
              Join our community of passionate writers. Share your stories, ideas, and expertise with the world.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/signup">
                  <Button className="rounded-full bg-purple-600 hover:bg-purple-700">
                    Join Now
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/signin">
                  <Button variant="outline" className="rounded-full">
                    Log in
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex gap-12 pt-8"
            >
              {[
                { number: '15.2K', label: 'Active Writers' },
                { number: '4.5K', label: 'Published Posts' },
                { number: '∞', label: 'Possibilities' }
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.1 }}
                  className="cursor-pointer"
                >
                  <div className="text-2xl font-bold">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div className="relative h-[500px]">
            <motion.div
              variants={floatVariants}
              initial="initial"
              animate="animate"
              className="absolute top-0 right-0 w-72 h-72 bg-purple-100 rounded-2xl overflow-hidden"
            >
              <motion.img
                src="https://i.pinimg.com/474x/9a/fc/6d/9afc6d0dc9d3558621ed851a7d271e7a.jpg"
                alt="Blogger 1"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div
              variants={floatVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.2 }}
              className="absolute bottom-0 right-20 w-64 h-64 bg-purple-200 rounded-2xl overflow-hidden"
            >
              <motion.img
                src="https://i.pinimg.com/474x/8e/e0/60/8ee0600cce110a8b54126283322d952b.jpg"
                alt="Blogger 2"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div
              variants={floatVariants}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
              className="absolute top-32 -translate-y-44 left-0 w-56 h-56 bg-purple-300 rounded-2xl overflow-hidden"
            >
              <motion.img
                src="https://i.pinimg.com/474x/c5/6c/61/c56c61b43e8718201d51eb3d3fb077f4.jpg"
                alt="Blogger 3"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              className="absolute top-12 left-24 w-8 h-8 text-purple-600"
            >
              ★
            </motion.div>

            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-20 right-12 w-4 h-4 rounded-full bg-purple-200"
            />

            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/3 right-48 w-3 h-3 rounded-full bg-purple-300"
            />
          </div>
        </div>
      </main>
    </div>
  );
}