import React from 'react';
import { DisneyCharacter } from '../disney_character';
import Character from './character';
import { useFavourites } from './favourites_context';

interface CharacterContainerProps {
    characters: Array<DisneyCharacter>;
    showFavourites: boolean;
}
const CharacterContainer: React.FC<CharacterContainerProps> = ({ characters, showFavourites }) => {
    const characterFavourites = useFavourites();

    // this function separates our array of DisneyCharacters into rows and columns
    const buildRows = () => {

        // we'll need arrays to store the rows and cols in, and they will be of type JSX.Element
        let rows: Array<JSX.Element> = [], cols: Array<JSX.Element> = [];

        if (showFavourites) {
            characters = characters.filter(character => characterFavourites.includes(character._id))
        }
        characters.forEach((character, index) => {
            cols.push(<Character key={character._id}
                character={character}
            />);
            if ((index + 1) % 5 === 0) {
                rows.push(
                    <div className="character-row" key={index}>
                        {cols}
                    </div>
                )
                cols = []
            }
        });

        // Final remaining columns
        if (cols.length > 0) {
            rows.push(
                <div className="character-row" key={characters.length}>
                    {cols}
                </div>
            )
        }

        return rows;
    }

    return (
        <div className="character-container">
            {buildRows()}
        </div>
    )
}

export default CharacterContainer;