import React from "react";
import { FaVectorSquare, FaPenToSquare } from "react-icons/fa6";
import { BiSolidDollarCircle } from "react-icons/bi";
import { delay, motion } from "framer-motion";
import { SlideUp } from "../../animation/animate";

const ServicesCard = [
  {
    id: 1,
    title: "Luxury Facilities",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.",
    icon: <FaVectorSquare />,
    link: "#",
    delay: 0.2,
  },
  {
    id: 2,
    title: "Qualified Products",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.",
    icon: <FaPenToSquare />,
    link: "#",
    delay: 0.4,
  },
  {
    id: 3,
    title: "Affordable Price",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.",
    icon: <BiSolidDollarCircle />,
    link: "#",
    delay: 0.6,
  },
];

const Services = () => {
  return (
    <div>
      <div className="container py-20">
        {/* heading title */}
        <div className="space-y-2 text-center max-w-[350px] mx-auto mb-8">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="text-3xl font-bold font-serif"
          >
            What we provide
          </motion.h1>
          <motion.p
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="text-gray-500 text-sm"
          >
            Bring your dream home to life with one-on-one design help &
            hand-picked products.
          </motion.p>
        </div>
        {/* card section  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {ServicesCard.map((card) => {
            return (
              <motion.div
                variants={SlideUp(card.delay)}
                initial="initial"
                whileInView="animate"
                key={card.id}
                className="space-y-4 border-[1px] border-black/30 p-6 
                hover:bg-black hover:text-white hover:shadow-[7px_7px_0px_0px_#6c6c6c] duration-300"
              >
                <span
                  className=" inline-block text-2xl border-[1px] 
                  p-3 rounded-full border-black"
                >
                  {card.icon}
                </span>
                <p className="text-2xl font-bold font-serif">{card.title}</p>
                <p className="text-gray-400 text-xs">{card.description}</p>
                <a
                  href={card.link}
                  className="inline-block border-b border-black"
                >
                  Learn More
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Services;
