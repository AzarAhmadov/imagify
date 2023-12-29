import { RandomWords } from '../constants/index';

const getRandomWord = (): string => {
    const randomIndex = Math.floor(Math.random() * RandomWords.length);
    return RandomWords[randomIndex];
};

export default getRandomWord;
