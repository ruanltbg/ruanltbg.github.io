import React from "react";
import { motion } from "framer-motion";
import "./Hero.scss";

const Hero = () => {
    return (
        <div className="hero">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <span className="hero__greeting">Hello, I'm</span>
            </motion.div>

            <motion.h1
                className="hero__title"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <span className="text-gradient">Ruan Carlos</span>
            </motion.h1>

            <motion.h2
                className="hero__subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
            >
                Software Engineering Manager & Co-founder
            </motion.h2>
        </div>
    );
};

export default Hero;
