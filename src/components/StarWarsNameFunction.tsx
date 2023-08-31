import React from 'react';
import { uniqueNamesGenerator, starWars } from 'unique-names-generator';
import './starWarsNameFunction.css';

interface IStarWarsNameFunctionState {
  name: string;
  count: number;
}

export function StarWarsNameFunction() {
  const randomName = () =>
    uniqueNamesGenerator({
      dictionaries: [starWars],
      length: 1,
    });

  // const [name, setName] = React.useState(randomName);
  // const [count, setCount] = React.useState(0);

  // const handleClick = () => {
  //   setName(randomName);
  //   setCount((prevCount) => prevCount + 1);
  //   // setCount(count + 1); // WRONG!
  // };

  const [state, setSate] = React.useState<IStarWarsNameFunctionState>({
    name: randomName(),
    count: 0,
  });

  const handleClick = () => {
    // setSate((prevState) => ({
    //   name: randomName(),
    //   count: prevState.count + 1,
    // }));
    setSate((prevState) => ({
      ...prevState,
      name: randomName(),
    }));
    setSate((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    }));
    setSate((prevState) => ({
      ...prevState,
      count: prevState.count + 1,
    })); // Батчинг позволяет сгруппировать несколько вызовов обновления состояний в один этап ререндера
  };

  console.log('>>', state.count);

  return (
    <section>
      <span>{state.name}</span>
      <button onClick={handleClick}>Мне нужно имя!</button>
    </section>
  );
}
