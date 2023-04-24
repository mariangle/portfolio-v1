export const staggerAnim = {
    hidden: {
        opacity: 0,
        y: 300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.2,
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
      hidden: { x: 100, opacity: 0 },
      show: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.75, ease: "easeOut" }
      },
      exit: {
        x: 100,
        opacity: 0,
        transition: { duration: 0.5 }
      }
    },
    right: {
        hidden: {x: -100, opacity: 0},
        show: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.75, ease: "easeOut" }
        },
        exit: {
            x: -100,
            opacity: 0,
            transition: {
                duration: 0.5
            }
        }
      },
    up: {
        hidden: {opacity: 0, y: 50},
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        },
        exit: {
            opacity: 0,
            y: 50,
            transition:
            {
                duration: 0.5
            }
        }
    },
    down: {
        hidden: {opacity: 0, y: -50},
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.75, ease: "easeOut" }
        },
        exit: {
            opacity: 0,
            y: -50,
            transition:
            {
                duration: 0.5
            }
        }
    }
}

