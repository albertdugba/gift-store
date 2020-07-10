export const formVariant = {
  hidden: {
    opacity: 0,
    x: "70vw",
  },

  visible: {
    opacity: 1,
    x: 170,
    transition: {
      type: "spring",
      delay: 0.4,
    },
  },
};

export const productDetailsVariant = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 4,
    },

    // exit: {
    //   x: "-100vh",
    //   transition: { ease: "easeInOut" },
    // },
  },
};

// export const productImage = {
//   hidden: {
//     y: "-100vw",
//   },

//   visible: {
//     y: 0,
//   },
// };
