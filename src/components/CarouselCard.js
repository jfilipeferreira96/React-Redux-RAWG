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
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };
  return (
    <Card layoutId={id.toString()} onClick={loadDetailHandler} variants={popup} initial="hidden" animate="show">
      <motion.img src={image} alt={name} />
      <div class="info">
        <h1>Road</h1>
        <p>Lorem Ipsum is simply dummy text from the printing and typeseting industry</p>
      </div>
    </Card>
  );
}

const Card = styled.div`
  width: 280px;
  height: 360px;
  border-radius: 15px;
  padding: 1.5rem;
  background: white;
  position: relative;
  display: flex;
  transition: 0.4s ease-out;
  box-shadow: 0px 7px 10px rgba(black, 0.5);

  &:hover {
    transform: translateY(20px);
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
    background: rgba(black, 0.6);
    z-index: 2;
    transition: 0.5s;
    opacity: 0;
  }
  img {
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 15px;
  }

  .info {
    position: relative;
    z-index: 3;
    color: white;
    opacity: 0;
    transform: translateY(30px);
    transition: 0.5s;
    h1 {
      margin: 0px;
    }
    p {
      letter-spacing: 1px;
      font-size: 15px;
      margin-top: 8px;
    }
  }
`;

export default CarouselCard;
