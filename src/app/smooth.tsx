"use client";

import { Lenis } from "@studio-freight/react-lenis";
import React from 'react';

const Smooth: React.FC<{
  children: React.ReactNode
}> = ({children}) => {
  return (
    <Lenis
      root
    >
      {children}
    </Lenis>
  )
}

export default Smooth