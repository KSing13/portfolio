import { ReactNode, useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
    visible: { opacity: 1, scale: 1, x: 0, transition:{ duration: 0.5 }},
    hidden: { opacity: 0, scale: 0, x: 200 },
}

interface Props {
    heading: string;
    content: ReactNode;
}

const Box = ( {heading, content} : Props ) => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
          control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <motion.div className='box' ref={ ref } variants={ boxVariant } initial="hidden" animate={ control }>
            <h1>{ heading }</h1>
            { content }
        </motion.div>
    )
}

export default Box;

