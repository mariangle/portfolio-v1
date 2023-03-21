export const pageAnim = {
    hidden: {
        opacity: 0,
        y: 300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            when: "beforeChildren",
            staggerChildren: 0.25
        }
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.5
        }
    }
}
export const slideAnim = {
    left: {
      hidden: { x: 200, opacity: 0 },
      show: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.75, ease: "easeOut" }
      },
      exit: {
        x: 200,
        opacity: 0,
        transition: { duration: 0.5 }
      }
    },
    right: {
        hidden: {x: -200, opacity: 0},
        show: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.75, ease: "easeOut" }
        },
        exit: {
            x: -200,
            opacity: 0,
            transition: {
                duration: 0.5
            }
        }
      },
    leftWithDelay: {
      hidden: { x: 200, opacity: 0 },
      show: {
        delay: 3,
        x: 0,
        opacity: 1,
        transition: { duration: 0.75, ease: "easeOut", delay: 0.5 }
      },
      exit: {
        x: 200,
        opacity: 0,
        transition: { duration: 0.5 }
      }
    },
    up: {
        hidden: {opacity: 1, y: 200},
        show: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition:
            {
                duration: 1
            }
        },
        exit: {
            opacity: 0,
            y: 200,
            transition:
            {
                duration: 0.5
            }
        }
    }
  }
export const titleAnim = {
    hidden: {y: 200},
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, ease: "easeOut" }
    },
        exit: {
        opacity: 0,
        y: 200,
        transition:
        {
            duration: 0.5
        }
    }
}
export const fadeAnim = {
    hidden: {opacity: 0},
    show: {
        opacity: 1,
        transition: {ease: "easeOut", duration: 0.75 }
    }
}
export const photoAnim = {
    hidden: { x: 200, opacity: 0 },
    show: {
      delay: 3,
      x: 0,
      opacity: 1,
      transition: { duration: 0.75, ease: "easeOut", delay: 1 }
    },
    exit: {
      x: 200,
      opacity: 0,
    }
}
export const lineAnim = {
    hidden: {width: "0%"},
    show: {
        width: "100%",
        transition: {duration: 1}
    }
}
export const sliderAnim = {
    hidden: {x: "-130%", skew: "45deg"},
    show: {
        x: "100%",
        skew: "0def",
        transition: {ease: "easeOut", duration: 1}
    }
}
export const sliderContainer  = {
    hidden: {opacity: 1},
    show: {
        opacity: 1,
        transition: {ease: "easeOut", staggerChildren: 0.15}
    }
}
export const swoopAnim = {
    hidden: {width: "50%"},
    show: {
        width: "100%",
        transition: {ease: "easeOut", duration: 1}
    }
}