import React, { useState, useContext, ReactNode } from 'react';

interface IThemeProvider {
    children: ReactNode;
}
const FavouritesContext = React.createContext<Array<number>>([]);
const FavouritesUpdateContext = React.createContext<React.Dispatch<React.SetStateAction<number[]>>>(()=>{});

export function useFavourites(){
    return useContext(FavouritesContext);
}

export function useFavouritesUpdate(){
    return useContext(FavouritesUpdateContext);
}

export const FavouritesProvider: React.FC<IThemeProvider> = ({ children }) => {
    const [characterFavourites, setCharacterFavourites] = useState<Array<number>>([]);

    return (
        <FavouritesContext.Provider value={characterFavourites}>
            <FavouritesUpdateContext.Provider value={setCharacterFavourites}>
                {children}
            </FavouritesUpdateContext.Provider>
        </FavouritesContext.Provider>
    );
};