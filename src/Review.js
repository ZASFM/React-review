import React, { useState } from 'react';
import people from './data';
import ReviewEl from './ReviewEl'

const Review = () => {
  const [index,setIndex]=useState(0);

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
   setIndex(checkNumber(randomNumber))
  }

  const Reviews=people.map(review=>{
   const {name,job,image,text}=review;
   return <ReviewEl
      name={name}
      job={job}
      image={image}
      text={text}
      addIndex={nextPerson}
      subIndex={prevPerson}
      randomIndex={randomPerson}
   />
  })

  return (
     <div>
       {Reviews}
     </div>
  )
};

export default Review;

