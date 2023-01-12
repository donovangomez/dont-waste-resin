import React from "react";

interface TodayCardProps {
  today: string;
}

const TodayCard: React.FC<TodayCardProps> = ({ today }) => {
  return (
    <div className="grid w-5/6 place-items-center border-2 p-4">
      <h2 className="text-4xl">Hi Adventurer!</h2>
      <h1 className="text-6xl">It's {today}</h1>
    </div>
  );
};

export default TodayCard;
