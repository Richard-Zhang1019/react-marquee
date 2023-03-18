import { Box } from '@chakra-ui/react'
import { FC } from 'react'

interface MarqueeProps {
  children: React.ReactNode
}

const Marquee: FC<MarqueeProps> = ({ children }) => {
  return (
    <Box>
      <Box>{children}</Box>
      <Box>{children}</Box>
    </Box>
  )
}

export default Marquee
