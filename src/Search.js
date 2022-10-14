import React from 'react';

function Search({shows}) {
    return (
        <div>
            <h1>Search</h1>
            <input type = 'search' placeholder='Search...'></input>
            {shows?.map((show => (
                <div className="col">
                    <img src={show.image.medium} alt='movie'></img>
                    <div className="info">
                        <h5>{show.name}</h5>
                        <span>Rating: {show.rating.average}</span>
                        <br />
                        <span>Rating:{show.genres}</span>
                    </div>
                </div>
    
            )))}
        </div>
    );
          
}

export default Search