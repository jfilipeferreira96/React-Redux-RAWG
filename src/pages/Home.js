import React, { useEffect } from "react";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesActions";
//Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
//styling and animation
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../animations";

import { useLocation } from "react-router-dom";

function Home() {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  //Fetch the games and save it to the store
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //get that data back
  //const games = useSelector((state) => state.games);
  const { currentPopular, lastYearBestof, upComing, searched } = useSelector((state) => state.games);

  return (
    <GameList variants={fadeIn} initial="hidden" animate="show">
      {/* Modal */}
      <AnimatePresence exitBeforeEnter>{pathId && <GameDetail />}</AnimatePresence>

      {searched.length > 0 && (
        <div className="searched">
          <h2>Searched Games</h2>
          <Games>
            {searched.map((game) => (
              <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
            ))}
          </Games>
        </div>
      )}

      <Title>
        <h1>Best Video Games of All Time</h1>
      </Title>
      <h2>
        <strong>Upcoming Games</strong>
      </h2>
      <Games>
        {upComing.map((game) => (
          <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
        ))}
      </Games>
      <h2>
        <strong>Popular Games in {new Date().getFullYear()}</strong>
      </h2>
      <Games>
        {currentPopular.map((game) => (
          <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
        ))}
      </Games>
      <h2>
        <strong>Best Games of {new Date().getFullYear() - 1}</strong>
      </h2>
      <Games>
        {lastYearBestof.map((game) => (
          <Game name={game.name} released={game.released} id={game.id} image={game.background_image} key={game.id} />
        ))}
      </Games>
    </GameList>
  );
}

const GameList = styled(motion.div)`
  padding: 0rem 5rem;
  h2 {
    padding: 5rem 0rem;
    position: relative;
  }
  h2:after {
    content: "";
    bottom: 30%;
    height: 2px;
    left: 0;
    right: 0;
    background: red;
    position: absolute;
    z-index: -1;
  }
  h2 strong {
    z-index: 2;
    background: transparent;
    padding: 4px 8px;
  }
`;

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
`;

const Title = styled(motion.div)`
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  vertical-align: middle;
  padding: 2rem;
  h1 {
    font-size: 4rem;
    font-family: Roboto;
    font-weight: 700;
    color: #fff;
  }
`;

export default Home;
