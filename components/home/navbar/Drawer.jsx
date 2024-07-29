"use client";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { itemVariants,container } from "./DrawerVariants";

const Drawer = () => {
  const [drawer, setDrawer] = useState(false);
  return (
    <>
      <motion.nav
        initial={false}
        animate={drawer ? "open" : "closed"}
        className="xs:flex lg:hidden p-4 flex-col items-end"
      >
        <motion.button
          whileTap={{ scale: 0.8 }}
          className="hover:text-textOrange text-[#fff] z-40 fixed top-5 "
          onClick={() => {
            setDrawer(!drawer);
          }}
        >
          {drawer ? <X size={48} /> : <Menu size={48} />}
        </motion.button>
        <motion.div
          variants={container}
          className="fixed top-0 left-0 bg-bgPrimary bg-opacity-95 flex w-screen backdrop-blur-sm z-30 h-screen justify-center items-start text-[#fff] "
        >
          <div className="h-screen top-0 p-4 gap-10 flex flex-col justify-center items-center  scale-150">
            <motion.div variants={itemVariants}>
              <Link href={"#"} className="nav-links">
                <p>خانه</p>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href={"#"} className="nav-links">
                <p>برترین ها</p>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href={"#"} className="nav-links">
                <p>دسته بندی</p>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link href={"#"} className="nav-links">
                <p>تماس با ما</p>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Drawer;
