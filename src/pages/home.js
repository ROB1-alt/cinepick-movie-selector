import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const api_key = "435c8880fa41fdbe5fba133c47f78d2b";
const BASE_URL = "https://api.themoviedb.org/3";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

function HomePage() {
  const [data, setData] = useState([]);

  const api = axios.create({ baseURL: BASE_URL });

  useEffect(() =>{
    api.get("/movie/upcoming", { params: { api_key, page:1 }  })
    .then((res) => {
      setData(res.data.results);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className ="grid">
          {data.map(({ title, poster_path, id }) => (
            <div className="item2">
                <p>{ title }</p>
                <Link to={ `/movie/${id}` }>
                    <img src={ getImage(poster_path) }/>
                </Link>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default HomePage;