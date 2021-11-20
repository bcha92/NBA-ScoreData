import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Sub-Components
import Scroll from "./Scroll"; // Scroll Schedule Button
import Game from "./Game"; // Game Details Box

// Schedule Component
const Schedule = ({ date, setDate }) => {
    // State to parse JSON Data
    const [games, setGames] = useState(null);
    // State to indicate loading status
    const [load, setLoad] = useState("idle");

    // Fetching Schedule Date by Date
    useEffect(() => {
        setLoad("loading"); // Init Loading State
        fetch(`https://data.nba.net/prod/v1/${
            date.toISOString().slice(0, 10).split("-").join("")
        }/scoreboard.json`)
        .then(res => res.json())
        .then(data => {
            if (data.games.length === 0) {
                return setLoad("empty");
            }
            else {
                setLoad("loaded");
                return setGames(data.games);
            }
        })
    }, [date])
    console.log(games);

    return <Wrap>
        <Scroll id="left" date={date} setDate={setDate} /* Scroll to Previous Day */ />

        <ScheduleWrap>
            <h2>{date.toDateString() === new Date().toDateString() ?
                `Today's Schedule (${date.toDateString()})` :
                `Schedule for ${date.toDateString()}`
            }</h2>

            {load === "loading" ? <h3>LOADING...</h3> :
            load === "empty" ?
            <h3>NO GAMES ARE SCHEDULED FOR {
                date.toDateString() === new Date().toDateString() ?
                "TODAY" : date.toDateString()
            }</h3> :
            games !== null && <GamesWrap>{
                games.map(game => <Game
                    key={game.gameId} // GameID (KEY)
                    id={game.gameId} // GameID
                    arena={game.arena} // Venue

                    home={game.hTeam} // Home Team Info
                    visitor={game.vTeam} // Visitor Team Info

                    startTime={game.startTimeEastern} // Game Start Time (Eastern Time GMT-0500)
                    startTimeTBD={game.isStartTimeTBD} // Unscheduled Game Start Time
                    current={game.isGameActivated} // Is the game underway?
                />)
            }</GamesWrap>}
        </ScheduleWrap>

        <Scroll id="right" date={date} setDate={setDate} /* Scroll to Next Day */ />
    </Wrap>
};

// Styled Components
const Wrap = styled.div`
    display: flex;
    flex-flow: row wrap;
    flex: 1;
`;

const GamesWrap = styled(Wrap)`
    flex-direction: column;
`;

const ScheduleWrap = styled(GamesWrap)`
    padding: 50px;
    align-items: center;
    transition: 300ms ease-in-out;

    & > h2 { margin-bottom: 20px };
`;

export default Schedule;