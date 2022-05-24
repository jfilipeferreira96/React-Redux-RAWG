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

function CarouselCard({ name, released, image, id }) {
  //Load Details
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    dispatch(loadDetail(id));
  };
  return (
    <Card layoutId={id.toString()} onClick={loadDetailHandler} variants={popup} initial="hidden" animate="show">
      <motion.img src={image ? smallImage(image, 640) : ""} alt={name} />
      <div className="info">
        <h1>{name}</h1>
        <p>{released}</p>
        <Link to={`/game/${id}`}>
          <button>Details</button>
        </Link>
      </div>
    </Card>
  );
}

const Card = styled.div`
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
      font-size: 2.3rem;
      font-weight: bold;
      line-height: 1.2;
    }
    p {
      color: #ccc;
      font-size: 1.125rem;
      font-style: italic;
      line-height: 1.35;
    }
    button {
      margin-top: 15px;
      padding: 0.6rem;
      outline: none;
      border: none;
      border-radius: 3px;
      font-size: 1rem;
      background: white;
      color: black;
      font-weight: bold;
      cursor: pointer;
      transition: 0.4s ease;
      &:hover {
        background: #ccc;
      }
    }
  }
`;

export default CarouselCard;
