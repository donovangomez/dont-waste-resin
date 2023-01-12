import CharacterCard from "./CharacterCard";

interface CharactersProps {
  characters: {
    id: number;
    name: string;
    icon: string;
    splash: string;
    farmable_days: string[];
  }[];
  today: string;
}

const CharactersContainer: React.FC<CharactersProps> = ({
  characters,
  today,
}) => {
  console.log(characters);
  return (
    <div className="w-5/6 border-2 border-red-400 ">
      <ul className="flex flex-wrap gap-2">
        {characters.map((character) => (
          <div key={character.id}>
            {character.farmable_days.includes(today) ? (
              <CharacterCard name={character.name} icon={character.icon} />
            ) : (
              ""
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default CharactersContainer;
