import React from 'react'

const PdfSection = () => {
  return (
    <>
        <div className='border flex justify-around items-center flex-col rounded-xl mt-2 p-4 md:flex md:flex-row md:p-0 md:border-none md:gap-2'>
            <div className='flex items-center flex-col justify-center gap-3 md:flex md:flex-row md:border md:p-2 md:rounded-xl md:bg-[#3d3d3dae]'>
                <div>
                    <img src="https://play-lh.googleusercontent.com/BkRfMfIRPR9hUnmIYGDgHHKjow-g18-ouP6B2ko__VnyUHSi1spcc78UtZ4sVUtBH4g" alt="#" className="w-28 rounded"/>
                </div>
                <div className='flex flex-col gap-3'>
                    <h2 className='text-center text-[white] font-medium text-2xl tracking-widest md:text-start'>Title - Chapter 1</h2>
                    <div className='text-center text-[#cfcfcf] tracking-widest md:text-start'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, consequuntur? Molestias culpa eius sapiente non?</p>
                    </div>
                </div>
            </div>
            <button className='mt-5 bg-[white] rounded border border-[white] text-[white] bg-transparent px-12 py-3 hover:bg-[white] hover:text-[#242429] transition duration-[1.4s] ease-in-out md:py-2 md:px-8'><p className='text-xl tracking-[3px]'>View</p></button>
        </div>
    </>
  )
}

export default PdfSection