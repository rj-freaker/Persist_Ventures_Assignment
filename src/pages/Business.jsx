import React from 'react';
import NewsCard from '../components/NewsCard';

export default function Business({newsData}) {

  return (
    <div className='row row-cols-1 row-cols-md-3 g-4 justify-content-between'>
      <h2 className='text-center w-100'><span className='badge bg-danger'>Business NEWS</span></h2>
      {newsData.map((item, index) => (
          <NewsCard
            key={index}
            title={item.title}
            description={item.description}
            url={item.url}
            urlToImage={item.urlToImage}
            author={item.author}
            publishedAt={item.publishedAt}
          />
      ))}
    </div>
  )
}
