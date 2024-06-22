
import React, { useEffect, useState } from "react";
import { UserForm } from "./form";
import { PreviewForm } from "./previewForm";
import { Survey } from "./survey";
const Level3 = () => {
  const [showForm,setshowForm]=useState(true)
  const [data,setdata]=useState()

  useEffect(()=>{console.log(data);
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
      {showForm && <UserForm setdata={setdata}/>}
      {!showForm && 
      <div className="bg-slate-100 dark:bg-[#232323] pb-8 mt-6" >
   <PreviewForm data={data}/>
   <Survey clear={clearData} category={data?.Topic}/>
   </div>
      }
    
    </div>
  );
};

export default Level3;
