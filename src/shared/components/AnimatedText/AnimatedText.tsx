import { Variants, motion, useInView } from 'framer-motion'
import { FC, useRef } from 'react'
import { Character, ScreenReader } from './styledComponents'

interface AnimatedTextProps {
  text: string
  once?: boolean
}

const defaultAnims: Variants | undefined = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
}

const AnimatedText: FC<AnimatedTextProps> = ({ text, once }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.5, once })

  return (
    <p>
      <ScreenReader>{text}</ScreenReader>
      <motion.span
        ref={ref}
        initial='hidden'
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ staggerChildren: 0.1 }}
        aria-hidden
      >
        {text.split('').map((char) => (
          <Character key={char} variants={defaultAnims}>
            {char}
          </Character>
        ))}
      </motion.span>
    </p>
  )
}

export default AnimatedText
