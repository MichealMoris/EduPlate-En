// src/CustomArrows.js
import React from 'react';

export const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div onClick={onClick}>
            <i class="bi bi-arrow-right"></i>
        </div>
    );
};

export const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <div onClick={onClick}>
            <i class="bi bi-arrow-left"></i>
        </div>
    );
};
