import React, { useEffect, useState } from 'react'
import Search from './Search';

function Home() {
  const [shows, setShows] = useState("");
  // const url = "http://api.tvmaze.com/search/shows?q=golden%20girls";

  // app.innerHTML = shows.map(show =>
  //   app.innerHTML = shows.map(({ show }) => { show.image ? `<img src="${show.image.medium}">` : '' }
  // show the shows with highest ranking
  useEffect(() => {
    const url = "https://api.tvmaze.com/shows";

    fetch(url)
      .then((blob) => blob.json())
      .then((json) => {
        const topTenShows = json
          .filter((show) => show.rating.average)
          .sort((a, b) => (a.rating.average > b.rating.average ? -1 : 1))
          .slice(0, 9); // tar element 0-9 i arrayen

        return topTenShows;
      })
      .then((shows) => {
        console.log(shows);
        setShows(shows)
       
      })
      .catch((error) => {
        console.log("Oops! Server is down", error)
      });
  },[]);

  // show the search results
  // function searchTvAmaze({ target }) {
  //       fetch(`https://api.tvmaze.com/search/shows?q=${target.value}`)
  //         .then(blob => blob.json())
  //         .then(shows => {
  //           const app = document.getElementById('app')
  //           app.innerHTML = shows.map(({ show }) => `
  //         <div class="col-sm movie-content">
  //           ${show.image ? `<img src="${show.image.medium}">` : ''}
  //           <div class="movie-info">
  //             <h5>${show.name}</h5>
  //             <span>Rating: ${show.rating.average}</span>
  //             <br />
  //             <span>Rating: ${show.genres}</span>
  //           </div>
  //         </div>

  //       `).join();
  //         })
  //     }

  // const inputSearchField = document.querySelector('.inputSearchField')
  // inputSearchField.addEventListener('keydown', searchTvAmaze)
  return (
      <div className="container">

      <div>
        <Search shows={shows} />
        </div>
      </div>

  );

}


export default Home