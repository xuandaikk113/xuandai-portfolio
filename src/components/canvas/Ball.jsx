import React from "react";
import styled from "styled-components";

const Ball = styled.div`
  width: 100px;
  height: 100px;
  background-image: url(${(props) => props.imgUrl});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 20%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.3);
  }
`;

const BallCanvas = ({ icon }) => {
  return <Ball imgUrl={icon} />;
};

export default BallCanvas;
