"use client";
interface MenuLinkProps {
    label: string;
    onclick?: () => void;
}
const MenuLink: React.FC<MenuLinkProps> = ({ label, onclick }) => {
    return (
        <div
            onClick={onclick}
            className="px-5 py-4 cursor-pointer hover:bg-gray-100 transition font-medium">
            {label}
        </div>
    );
};

export default MenuLink;
