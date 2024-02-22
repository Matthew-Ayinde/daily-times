import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="max-w-1440px max-h-400px bg-blue-500">
        <div className="w-1312px h-122px pt-16 px-16 ">
            <div className="w-236px h-90.57px flex flex-col ">
                <Image 
                alt='alt Image'
                width={200}
                height={34.57}
                src={""}
                className="bg-green-700"/>

                <div className="w-236px flex  mt-6 space-x-8">
                    <Link href={""}>link one</Link>
                    <Link href={""}>link two</Link>
                    <Link href={""}>link three</Link>
                    <Link href={""}>link four</Link>
                    <Link href={""}>link five</Link>
                </div>
            </div>
        </div>


        <div className="h-54px w-1312px px-16 flex items-baseline mt-6 justify-between pb-16">
            <div className="flex space-x-4">
                <p>Privacy Policy</p>
                <p>Terms of service</p>
                <p>Cookies Settings</p>
            </div>
            <div>
                <p>@2024 Daily Times Nigeria. All rights reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
