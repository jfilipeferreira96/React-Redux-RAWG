import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { popup } from "../animations";

//Redux
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

import { Link } from "react-router-dom";
import { smallImage } from "../util";

function Game({ name, released, image, id, metacritic }) {
  //Load Details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <Link to={`/game/${id}`}>
      <StyledGame layoutId={id.toString()} onClick={loadDetailHandler} variants={popup} initial="hidden" animate="show">
        <motion.img layoutId={`image ${id.toString()}`} src={smallImage(image, 640)} alt={name} />
        <div className="info">
          <motion.h1 layoutId={`title ${id.toString()}`}>{name}</motion.h1>
          {metacritic && <div className="metascore">{metacritic}</div>}
        </div>
      </StyledGame>
    </Link>
  );
}

const StyledGame = styled(motion.div)`
  min-height: 25rem;
  border-radius: 15px;
  padding: 1.5rem;
  background: white;
  position: relative;
  display: flex;
  transition: 0.4s ease-out;
  background: rgba(0, 0, 0, 0.6);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;

  &:hover {
    &:before {
      opacity: 1;
    }
    .info {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.6);
    z-index: 2;
    transition: 0.5s;
    opacity: 0;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 15px;
  }

  .info {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;
    color: white;
    opacity: 0;
    transform: translateY(30px);
    transition: 0.5s;
    h1 {
      margin: 0px;
      font-size: 2rem;
      font-weight: bold;
      line-height: 1.2;
      margin-bottom: 15px;
    }
    .metascore {
      font-size: 1.3rem;
      color: #6dc849;
      border-color: rgba(109, 200, 73, 0.4);
      display: inline-block;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      padding: 2px 0;
      font-weight: 700;
      text-align: center;
      border-radius: 4px;
      border: 1px solid;
      min-width: 30px;
    }
  }
`;

export default Game;
