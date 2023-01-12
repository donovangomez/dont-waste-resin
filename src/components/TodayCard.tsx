import React from "react";

interface TodayCardProps {
  today: string;
}

const TodayCard: React.FC<TodayCardProps> = ({ today }) => {
  return (
    <div>
      <h2>Hi Adventurer!</h2>
      <h1>It's {today}</h1>
    </div>
  );
};

export default TodayCard;
