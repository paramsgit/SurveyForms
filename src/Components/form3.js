import { useState } from "react";
import Dropdown from 'react-dropdown';

export const UserForm3 = ({setdata}) => {

    const [name,setname]=useState("")
    const [guestname,setguestname]=useState("")
    const [age,setage]=useState("")
    const [isguest,setisguest]=useState("")
    const [email,setemail]=useState("")

    
    const [error, setError] = useState({ name:false,email:false,age:false,isguest:false,guestname:false});

   

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
        if(!age || age<0 ){setError((prevState) => ({ ...prevState, age: true })); flag=false}
        if(isguest==undefined|| isguest==null ){setError((prevState) => ({ ...prevState, isguest: true })); flag=false}
        if(isguest=="True"){
            if(!guestname){setError((prevState) => ({ ...prevState, guestname: true })); flag=false}
        }
        return flag;
    }

    const handlesubmit=(e)=>{
        e.preventDefault();
        resetErrors();
        const isValid=formValidation()
        console.log(error)
        if(isValid){
            const currData={name,email,age,isguest,guestname}
            console.log(currData)
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
                            <label htmlFor="age" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mobile</label>
                            <input type="number" id="age" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${error.age && "border-red-500 dark:border-red-500 "}`} placeholder="18" required value={age} onChange={(e) => { setage(e.target.value) }} />
                            <p className={`${!error.age && "hidden"} mt-2 text-sm text-red-600 dark:text-red-500`}>Enter your age</p>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="isguest" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Are you attending with a guest</label>
                            <Dropdown id="isguest" className={`p-1 border border-gray-300 bg-gray-50 text-gray-900 text-sm rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${error.isguest && "border-red-500 dark:border-red-500 "}`} options={[{value:"True",label:"True"},{value:"False",label:"False"}]} onChange={(values) => { setisguest(values.value) }} />
                            <p className={`${!error.isguest && "hidden"} mt-2 text-sm text-red-600 dark:text-red-500`}>Choose an option </p>
                        </div>
                        {/* Survey position dropdowns */}
                        <div className={`${(!isguest) && "hidden"} smooth border border-gray-300 p-6 rounded-lg mb-6 `}>
                           
                            <div className="mb-6">
                                <label htmlFor="guestName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Guest Name</label>
                               
                            <input type="text" id="guestName" className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${error.guestname && "border-red-500 dark:border-red-500 "}`} placeholder="Mr. John Wick"  value={guestname} onChange={(e)=>{setguestname(e.target.value)}}/>
                            <p className={`${!error.guestname && "hidden"} mt-2 text-sm text-red-600 dark:text-red-500`}>
                            Enter the name of guest</p>
                        </div>
                        </div>
                        
                    
                      

                        
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}