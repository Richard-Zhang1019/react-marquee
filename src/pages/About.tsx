import { Box, Flex, keyframes } from '@chakra-ui/react'
import { FaReact } from 'react-icons/fa'

import { useAppSelector } from '@/store'
import Marquee from '@/components/Marquee'

const About = () => {
  const { value } = useAppSelector(state => state.count)

  const rotate = keyframes`
    from { transform: rotate(0deg) }
    to { transform: rotate(360deg) }
  `

  return (
    <Flex justify="center" align="center" direction="column" gap={10}>
      <Box animation={`${rotate} 4s linear infinite`} h={50}>
        <FaReact size={50} />
      </Box>
      <h1>Yu-React-template</h1>
      <Box>redux count: {value}</Box>
      <h1>鸣谢</h1>
      <Marquee>
        <Flex gap={20}>
          {Array(10)
            .fill(1)
            .map((item, index) => {
              return (
                <Flex
                  key={index}
                  w={100}
                  h={100}
                  bgColor="#1c6666"
                  justifyContent="center"
                  alignItems="center"
                >
                  {index + 1}
                </Flex>
              )
            })}
        </Flex>
      </Marquee>
      <h1>赞助商</h1>
      <Marquee direction='right' duration={10}>
        <Flex gap={20}>
          {Array(10)
            .fill(1)
            .map((item, index) => {
              return (
                <Flex
                  key={index}
                  w={100}
                  h={100}
                  bgColor="#1c6666"
                  justifyContent="center"
                  alignItems="center"
                >
                  {index + 1}
                </Flex>
              )
            })}
        </Flex>
      </Marquee>
    </Flex>
  )
}

export default About
