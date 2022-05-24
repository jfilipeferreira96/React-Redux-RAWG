import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import logoheader from "../img/logo-header.png";
import { FaSearch } from "react-icons/fa";
import { fadeIn } from "../animations";

//Redux and Routes
import { fetchSearch } from "../actions/gamesActions";
import { useDispatch } from "react-redux";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    e.preventDefault();
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();

    dispatch(fetchSearch(textInput));
    navigate("/searched/" + textInput);
    setTextInput("");
  };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
    navigate(-1);
  };

  return (
    <StyleNav variants={fadeIn} initial="hidden" animate="show">
      <HeaderLogo>
        <img src={logoheader} alt="logo" onClick={clearSearched} />
      </HeaderLogo>
      <FormStyle className="search" onSubmit={submitSearch}>
        <div>
          <FaSearch></FaSearch>
          <input type="text" onChange={inputHandler} value={textInput} />
        </div>
      </FormStyle>
    </StyleNav>
  );
}

const StyleNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  position: relative;
  display: inline-block;
  width: 100%;
  vertical-align: middle;
  margin: 0;
  padding: 0;
  z-index: 2;
  padding: 1rem 1rem 1rem 2rem;
  height: 90px;
  background-color: #17161a;
  box-shadow: 15px 15px 21px 0px rgb(1 1 1 / 30%);
`;

const FormStyle = styled.form`
  margin-bottom: 16px;
  margin-left: 200px;
  margin-right: 200px;

  @media (max-width: 768px) {
    margin-left: 20%;
    margin-right: 20%;
    margin-bottom: 16px;
  }
  div {
    width: 100%;
    position: relative;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 1rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;

const HeaderLogo = styled(motion.div)`
  position: relative;
  float: left;
  z-index: 2;
  cursor: pointer;

  img {
    height: 4rem;
    width: 4rem;
  }
`;

export default Navbar;
