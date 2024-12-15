import React from 'react';
import CarCard from './components/CarCard';
import { carsData } from './data/carsData';




const CarSection: React.FC = () => {
  return (
    <div className=" flex p-8 gap-4">
      {carsData.map((car, index) => (
        <CarCard 
          key={index}
          price={car.price}
          name={car.name}
          year={car.year}
          engine={car.engine}
          mileage={car.mileage}
          city={car.city}
          imagePath={car.imagePath}
        />
      ))}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <CarSection /> 
      <CarSection /> 
    </div>
  );
};


export default App;
