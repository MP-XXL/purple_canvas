"use client"
import React from 'react'
import Image from "next/image"
import bg from "@/public/hero.jpg"
import { CameraIcon, MagnifyingGlassIcon } from "@phosphor-icons/react"
import { Permanent_Marker } from "next/font/google";

const pem_marker = Permanent_Marker({
  weight:'400'
})

function Heropage() {
  return (
    <div className="relative w-full h-full">
      <Image className="object-cover  bg-center h-screen w-full "
        alt="Background"
        src={bg}
        placeholder="blur"
        quality={100} 
      />
      <div className="absolute h-screen inset-0 bg-black/60"></div>

          <form action="" className="flex items-center gap-1.5 bg-white border border-[#A45DD3] p-1 rounded-md absolute top-40 left-0 right-0 mx-5 md:mx-70">
              <button>
                  <CameraIcon size={35} color="#a45dd3" weight="duotone" />
              </button>

              <input type="text"
                  placeholder="NFT"
                  className="w-full p-0.5 outline-0 bg-amber-100" />

              <button>
                  <MagnifyingGlassIcon size={35} color="#a45dd3" weight="duotone" />
              </button>
          </form>

      <div className="absolute left-6 top-80 text-white">
        <h1 className={`text-6xl font-extrabold ${pem_marker.className}`}>ART <br /> Without <br /> Bounderies</h1>
      </div>
    </div>
  )
}

export default Heropage