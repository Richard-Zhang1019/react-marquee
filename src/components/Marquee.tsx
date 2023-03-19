import { Box, Flex, keyframes } from '@chakra-ui/react'
import { FC } from 'react'

interface MarqueeProps {
  children: React.ReactNode
  duration?: number
  delay?: number
  direction?: 'left' | 'right'
  hoverPause?: boolean
  gradientWidth?: number
  gradientColor?: string
}

const Marquee: FC<MarqueeProps> = ({
  children,
  duration = 5,
  delay = 2,
  direction = 'left',
  hoverPause = true,
  gradientWidth = 100,
  gradientColor = '#F8FBFD'
}) => {
  const scroll = keyframes`
    0% { transform: translateX(0) }
    100% { transform: translateX(-100%) }
  `
  const animate = `${duration}s ${scroll} ${delay}s linear infinite ${
    direction === 'left' ? '' : 'reverse'
  }`

  return (
    <Flex
      w={400}
      overflow="hidden"
      position="relative"
      _hover={{
        '.scroll': {
          animationPlayState: hoverPause && 'paused'
        }
      }}
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        h="100%"
        w={gradientWidth}
        background={`linear-gradient(90deg, ${gradientColor} 0%, rgba(255, 255, 255, 0) 100%)`}
        zIndex={1}
      />
      <Box
        position="absolute"
        top={0}
        right={0}
        h="100%"
        w={gradientWidth}
        background={`linear-gradient(270deg, ${gradientColor} 0%, rgba(255, 255, 255, 0) 100%)`}
        zIndex={1}
      />
      <Box mr={10} className="scroll" whiteSpace="nowrap" animation={animate}>
        {children}
      </Box>
      <Box mr={10} className="scroll" whiteSpace="nowrap" animation={animate}>
        {children}
      </Box>
    </Flex>
  )
}

export default Marquee
