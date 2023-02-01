import { DisneyCharacter } from "../disney_character"

interface CharacterProps{
  character: DisneyCharacter;
  characterFavourites: Array<number>;
  updateFavourites: (favourites: Array<number>) => void;
}

const Character: React.FC<CharacterProps> = ({ character, characterFavourites, updateFavourites }) => {

  let imageSrc = "https://picsum.photos/300/200?blur";
  if (character.imageUrl){
    imageSrc = character.imageUrl.indexOf('/revision') > 0 ? character.imageUrl.substring(0, character.imageUrl.indexOf('/revision')) : character.imageUrl;
  }

  function toggleFavouriteForCharacter(characterId: number){
    if(!characterFavourites.includes(characterId)){
      updateFavourites([...characterFavourites, characterId]);
    }
    else {
      const updatedFavourites = characterFavourites.filter((id) => id !== characterId);
      updateFavourites(updatedFavourites)
    }
  }

  return (<article className="character-item">

    <h2>{character.name}</h2>

    <div className="character-item__actions" onClick={() => toggleFavouriteForCharacter(character._id)}>
      {!characterFavourites.includes(character._id) ? "Add to Favourites" : "Favourited"}
    </div>

    <img className="character-item__img" src={imageSrc} alt={character.name} />

  </article>
  );
};


export default Character