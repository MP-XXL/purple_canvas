"use client"
import React from 'react'
import Image from "next/image"
import logo from "@/public/logo.png"
import { ShoppingCartIcon, UserIcon, HouseIcon, ListMagnifyingGlassIcon } from "@phosphor-icons/react"

function Footer() {
  return (
    <div>
      <nav className="bg-white w-full flex justify-between items-center p-3 shadow shadow-[#410180] fixed bottom-0 md:relative">
        <div className="flex items-center gap-5">
          <HouseIcon size={35} color="#a45dd3" weight="duotone" />
          <ListMagnifyingGlassIcon size={35} color="#a45dd3" weight="duotone" />
        </div>

        <div className="flex items-center gap-5">
          <ShoppingCartIcon size={35} color="#a45dd3" weight="duotone" />
          <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-[#410180]">
            <UserIcon size={25} color="#a45dd3" weight="duotone" />
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Footer