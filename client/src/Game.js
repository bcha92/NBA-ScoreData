import React, { useState } from "react";
import styled from "styled-components";
import { GoTriangleUp, GoTriangleRight } from "react-icons/go";

// Game Schedule Item Component
const Game = ({ // Deconstructed Props
    arena, home, visitor, startTime, startTimeTBD,
    current, status, duration, endTime,
}) => {
    const [expand, setExpand] = useState(false);

    return <GameWrap
        style={{ border: expand && "3px solid green" }}
        onClick={() => setExpand(!expand)}
    >
        <h3>{ // Main schedule in Eastern Time
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

        {expand && <>
        {current || endTime !== undefined ?
        <p>Game Duration: {duration.hours} hours, {duration.minutes} minutes {
            current && <span>(ongoing)</span>
        }</p> : <></>}

        <h5>{home.triCode} TEAM RECORD</h5>
            <p>Wins: {home.win === "" ? "TBD" : home.win}</p>
            <p>Losses: {home.loss === "" ? "TBD" : home.loss}</p>
            <p>Series Wins: {home.seriesWin === "" ? "TBD" : home.seriesWin}</p>
            <p>Series Losses: {home.seriesLoss === "" ? "TBD" : home.seriesLoss}</p>

        <h5>{visitor.triCode} TEAM RECORD</h5>
            <p>Wins: {visitor.win === "" ? "TBD" : visitor.win}</p>
            <p>Losses: {visitor.loss === "" ? "TBD" : visitor.loss}</p>
            <p>Series Wins: {visitor.seriesWin === "" ? "TBD" : visitor.seriesWin}</p>
            <p>Series Losses: {visitor.seriesLoss === "" ? "TBD" : visitor.seriesLoss}</p>
        </>}

        <p className="dropdown">
            {expand ? <><GoTriangleUp /> click to collapse</> :
            <><GoTriangleRight /> click to expand</>}
        </p>
    </GameWrap>
};

// Game Styled Component
const GameWrap = styled.li`
    display: flex;
    flex-flow: column wrap;
    margin: 10px;
    padding: 20px;
    border: 2px solid #333;
    border-radius: 10px;
    min-width: 300px;
    width: 100%;
    transition: 500ms ease-out;
    background: white;
    cursor: pointer;

    & > h4, h5 { margin: 5px 0 };
    & > .ongoing, p > span { color: orangered };
    & > .dropdown {
        display: flex;
        align-items: center;
        margin-top: 5px;
        font-style: italic;
        font-size: small;
    };
    &:hover {
        transform: scale(105%);
        border: 2px solid orange;
        transition: 300ms ease-in;
    };
`;

export default Game;