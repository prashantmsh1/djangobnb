import Image from 'next/image';
const Categories = () => {
    return (

        <div className=" pt-4 mx-auto  flex flex-row  cursor-pointer pb-6 items-center space-x-12">
            <div className=" w-fit pb-4  flex flex-col  space-y-2 border-b-2 border-white items-center justify-center  opacity-60 hover:opacity-100 hover:border-gray-300">
                <Image src="/icn_category_beach.jpeg" alt="Category-beach" width={30} height={30} />
                <span className=' text-xs'>Beach</span></div>
            <div className=" w-fit pb-4  flex flex-col  space-y-2 border-b-2 border-white items-center justify-center  opacity-60 hover:opacity-100 hover:border-gray-300">
                <Image src="/icn_category_beach.jpeg" alt="Category-beach" width={30} height={30} />
                <span className=' text-xs'>Cabin</span></div>
            <div className=" w-fit pb-4  flex flex-col  space-y-2 border-b-2 border-white items-center justify-center  opacity-60 hover:opacity-100 hover:border-gray-300">
                <Image src="/icn_category_beach.jpeg" alt="Category-beach" width={30} height={30} />
                <span className=' text-xs'>Villas</span></div>
            <div className=" w-fit pb-4  flex flex-col  space-y-2 border-b-2 border-white items-center justify-center  opacity-60 hover:opacity-100 hover:border-gray-300">
                <Image src="/icn_category_beach.jpeg" alt="Category-beach" width={30} height={30} />
                <span className=' text-xs'>Tiny House</span></div>
        </div>

    );
}

export default Categories;