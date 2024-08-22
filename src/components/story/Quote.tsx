"use client";

// animation
import { fadeInUp } from "@/utils/animation";
import { motion } from "framer-motion";

// fonts
import { poppinsMedium } from "@/utils/fonts";

const Quote = () => {
  return (
    <motion.p
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`${poppinsMedium.className} text-base sm:px-24 text-center text-primary mb-5`}
    >
      &quot;Datangnya cinta adalah takdir, dia datang tak pernah terduga&quot;
    </motion.p>
  );
};

export default Quote;
