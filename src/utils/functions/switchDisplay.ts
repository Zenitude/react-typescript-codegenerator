import React from 'react';

export const switchDisplay = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>, 
    toggle: Array<{class: string, toggle: boolean}>, 
    setToggle: React.Dispatch<React.SetStateAction<Array<{class: string, toggle: boolean}>>>
): void => {
    e.preventDefault();

    const parent = e.currentTarget.parentElement;

    toggle.forEach(element => {
        if(parent?.classList.contains(element.class)) {
            const index = toggle.indexOf(element);
            toggle[index] = { class: element.class, toggle: !element.toggle}
            setToggle([...toggle]);
        } 
    });
    
    e.currentTarget.children[0].classList.toggle('activeChevron');
}