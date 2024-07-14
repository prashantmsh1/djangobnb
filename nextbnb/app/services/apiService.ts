import { resolve } from "path";
import { getAccessToken } from "../libs/libs";
const apiService = {
    get: async function (url: string): Promise<any> {
        console.log("get", url);

        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: "GET",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
            })
                .then((response) => response.json())
                .then((json) => {
                    resolve(json);
                })
                .catch((error) => {
                    console.log("error", error);
                });
        });
    },
    postWithoutToken: async function (url: string, data: any): Promise<any> {
        console.log("post", url, data);

        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(data),
            })
                .then((response) => response.json())
                .then((json) => {
                    resolve(json);
                    console.log("json", json);
                })
                .catch((error) => {
                    console.log("error", error);
                    reject(error);
                });
        });
    },
    post: async function (url: string, data: any): Promise<any> {
        console.log("post", url, data);
        const token = await getAccessToken();
        console.log("token", token);
        return new Promise((resolve, reject) => {
            fetch(`${process.env.NEXT_PUBLIC_API_HOST}${url}`, {
                method: "POST",
                body: data,
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    resolve(json);
                    console.log("json", json);
                })
                .catch((error) => {
                    console.log("error", error);
                    reject(error);
                });
        });
    },
};

export default apiService;
