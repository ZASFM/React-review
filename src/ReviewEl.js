import React from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

function ReviewEl(props){
   const {name,job,image,text,addIndex,subIndex,randomIndex}=props;
   return (
   <article className='review'>
      <div className='image-container'>
            <img src={image} alt={name} className='person-image'/>
            <span className='quote-icon'>
               <FaQuoteRight/>
            </span>
         </div>
         <h4 className='author'>{name}</h4>
         <p className='job'>{job}</p>
         <p className='info'>{text}</p>
         <div className='button-container'>
            <button className='prev-btn' onClick={addIndex}>
               <FaChevronLeft/>   
            </button>

            <button className='next-btn' onClick={subIndex}>
               <FaChevronRight/>   
            </button>

            <button className='random-btn' onClick={randomIndex}>
               Surprise me
            </button>
       </div>
   </article>
   )
}

export default ReviewEl;

