"use client"
import React from 'react'
import Image from "next/image"
import logo from "@/public/logo.png"
import { BellIcon, UserIcon } from "@phosphor-icons/react"

function Nav() {
  return (
    <div>
      <nav className="fixed top-0 z-50 w-full bg-white flex justify-between items-center px-3 shadow shadow-[#410180]">
        <Image
          src={logo}
          alt="image of female sitting"
          placeholder="blur"
          blurDataURL="..."
          className="-z-40 md:w-16"
          height={80}
          width={80}
          quality={100}  />

          <div className="flex items-center gap-5">
            <BellIcon size={35} color="#a45dd3" weight="duotone" />
            <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#410180]">
              <UserIcon size={25} color="#a45dd3" weight="duotone" />
            </div>
          </div>
      </nav>
    </div>
  )
}

export default Nav