import React from "react";

interface CharacterListProps {
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

const CharacterList: React.FC<CharacterListProps> = () => {
  return <div>CharactersList</div>;
};

export default CharacterList;
