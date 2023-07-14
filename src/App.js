// import { useEffect, useState } from 'react';
// import './App.css';
import Brochure from './components/style1/Brochure/Brochure';
// import { getTokenObject } from './helper/authorization';
// import Catalog from './components/Catalog';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import ExmOne from './components/style3';
import Sample from './components/style4';

function App() {
  // const token = getTokenObject()
  // const [data, setData] = useState([]);


  // useEffect(() => {

  //   fetch('http://185.97.116.249/invitation-card/show/16840037471', {
  //     headers: { Authentication: 'Bearer ' + token?.Authorization }
  //   })
  //     .then(resp => resp.json())
  //     .then(json => console.log(JSON.stringify(json)))

  // }, []);



  return (
    // <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden xl:max-w-2xl">
    //   <div className="xl:flex">
    //     <div className="xl:shrink-0">
    //       <img className="h-48 w-full object-cover xl:h-full xl:w-48" src="./img/LG-first.jpeg" alt="Modern building architecture" />
    //     </div>
    //     <div className="p-8">
    //       <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
    //       <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
    //       <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
    //     </div>
    //   </div>
    // </div>
    <div className="max-w-xl mx-auto overflow-hidden xl:max-w-2xl">
      <div>
        {/* <Catalog /> */}
        {/* <Brochure /> */}
        {/* <ExmOne /> */}
        <Sample />

      </div>
    </div>

  );
}

export default App;
