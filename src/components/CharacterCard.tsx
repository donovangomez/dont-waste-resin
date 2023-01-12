import React from "react";

interface CharacterCardProps {
  name: string;
  icon: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ name, icon }) => {
  return (
    <li className="rounded-md border-2 border-pink-600">
      <div>{name}</div>
      <img src={icon} alt={name} />
    </li>
  );
};

export default CharacterCard;
