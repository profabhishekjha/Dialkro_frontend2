import React from 'react'
import Nav from '../../components/Navbar/Nav'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import CardSection from '../../productList/components/cardSection'
import { Toaster } from 'react-hot-toast'
import BannerCarousel from '../../components/Body/Carousel/BannerCarousel'
const TravelsPage = () => {
  const images = [
    'TravelCarousel/travel1.webp',
    'TravelCarousel/travel2.webp',
    'TravelCarousel/travel3.webp',
    'TravelCarousel/travel4.webp',
    'TravelCarousel/travel5.webp'
  ]

  const navigate = useNavigate()
  return (
    <div>
      <Outlet />
      <Toaster />
      <Nav />
      <BannerCarousel images={images} />
      <div className=" my-5 grid  items-center justify-center gap-5">
        <CardSection onClick={() => navigate('/travels/Product_Detail')} />
        <CardSection onClick={() => navigate('/travels/Product_Detail')} />
        <CardSection onClick={() => navigate('/travels/Product_Detail')} />
        <CardSection onClick={() => navigate('/travels/Product_Detail')} />
        <CardSection onClick={() => navigate('/travels/Product_Detail')} />
        <CardSection onClick={() => navigate('/travels/Product_Detail')} />
      </div>
      <Footer />
    </div>
  )
}

export default TravelsPage
