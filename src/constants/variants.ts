export const mainVariants = {
    hidden: {
        x: '100vw',
        opacity: 0,
    },
    visible: {
        opacity: 1,
        x: '0',
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut'}
    }
};