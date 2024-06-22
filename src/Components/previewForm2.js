export const PreviewForm2=({data})=>{
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
            <label className="block text-gray-700 dark:text-gray-300 font-bold">Position:</label>
            <p className="ml-1 text-gray-900 dark:text-gray-100">{data?.position}</p>
        </div>
        <div className="flex justify-between mb-2">
            <div className="flex flex-wrap ">
                <label className="block text-gray-700 dark:text-gray-300 font-bold">Experience:</label>
                <p className="ml-1 text-gray-900 dark:text-gray-100">{data?.exp}</p>
            </div>
            <div className={`${(data.position!="Designer" || !data.purl) && "hidden"} flex justify-between mb-2`}>
                <label className="block text-gray-700 dark:text-gray-300 font-bold">Portfolio:</label>
                <p className="ml-1 text-gray-900 dark:text-gray-100">{data?.purl}</p>
            </div>
        </div>
        <div className="mb-2 mt-4">
            <label className="block text-gray-700 dark:text-gray-300 font-bold">Preferred interview time:</label>
            <p className="text-gray-800 dark:text-gray-200">{data?.date}, {data?.time}</p>
        </div>
    </div>)
}