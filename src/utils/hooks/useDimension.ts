import { useState } from 'react';

export const useDimension = () => {
    const [ dimension, setDimension ] = useState(window.innerWidth);
    
    window.addEventListener('resize', () => {
        setDimension(window.innerWidth);
    });

    return dimension;
}