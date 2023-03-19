export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
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
export const slideLeft = {
    hidden: {x: 200, opacity: 0},
    show: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.75, ease: "easeOut" }
    },
    exit: {
        x: 200,
        opacity: 0,
        transition: {
            duration: 0.5
        }
    }
}
export const slideRight = {
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
}

export const titleAnim = {
    hidden: {y: 200},
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.75, ease: "easeOut" }
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
    hidden: {scale: 1.5, opacity: 0},
    show: {
        opacity: 1,
        scale: 1,
        transition: {ease: "easeOut", duration: 0.75 }
    }
}
export const lineAnim = {
    hidden: {width: "0%"},
    show: {
        width: "100%",
        transition: {duration: 1}
    }
}

export const slider = {
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

export const slideUp = { //navnskift? scale? eller scrollreveal
    hidden: {opacity: 0, scale: 1.2},
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

export const swoop = {
    hidden: {width: "0%"},
    show: {
        width: "100%",
        transition: {ease: "easeOut", duration: 1}
    }
}