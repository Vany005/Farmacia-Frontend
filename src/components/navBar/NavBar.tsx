import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-sky-700 text-white flex justify-center py-4 color-navbar'>
          <div className="container flex justify-between text-lg">
          <Link to='/home' className='text-2xl font-bold uppercase'>FarmaciaVania</Link>

            <div className='flex gap-4'>
            <Link to='/home' className='hover:underline'>Home</Link>
            <Link to='/categorias' className='hover:underline'>Categorias</Link>       
            <Link to='/cadastrarCategoria' className='hover:underline'>Cadastrar categoria</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar