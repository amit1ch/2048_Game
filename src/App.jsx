import { useEffect, useState } from "react";
import { upkeyclick, downkeyclick, leftkeyclick, rightkeyclick } from "./util";
import { isNumber } from "./util";

function App() {
  const DIRECTION_KEYS = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];
  const [numbers, setNumbers] = useState(Array.from({ length: 16 }).fill(0));
  const [score, setScore] = useState(0);
const [gameOver,setGameOver]=useState(false);
   





const isgameover=(check_vector)=>{
  
 

  let l1 = leftkeyclick(check_vector,score); 
  let l2 = upkeyclick(check_vector,score);
  let l3 = rightkeyclick(check_vector,score);
  let l4 =downkeyclick(check_vector,score);
    


  if(l1.len===0&&l2.len===0&&l3.len===0&&l4.len===0){
  return true;
  }
  return false;








}







  useEffect(() => {
    let firstPosition = Math.trunc(Math.random() * 16);
    let secondPosition = Math.trunc(Math.random() * 16);
    while (secondPosition === firstPosition) {
      secondPosition = Math.trunc(Math.random() * 16);
    }

    setNumbers((numbers) => {
      let updatedNumbers = [...numbers];
      updatedNumbers[firstPosition] = 2;
      updatedNumbers[secondPosition] = 2;
      console.log("up:", updatedNumbers);
      return updatedNumbers;
    });
  }, []);

  const handlekeypress = (e) => {
    let newposition = Math.trunc(Math.random() * 16);
    let modified = [...numbers];
    if (!DIRECTION_KEYS.includes(e.key)) return;

   let check_vector =[];

    if (e.key === "ArrowUp") {
      let res = upkeyclick(modified, score);
      check_vector = [...res.modify_vector];
      setScore(res.modify_score);
      setNumbers(res.modify_vector);
    }
    if (e.key === "ArrowDown") {
      let res = downkeyclick(modified, score);
      check_vector = [...res.modify_vector];
      setScore(res.modify_score);
      setNumbers(res.modify_vector);
    }
    if (e.key === "ArrowLeft") {
      let res = leftkeyclick(modified, score);
      check_vector = [...res.modify_vector];
      setScore(res.modify_score);
      setNumbers(res.modify_vector);
    }

    if (e.key === "ArrowRight") {
      let res = rightkeyclick(modified, score);
      check_vector = [...res.modify_vector];
      setScore(res.modify_score);
      setNumbers(res.modify_vector);
    }
    let check =  isgameover(check_vector);
    setGameOver(check);
  };

console.log(gameOver);

  useEffect(() => {
    document.addEventListener("keydown", handlekeypress);
    return () => {
      document.removeEventListener("keydown", handlekeypress);
    };
  }, [handlekeypress]);

  useEffect(()=>{
    console.log("score:",score);
    console.log("numbers:",numbers);
  },[score,numbers]);

  return (
    <>
      <div className="container">
        <div className="main">
          <div className="rapper">
            <div className="score">
              <p>score</p>
              <span>{score}</span>
            </div>
            <div className="newgame">
              <button>New Game</button>
            </div>
          </div>
          <div className="box">

           {gameOver===false? (numbers?.map((number, i) => (
              <div key={i} className={`item item-${i + 1}`}>
                {number === 0 ? "" : number}
              </div>
            ))):
            <div className="gameover">
              <h3 className="large_text">Game Over</h3>
             <button className="newgame_button">New Game</button>
            </div>
            }
             


          </div>
        </div>
      </div>
    </>
  );
}









export default App;
