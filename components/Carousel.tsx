"use client"

import React from 'react'
import Image from 'next/image'
import CarouselBody from './CarouselWrapper'

// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
//   } from "@/components/ui/carousel"

const Carousel = () => {
  return (
    <section className="bg-[url('/carousel/carousel.webp')] bg-no-repeat bg-center bg-cover bg-black w-full h-full px-12 py-20 text-white flex flex-col justify-center items-center">
        <p className="text-5xl text-center font-bold mb-12">Categories</p>

        <CarouselBody />

    </section>
  )
}

export default Carousel