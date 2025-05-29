// component/FadeIn.tsx
'use client';
import { motion } from 'framer-motion';

export default function FadeIn({ children }: { children: React.ReactNode }) {
  return (

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>

  );
}
