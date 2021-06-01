import {Quiz,QuestionType} from './../types/quiz_types'

const shuffleArray = (array:any[]) => 
[...array].sort(()=>Math.random() - 0.5)


export const getQuizDetails = async(totalQuestions:number, level:string): Promise<QuestionType[]> => {

    const res = await fetch(`https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple`)
    let {results} = await res.json();

    const quiz:QuestionType[] = results.map((questionObj: Quiz)=>{
        return {
            question: questionObj.question,
            answer: questionObj.correct_answer,
            correct_ans:questionObj.correct_answer,
            option: shuffleArray( questionObj.incorrect_answers.concat(questionObj.correct_answer))
        }
    })
    return quiz;
    
}