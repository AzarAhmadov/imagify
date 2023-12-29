import React, { useState } from 'react'
import searchImages from '../api/Api';
import ImageList from './ImageList';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SyncLoader } from 'react-spinners';
import Logo from '../assets/images/3d.webp'
import getRandomWord from '../components/Random';

const Input: React.FC = () => {

    const [searchTerm, setSearchTerm] = useState<string>('');
    const [image, setImage] = useState([]);
    const [loading, setLoading] = useState(false);

    const randomGenerate = () => {
        setSearchTerm(getRandomWord);
    };

    const onSearchSubmit = async () => {
        if (!searchTerm) {
            toast.error('Please enter a search term');
            return;
        }

        setLoading(true);

        try {
            const result = await searchImages(searchTerm);

            if (result.length === 0) {
                toast.info('No results found');
                return;
            }

            setImage(result);
        } catch (error) {
            console.error('Error fetching data:', error);
            toast.error('An error occurred while fetching data');
        } finally {
            setLoading(false);
        }
    };

    const handleRefresh = () => {
        window.location.href = `?refreshed=true`;
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onSearchSubmit();
        }
    };

    return (
        <>
            <main>
                <section id='header'>
                    <img src={Logo} alt="Logo" />
                    <h3>
                        Imagify
                    </h3>
                </section>

                <section id='content'>
                    <input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        type="text"
                        onKeyDown={handleKeyPress}
                        placeholder='Search...' />
                    <ul>
                        <li>
                            <button onClick={handleRefresh}> <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path d="M105.1 202.6c7.7-21.8 20.2-42.3 37.8-59.8c62.5-62.5 163.8-62.5 226.3 0L386.3 160H352c-17.7 0-32 14.3-32 32s14.3 32 32 32H463.5c0 0 0 0 0 0h.4c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32s-32 14.3-32 32v35.2L414.4 97.6c-87.5-87.5-229.3-87.5-316.8 0C73.2 122 55.6 150.7 44.8 181.4c-5.9 16.7 2.9 34.9 19.5 40.8s34.9-2.9 40.8-19.5zM39 289.3c-5 1.5-9.8 4.2-13.7 8.2c-4 4-6.7 8.8-8.1 14c-.3 1.2-.6 2.5-.8 3.8c-.3 1.7-.4 3.4-.4 5.1V432c0 17.7 14.3 32 32 32s32-14.3 32-32V396.9l17.6 17.5 0 0c87.5 87.4 229.3 87.4 316.7 0c24.4-24.4 42.1-53.1 52.9-83.7c5.9-16.7-2.9-34.9-19.5-40.8s-34.9 2.9-40.8 19.5c-7.7 21.8-20.2 42.3-37.8 59.8c-62.5 62.5-163.8 62.5-226.3 0l-.1-.1L125.6 352H160c17.7 0 32-14.3 32-32s-14.3-32-32-32H48.4c-1.6 0-3.2 .1-4.8 .3s-3.1 .5-4.6 1z" /></svg> </button>
                        </li>
                        <li>
                            <button onClick={randomGenerate}> Random </button>
                        </li>
                        <li>
                            <button onClick={onSearchSubmit}> Search </button>
                        </li>
                    </ul>
                </section>
            </main>

            <ImageList image={image} />

            {loading && (
                <div className="loader">
                    <SyncLoader color={'#fff'} size={12} />
                </div>
            )}

            <ToastContainer />
        </>
    )
}

export default Input