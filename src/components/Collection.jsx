import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import ProductPictures from './ProductPictures'

const Collection = () => {
  return (
    <div className='overflow-x-hidden min-h-screen flex flex-col'>
      <Navbar />
      <ProductPictures />
      <Footer />
    </div>
  )
}

export default Collection