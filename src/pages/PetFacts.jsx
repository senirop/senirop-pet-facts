import React, {useEffect, useState} from 'react';

import Data from '../mocks/With-results.json'




const PetFacts = () => {



    const hasData = Data?.Data.length > 0

    const [movies,setMovies] =useState([]);

    const generateCard = () =>{


       // console.log({valor: Data.Data[0]})
        setMovies((prev)=>[...prev, Data.Data[movies.length ]]);

    }

    useEffect(() => {
        if (movies.length > 0)
            console.log({movies});
    },[movies])


    return (
        <div>
            <h1>Pet Facts</h1>
            <button onClick={generateCard}>Generate</button>
            {movies.length > 0  && (<ul> {
                    movies.map(elem => (
                            <li key={elem.imdbID}>
                                <h1>{elem.Title}</h1>
                                <img src={elem.Poster} />
                            </li>
                        )
                    )
                }</ul>)
            }

        </div>
    );
};

export default PetFacts;
