import React, { useState, useEffect, useCallback } from 'react';

import { api } from './service/api'

interface IData {
  id: number;
  name: string;
  price: number;
}

const App: React.FC = () => {
  const [ data, setData ] = useState<IData[]>([]);
  const [ name, setName ] = useState<string>('')

  useEffect( () => {
    api.get('data').then(
      response => {
        setData(response.data)
      }
    )
  }, [] );

  const convertoToCurrency = useCallback(
    (value: number) => {
      Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL'})
      .format(value)
    }, [])


  return (
    <div>
      <h1>Hello</h1>
      <ul>
        { data.map(fruta => (
          <li key={fruta.id}>
            {fruta.name} | {convertoToCurrency(fruta.price)}
          </li>
      ))}

      
      </ul>
      <hr />
      <h1>{name}</h1>

      <hr />

      <input type="text" onChange={ e => setName(e.target.value)} placeholder="informe seu nome"/>
    </div>
  );
}

export default App;
