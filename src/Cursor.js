import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function Cursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });


  return <Mouse cursorPosition={cursorPosition} />;
}

const Mouse = styled.div`

`;

export default Cursor;