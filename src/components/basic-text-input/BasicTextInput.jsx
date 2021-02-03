import React from 'react';
import './input.css';

export default function Input ({placeholder, value, onChange}){
    return (
        <div className="basic-input">
            <input
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}