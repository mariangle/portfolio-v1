import React, {useState, useEffect} from 'react'
// components
import {MovieState} from "../projectState"
import styled from 'styled-components';
// rout
import { useLocation } from 'react-router-dom';
// import anim
import {motion} from "framer-motion";
import { pageAnim } from "../animation";

function MovieDetails() {
  const url = useLocation();
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url.pathname );
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
    {movie && (
      <Details exit="exit" variants={pageAnim} initial="hidden" animate="show">
        <HeadLine>
          <h2>{movie.title}</h2>
          <img src={movie.mainImg} alt="" />
        </HeadLine>
        <Awards>{movie.awards.map((award) => (
          <Award title={award.title} description={award.description} key={award.title} />
        ))}
        </Awards>
        <ImageDisplay>
          <img src={movie.secondaryImg} alt="" />
        </ImageDisplay>
      </Details>
    )

    }
    </>
  )
}

const Details = styled(motion.div)`

`
const HeadLine = styled.div`
width: 80vw;
margin: auto;
min-height: 40vh;
padding-top: 20vh;
position: relative;
display: flex;
justify-content: center;
h2{
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
}
img{
  width: 50%;
  height: 50%;
  object-fit: cover;
}
`
const Awards = styled.div`
min-height: 80vh;
display: flex;
margin: 5rem 10rem;
align-items: center;
justify-content: space-around;
@media (max-width: 700px){
  display: block;
  margin: 2rem 2rem;
}
`

const AwardStyle = styled.div`
padding: 0 5rem;
h3{
  font-size: 2rem;
}
.line{
  width: 100%;
  background: #23d997;
  height: 0.5rem;
  margin: 1rem 0rem;
}
p{
  padding: 2rem 0rem;
}
`

const ImageDisplay = styled.div`
min-height: 50vh;
img{
  width: 100%;
  height: 50vh;
  object-fit: cover;
}
`
// award component
const Award = ({title, description}) => {
  return(
    <AwardStyle>
      <h3>{title}</h3>¨
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  )
} 




export default MovieDetails;