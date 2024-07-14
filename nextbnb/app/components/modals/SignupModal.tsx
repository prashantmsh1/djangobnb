"use client";
import exp from "constants";
import Modal from "./Modal";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSignupModal } from "@/app/hooks/useSignupModals";
import CustomButton from "@/app/components/forms/CustomButton";
import apiService from "@/app/services/apiService";
import { handlelogin } from "@/app/libs/libs";

const SignupModal = () => {
    const router = useRouter();
    const singupModal = useSignupModal();
    const [email, setEmail] = useState("");
    const [password2, setPassword2] = useState("");
    const [password1, setPassword1] = useState("");
    const [errors, setErrors] = useState<string[]>([]);
    const submitSignup = async (e: any) => {
        e.preventDefault();
        console.log("submit");
        const formData = {
            email: email,
            password1: password1,
            password2: password2,
        };
        const response = await apiService.postWithoutToken("/api/auth/register/", formData);
        if (response.access) {
            handlelogin(response.user.pk, response.access, response.refresh);
            singupModal.close();
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
            <form action={submitSignup} className="space-y-4">
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your e-mail address"
                    type="email"
                    className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
                />

                <input
                    onChange={(e) => setPassword1(e.target.value)}
                    placeholder="Your password"
                    type="password"
                    className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
                />

                <input
                    onChange={(e) => setPassword2(e.target.value)}
                    placeholder="Repeat password"
                    type="password"
                    className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"
                />

                {errors.map((error, index) => {
                    return (
                        <div
                            key={index}
                            className="p-1 bg-airbnb text-red-400 rounded-xl opacity-80">
                            {error}
                        </div>
                    );
                })}

                <CustomButton label="Submit" onClick={submitSignup} />
            </form>
        </>
    );
    return (
        <Modal
            label="Sign up"
            isOpen={singupModal.isOpen}
            close={singupModal.close}
            content={content}
        />
    );
};

export default SignupModal;
