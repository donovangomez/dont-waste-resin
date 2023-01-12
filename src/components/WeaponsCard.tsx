interface WeaponsProps {
  weapons: {
    id: number;
    name: string;
    image: string;
    farmable_days: string[];
  }[];
  today: string;
}

const WeaponsCard: React.FC<WeaponsProps> = ({ weapons, today }) => {
  return (
    <div className="w-5/6 border-2 border-red-400 ">
      <ul className="flex flex-wrap">
        {weapons.map((weapon) => (
          <div key={weapon.id}>
            {weapon.farmable_days.includes(today) ? (
              <>
                <li>{weapon.name}</li>
                <img src={weapon.image} alt={weapon.name} />
              </>
            ) : (
              ""
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

export default WeaponsCard;
