import React,{useState} from "react";
import { questionPropsType } from "./../types/quiz_types";

const QuestionCard: React.FC<any> = ({ question, options, callback }) => {

let [selectedAns,setSelectedAns] = useState("");

const handleSelection = (ev:any) =>{
setSelectedAns(ev.target.value);
}
  return (
    <div className="question-container">
      <div className="question">{question}</div>

      <form onSubmit={(e:React.FormEvent<EventTarget>)=>callback(e, selectedAns)} className="question-form">

        {options.map((opt: string, ind: number) => {
          return (
            <div key={ind}>
              <label className='radio'>
                <input type="radio" name="opt" required checked={selectedAns === opt} value={opt} onChange={handleSelection} />
                {opt}
              </label>
            </div>
          );
        })}
        <input type="submit" className="submit" />
      </form>
    </div>
  );
};

export default QuestionCard;
