import React from "react";
import styled from "styled-components";

// Game Schedule Item Component
const Game = ({ // Deconstructed Props
    id, arena, home, visitor, startTime, startTimeTBD, current
}) => {
    return <GameWrap>
        <h3>{
            `${
                startTimeTBD ? "TBD" : startTime
            } - ${home.triCode} vs ${visitor.triCode}`
        }</h3>
        {current && <h4>GAME IN PROGRESS</h4>}
    </GameWrap>
};

// Game Styled Component
const GameWrap = styled.div`
    display: flex;
    flex-flow: column wrap;
    margin-bottom: 10px;
    padding: 20px;
    border: 2px solid #333;
    border-radius: 10px;

    & > h4 { color: orangered };
`;

export default Game;