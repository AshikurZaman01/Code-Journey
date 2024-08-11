import PropTypes from 'prop-types';
import { useState } from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { MdMenu } from 'react-icons/md';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const routes = [
        { id: 1, title: 'Home', path: '/' },
        { id: 2, title: 'Services', path: '#' },
        { id: 3, title: 'About Us', path: '#' },
        { id: 4, title: 'Our Team', path: '#' },
        { id: 5, title: 'Contact Us', path: '#' },
    ];

    // Animation variants for the menu container
    const menuVariants = {
        hidden: { opacity: 0, x: '-100%' },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                staggerChildren: 0.2, // Stagger each child by 0.2 seconds
                delayChildren: 0.1,   // Delay starting the animation by 0.1 seconds
            },
        },
    };

    // Animation variants for each menu item
    const itemVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };

    return (
        <div>
            <div>
                <nav>
                    <div className='container flex justify-between items-center py-10'>
                        {/* Logo */}
                        <div>
                            <a href="/"><h1 className='font-bold text-2xl'>Coding Journey</h1></a>
                        </div>
                        {/* Desktop Menu */}
                        <div className='hidden md:flex text-xl'>
                            <ul className='flex'>
                                {routes.map((route) => (
                                    <li key={route.id} className='mx-2'>
                                        <a
                                            href={route.path}
                                            className="inline-block py-2 px-3 hover:text-secondary relative group"
                                        >
                                            <div className="absolute -bottom-1 left-0 w-0 h-1 bg-secondary group-hover:w-full transition-all ease-in-out duration-300"></div>
                                            {route.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                            <button className="primary-btn ml-4">Sign In</button>
                        </div>
                        {/* Mobile Menu Icon */}
                        <div className='md:hidden'>
                            {isMobileMenuOpen ? (
                                <motion.div
                                    initial={{ opacity: 0, rotate: 0 }}
                                    animate={{ opacity: 1, rotate: 90 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <IoMdCloseCircleOutline
                                        className='text-3xl cursor-pointer'
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    />
                                </motion.div>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, rotate: 0 }}
                                    animate={{ opacity: 1, rotate: 0 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <MdMenu
                                        className='text-3xl cursor-pointer'
                                        onClick={() => setIsMobileMenuOpen(true)}
                                    />
                                </motion.div>
                            )}
                        </div>
                    </div>
                    {/* Mobile Menu */}
                    {isMobileMenuOpen && (
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={menuVariants}
                            className='md:hidden flex flex-col items-center'
                        >
                            <motion.ul className='flex flex-col items-center text-xl w-full'>
                                {routes.map((route) => (
                                    <motion.li
                                        key={route.id}
                                        variants={itemVariants}
                                        className='w-full py-2 flex justify-center'
                                    >
                                        <a
                                            href={route.path}
                                            className="block py-2 px-3 hover:text-secondary"
                                        >
                                            {route.title}
                                        </a>
                                    </motion.li>
                                ))}
                                <motion.button
                                    className="primary-btn mt-4"
                                    variants={itemVariants}
                                >
                                    Sign In
                                </motion.button>
                            </motion.ul>
                        </motion.div>
                    )}
                </nav>
            </div>
        </div>
    );
};

Navbar.propTypes = {};

export default Navbar;
