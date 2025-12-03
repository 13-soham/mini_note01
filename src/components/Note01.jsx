import React, { useState } from 'react'
import "remixicon/fonts/remixicon.css";

const Note01 = () => {
    const [Name, setName] = useState("");
    const [desc, setdesc] = useState("");
    const [Output, setOutput] = useState([]);

    function submitHandler(e) {
        e.preventDefault();
        if (Name.trim() === "") {
            alert("give your name frist");
            return;
        }
        setOutput([...Output, { Name, desc }]);
        setName("");
        setdesc("");
    }

    function deleteHandler(idx){
        let arr = [...Output];
        arr.splice(idx, 1);
        setOutput(arr);
    }

    return (
        <div className='h-screen w-full bg-linear-to-r/hsl from-red-950 to-red-500 px-15 py-10 flex flex-row gap-20'>
            <div className='h-1/2 w-1/3 bg-red-800 border-2 border-white px-3 py-4 overflow-hidden rounded-xl'>
                <form
                    onSubmit={(e) => {
                        submitHandler(e);
                    }}
                    className='flex flex-col gap-3 h-full'
                >
                    <input
                        value={Name}
                        type="text"
                        placeholder='name'
                        className='bg-red-950 text-2xl text-amber-50 outline-none rounded-xl px-3 py-2 scrollbar-hide'
                        onChange={(e) => setName(e.target.value)}
                    />
                    <textarea
                        value={desc}
                        type="text"
                        placeholder='description'
                        className='bg-red-950 text-amber-50 outline-none rounded-xl px-3 py-2 flex-1 resize-none scrollbar-hide'
                        onChange={(e) => { setdesc(e.target.value) }}
                    />
                    <button className='text-xl text-red-900 font-semibold bg-white text-center border-2 border-black py-2 rounded-xl cursor-pointer transition-all duration-150 active:scale-98'>submit</button>
                </form>
            </div>
            <div className='h-1/2 w-2/3  bg-red-950  border-white px-3 py-4 rounded-xl flex flex-row items-center justify-start gap-5 overflow-x-auto overflow-y-hidden scrollbar-hide'>
                {Output.map((elem, idx) => {
                    return <div className='text-red-900 px-5 py-3 h-67 min-w-57 max-w-57 bg-red-800 border-10 border-double border-white rounded-xl flex flex-col overflow-y-auto scrollbar-hide'>
                        <i
                            onClick={() => deleteHandler(idx)}
                            className="ri-delete-bin-line ml-auto text-xl text-white cursor-pointer"></i>
                        <h1 className='text-3xl font-bold text-amber-400 text-center pb-3'>{elem.Name}</h1>
                        <p className='text-xs text-white'>{elem.desc}</p>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Note01