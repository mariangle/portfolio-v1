import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = event => {
    setPosition({ x: event.clientX, y: event.clientY });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Cursor
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    />
  );
};

const Cursor = styled.div`
  @media (min-width: 850px) {
  position: fixed;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.mainColor};
  background-color: none;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.2s ease-out;
  transform: translate(-50%, -50%); 
  }
`;

export default CustomCursor;
