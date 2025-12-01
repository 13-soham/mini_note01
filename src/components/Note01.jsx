import React, { useState } from 'react'

const Note01 = () => {
    const [Name, setName] = useState("");
    const [desc, setdesc] = useState("");
    const [Output, setOutput] = useState([]);
  return (
    <div className='h-screen w-full bg-linear-to-r/hsl from-red-950 to-red-500 px-7 py-5'>
        <div className='h-1/2 w-1/3 bg-red-800 border-2 border-white px-3 py-4 overflow-hidden rounded-xl'>
            <form 
                className='flex flex-col gap-3 h-full'
            >
                <input
                    // value={}
                    type="text"
                    placeholder='name' 
                    className='bg-red-950 text-2xl text-amber-50 outline-none rounded-xl px-3 py-2'
                />
                <textarea 
                    // value={}
                    type="text"
                    placeholder='description'
                    className='bg-red-950 text-amber-50 outline-none rounded-xl px-3 py-2 flex-1 resize-none'
                />
                <button className='text-xl text-red-900 font-semibold bg-white text-center border-2 border-black py-2 rounded-xl cursor-pointer transition-all duration-150 active:scale-95'>submit</button>
            </form>
        </div>
    </div>
  )
}

export default Note01