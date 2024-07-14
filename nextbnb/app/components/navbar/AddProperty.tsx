"use client";
import { useAddPropertyModal } from "@/app/hooks/useAddPropertyModal";
import AddPropertyModal from "../modals/AddPropertyModal";
import { useLoginModal } from "@/app/hooks/useLoginModal";
interface AddPropertyButtonProps {
    userId?: string | null;
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({ userId }) => {
    const addPropertyModal = useAddPropertyModal();
    const loginModal = useLoginModal();
    const airbnbYourHome = () => {
        if (userId) {
            addPropertyModal.open();
        } else {
            loginModal.open();
        }

        console.log("airbnbYourHome");
    };
    return (
        <div
            onClick={airbnbYourHome}
            className=" shadow text-center p-2 text-sm cursor-pointer rounded-full hover:bg-gray-300 ">
            List your home
        </div>
    );
};

export default AddPropertyButton;
