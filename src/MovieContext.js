import React, {useState, createContext} from 'react';

export  const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
          name: "Inception",
          price: "$11",
          id: 12
        },
        {
          name: "Life of Pi",
          price: "$8",
          id: 123
        },
        {
          name: "donald duck",
          price: "$10",
          id: 122
        }
      ]);

    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}