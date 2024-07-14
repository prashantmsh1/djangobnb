

const ReservationSidebar = () => {
    return (

        <aside className=" mt-6 p-6 col-span-2 rounded-xl border border-gray-300 shadow-xl">
            <h1 className=" mb-5 text-2xl " > $200 per night</h1>

            <div className=" mb-6 p-3 border border-gray-400 rounded-xl">
                <label htmlFor=""> Guests</label>
                <select name="" id="" className=" w-full  font-bold">
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">4</option>
                </select>
            </div>

            <div className=" text-center text-white rounded-md font-bold text-xl bg-red-500 w-full mb-6 p-6">
                Book
            </div>
            <div className=" font-medium text-lg flex justify-between items-center">
                <p>2*400</p>
                <p>800</p>
            </div>
           
            <div className=" font-medium text-lg flex justify-between items-center">
                <p>DjangoBnb Fee</p>
                <p>40</p>
            </div>
             <hr />
            <div className=" font-medium text-lg flex justify-between items-center">
                <p>Total </p>
                <p>840</p>
            </div>
            
        </aside>

    )
}
export default ReservationSidebar;