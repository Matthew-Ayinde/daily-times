'use client';

import { navLinks } from '@/data/navigation'
import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { Button } from './ui/button';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
    };
  

    const segment = useSelectedLayoutSegment();
  return (
        
    <header className="h-20 px-100px bg-white text-custom-black z-10 border-gray-400 ">

        <nav className="w-full h-full py-5 lg:py-3 lg:px-60px  px-6">
                
            <div className="container mx-auto flex items-center justify-between   ">
                <div>
                    <Link href={"/"}>
                        <Image
                            src={""}
                            alt={"logo"}
                            width={70}
                            height={40}
                        />
                    </Link>
                </div>

                <div className="hidden lg:flex space-x-4">
                    <div className="flex flex-col justify-end gap-3">
                        <ul className="flex items-center gap-14 justify-end transition-all duration-300 ease-in-out">
                            {navLinks.map((nav, index) => {
                            const isActive = segment === nav.url;
                            return (
                                <li key={index}>
                                <Link href={`/${nav.url}`}>
                                    <p
                                    className={`text-sm hover:text-custom-green transition-all duration-300 cursor-pointer ${
                                        isActive
                                        ? "text-custom-green"
                                        : "text-custom-darkgray"
                                    }`}
                                    >
                                    {nav.link}
                                    </p>
                                </Link>
                                </li>
                            );
                            })}
                        </ul>

                    <div>
                <div>
                    <div>
                        <Button className="bg-black text-white rounded-lg">
                            SUBMIT ASTORY
                        </Button>
                    </div>
                </div>
                        
                    </div>
                </div>
            
            {/* {mobile navigation} */}
            <div className="lg:hidden">
            <button
              className="text-white focus:outline-none transition-all duration-300 ease-in-out rounded-full bg-green-600 "
              onClick={toggleMobileMenu}
            >
                Button
              {/* {isMobileMenuOpen ? (
                <Image
                  src={"/svgs/close.svg"}
                  alt={"close"}
                  width={36}
                  height={36}
                  className="w-auto"
                />
              ) : (
                <Image
                  src={"/svgs/open.svg"}
                  alt={"open"}
                  width={36}
                  height={36}
                  className="w-auto"
                />
              )} */}
            </button>


            <div
              className={`absolute top-20 bg-white w-full h-full z-10 border-t border-custom-white transform transition-transform duration-300 ease-in-out ${
                isMobileMenuOpen ? "right-0" : "translate-x-full"
              }`}
            >
              <div className="px-6 py-12">
                <ul className="flex flex-col gap-10">
                  {navLinks.map((nav, index) => {
                    const isActive = segment === nav.url;

                    return (
                      <li key={index}>
                        <Link
                          href={`/${nav.url}`}
                          onClick={() => {
                            setMobileMenuOpen(false);
                          }}
                        >
                          <p
                            className={`hover:text-custom-green transition-all duration-300 ${
                              isActive
                                ? "text-custom-green"
                                : "text-custom-darkgray"
                            }`}
                          >
                            {nav.link}
                          </p>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

              </div>
            </div>
            </div>
            </div>
                </div>
        </nav>
    </header>

 
  )
}

export default Navbar