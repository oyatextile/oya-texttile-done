
import { motion } from "framer-motion";

const TransDiv = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.4,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.button>
  );
};

export default TransDiv;