import React, { useState } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

const itemVariants: Variants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="container mx-auto px-4 md:px-12 xl:px-0 py-4">
      <div className="flex justify-end">
        <motion.nav initial={false} animate={isMenuOpen ? 'open' : 'closed'} className="dropdown dropdown-end">
          <motion.button whileTap={{ scale: 0.97 }} onClick={() => setIsMenuOpen(!isMenuOpen)} className="btn m-1">
            Menu
          </motion.button>
          <AnimatePresence>
            {isMenuOpen && (
              <motion.ul
                exit="closed"
                variants={{
                  open: {
                    clipPath: 'inset(0% 0% 0% 0% round 10px)',
                    transition: {
                      type: 'spring',
                      bounce: 0,
                      duration: 0.7,
                      delayChildren: 0.3,
                      staggerChildren: 0.05,
                    },
                  },
                  closed: {
                    clipPath: 'inset(10% 50% 90% 50% round 10px)',
                    transition: {
                      type: 'spring',
                      bounce: 0,
                      duration: 0.3,
                    },
                  },
                }}
                tabIndex={0}
                className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52">
                <motion.li variants={itemVariants}>
                  <a>Item 1</a>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <a>Item 2</a>
                </motion.li>
              </motion.ul>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
