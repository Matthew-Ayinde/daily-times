import React from 'react';
import NewCardComponent from './NewCardComponent';



const NewsComponent = () => {
  return (
    <div className="max-w-screen-xxl lg:px-100px px-6 pt-16 pb-[136px] w-full mx-auto">
      <div className="mt-2 lg:mt-5 flex flex-col justify-center items-center w-full">
        <p className="font-bold text-center text-3xl lg:text-5xl mb-20">
          News
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {attributes.map((content, index) => (
            <NewCardComponent article={content} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsComponent;

const attributes = [
  {
    category: 'Category',
    img: '/article1.webp',
    Title: 'Long heading is what you see here in this feature section',
  },
  {
    category: 'Category',
    img: '/article2.webp',
    Title: 'Long heading is what you see here in this feature section',
  },
  {
    category: 'Category',
    img: '/article3.webp',
    Title: 'Long heading is what you see here in this feature section',
  },
  {
    category: 'Category',
    img: '/article4.webp',
    Title: 'Long heading is what you see here in this feature section',
  },
  {
    category: 'Category',
    img: '/article5.webp',
    Title: 'Long heading is what you see here in this feature section',
  },
  {
    category: 'Category',
    img: '/article6.webp',
    Title: 'Long heading is what you see here in this feature section',
  },
];
