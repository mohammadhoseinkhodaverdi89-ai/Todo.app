import { Axios } from "axios";
import { useState } from "react";
import { motion, } from "framer-motion";

function Footer() {
  const [input,setInput] = useState()
  const [load,setLoad] = useState()
  const Container = {
    hidden:{opacity : 0 , y : 30 },
    invisible:{opacity : 1 , y : 0 , transition : {
      staggerChildren : 0.15 , duration : 0.7
    }}
  }
  const Children = {
  hidden : {opacity : 0 , y: 20 , scale : 0.7},
  invisible : {opacity : 1 , y: 0 , scale: 1,transition: {
    type:'spring',damping: 20 , stiffness : 260
  }}
  }
  return (
    <motion.div
    variants={Container}
    initial="hidden"
    whileInView="invisible"
    className="px-4 py-2 md:px-6 md:py-3 bg-slate-700" dir="ltr">
      <h1 className="flex justify-center items-center text-purple-500 text-2xl font-bold mb-4">
        Discover <span className="text-gray-500">&nbsp;Your&nbsp;</span> Perfect{" "}
        <span className="text-gray-500">&nbsp;Style</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-7">
        <motion.div 
        variants={Children}
        className="border flex flex-col justify-start items-start p-3 rounded-3xl gap-1.5 bg-slate-500/20 border-slate-500 hover:border-purple-500">
          <h2 className="text-lg text-gray-300 font-bold">Customer Support</h2>

          <ul className="space-y-4">
            <li className="group flex items-center cursor-pointer">
              <span className="mr-2 -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                →
              </span>
              <span>Size Guide</span>
            </li>

            <li className="group flex items-center cursor-pointer">
              <span className="mr-2 -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                →
              </span>
              <span>Shipping Information</span>
            </li>

            <li className="group flex items-center cursor-pointer">
              <span className="mr-2 -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                →
              </span>
              <span>Returns & Exchanges</span>
            </li>

            <li className="group flex items-center cursor-pointer">
              <span className="mr-2 -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                →
              </span>
              <span>Contact Us</span>
            </li>
          </ul>
        </motion.div>

        <motion.div 
        variants={Children}
        className="border flex flex-col justify-start items-start p-3 rounded-3xl gap-1.5 bg-slate-500/20 border-slate-500 hover:border-purple-500">
          <h2 className="text-lg text-gray-300 font-bold">Shop Categories</h2>

          <ul className="space-y-4">
            <li className="group flex items-center cursor-pointer">
              <span className="mr-2 -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                →
              </span>
              <span>Men's Collection</span>
            </li>

            <li className="group flex items-center cursor-pointer">
              <span className="mr-2 -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                →
              </span>
              <span>Women's Collection</span>
            </li>

            <li className="group flex items-center cursor-pointer">
              <span className="mr-2 -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                →
              </span>
              <span>Accessories</span>
            </li>

            <li className="group flex items-center cursor-pointer">
              <span className="mr-2 -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                →
              </span>
              <span>New Arrivals</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
        variants={Children}
        className="border flex flex-col justify-start items-start p-3 rounded-3xl gap-1.5 bg-slate-500/20 border-slate-500 hover:border-purple-500">
          <h2 className="text-lg text-gray-300 font-bold">Company</h2>

          <ul className="space-y-4">
            <li className="group flex items-center cursor-pointer">
              <span className="mr-2 -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                →
              </span>
              <span>About Us</span>
            </li>

            <li className="group flex items-center cursor-pointer">
              <span className="mr-2 -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                →
              </span>
              <span>Our Stores</span>
            </li>

            <li className="group flex items-center cursor-pointer">
              <span className="mr-2 -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                →
              </span>
              <span>Careers</span>
            </li>

            <li className="group flex items-center cursor-pointer">
              <span className="mr-2 -translate-x-4 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                →
              </span>
              <span>Privacy Policy</span>
            </li>
          </ul>
        </motion.div>
      </div>
      <div className="flex w-full max-w-md items-center gap-2 mt-4">
      </div>
    </motion.div>
  );
}
export default Footer;
