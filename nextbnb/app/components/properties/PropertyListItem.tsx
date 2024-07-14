import Image from "next/image";
import { PropertyType } from "./PropertyList";

interface PropertyListItemProps {
    property: PropertyType;
}
const PropertyListItem: React.FC<PropertyListItemProps> = ({ property }) => {
    return (
        <div className=" cursor-pointer">
            <div className=" relative overflow-hidden aspect-square rounded-xl">
                <Image
                    fill
                    src={property.image_url}
                    className="object-cover hover:scale-110 duration-500 transition-all "
                    sizes="(max-width:768px) 768px, (max-width:1200px): 768px  "
                    alt="Beach House"
                    priority
                />
            </div>
            <div className=" mt-2">
                <p className=" text-lg font-semibold">{property.title}</p>
            </div>

            <div className=" mt-2 ">
                <p className=" text-sm text-gray-500">${property.price_per_night}</p>
            </div>
        </div>
    );
};

export default PropertyListItem;
