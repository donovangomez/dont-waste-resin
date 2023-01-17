import React from "react";

interface CharacterCardProps {
  name: string;
  icon: string;
  farmingCharacters: {
    id: number;
    name: string;
    icon: string;
    splash: string;
    farmable_days: string[];
  }[];
  setFarmingCharacters: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        name: string;
        icon: string;
        splash: string;
        farmable_days: string[];
      }[]
    >
  >;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  name,
  icon,
  setFarmingCharacters,
  farmingCharacters,
}) => {
  const farmCharacterHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log(e);
  };

  return (
    <li className="rounded-md border-2 border-pink-600">
      <div>{name}</div>
      <img src={icon} alt={name} />
      <button onClick={farmCharacterHandler}>+</button>
    </li>
  );
};

export default CharacterCard;
