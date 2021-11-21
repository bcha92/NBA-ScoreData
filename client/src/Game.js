import React from "react";
import styled from "styled-components";

// Game Schedule Item Component
const Game = ({ // Deconstructed Props
    arena, home, visitor, startTime, startTimeTBD, current, status
}) => {
    return <GameWrap>
        <h3>{
            `${
                startTimeTBD ? "TBD" : startTime
            } - ${home.triCode} vs ${visitor.triCode}`
        }</h3>
        <p>{`${arena.name}, ${arena.city}, ${arena.stateAbbr}`}</p>
        {current ? <h4 className="ongoing">GAME IN PROGRESS</h4> :
        <h4>{status === 3 &&
            `${home.score} : ${visitor.score} - ${
                Number(home.score) === Number(visitor.score) ?
                "DRAW" : Number(home.score) > Number(visitor.score) ?
                home.triCode + " WIN" : visitor.triCode + " WIN"
            }`
        }</h4>}
    </GameWrap>
};

// Game Styled Component
const GameWrap = styled.li`
    display: flex;
    flex-flow: column wrap;
    margin-bottom: 10px;
    padding: 20px;
    border: 2px solid #333;
    border-radius: 10px;
    width: 100%;

    & > .ongoing { color: orangered };
`;

export default Game;