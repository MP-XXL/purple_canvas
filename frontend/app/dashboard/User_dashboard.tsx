import React from 'react'
import Image from "next/image"
import mock from "@/public/mock.jpg"
import { BellIcon, UserIcon } from "@phosphor-icons/react"


function User_dashboard() {
  return (
      <div className="p-3 text-[#410180] font-bold">
          <div className="bg-white fixed top-0 left-0 z-50 w-full flex justify-between items-center shadow shadow-[#410180] p-1">
              <div className="flex justify-center items-center">
                  <Image
                      src={mock}
                      alt="image of female sitting"
                      placeholder="blur"
                      blurDataURL="..."
                      className="rounded-full w-15 h-15"
                      //   height={40}
                      //   width={40}
                      quality={100} />
              </div>
              <p>Return to shopping</p>
          </div>

          <div className="py-20">
            <div>
                <div className="flex justify-between items-center">
                    <h2>Your Listings</h2>
                    <button className="bg-[#410180] py-2 px-4 rounded-md text-white">Add</button>
                </div>
                  <div className="grid grid-cols-1 gap-5 my-2.5 md:grid-cols-2">
                      <div className="shadow shadow-[#A45DD3] p-1.5 rounded-md">
                          <div className="flex items-center gap-1.5">
                              <Image
                                  src={mock}
                                  alt="image of female sitting"
                                  placeholder="blur"
                                  blurDataURL="..."
                                  className="rounded-md w-15 h-15 object-cover"
                                  quality={100} />

                              <div>
                                  <p>Picaso</p>
                                  <p>By MP</p>
                                  <p>$5000</p>
                              </div>
                          </div>
                          <div className="flex justify-end">
                              <button className="bg-[#410180] py-2 px-4 rounded-md text-white">Delist</button>
                          </div>
                      </div>

                      <div className="shadow shadow-[#A45DD3] p-1.5 rounded-md">
                          <div className="flex items-center gap-1.5">
                              <Image
                                  src={mock}
                                  alt="image of female sitting"
                                  placeholder="blur"
                                  blurDataURL="..."
                                  className="rounded-md w-15 h-15 object-cover"
                                  quality={100} />

                              <div>
                                  <p>Picaso</p>
                                  <p>By MP</p>
                                  <p>$5000</p>
                              </div>
                          </div>
                          <div className="flex justify-end">
                              <button className="bg-[#410180] py-2 px-4 rounded-md text-white">Delist</button>
                          </div>
                      </div>

                      <div className="shadow shadow-[#A45DD3] p-1.5 rounded-md">
                          <div className="flex items-center gap-1.5">
                              <Image
                                  src={mock}
                                  alt="image of female sitting"
                                  placeholder="blur"
                                  blurDataURL="..."
                                  className="rounded-md w-15 h-15 object-cover"
                                  quality={100} />

                              <div>
                                  <p>Picaso</p>
                                  <p>By MP</p>
                                  <p>$5000</p>
                              </div>
                          </div>
                          <div className="flex justify-end">
                              <button className="bg-[#410180] py-2 px-4 rounded-md text-white">Delist</button>
                          </div>
                      </div>
                      
                  </div>
            </div>

             <div>
                <h2>Your Purchases</h2>
                  <div className="grid grid-cols-1 gap-5 my-1.5 md:grid-cols-2">
                      <div className="shadow shadow-[#A45DD3] p-1.5 rounded-md">
                          <div className="flex items-center gap-1.5">
                              <Image
                                  src={mock}
                                  alt="image of female sitting"
                                  placeholder="blur"
                                  blurDataURL="..."
                                  className="rounded-md w-15 h-15 object-cover"
                                  quality={100} />

                              <div>
                                  <p>Picaso</p>
                                  <p>By MP</p>
                                  <p>$5000</p>
                              </div>
                          </div>

                      </div>

                      <div className="shadow shadow-[#A45DD3] p-1.5 rounded-md">
                          <div className="flex items-center gap-1.5">
                              <Image
                                  src={mock}
                                  alt="image of female sitting"
                                  placeholder="blur"
                                  blurDataURL="..."
                                  className="rounded-md w-15 h-15 object-cover"
                                  quality={100} />

                              <div>
                                  <p>Picaso</p>
                                  <p>By MP</p>
                                  <p>$5000</p>
                              </div>
                          </div>

                      </div>

                      <div className="shadow shadow-[#A45DD3] p-1.5 rounded-md">
                          <div className="flex items-center gap-1.5">
                              <Image
                                  src={mock}
                                  alt="image of female sitting"
                                  placeholder="blur"
                                  blurDataURL="..."
                                  className="rounded-md w-15 h-15 object-cover"
                                  quality={100} />

                              <div>
                                  <p>Picaso</p>
                                  <p>By MP</p>
                                  <p>$5000</p>
                              </div>
                          </div>
                      </div>
                      
                  </div>
            </div>

          </div>


      </div>
  )
}

export default User_dashboard