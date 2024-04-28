import { useEffect, useState } from 'react'
import { upkeyclick,downkeyclick ,leftkeyclick,rightkeyclick } from './util';
import { isNumber } from './util';

function App() {
   const DIRECTION_KEYS=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"];
  const [numbers,setNumbers]=useState(Array.from({length:16}));
  const [score,setScore] = useState(0);
  
  
  useEffect(()=>{
  let firstPosition=Math.trunc(Math.random()*16);
  let secondPosition=Math.trunc(Math.random()*16);
  while (secondPosition === firstPosition) {
    secondPosition = Math.trunc(Math.random() * 16);
}
  
  setNumbers((numbers)=>{
    let updatedNumbers=[...numbers];
    updatedNumbers[firstPosition]=2;
    updatedNumbers[secondPosition]=2;
    return updatedNumbers;
  })
  },[])

const handlekeypress=(e)=>{
  
   

  let newposition = Math.trunc(Math.random()*16);
  let modified = [...numbers];
  if(!DIRECTION_KEYS.includes(e.key)) retrun
if(e.key==="ArrowUp"){
  let {newnumbers,newscore} =  upkeyclick(modified,score);
 console.log(newscore);
  setScore(newscore);
  setNumbers(newnumbers);

}
if(e.key==="ArrowDown"){
  let {newnumbers,newscore} =  downkeyclick(modified);
 
  setScore(newscore);
  setNumbers(newnumbers);

}
if(e.key==="ArrowLeft"){
  let {newnumbers,newscore} =  leftkeyclick(modified);
 
  setScore(newscore);
  setNumbers(newnumbers);

}

if(e.key==="ArrowRight"){
  let {newnumbers,newscore} =  rightkeyclick(modified);
 
  setScore(newscore);
  setNumbers(newnumbers);

}






}

useEffect(()=>{
  document.addEventListener("keydown",handlekeypress);
  return () => {
    document.removeEventListener("keydown", handlekeypress);
  };
},[handlekeypress])
  





  return (
    <>
      <div className='container'  > 
      <div className="main">
         <div className="rapper">
         <div className="score">
          <p>score</p>
          <span>
            {score}
          </span>
        </div>
        <div className="newgame">
          <button>New Game</button>
          
        </div>
         </div>
        <div className="box">

        {numbers?.map((number, i) => (
        <div key={i} className={`item item-${i+1}`}>
        {number === 0 ? "" : number}
        </div>
       ))}
        </div>
      </div>
      </div> 
    </>
  )
}

export default App
