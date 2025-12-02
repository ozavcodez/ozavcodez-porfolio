"use client";

import React from 'react';
import { motion } from 'framer-motion';

const SectionDivider = () => {
  return (
    <motion.div 
      className="my-10 flex justify-center"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
    </motion.div>
  );
};

export default SectionDivider;