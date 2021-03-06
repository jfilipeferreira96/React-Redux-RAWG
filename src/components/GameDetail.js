import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//redux
import { useSelector } from "react-redux";
import { smallImage } from "../util";
//Images
import playstation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
//Star Images
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

function GameDetail({ pathId }) {
  //Data
  //const detail = useSelector((state) => state.detail);
  const { game, screenshots, isLoading } = useSelector((state) => state.detail);

  //Get Platform Images Icons
  const getPlatform = (platform) => {
    switch (platform) {
      case "PlayStation 4":
        return playstation;
      case "Xbox One":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };

  //Stars logic
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull} />);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty} />);
      }
    }
    return stars;
  };

  return (
    <>
      {!isLoading && (
        <Detail>
          <Stats>
            <div className="rating">
              <motion.h3 layoutId={`title ${pathId}`}>{game.name}</motion.h3>
              <p>Rating: {game.rating} </p>
              {getStars()}
            </div>
            <Info>
              <h3>Platforms</h3>
              <Platforms>
                {game.platforms.map((data) => (
                  <img
                    title={data.platform.name}
                    alt={data.platform.name}
                    key={data.platform.id}
                    src={getPlatform(data.platform.name)}
                  ></img>
                ))}
              </Platforms>
            </Info>
          </Stats>
          <Media>
            {game.background_image && <motion.img layoutId={`image ${pathId}`} src={smallImage(game.background_image, 1280)} alt="image" />}
          </Media>
          <Description>
            <p>{game.description_raw}</p>
          </Description>
          <div className="gallery">
            {screenshots.results.map((screen) => (
              <img key={screen.id} src={smallImage(screen.image, 1280)} alt="game screen" />
            ))}
          </div>
        </Detail>
      )}
    </>
  );
}

const Detail = styled(motion.div)`
  width: 80%;
  border-radius: 1rem;
  padding: 2rem 5rem;
  /*  background: #17161a;*/
  position: absolute;
  left: 10%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
`;
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default GameDetail;
