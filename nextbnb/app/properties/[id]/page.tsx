import ReservationSidebar from "@/app/components/properties/ReservationSidebar";
import Image from "next/image";

const PropertyDetailPage = () => {
    return (
        <main className=" w-4/5 max-w-[1500px]  mx-auto  ">
            <div className=" m-4 relative  h-[64vh] overflow-hidden rounded-xl ">
                <Image fill src="/beach_1.jpg" className="object-cover w-full h-full" alt="Beach House" />
            </div>
            <div className=" mt-4 grid grid-cols-1 md:grid-cols-5 gap-4">
                <div className=" col-span-3 py-6 pr-6">
                    <h1 className=" mb-4 text-4xl  font-bold"> Property Name</h1>
                    <span className=" mb-6 font-bold block text-lg text-gray-600 "> 4 guests - 2 bedrooms-2 bathroom</span>
                    <hr />
                    <div className=" py-6 flex items-center space-x-4">
                        <Image src="/profile_pic_1.jpg" alt="star" width={50} height={50} className=" rounded-full" />
                        <p><strong>Jhone Doe is your host</strong></p>
                    </div>
                    <hr />
                    <p className=" mt-6 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, dolorum soluta eligendi sapiente in mollitia ullam dicta officiis hic ipsum itaque quasi suscipit repudiandae vero voluptas non inventore ad? Ullam, hic? Perferendis sapiente quis nobis quidem minima accusamus odit sunt veritatis, eaque sequi, repudiandae vel. Error harum accusamus maiores nulla?</p>
                </div>

                <ReservationSidebar />

            </div>
        </main>

    );
};

export default PropertyDetailPage;