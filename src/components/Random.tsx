import React from 'react';
import { RandomWords } from '../constants/index';

const Random: React.FC = () => {
    const randomIndex = Math.floor(Math.random() * RandomWords.length);
    return <>{RandomWords[randomIndex]}</>;
};

export default Random;
