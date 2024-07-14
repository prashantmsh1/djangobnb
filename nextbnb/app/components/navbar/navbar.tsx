import Image from "next/image";
import Link from "next/link";
import SearchFilters from "./SearchFilters";
import UserNav from "./UserNav";
import AddPropertyButton from "./AddProperty";
import { getUserId } from "@/app/libs/libs";
// import UserNav from './user-nav';
// import AddPropertyButton from './add-property-button';
const Navbar = async () => {
    const userId = await getUserId();

    console.log("userId:", userId);

    return (
        <nav className="w-full  top-0 left-0 py-6 border-b bg-white z-10">
            <div className="max-w-[1500px] mx-auto px-6">
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <Image
                            src="/logo.png"
                            alt="DjangoBnb logo"
                            width={180}
                            height={38}
                            className="md:w-44 md:h-14 h-10 w-32 cursor-pointer"
                        />
                    </Link>

                    <div className="md:flex space-x-6 hidden ">
                        <SearchFilters />
                    </div>

                    <div className="flex items-center space-x-6">
                        <AddPropertyButton userId={userId} />
                        <UserNav userId={userId} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
