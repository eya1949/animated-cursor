import { useGSAP } from '@gsap/react';
import React, { useState } from 'react'
import gsap from 'gsap';

export default function App() {
  const [mousePosition, setMousePosition] =useState({x:0 , y:0});

    useGSAP(() =>{
        const mouseMove =(e) =>{
            setMousePosition({
                x:e.clientX,
                y:e.clientY,
            })
        }
        window.addEventListener('mousemove', mouseMove);
        gsap.to(".cursor", {
            x:mousePosition.x,
            y:mousePosition.y,
        })
    }, [mousePosition]
   )
  return (
    <div className='cursor h-6 w-6 rounded-full bg-black fixed z-50 '></div>

  )
}
