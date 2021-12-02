import { Carousel } from 'react-carousel-minimal';
import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import './Movies.css';
import { useHistory } from "react-router-dom";


function Movies() {
  const [movielist, setMovieList] = useState([]);

  // var today = new Date();
  // var dd = String(today.getDate()).padStart(2, '0');
  // var mm = String(today.getMonth() + 1).padStart(2, '0');
  // var yyyy = today.getFullYear();

  // today = yyyy + '-' + mm + '-' + dd;
  // console.log(today);
  useEffect(() => {
    Axios.post('http://localhost:3004/movie/display_movie').then((response) => {
      if (response) {
        setMovieList(response.data);
        console.log(response.data);
      }
      else {
        console.log("NOt responed");
      }
    });
  }, [])
  const history = useHistory();
  const data = [
    {
      image: "https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/bell-bottom-et00117102-14-08-2021-04-33-35.jpg",

    },
    {
      image: "https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shang-chi-and-the-legend-of-the-ten-rings-et00122566-24-08-2021-02-01-36.jpg",

    },
    {
      image: "https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/fast-and-furious-9-et00056556-14-07-2021-07-41-33.jpg",

    },
    {
      image: "https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/chehre-et00102880-25-08-2021-07-26-46.jpg",

    },
    {
      image: "https://in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/don-t-breathe-2-et00312665-13-09-2021-12-43-41.jpg",

    }


  ];

  const singleMove = movietitle => () => {
    history.push("/singlemovie", { mtitle: movietitle });
  }

  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={2000}
            width="100%"
            height="300px"
            radius="6px"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            style={{
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
      <div className="card-header-c">
        {movielist.map((val) => {
          return (
            <div className="cardList">
              <img className="card-img-top-c" src={"/images/" + val.image} alt="" onClick={singleMove(`${val.title}`)} />
              <h3 className="card-title-c">{val.title}</h3>
              <h6 className="card-footer-c">{val.lang}</h6>
            </div>

          );
        }
        )}
      </div>
    </div>

  );
}

export default Movies;