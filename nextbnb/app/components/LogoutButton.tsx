"use client";

import { useRouter } from "next/navigation";

import { resetAuthCookies } from "@/app/libs/libs";
import MenuLink from "./navbar/MenuLink";

const LogoutButton: React.FC = () => {
    const router = useRouter();
    const submitLogout = async () => {
        console.log("logout");
        resetAuthCookies();
        router.push("/");
    };
    return <MenuLink label="Logout" onclick={submitLogout} />;
};

export default LogoutButton;
