interface WeaponsProps {
    weapons: {
      id: number;
      name: string;
      image: string;
      days: [];
    }[];
  }
  
  const WeaponsCard: React.FC<WeaponsProps> = ({ weapons }) => {
    return (
      <div className="w-5/6 border-2 border-red-400 ">
        <ul className="flex flex-wrap">
          {weapons.map((weapon) => (
            <div key={weapon.id}>
              <li>{weapon.name}</li>
              <img src={weapon.image} alt={weapon.name} />
            </div>
          ))}
        </ul>
      </div>
    );
  };
  
  export default WeaponsCard;