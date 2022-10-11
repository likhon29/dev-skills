import React from 'react';
import './Option.css'
const Option = ({option}) => {
    return (
        <div ClassName="option">
            <p><small><input type="radio"/> { option}</small></p>
            
        </div>
        
    );
};

export default Option;