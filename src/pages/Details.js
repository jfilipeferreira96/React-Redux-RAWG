import React, { useEffect } from "react";

//Redux
import { useDispatch, useSelector } from "react-redux";
import { loadGames } from "../actions/gamesActions";
//Components
import GameDetail from "../components/GameDetail";

//styling and animation
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";

import { useLocation } from "react-router-dom";

function Details() {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  //Fetch the games and save it to the store
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  return <AnimatePresence exitBeforeEnter>{pathId && <GameDetail />}</AnimatePresence>;
}

export default Details;
