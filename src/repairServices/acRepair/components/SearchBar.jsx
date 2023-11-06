import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AlignmentSubCards from '../../../components/ui/AlignmentSubCard'

const SearchBar = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [visibleContentCount, setVisibleContentCount] = useState(5);
  
  
  // Your list of available content

  // Dynamic data for Ac Repair
  const [displayContent , setdisplayContent] = useState(5);
  const [acData, setacData] = useState([]);
  const [searchVal , setsearchVal] = useState('')

  
  const filterAcdata = acData.filter((item)=>item.companyName.toLowerCase().includes(searchVal.toLowerCase()) );
  
  useEffect(()=>{
    const getAc = async ()=>{
      let fetchAc = await fetch(`${import.meta.env.VITE_REACT_APP}/get/acrepair/service`, {
        method:'get',
        headers:{
          'Content-Type': 'application/json'
        }
      });
      fetchAc = await fetchAc.json();
      setacData(fetchAc.gotAcService);
    }
    getAc();
  },[])

 
  
  // VIEW MORE
  const ViewMore = ()=>{
    setdisplayContent((prevCount)=>prevCount+5)
  }
 

  const availableContent = [
    {
      images: '/ac/ac1.webp',
      prompt: 'Daikin'
    },
    {
      images: '/ac/ac2.webp',
      prompt: 'Mitsubishi Electric'
    },
    {
      images: '/ac/ac3.webp',
      prompt: 'Samsung'
    },
    {
      images: '/ac/ac4.webp',
      prompt: 'Panasonic'
    },
    {
      images: '/ac/ac5.webp',
      prompt: 'LG'
    },
    {
      images: '/ac/ac1.webp',
      prompt: 'Voltas'
    },
    {
      images: '/ac/ac2.webp',
      prompt: 'Blue Star'
    },
    {
      images: '/ac/ac3.webp',
      prompt: 'O General'
    },
    {
      images: '/ac/ac4.webp',
      prompt: 'Whirlpool'
    },
    {
      images: '/ac/ac5.webp',
      prompt: 'Hisense'
    },
    {
      images: '/ac/ac1.webp',
      prompt: 'Kenmore'
    },
    {
      images: '/ac/ac2.webp',
      prompt: 'Carrier'
    },
    {
      images: '/ac/ac3.webp',
      prompt: 'TCL'
    },
    {
      images: '/ac/ac4.webp',
      prompt: 'Fujitsu'
    },
    {
      images: '/ac/ac5.webp',
      prompt: 'Haier'
    },
    {
      images: '/ac/ac1.webp',
      prompt: 'Midea'
    },
    {
      images: '/ac/ac2.webp',
      prompt: 'Sanyo'
    },
    {
      images: '/ac/ac3.webp',
      prompt: 'Lloyd'
    },
    {
      images: '/ac/ac4.webp',
      prompt: 'Hitachi'
    },
    {
      images: '/ac/ac5.webp',
      prompt: 'Pioneer'
    }
  ]

  const filteredContent = availableContent.filter((content) =>
    content.prompt.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const handleSuggestionClick = () => {
    // Handle the card click here, e.g., navigate to the corresponding route
    navigate('/acRepair')
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

    // const handleViewMoreClick = () => {
    //   // Show 5 more cards when the "View More" button is clicked
    //   setVisibleContentCount((prevCount) => prevCount + 5)
    // }

    return (
      <div className="flex w-full flex-col items-center justify-center">
        <div className=" grid items-center justify-center gap-7 max-sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {/* {filteredContent.slice(0, visibleContentCount).map((content, index) => (
            <div key={index}>
              <AlignmentSubCards
                images={content.images}
                prompt={content.prompt}
                onClick={'/acRepair'}
              />

             
            </div>
          ))} */}

{
  filterAcdata?.slice(0, displayContent).map((item,i)=>{
    return(
      <AlignmentSubCards
              acInfo={acData}
               key={item._id}
                companyName={item.companyName}
                image={item.image}
                description={item.description}
                charges={item.charges}
                onClick={`/acRepair/${item.companyName}`}
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

{filterAcdata.length > displayContent && (
          <div className="mt-7 flex items-end justify-end">
            <button
              onClick={ViewMore}
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
