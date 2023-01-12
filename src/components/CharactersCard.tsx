interface CharactersProps {
  characters: {
    id: number;
    name: string;
    icon: string;
    splash: string;
    days: [];
  }[];
}

const CharactersCard: React.FC<CharactersProps> = ({ characters }) => {
  console.log(characters);
  return (
    <div className="w-5/6 border-2 border-red-400 ">
      <ul className="flex flex-wrap">
        {characters.map((character) => (
          <div key={character.id}>
            <li>{character.name}</li>
            <img src={character.icon} alt={character.name} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CharactersCard;
