import WeaponsCard from "./WeaponsCard";

interface WeaponsProps {
  weapons: {
    id: number;
    name: string;
    image: string;
    farmable_days: string[];
  }[];
  today: string;
}

const WeaponsContainer: React.FC<WeaponsProps> = ({ weapons, today }) => {
  return (
    <div className="w-5/6 border-2 border-red-400 ">
      <h1 className="my-8 text-center text-3xl">Weapons to farm today:</h1>
      <ul className="flex flex-wrap items-center justify-center">
        {weapons.map((weapon) => (
          <div key={weapon.id}>
            {weapon.farmable_days.includes(today) ? (
              <WeaponsCard name={weapon.name} icon={weapon.image} />
            ) : (
              ""
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default WeaponsContainer;
