import React from 'react';

const Navbar = ({signOut}) => {
    return(
        <div className='w-full flex justify-center '>
            <div className="flex justify-between items-center w-full md:w-3/5 bg-bg-secondary px-4 py-2 md:px-10 md:py-4 rounded-b-xl">
            <h2 className='text-xl md:text-2xl'><span className="font-normal italic">Sprint</span><span className="font-bold">Earn</span></h2>
            <div >
                <button onClick={()=>signOut()} className="text-white bg-primary px-4 py-1.5 rounded-md ml-4">Logout</button>
            </div>
            </div>
        </div>
    )
}

export default Navbar;