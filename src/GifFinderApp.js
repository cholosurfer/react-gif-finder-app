import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifFinderApp = () => {

    const [ categories, setCategories ] = useState( [ 'Friends' ] );

    // const handleAdd = () => {

    //     //setCategories( [...categories, 'Modern Family'] ); // Spread operator
    //     setCategories( cats => [...categories, 'Modern Family'] ); // With callback

    // };

    return(
        <>
            <h2>Gif Finder</h2>
            <p>Type whatever gif you want to find and press Enter</p>
            <AddCategory setCategories={ setCategories } />

            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category } 
                        />
                    ))
                }
            </ol>
        </>
    );

};

export default GifFinderApp;