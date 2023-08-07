export const fadeIn = (delay, direction) => {
  return {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.8, // Adjust the duration to make the animation faster if needed
        delay: delay,
        ease: "easeOut", // Use a simpler easing curve for smoother effect
      },
    },
  };
};
