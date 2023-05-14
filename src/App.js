import { useEffect, useState } from 'react';
import './App.css';
import { getTokenObject } from './helper/authorization';

function App() {
  const token = getTokenObject()
  const [data, setData] = useState([]);
  const [query, setQuery] = useState();

  useEffect(() => {
    // fetch(`http://185.97.116.249/invitation-card/show/16840037471`)
    //   .then(res => res.json())
    //   .then(result => {
    //     // setData(result);
    //     console.log(result);
    //   })
    fetch('http://185.97.116.249/invitation-card/show/16840037471', {
      headers: { Authentication: 'Bearer ' + token?.Authorization }
    })
      .then(resp => resp.json())
      .then(json => console.log(JSON.stringify(json)))

  }, []);

  const onHandlerChange = (event) => {
    const value = event?.target?.value;
    setQuery(value)
  }

  return (
    <div className="flex flex-col justify-center items-center h-full max-h-full">
      <div className='flex justify-center my-8 w-full'>
        <input
          name='myRecipe'
          type="text"
          className='border-2	rounded-md p-3 w-10/12  focus:outline-none focus:ring focus:ring-violet-300 focus:border-none focus:duration-100 duration-700'
          onChange={onHandlerChange}
          placeholder="write your recipe"
        />
      </div>
      <div>
        <ul>
          {data.length > 0 ? data?.map((item, index) =>
            <li key={index} className="m-8">
              <p>{item.title}</p>
              <p>{item.ingredients}</p>
              <p>{item.instructions}</p>
            </li>
          ) : <li><p className='text-orange-600 text-center	'>There is no recipe</p></li>}
        </ul>
      </div>
    </div>
  );
}

export default App;
