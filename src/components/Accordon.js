import { useState } from 'react'
import styled from 'styled-components'
import { Box, Heading } from '@chakra-ui/react'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'




export default function AccordonComp({title, children}) {
  const [ isShow, setIsShow ] = useState(false)

  const handleClick = () => setIsShow(!isShow)


  return (
    <AccordonCard>
      <Box display="flex" alignItems="center" justifyContent='space-between' onClick={handleClick}>
        <Heading size="sm" fontWeight="bold" color="grey">{title}</Heading>
        {isShow ? <IoIosArrowDown className="icon" /> : <IoIosArrowUp className="icon" />}
      </Box>

      {isShow ? <Box mt="5">
        {children}
      </Box> : null }
      
    </AccordonCard>
  )
}


const AccordonCard = styled.div`
  border: solid 1px #ccc;
  padding: 20px 1rem;
  border-radius: 6px;
  margin: 2rem 0;
  cursor: pointer;

  .icon {
    color: #333;
    font-size: 1.5rem !important;
    font-weight: bold;
  }

  @media screen and (min-width: 1024px) {
    padding: 20px 3rem;
  }

  .icon {
    color: #333;
    font-size: 0.3rem;
    font-weight: bold;
  }
`;