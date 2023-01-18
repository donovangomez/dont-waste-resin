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
    <li>
      <img
        className="rounded-full border-2 border-pink-600"
        src={icon}
        alt={name}
        width={150}
      />
      {/* <button onClick={farmCharacterHandler}>+</button> */}
    </li>
  );
};

export default CharacterCard;
