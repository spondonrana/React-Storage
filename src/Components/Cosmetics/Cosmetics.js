import React from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
// import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
   const cosmetics = [
       {id: 1, name: 'Alta', price: 100},
       {id: 2, name: 'Palis', price: 200},
       {id: 3, name: 'Malis', price: 300},
       {id: 4, name: 'Balis', price: 400},
       {id: 5, name: 'Salis', price: 500}
   ]
    return (
        <div>
            <h2>Welcome to my cosmetic store</h2>
            {
                cosmetics.map(cosmetic => <Cosmetic
                key={cosmetic.id}
                cosmetic ={cosmetic}
                ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmetics;