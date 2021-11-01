import React from 'react'
import styled from 'styled-components';


const PencilIcon = () => (
    <Pencil xmlns="http://www.w3.org/2000/svg" color="" class="ionicon" viewBox="0 0 512 512" height='22' width='22'>
        <title>Pencil</title>
        <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
            d="M364.13 125.25L87 403l-23 45 44.99-23 277.76-277.13-22.62-22.62zM420.69 68.69l-22.62 22.62 22.62 22.63 22.62-22.63a16 16 0 000-22.62h0a16 16 0 00-22.62 0z"
        />
    </Pencil>
)

const Pencil = styled.svg`
   &: hover{
      color: green 
   } 
`

export default PencilIcon;