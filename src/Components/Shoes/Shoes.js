import React from 'react';
import { add, multiply } from '../../Utilities/Calculate';

const Shoes = () => {
    const first= 50;
    const second = 33;
    const result = multiply(first, second);
    const sum = add(first,second);
    return (
        <div>
            <h3>This is shoes combo</h3>
            <p>Result: {result} and Total: {sum}</p>
        </div>
    );
};

export default Shoes;