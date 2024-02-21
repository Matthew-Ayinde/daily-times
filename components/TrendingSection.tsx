

import React from 'react'
import ContentCard from './ContentCard'

const TrendingSection = () => {


    //grid grid-cols-1 gap-4 md:col-span-2 lg:col-span-3
    //grid grid-cols-1 gap-4 md:col-span-2 lg:col-span-3
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4  ">
    {/* First Row */}
        {/* <div className="md:col-span-2 lg:col-span-3"> */}
        {/* <div className="grid grid-cols-1 md:grid-col-2 lg:grid-col-3"> */}
            <ContentCard 
            imageSrc=""
            altText="Image Alt Text"
            category="Category"
            description="Long Heading is what you see here in this feature section"
            readMoreLink="/story/123"
            />
            <ContentCard 
            imageSrc=""
            altText="Image Alt Text"
            category="Category"
            description="Long Heading is what you see here in this feature section"
            readMoreLink="/story/123"
            />
            <ContentCard 
            imageSrc=""
            altText="Image Alt Text"
            category="Category"
            description="Long Heading is what you see here in this feature section"
            readMoreLink="/story/123"
            />
        {/* </div> */}
        {/* </div> */}

    {/* Second Row */}
        {/* <div className="md:col-span-2 lg:col-span-3"> */}
        {/* <div className="grid grid-cols-1 md:grid-col-2 lg:grid-col-3"> */}
        <ContentCard 
            imageSrc=""
            altText="Image Alt Text"
            category="Category"
            description="Long Heading is what you see here in this feature section"
            readMoreLink="/story/123"
            />
            <ContentCard 
            imageSrc=""
            altText="Image Alt Text"
            category="Category"
            description="Long Heading is what you see here in this feature section"
            readMoreLink="/story/123"
            />
            <ContentCard 
            imageSrc=""
            altText="Image Alt Text"
            category="Category"
            description="Long Heading is what you see here in this feature section"
            readMoreLink="/story/123"
            />
        {/* </div> */}
        {/* </div> */}
  </div>


  )
}

export default TrendingSection