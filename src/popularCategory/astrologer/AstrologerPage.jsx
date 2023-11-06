import React, { useEffect, useState } from 'react'
import Nav from '../../components/Navbar/Nav'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import CardSection from '../../productList/components/cardSection'
import { Toaster } from 'react-hot-toast'
import BannerCarousel from '../../components/Body/Carousel/BannerCarousel'
const AstrologerPage = () => {
  const navigate = useNavigate()
  const category = 'courier' // Category name
  const images = [
    `${category}Carousel/${category}1.webp`,
    `${category}Carousel/${category}2.webp`,
    `${category}Carousel/${category}3.webp`,
    `${category}Carousel/${category}4.webp`
  ]

  // Dynamic Data for Astrologer
  const [astrologer, setastrologer] = useState([])

  useEffect(() => {
    const getAstrologer = async () => {
      let fetchAstro = await fetch(`${import.meta.env.VITE_REACT_APP}/getall/astrology`, {
        method: 'get',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      fetchAstro = await fetchAstro.json()
       console.log(fetchAstro);
      setastrologer(fetchAstro.gotAllstrologists)
    }
    getAstrologer()
  }, [])

  return (
    <div>
      <Outlet />
      <Toaster />
      <Nav />
      <BannerCarousel images={images} />
      <div className=" my-5 grid  items-center justify-center gap-5">
        {astrologer &&
          astrologer.map((item, i) => {
            return <CardSection
             companyName={item.companyName}
              image={item.image}
               rating={item.rating}
                price={item.price}
                 subject={item.subject}
                  description={item.description}
                   mobile={item.mobile}
                    onClick={() => navigate('/astrologer/Product_Detail')} 
                    />
          })}

        {/* <CardSection onClick={() => navigate('/astrologer/Product_Detail')} />
        <CardSection onClick={() => navigate('/astrologer/Product_Detail')} />
        <CardSection onClick={() => navigate('/astrologer/Product_Detail')} />
        <CardSection onClick={() => navigate('/astrologer/Product_Detail')} /> */}
      </div>
      <Footer />
    </div>
  )
}

export default AstrologerPage
