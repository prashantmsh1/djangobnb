"use client";
import { json } from "stream/consumers";
import PropertyListItem from "./PropertyListItem";
import { useEffect, useState } from "react";
import apiService from "@/app/services/apiService";
export type PropertyType = {
    id: string;
    title: string;
    price_per_night: number;
    image_url: string;
};
const PropertyList = () => {
    const [properties, setProperties] = useState<PropertyType[]>([]);
    const getProperties = async () => {
        const url = "/api/properties";
        apiService.get(url).then((res) => {
            setProperties(res.data);
        });
    };
    useEffect(() => {
        apiService.get("/api/properties");
        getProperties();
    }, []);
    return (
        <>
            {properties.map((property, index) => (
                <PropertyListItem key={index} property={property} />
            ))}
        </>
    );
};
export default PropertyList;
