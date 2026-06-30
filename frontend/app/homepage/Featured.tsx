import React from 'react'
import Image from "next/image"
import { books, fetchBooks } from "@/lib/data";

async function Featured() {

      const books = await fetchBooks();
      const featuredBooks = books.slice(0, 6)

    return (
        <div className="p-3 text-[#410180] font-medium">
            <h2 className="font-bold text-3xl border-b-5 pb-1 w-fit border-b-[#410180]">Featured</h2>
            
                
            <div id="featured_grid" className="grid grid-cols-2 my-5" >
                {featuredBooks.map(book =>{
                return <div className="flex flex-col gap-2.5 items-center text-center w-44 " key={book.id}>
                    <Image className="rounded-md shadow-md shadow-[#410180]"
                        alt={book.title}
                        src={book.coverImageUrl}
                        placeholder="blur"
                        blurDataURL="..."
                        quality={100}
                        width={128}
                        height={150}
                    />
                    <p className="text-wrap" >{book.title}</p>
                </div>
                })}

            </div>
            
        </div>
    )
}

export default Featured