"use client"

import React from 'react'
import Image from 'next/image'
import CarouselWrapper from './CarouselWrapper'

// import {
//     Carousel,
//     CarouselContent,
//     CarouselItem,
//     CarouselNext,
//     CarouselPrevious,
//   } from "@/components/ui/carousel"

const Carousel = () => {
  return (
    <section className="bg-[url('/carousel/carousel.webp')] bg-no-repeat bg-center bg-cover bg-black w-full h-full py-20 text-white flex flex-col justify-center items-center">
        <p className="text-3xl lg:text-5xl text-center font-bold mb-6 lg:mb-12">Categories</p>

        <CarouselWrapper />

    </section>
  )
}

export default Carousel