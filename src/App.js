import { useEffect, useState } from 'react';
import './App.css';
import Main from './Components/Main/Main';

function App() {

  const [data,setData] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");

  useEffect(()=>{
    // setLoading(true);
    const foodData = async ()=>{
      try {
        const response = await fetch("http://localhost:9000/");
        const json =  await response.json();
        setData(json);
        setLoading(false);       
      } catch (error) {
        setError("Unable to fetch Data");
      }
      
    };
    foodData();
  },[])
  
  // console.log(data);
  if(error) return <h2>{error}</h2>
  if(loading) return <h2>Loading....</h2>

  return (
    <main>
      <header>
        <div className="logo">
          <h1 className="h1">F<span className="danger">oo</span>dy Z<span className="danger">o</span>ne</h1>
        </div>
        <div className="search">
          <input className="searchBar" type="text" placeholder="Search Food..." />
        </div>
      </header>
      <nav>
        <button className="button">All</button>
        <button className="button">Breakfast</button>
        <button className="button">Lunch</button>
        <button className="button">Dinner</button>
      </nav>
      <Main data={data}/>
    </main>
  );
}

export default App;
