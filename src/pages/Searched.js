import React, { useEffect } from "react";
//components
import Game from "../components/Game";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesActions";
//Components
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router-dom";

function Details() {
  const { searched } = useSelector((state) => state.games);

  const location = useLocation();

  //Fetch the games and save it to the store
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  return (
    searched.length > 0 && (
      <div className="searched">
        <h2>Searched Games</h2>
        <Games>
          {searched.map((game) => (
            <Game
              name={game.name}
              released={game.released}
              id={game.id}
              image={game.background_image}
              key={game.id}
              metacritic={game.metacritic}
            />
          ))}
        </Games>
      </div>
    )
  );
}

const Games = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;
`;

export default Details;
