"use client";
import exp from "constants";
import Modal from "./Modal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useLoginModal } from "@/app/hooks/useLoginModal";
import CustomButton from "@/app/components/forms/CustomButton";
import apiService from "@/app/services/apiService";
import { handlelogin } from "@/app/libs/libs";
const LoginModal = () => {
    const router = useRouter();
    const loginModal = useLoginModal();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState<string[]>([]);
    const submitLogin = async () => {
        const formData = {
            email: email,
            password: password,
        };
        const response = await apiService.postWithoutToken("/api/auth/login/", formData);

        if (response.access) {
            handlelogin(response.user.pk, response.access, response.refresh);
            console.log("login");
            loginModal.close();
            router.push("/");
        } else {
            const tmpErrors: string[] = Object.values(response).map((error: any) =>
                error.join(" ")
            );
            setErrors(tmpErrors);
        }
    };
    const content = (
        <>
            <form className="space-y-4" action={submitLogin}>
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your e-mail address"
                    type="email"
                    className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
                />

                <input
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your password"
                    type="password"
                    className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
                />

                {errors.map((error, index) => {
                    return (
                        <div
                            key={`error_${index}`}
                            className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                            {error}
                        </div>
                    );
                })}

                <CustomButton
                    label="Submit"
                    onClick={() => {
                        submitLogin();
                    }}
                />
            </form>
        </>
    );
    return (
        <Modal
            label="Log in"
            isOpen={loginModal.isOpen}
            close={loginModal.close}
            content={content}
        />
    );
};

export default LoginModal;
