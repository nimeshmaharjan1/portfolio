import WavyLink from '../components/buttons/WavyLink';
import { colors } from '../lib/colors';
import { useState } from 'react';
import { useMenuStore } from '../store/useMenu';
import classNames from 'classnames';
import CloseMenu from '../components/icons/Close';
import { AnimatePresence, motion, useCycle } from 'framer-motion';
import PrimaryButton from '../components/buttons/PrimaryButton';

export const Nav = () => {
  const isMenuOpen = useMenuStore((state) => state.isMenuOpen);
  const toggleMenu = useMenuStore((state) => state.toggleMenu);
  const navVariant = {
    closed: {
      width: '0',
    },
    open: {
      width: '100%',
      transition: { duration: 0.7 },
    },
    exiting: {
      width: 0,
      transition: { delay: 0.8, duration: 0.7 },
    },
  };
  const itemVariants = {
    closed: {
      opacity: 0,
    },
    open: { opacity: 1 },
  };
  const sideVariants = {
    closed: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        staggerChildren: 0.2,
        staggerDirection: 1,
      },
    },
  };
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.nav
          id="menu"
          className={classNames('fixed w-screen z-20 h-screen flex justify-center items-center bg-slate-100')}
          initial="closed"
          animate="open"
          exit="exiting"
          variants={navVariant}>
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={sideVariants}
            className="flex flex-col text-black text-center lg:text-xl font-light space-y-4">
            <motion.a
              variants={itemVariants}
              onClick={toggleMenu}
              className="cursor-pointer transition-all duration-500 fixed top-6 left-8 inline-block rounded-full border border-primary p-3 text-primary hover:bg-primary hover:text-white focus:outline-none focus:ring active:primary">
              <CloseMenu></CloseMenu>
            </motion.a>
            <motion.a onClick={toggleMenu} variants={itemVariants} className="hover:text-primary duration-300">
              <PrimaryButton to="/">
                <span className="lg:text-xl font-semibold">Home</span>
              </PrimaryButton>
            </motion.a>
            <motion.a onClick={toggleMenu} variants={itemVariants} className="hover:text-primary duration-300">
              <PrimaryButton to="/about">
                <span className="lg:text-xl font-semibold">about</span>
              </PrimaryButton>
            </motion.a>
            <motion.a onClick={toggleMenu} variants={itemVariants} className="hover:text-primary duration-300">
              <PrimaryButton to="/projects">
                <span className="lg:text-xl font-semibold">projects</span>
              </PrimaryButton>
            </motion.a>
            <motion.a onClick={toggleMenu} variants={itemVariants} className="hover:text-primary duration-300">
              <PrimaryButton to="/contact">
                <span className="lg:text-xl font-semibold">contact</span>
              </PrimaryButton>
            </motion.a>
          </motion.div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};
