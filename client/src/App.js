import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// GlobalStyles (CSS3) and CSS styled-components
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";

// Schedule Component
import Schedule from "./Schedule";

// Main App Component
const App = () => {
  const [date, setDate] = useState(new Date());

  return <Wrapper>
    <GlobalStyles />
    <BrowserRouter>
      <Header>
        <h1>NBA Games Schedule</h1>
        <p>{
          date.toDateString() === new Date().toDateString() ?
          date.toDateString() + " [TODAY]" : date.toDateString()
        }</p>
      </Header>
      <Routes>
        <Route path="/" element={
          // Schedule Component with date and setDate state
          <Schedule date={date} setDate={setDate} />
        } />
      </Routes>
    </BrowserRouter>
  </Wrapper>
}

// Styled Components
const Wrapper = styled.div`
  display: flex;
  flex-flow: column wrap;
  background: #ddd;
  width: 100vw;
  height: 100vh;
`;

// Top Header (Static)
const Header = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background: #aaa;
  padding: 5px 20px;

  & > h1 { color: #fff };
  & > p {
    color: #111;
    font-weight: bold;
    font-size: large;
  };
`;

export default App;