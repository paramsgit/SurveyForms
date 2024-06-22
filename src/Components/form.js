import { useState } from "react";
// import Select from "react-dropdown-select";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
export const UserForm = ({setdata}) => {
    const [yoe,setyoe]=useState("")
    const [fos,setfos]=useState("")
    const [diet,setdiet]=useState("")
    const [name,setname]=useState("")
    const [Topic,setTopic]=useState("")
    const [email,setemail]=useState("")
    const [ex_freq,setex_freq]=useState("")
    const [progLang,setprogLang]=useState("")
    const [feedback,setfeedback]=useState("")
    const [qualification,setqualification]=useState("")
    const [error, setError] = useState({ name: false, email: false,topic:false,sub1:false,sub2:false,feedback:false });

    const TopicOptions = [
        {
            value: 'Technology',
            label: 'Technology'
        },
        {
            value: 'Health',
            label: 'Health'
        },
        {
            value: 'Education',
            label: 'Education'
        }
    ];
    const EducationOptions = [
        {
            value: 'High School',
            label: 'High School'
        },
        {
            value: `Bachelor's`,
            label: `Bachelor's`
        },
        {
            value: `Master's`,
            label: `Master's`
        },
        {
            value: 'PhD',
            label: 'PhD'
        }
    ];
    const dietOptions = [
        {
            value: 'Vegan',
            label: 'Vegan'
        },
        {
            value: 'Vegetarian',
            label: 'Vegetarian'
        },
        {
            value: 'Non-Vegetarian',
            label: 'Non-Vegetarian'
        }
    ];
    const ExerciseOptions = [
        {
            value: 'Daily',
            label: 'Daily'
        },
        {
            value: 'Weekly',
            label: 'Weekly'
        },
        {
            value: 'Monthly',
            label: 'Monthly'
        },
        {
            value: 'Rarely',
            label: 'Rarely'
        }
    ];
    const ProgrammingOptions = [
        {
            value: 'Javascript',
            label: 'Javascript'
        },
        {
            value: 'Python',
            label: 'Python'
        },
        {
            value: 'Java',
            label: 'Java'
        },
        {
            value: 'C#',
            label: 'C#'
        }
    ];

    const errors=[
        'Name must be greater than 3 characters',
        'Mail not valid',
        'Choose survey Topic',
        'Choose Programming Language',
        'Year of experience field cannot be empty',
        'Exercise frequency field cannot be empty ',
        'Choose Your preferred diet',
        'Choose Your highest qualification',
        'Enter Field of Study',
    ]

    const resetErrors=()=>{
        const allObject = Object.fromEntries(
          Object.keys(error).map((key) => [key, false])
        );
        setError(allObject);
      };
    const formValidation=()=>{
        let flag=true;
        if(!name || name.length<3){setError((prevState) => ({ ...prevState, name: true })); flag=false}
        if(!email ){setError((prevState) => ({ ...prevState, email: true })); flag=false}
        if(!Topic ){setError((prevState) => ({ ...prevState, topic: true })); flag=false}
        if(Topic==="Technology"){
            if(!progLang ){setError((prevState) => ({ ...prevState, sub1: true })); flag=false}
            if(!yoe || yoe<0 || yoe>100){setError((prevState) => ({ ...prevState, sub2: true })); flag=false}
        }else  if(Topic==="Health"){
            if(!ex_freq ){setError((prevState) => ({ ...prevState, sub1: true })); flag=false}
            if(!diet ){setError((prevState) => ({ ...prevState, sub2: true })); flag=false}
        }else  if(Topic==="Education"){
            if(!qualification ){setError((prevState) => ({ ...prevState, sub1: true })); flag=false}
            if(!fos ){setError((prevState) => ({ ...prevState, sub2: true })); flag=false}
        }
        if(!feedback || feedback.length<50 ){setError((prevState) => ({ ...prevState, feedback: true })); flag=false}
        return flag;
    }

    const handlesubmit=(e)=>{
        e.preventDefault();
        resetErrors();
        const isValid=formValidation()
        if(isValid){
            const currData={name,email,Topic,sub:(Topic==="Technology"?{label1:"Programming Language",value1:progLang,label2:"Experience",value2:yoe}:(Topic==="Health")?{label1:"Exercise Frequency",value1:ex_freq,label2:"Diet Preference",value2:diet}:{label1:"Highest Qualification",value1:qualification,label2:"Field of study ",value2:fos}),feedback}
            setdata(currData)
        }
          
    }


    return (
        <>
             <div className="flex justify-center w-full pb-6">
                <div className="max-w-xl w-full mt-8">
                    <h1 className="py-8 text-4xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl dark:text-white">Survey Form</h1>
                    <form onSubmit={(e) => handlesubmit(e)} action="#">
                        <div className="mb-6">
                            <label htmlFor="Name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                            <input type="text" id="Name" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${error.name && "border-red-500 dark:border-red-500 "}`} placeholder="John Smith" required value={name} onChange={(e) => { setname(e.target.value) }} />
                            <p className={`${!error.name && "hidden"} mt-2 text-sm text-red-600 dark:text-red-500`}>Name must be greater than 3 characters</p>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                            <input type="email" id="email" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${error.email && "border-red-500 dark:border-red-500 "}`} placeholder="john.doe@company.com" required value={email} onChange={(e) => { setemail(e.target.value) }} />
                            <p className={`${!error.email && "hidden"} mt-2 text-sm text-red-600 dark:text-red-500`}>Email not valid</p>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="topic" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Survey Topic</label>
                            <Dropdown id="topic" className={`p-1 border border-gray-300 bg-gray-50 text-gray-900 text-sm rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${error.Topic && "border-red-500 dark:border-red-500 "}`} options={TopicOptions} onChange={(values) => { setTopic(values.value) }} />
                            <p className={`${!error.topic && "hidden"} mt-2 text-sm text-red-600 dark:text-red-500`}>Choose survey Topic</p>
                        </div>
                        {/* Survey Topic dropdowns */}
                        <div className={`${Topic !== "Technology" && "hidden"} smooth border border-gray-300 p-6 rounded-lg mb-6 `}>
                            <div className="mb-6">
                                <label htmlFor="ProgrammingLanguage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Favourite Programming Language</label>
                                <Dropdown id="ProgrammingLanguage" className={`p-1 border border-gray-300 bg-gray-50 text-gray-900 text-sm rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${error.sub1 && "border-red-500 dark:border-red-500 "}`} options={ProgrammingOptions} onChange={(values) => { setprogLang(values.value) }} />
                                <p className={`${!error.sub1 && "hidden"} mt-2 text-sm text-red-600 dark:text-red-500`}>Choose Programming Language</p>
                            </div>
                            <div className="mb-6">
                                <label htmlFor="programmingyoe" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year of Experience</label>
                               
                            <input type="number" id="programmingyoe" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${error.sub2 && "border-red-500 dark:border-red-500 "}`} placeholder="0"  value={yoe} onChange={(e)=>{setyoe(e.target.value)}}/>
                            <p className={`${!error.sub2 && "hidden"} mt-2 text-sm text-red-600 dark:text-red-500`}>
                            Year of Experience must between 0 and 99</p>
                        </div>
                        </div>
                        <div className={`${Topic!=="Health" && "hidden"} smooth  border border-gray-300 p-6 rounded-lg mb-6 `}>
                        <div className="mb-6">
                            <label htmlFor="Ex_Frequency" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Exercise Frequency</label>
                            <Dropdown id="Ex_Frequency" className={`p-1 border border-gray-300 bg-gray-50 text-gray-900 text-sm rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${error.sub1 && "border-red-500 dark:border-red-500 "}`} options={ExerciseOptions} onChange={(values) => {setex_freq(values.value)}} />
                            <p className={`${!error.sub1 && "hidden"} mt-2 text-sm text-red-600 dark:text-red-500`}>Choose Exercise Frequency </p>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="diet" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Diet Preference</label>
                            <Dropdown id="diet" className={`p-1 border border-gray-300 bg-gray-50 text-gray-900 text-sm rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${error.sub2 && "border-red-500 dark:border-red-500 "}`} options={dietOptions} onChange={(values) => {setdiet(values.value)}} />
                            <p className={`${!error.sub2 && "hidden"} mt-2 text-sm text-red-600 dark:text-red-500`}>Choose your diet Preference</p>
                        </div>
                        </div>
                        <div className={`${Topic!=="Education" && "hidden"} smooth  border border-gray-300 p-6 rounded-lg mb-6 `}>
                        <div className="mb-6">
                            <label htmlFor=" Qualifications" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Highest Qualification</label>
                            <Dropdown id="Qualifications" className={`p-1 border border-gray-300 bg-gray-50 text-gray-900 text-sm rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${error.sub1 && "border-red-500 dark:border-red-500 "}`} options={EducationOptions} onChange={(values) => {setqualification(values.value)}} />
                            <p className={`${!error.sub1 && "hidden"} mt-2 text-sm text-red-600 dark:text-red-500`}>Choose your qualifications</p>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="fos" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Field of Study</label>
                            <input type="text" id="fos" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${error.sub2 && "border-red-500 dark:border-red-500 "}`} placeholder="Computer Science "value={fos} onChange={(e)=>{setfos(e.target.value)}}   />
                            <p className={`${!error.sub2 && "hidden"} mt-2 text-sm text-red-600 dark:text-red-500`}>Choose field of study</p>
                        </div>
                        </div>

                        <div className="mb-6">
                            <label htmlFor="feedback" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Feedback</label>
                            <textarea id="message" rows="4" className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${error.feedback && "border-red-500 dark:border-red-500 "}`} placeholder="Write your thoughts here..." required value={feedback} onChange={(e)=>setfeedback(e.target.value)}></textarea>
                            <p className={`${!error.feedback && "hidden"} mt-2 text-sm text-red-600 dark:text-red-500`}>Feedback must be atleast 50 Characters</p>
                        </div>
                      

                        
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}