import { useState } from "react";
// import Select from "react-dropdown-select";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import makeAnimated from 'react-select/animated';
import Select from 'react-select'
export const UserForm2 = ({setdata}) => {
    const [yoe,setyoe]=useState("")
    const [ryoe,setryoe]=useState("")
    const [mexp,setmexp]=useState("")
    const [purl,setpurl]=useState("")
    const [name,setname]=useState("")
    const [phone,setphone]=useState("")
    const [position,setposition]=useState("")
    const [email,setemail]=useState("")
    const [date, setDate] = useState("");
    const [time, setTime] = useState("00:00"); 
    const [skills, setskills] = useState([]); 
    const [qualification,setqualification]=useState("")
    
    const [error, setError] = useState({ name: false, email: false,position:false,exp:false,phone:false,purl:false,ryoe:false,mexp:false,datetime:false ,skills:false});

    const positionOptions = [
        {
            value: 'Developer',
            label: 'Developer'
        },
        {
            value: 'Designer',
            label: 'Designer'
        },
        {
            value: 'Manager',
            label: 'Manager'
        }
    ];
    const SKillOptions = [
        {
            value: 'Python',
            label: 'Python'
        },
        {
            value: 'Javascript',
            label: 'Javascript'
        },
        {
            value: 'C++',
            label: 'C++'
        }
    ];
   

    const resetErrors=()=>{
        const allObject = Object.fromEntries(
          Object.keys(error).map((key) => [key, false])
        );
        setError(allObject);
      };
      function isValidURL(string) {
        const urlPattern = new RegExp(
          "^(https?:\\/\\/)?"+ // protocol
          "((([a-zA-Z0-9$-_@.&+!*\"(),]|[a-zA-Z0-9-])+\\.)+[a-zA-Z]{2,}|" + // domain name and extension
          "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
          "(\\:\\d+)?(\\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?" + // port and path
          "(\\?[;&a-zA-Z0-9%_+.~#-]*)?" + // query string
          "(\\#[-a-zA-Z0-9_]*)?$", // fragment locator
          "i"
        );
        
        return !!urlPattern.test(string);
      }
    const formValidation=()=>{
        let flag=true;
        if(!name || name.length<3){setError((prevState) => ({ ...prevState, name: true })); flag=false}
        if(!email ){setError((prevState) => ({ ...prevState, email: true })); flag=false}
        if(!phone || phone.length>10 ){setError((prevState) => ({ ...prevState, phone: true })); flag=false}
        if(!position ){setError((prevState) => ({ ...prevState, position: true })); flag=false}
        if(position==="Developer"){
            if(!ryoe || ryoe<0 || ryoe>100){setError((prevState) => ({ ...prevState, ryoe: true })); flag=false}
        }else  if(position==="Manager"){
            if(!mexp ){setError((prevState) => ({ ...prevState, mexp: true })); flag=false}
        }else  if(position==="Designer"){
            if(!purl || !isValidURL(purl) ){setError((prevState) => ({ ...prevState, purl: true })); flag=false}
            if(!ryoe || ryoe<0 || ryoe>100){setError((prevState) => ({ ...prevState, ryoe: true })); flag=false}
        }
        if(!skills || skills.length==0 ){setError((prevState) => ({ ...prevState, skills: true })); flag=false}
        if(!time || !date ){setError((prevState) => ({ ...prevState, datetime: true })); flag=false}
        return flag;
    }

    const handleTimeChange = (event) => {
        setTime(event.target.value);
      };
    const handleDateChange = (event) => {
        setDate(event.target.value);
      };
    const handleSKillChange = (event) => {
        console.log(event)
        const skillArray=[]
        if(event){
            event.map((e)=>{skillArray.push(e.value)})
            setskills(skillArray)
        }
      };

    const handlesubmit=(e)=>{
        e.preventDefault();
        resetErrors();
        const isValid=formValidation()
        console.log(error)
        if(isValid){
            const currData={name,email,position,exp:(position=="Manager"?mexp:ryoe),purl:purl,date,time,skills}
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
                            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile</label>
                            <input type="phone" id="phone" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${error.phone && "border-red-500 dark:border-red-500 "}`} placeholder="10 digit mobile number" required value={phone} onChange={(e) => { setphone(e.target.value) }} />
                            <p className={`${!error.phone && "hidden"} mt-2 text-sm text-red-600 dark:text-red-500`}>Enter 10 digit mobile number without country code</p>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="position" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Applying for position</label>
                            <Dropdown id="position" className={`p-1 border border-gray-300 bg-gray-50 text-gray-900 text-sm rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${error.position && "border-red-500 dark:border-red-500 "}`} options={positionOptions} onChange={(values) => { setposition(values.value) }} />
                            <p className={`${!error.position && "hidden"} mt-2 text-sm text-red-600 dark:text-red-500`}>Choose specific position</p>
                        </div>
                        {/* Survey position dropdowns */}
                        <div className={`${(position !== "Designer" && position!="Developer") && "hidden"} smooth border border-gray-300 p-6 rounded-lg mb-6 `}>
                           
                            <div className="mb-6">
                                <label htmlFor="ryoe" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Year of Experience</label>
                               
                            <input type="number" id="ryoe" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${error.exp && "border-red-500 dark:border-red-500 "}`} placeholder="0"  value={ryoe} onChange={(e)=>{setryoe(e.target.value)}}/>
                            <p className={`${!error.ryoe && "hidden"} mt-2 text-sm text-red-600 dark:text-red-500`}>
                            Year of Experience must between 0 and 99</p>
                        </div>
                        </div>
                        <div className={`${position!=="Designer" && "hidden"} smooth  border border-gray-300 p-6 rounded-lg mb-6 `}>
                        
                        <div className="mb-6">
                            <label htmlFor="purl" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Portfolio URL</label>
                            <input type="text" id="purl" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${error.purl && "border-red-500 dark:border-red-500 "}`} placeholder="https://something.com"  value={purl} onChange={(e) => { setpurl(e.target.value) }} />
                            <p className={`${!error.purl && "hidden"} mt-2 text-sm text-red-600 dark:text-red-500`}>Enter a valid url</p>
                        </div>
                        </div>
                        <div className={`${position!=="Manager" && "hidden"} smooth  border border-gray-300 p-6 rounded-lg mb-6 `}>
                        <div className="mb-6">
                            <label htmlFor="mexp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Management Experience</label>
                            <input type="number" id="mexp" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${error.exp && "border-red-500 dark:border-red-500 "}`} placeholder="0"  value={mexp} onChange={(e)=>{setmexp(e.target.value)}}/>
                            <p className={`${!error.mexp && "hidden"} mt-2 text-sm text-red-600 dark:text-red-500`}>
                            Year of Experience must between 0 and 99</p>
                            
                        </div>
                        
                       
                       
                        </div>
                        <div className="mb-6">
                            <label htmlFor="skills" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> Additional Skills</label>
                            < Select options={SKillOptions} 
                            id="skills" isMulti={true}
                                 className={`p-1 border border-gray-300 bg-gray-50 text-gray-900 text-sm rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:border-gray-600 dark:placeholder-gray-400  `}
                                onChange={(e)=>{handleSKillChange(e)}}
                                />
                            <p className={`${!error.skills && "hidden"} mt-2 text-sm text-red-600 dark:text-red-500`}>
                            At least one skill must be selected</p>
                            
                        </div>
                        <div className="mb-6"> 

            <label for="time" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Preferred interview time:</label>
            <div className="flex">
            <div className="relative max-w-sm mr-3">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <input datepicker type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={date} onChange={handleDateChange} placeholder="Select date"/>
            </div>
                <input type="time" id="time" className="rounded-none rounded-s-lg bg-gray-50 border text-gray-900 leading-none focus:ring-blue-500 focus:border-blue-500 block flex-1 w-full text-sm border-gray-300 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={time} onChange={handleTimeChange}  />
                
            </div>


                            <p className={`${!error.datetime && "hidden"} mt-2 text-sm text-red-600 dark:text-red-500`}>
                                Preferred interview date and time is required </p>
                        </div>
                      

                        
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}