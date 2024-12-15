import React from "react";

interface CarCardProps {
    imagePath: string;
    price: string;
    name: string;
    year: number;
    engine: string;
    mileage: string;
    city: string;
}


const CarCard: React.FC <CarCardProps> = ({ imagePath, price, name, year, engine, mileage, city }) => {


    return (
        <div className="border rounded-lg shadow-md p-4 w-72">
            <img src={imagePath} alt={name} className="w-full h-40 object-cover rounded-md" />
            <h3 className="text-xl font-bold mt-2">{price}</h3>
            <p className="text-gray-700">{name} - {year}</p>
            <p className="text-sm text-gray-500">{engine}, {mileage}</p>
            <p className="text-gray-500 mt-1">{city}</p>
        </div>
    );
}   

export default CarCard