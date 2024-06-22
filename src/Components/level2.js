
import React, { useEffect, useState } from "react";
import { UserForm2 } from "./form2";
import { PreviewForm2 } from "./previewForm2";
const Level2 = () => {
  const [showForm,setshowForm]=useState(true)
  const [data,setdata]=useState()

  useEffect(()=>{
    if(data){ setshowForm(false)
    }
      else setshowForm(true)

  },[data])

  const clearData=()=>{setdata();
    setshowForm(true)
  }

  return (
    <div
      className={`pt-20 px-2 min-h-screen h-full transition-all duration-500 ease-in-out bg-slate-100 dark:bg-[#232323]`}
    >
      {showForm && <UserForm2 setdata={setdata}/>}
      {!showForm && 
      <div className="bg-slate-100 dark:bg-[#232323] pb-8 mt-6" >
    <PreviewForm2 data={data}/>
 
   </div>
      }
    
    </div>
  );
};

export default Level2;
