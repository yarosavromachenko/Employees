import React from 'react'
import styled from 'styled-components'


const TrashIcon = () => (
    <Trash xmlns="http://www.w3.org/2000/svg" color="" class="ionicon" viewBox="0 0 512 512" height='22' width='22'>
        <title>Trash</title>
        <path
            d="M112 112l20 320c.95 18.49 14.4 32 32 32h184c17.67 0 30.87-13.51 32-32l20-320"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
        />
        <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-miterlimit="10"
            stroke-width="32"
            d="M80 112h352"
        />
        <path
            d="M192 112V72h0a23.93 23.93 0 0124-24h80a23.93 23.93 0 0124 24h0v40M256 176v224M184 176l8 224M328 176l-8 224"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="32"
        />
    </Trash>
)

const Trash = styled.svg`
   &: hover{
      color: green 
   } 
`

export default TrashIcon