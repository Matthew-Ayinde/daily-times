import React from 'react'
import CustomContentCard from './CustomContentCard'

const AdvertismentSection = () => {
  //w-1/2 col-span-1 row-span-1 items-center space-y-6 
  //w-1/2 col-span-1 row-span-2
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 gap-4">
        
 
        <div className="flex flex-col space-y-4  items-center justify-center ">
           <CustomContentCard 
            imageSrc=""
            imageAlt="Image Alt Text"
            width={600}
            height={400}
            category="Category"
            description="Long Heading is what you see here in this feature section and it may exceed one line"
            readMoreLink="/story/123"
           />
         
           <CustomContentCard 
            imageSrc=""
            imageAlt="Image Alt Text"
            width={600}
            height={400}
            category="Category"
            description="Long Heading is what you see here in this feature section and it may exceed one line"
            readMoreLink="/story/123"
           />
        </div>

        <div className="flex justify-center ">
          <CustomContentCard 
          imageSrc=""
          imageAlt="Image Alt Text"
          width={600}
          height={940}
          category="Category"
          description="Long Heading is what you see here in this feature section and it may exceed one line"
          readMoreLink="/story/123"
          />
        </div>
    </div>
    // <div className="grid-row-2 grid-cols-2 gap-4">
    //     <CustomContentCard 
    //       imageSrc=""
    //       imageAlt="Image Alt Text"
    //        width={300}
    //       height={100}
    //       category="Category"
    //       description="Long Heading is what you see here in this feature section and it may exceed one line"
    //       readMoreLink="/story/123"
    //   />
    //       <CustomContentCard 
    //       imageSrc=""
    //       imageAlt="Image Alt Text"
    //       width={300}
    //       height={100}
    //       category="Category"
    //       description="Long Heading is what you see here in this feature section and it may exceed one line"
    //       readMoreLink="/story/123"
    //   />
    //       <CustomContentCard 
    //       imageSrc=""
    //       imageAlt="Image Alt Text"
    //       width={300}
    //       height={200}
    //       category="Category"
    //       description="Long Heading is what you see here in this feature section and it may exceed one line"
    //       readMoreLink="/story/123"
    //   />
    // </div>
  )
}

export default AdvertismentSection