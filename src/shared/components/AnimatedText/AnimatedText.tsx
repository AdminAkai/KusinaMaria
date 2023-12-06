import { Variants, motion } from 'framer-motion'
import { FC, useRef } from 'react'
import { Character, ScreenReader } from './styledComponents'

interface AnimatedTextProps {
  text: string
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

const AnimatedText: FC<AnimatedTextProps> = ({ text }) => {
  const ref = useRef(null)

  return (
    <p>
      <ScreenReader>{text}</ScreenReader>
      <motion.span
        ref={ref}
        initial='hidden'
        whileInView='visible'
        transition={{ staggerChildren: 0.1 }}
        aria-hidden
        viewport={{ once: true }}
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
