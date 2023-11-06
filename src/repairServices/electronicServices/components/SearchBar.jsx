import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AlignmentSubCards from '../../../components/ui/AlignmentSubCard'

const SearchBar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [visibleContentCount, setVisibleContentCount] = useState(5);

 // Dynamic Data for electronic category
 const [electronic, setelectronic] = useState([]);
 const [searchVal , setsearchVal] = useState('');
 const [viewMore , setviewMore] = useState(4);
 useEffect(()=>{
  const getElectronic = async ()=>{
    let fetchElectronic = await fetch(`${import.meta.env.VITE_REACT_APP}/get/electronic/service`, {
     method:'get',
     headers:{
       'Content-Type':'application/json'
     }
    });
    fetchElectronic = await fetchElectronic.json();
    // console.log(fetchElectronic.electronicService);
    setelectronic(fetchElectronic.electronicService);
  }
  getElectronic();
 },[])
 
 const filterElectronic = electronic.filter((item)=>item.companyName.toLowerCase().includes(searchVal.toLowerCase()));

 // View More function
 const handleViewmore = ()=>{
   setviewMore((prevCount)=>prevCount+5)
 }

  // Your list of available content

  const availableContent = [
    {
      images: '/electronics/Laptop.webp',
      prompt: 'Laptop'
    },
    {
      images: '/electronics/TV.webp',
      prompt: 'TV'
    },
    {
      images: '/electronics/Smartphone.webp',
      prompt: 'Smartphone'
    },
    {
      images: '/electronics/Tablet.webp',
      prompt: 'Tablet'
    },
    {
      images: '/electronics/Headphones.webp',
      prompt: 'Headphones'
    },   
    {
      images: '/electronics/Camera.webp',
      prompt: 'Camera'
    },
    {
      images: '/electronics/Desktop Computer.webp',
      prompt: 'Desktop Computer'
    },
    {
      images: '/electronics/Printer.webp',
      prompt: 'Printer'
    },
    {
      images: '/electronics/Speaker.webp',
      prompt: 'Speaker'
    },
    {
      images: '/electronics/Game Console.webp',
      prompt: 'Game Console'
    },
    {
      images: '/electronics/Wearable Device.webp',
      prompt: 'Wearable Device'
    },
    {
      images: '/electronics/Router.webp',
      prompt: 'Router'
    },
    {
      images: '/electronics/Monitor.webp',
      prompt: 'Monitor'
    },
    {
      images: '/electronics/E-reader.webp',
      prompt: 'E-reader'
    },
    {
      images: '/electronics/Projector.webp',
      prompt: 'Projector'
    },
    {
      images: '/electronics/Keyboard.webp',
      prompt: 'Keyboard'
    },
    {
      images: '/electronics/Mouse.webp',
      prompt: 'Mouse'
    },
    {
      images: '/electronics/Scanner.webp',
      prompt: 'Scanner'
    },
    {
      images: '/electronics/External Hard Drive.webp',
      prompt: 'External Hard Drive'
    },
    {
      images: '/electronics/VR Headset.webp',
      prompt: 'VR Headset'
    }
  ]

  const filteredContent = availableContent.filter((content) =>
    content.prompt.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSuggestionClick = () => {
    // Handle the card click here, e.g., navigate to the corresponding route
    navigate('/electronicServices')
  }

  const handleEnterKeyPress = (e) => {
    if (e.keyCode === 13) {
      // Enter key pressed
      redirectToFirstSuggestion()
    }
  }
  // Function to automatically redirect to the first suggestion
  const redirectToFirstSuggestion = () => {
    if (filteredContent.length > 0) {
      handleSuggestionClick(filteredContent[0])
    }
  }

  // Render the filtered content
  const renderFilteredContent = () => {
    if (filteredContent.length === 0) {
      return (
        <div className="ml-16 flex items-center justify-center gap-10">
          <p>No matching content found.</p>
        </div>
      )
    }

    const handleViewMoreClick = () => {
      // Show 5 more cards when the "View More" button is clicked
      setVisibleContentCount((prevCount) => prevCount + 5)
    }

    return (
      <div className="flex w-full flex-col items-center justify-center">
        <div className=" grid items-center justify-center gap-7 max-sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {/* {filteredContent.slice(0, visibleContentCount).map((content, index) => (
            <div key={index}>
              <AlignmentSubCards
                images={content.images}
                prompt={content.prompt}
                onClick={'/electronicServices'}
              />
            </div>
          ))} */}

          {
            filterElectronic?.slice(0,viewMore).map((item,i)=>{
              return(
                <AlignmentSubCards key={item._id}
                companyName={item.companyName}
                image={item.image}
                onClick={`/electronicServices/${item.companyName}`}
              />
              )
            })
             
            }
        </div>
        {/* {filteredContent.length > visibleContentCount && (
          <div className="mt-7 flex items-end justify-end">
            <button
              onClick={handleViewMoreClick}
              className="h-10 w-40 rounded-md bg-blue-500 text-white hover:bg-blue-400">
              View More Category
            </button>
          </div>
        )} */}

{filterElectronic.length > viewMore && (
          <div className="mt-7 flex items-end justify-end">
            <button
              onClick={handleViewmore}
              className="h-10 w-40 rounded-md bg-blue-500 text-white hover:bg-blue-400">
              View More Category
            </button>
          </div>
        )}
      </div>
    )
  }
  return (
    <div className="container flex flex-col gap-10">
      <div className="flex items-center justify-center">
        <form className="mt-3 w-96 px-6">
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute bottom-0 left-3 top-0 my-auto h-6 w-6 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-md border bg-gray-50 py-2 pl-12 pr-4 text-gray-500 outline-none focus:border-indigo-600 focus:bg-white"
              value={searchVal}
              onChange={(e) => setsearchVal(e.target.value)}
              onBlur={redirectToFirstSuggestion}
              onKeyDown={handleEnterKeyPress}
            />
          </div>
        </form>
      </div>
      <div className="flex items-start justify-start">{renderFilteredContent()}</div>
    </div>
  )
}

export default SearchBar
