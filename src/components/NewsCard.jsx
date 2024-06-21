import React from 'react';
import { Link } from 'react-router-dom';

export default function NewsCard({title,description,url,urlToImage,author,publishedAt}) {
  
  return (
    <div className="card text-bg-dark border-light text-light mx-2 my -2 px-2 py-2 rounded" style={{width: "18rem"}}>
      <img src={urlToImage} className="card-img-top img-fluid rounded" style={{height:'200px', width:'360px'}} alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description ? description.slice(0,80) : ''}</p>
        <p className="card-text">{author}</p>
        <p className="card-text">{publishedAt}</p>
        <Link to={url} className='btn btn-dark'>Read More</Link>
      </div>
    </div>
  );
}


