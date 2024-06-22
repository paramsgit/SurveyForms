import { useEffect, useState } from "react"

export const Survey=({category=1,clear})=>{
    const [questions,setquestions]=useState()
    const [questionError,setquestionError]=useState()
    const [loading,setloading]=useState(false)
    const [showAns,setshowAns]=useState(false)
    let index=0;
    useEffect(()=>{
        if(category){
            getQuestions()
        }
    },[category])
    
    const getQuestions=async()=>{
        setloading(true);
        try {
            const response=await fetch(`https://opentdb.com/api.php?amount=5&category=${category=="Technology"?18:(category=="Education"?9:17)}&difficulty=easy&type=boolean`)
            const questionData=await response.json();
            if(questionData.results){setquestions(questionData.results)}
        } catch (error) {
           console.log(error) 
           setquestionError(error)
        }
        setloading(false)
    }

    const handleSurveySubmit=(e)=>{
        e.preventDefault();
        setshowAns(true)
    }
    return (
        <>
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg mt-6  p-4">
        <h1 className="text-gray-800 dark:text-gray-100 font-bold">Quick Survey</h1>
      </div>
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg mt-2 mb-6 p-6">
        { loading?<h1 className="text-gray-800 dark:text-white">Loading Questions...</h1>:
<form action="#" onSubmit={(e)=>{handleSurveySubmit(e)}}>
 
    {questions && questions.map((q)=>{
        return  <div className="mb-6" key={index++}>
        <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
           {q.question}
        </label>
        <div className="flex flex-wrap">
<div className="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
    <input id={`bordered-radio-${index}`} type="radio" value="" name={`bordered-radio-${index}`} className={`surveyInput w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ${showAns && (q.correct_answer=="True" ? "correctAnswer":"wrongAnswer")}`} />
    <label for={`bordered-radio-${index}`} className={` w-full pr-4 py-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300`}>True</label>
</div>
<div className="flex items-center ml-4 ps-4 border border-gray-200 rounded dark:border-gray-700">
    <input id={`bordered-radio-${index}s`} type="radio" value="" name={`bordered-radio-${index}`} className={`surveyInput w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 ${showAns &&( q.correct_answer=="False" ? "correctAnswer":"wrongAnswer")}`} />
    <label for={`bordered-radio-${index}s`} className="w-full pr-4 py-2 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">False</label>
</div>
</div>

    </div>
    })}
    
  
    <div className="flex  flex-col md:flex-row md:items-center">
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    <button type="button" onClick={()=>clear()} className="text-gray-900 my-4 md:ml-2 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Reset All</button>
    </div>

</form>}
        </div>  
        </>
    )
}