import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index,setIndex]=useState(0);
  const {name,job,image,text}=people[index];

  const checkNumber=(number)=>{
    if(number>people.length-1){
      return 0
    }
    if(number<0){
      return people.length-1
    }
    return number
  }

  function prevPerson(){
   setIndex(preVal=>{
      let newIndex=preVal+1;
      return checkNumber(newIndex)
   })
  }

  function nextPerson(){
   setIndex(preVal=>{
      let newIndex=preVal-1;
      return checkNumber(newIndex)
   })
  }

  function randomPerson(){
   let randomNumber=Math.floor(Math.random()*people.length);
   if(randomNumber===index){
      return randomNumber+1;
   }
   setIndex(checkNumber(randomNumber));
  }

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
            <button className='prev-btn' onClick={prevPerson}>
               <FaChevronLeft/>   
            </button>

            <button className='next-btn' onClick={nextPerson}>
               <FaChevronRight/>   
            </button>

            <button className='random-btn' onClick={randomPerson}>
               Surprise me
            </button>
         </div>
      </article>
  )
};

export default Review;