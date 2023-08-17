import { useEffect, useState } from 'react';
import './App.css';
import Main from './Components/Main/Main';

function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [filterData, setFilterData] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    // setLoading(true);
    const foodData = async () => {
      try {
        const response = await fetch("http://localhost:9000/");
        const json = await response.json();
        setData(json);
        setFilterData(json)
        setLoading(false);
      } catch (error) {
        setError("Unable to fetch Data");
      }

    };
    foodData();
  }, [])

  const search = (e) => {
    const searchValue = e.target.value;

    console.log(searchValue);

    if (searchValue === "") {
      setFilterData(null);
    }

    const filterSearch = data.filter((food) => (food.name.toLowerCase().includes(searchValue.toLowerCase())));

    setFilterData(filterSearch);
  }

  const filterBtn = (type) => {

    if(type==="all"){
      setFilterData(data);
      setSelectedBtn("all");
      return;
    }

    const filterBtn = data.filter((food) => (food.type.toLowerCase().includes(type.toLowerCase())));
    setFilterData(filterBtn);
    setSelectedBtn(type);

  }

  if (error) return <h2>{error}</h2>
  if (loading) return <h2>Loading....</h2>

  return (
    <main>
      <header>
        <div className="logo">
          <h1 className="h1">F<span className="danger">oo</span>dy Z<span className="danger">o</span>ne</h1>
        </div>
        <div className="search">
          <input onChange={search} className="searchBar" type="text" placeholder="Search Food..." />
        </div>
      </header>
      <nav>
        <button className="button" onClick={()=>filterBtn("all")}>All</button>
        <button className="button" onClick={()=>filterBtn("breakfast")}>Breakfast</button>
        <button className="button" onClick={()=>filterBtn("lunch")}>Lunch</button>
        <button className="button" onClick={()=>filterBtn("dinner")}>Dinner</button>
      </nav>
      <Main data={filterData} />
    </main>
  );
}

export default App;
