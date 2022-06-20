import React, { ChangeEvent, FC, useState } from 'react';

export enum Hair {
    Black = "COOL,BOOL",
    Blond = 'Nice'
}

interface Props {
    name:string;
    email:string;
    age:number;
    hair:Hair
}

export const Person:FC<Props> = ({name, email, age, hair}) => {

    const [someChange, setSomeChange] = useState('');
    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        setSomeChange(e.target.value)
    }

    return (
    <div>
      <h1>{name}</h1>
      <h1>{email}</h1>
      <h1>{age}</h1>
      <input type="text" name="" id="" onChange={handleChange}/>
      {someChange}
      <h3>{hair}</h3>
    </div>
  );
}

// interface AppContextInterface{
//   name:string,
//   age:number,
//   salary:string
// }

// const AppContext = createContext<AppContextInterface | null>(null);

// const contextValue : AppContextInterface = {
//   name:'Muli',
//   age:25,
//   salary:'seven figures'
// }