"use server";
import { cookies } from "next/headers";

export async function handlelogin(userId: string, accessToken: string, refreshToken: string) {
    cookies().set("session_user_id", userId, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: "/",
    });
    cookies().set("access_token", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60, // 60 minutes
        path: "/",
    });
    cookies().set("refresh_token", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: "/",
    });
}

export async function resetAuthCookies() {
    cookies().set("session_user_id", "");
    cookies().set("access_token", "");
    cookies().set("refresh_token", "");
}

export async function getUserId() {
    const userId = cookies().get("session_user_id")?.value;
    return userId ? userId : null;
}

export async function getAccessToken() {
    const accessToken = cookies().get("access_token")?.value;
    return accessToken ? accessToken : null;
}
