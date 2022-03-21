import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
// import Cosmetic from '../Cosmetic/Cosmetic';

const Cosmetics = () => {
   const [cosmetics, setCosmetics] = useState([]);
   useEffect(() => {
       fetch('data.json')
       .then(res => res.json())
       .then(data => setCosmetics(data))
   }, [cosmetics])
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