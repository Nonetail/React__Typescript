import { useState } from 'react';

const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  //NOTE: if we don't use type annotation to provide array type, it would infer the type to be never[] which means forever empty
  // const [guests, setGuests] = useState([]);
  const [guests, setGuests] = useState<string[]>([]);

  const onClick = () => {
    setName('');
    setGuests([...guests, name]);
  };

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
