import React from "react";

interface WeaponsCardProps {
  name: string;
  icon: string;
}

const WeaponsCard: React.FC<WeaponsCardProps> = ({ name, icon }) => {
  return (
    <li>
      <img
        className="mx-1 rounded-full border-2 border-pink-600"
        src={icon}
        alt={name}
        width={64}
      />
      {/* <button onClick={farmCharacterHandler}>+</button> */}
    </li>
  );
};

export default WeaponsCard;
