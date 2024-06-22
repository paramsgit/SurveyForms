export const PreviewForm3=({data})=>{
    // if(!data) return

    return (   <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 overflow-hidden">
        <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Form Preview</h2>
        <div className="flex flex-wrap justify-between w-full">
        <div className="flex flex-wrap mb-2">
            <label className="block text-gray-700 dark:text-gray-300 font-bold">Name:</label>
            <p className="ml-1 text-gray-900 dark:text-gray-100">{data?.name}</p>
        </div>
        <div className="flex flex-wrap mb-2">
            <label className="block text-gray-700 dark:text-gray-300 font-bold">Email:</label>
            <p className="ml-1 text-gray-900 dark:text-gray-100">{data?.email}</p>
        </div>
        </div>
        <div className="flex flex-wrap mt-3 mb-2">
            <label className="block text-gray-700 dark:text-gray-300 font-bold">Age:</label>
            <p className="ml-1 text-gray-900 dark:text-gray-100">{data?.age}</p>
        </div>
        <div className="flex justify-between mb-2">
            <div className="flex flex-wrap ">
                <label className="block text-gray-700 dark:text-gray-300 font-bold">Any guest:</label>
                <p className="ml-1 text-gray-900 dark:text-gray-100">{data?.isguest}</p>
            </div>
            <div className={`${!(data.isguest=="True") && "hidden"} flex justify-between mb-2`}>
                <label className="block text-gray-700 dark:text-gray-300 font-bold">Guest Name:</label>
                <p className="ml-1 text-gray-900 dark:text-gray-100">{data?.guestname}</p>
            </div>
        </div>
        
    </div>)
}