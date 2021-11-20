import React from "react";
import styled from "styled-components";
// Scroll Button
import Scroll from "./Scroll";

// Schedule Component
const Schedule = ({ date, setDate }) => {
    return <Wrap>
        <Scroll id="left" />

        <ScheduleWrap>
            <h2>{ // Replaced Date with "Today" if date is same as today
                date.toDateString() === new Date().toDateString() && "Today's "
                }Schedule{ // Date shown if NOT Today
                date.toDateString() !== new Date().toDateString() && " for " + date.toDateString()
            }</h2>
        </ScheduleWrap>

        <Scroll id="right" />
    </Wrap>
};

// Styled Components
const Wrap = styled.div`
    display: flex;
    flex-flow: row nowrap;
    flex: 1;
`;

const ScheduleWrap = styled(Wrap)`
    flex-direction: column;
    padding: 20px;
    align-items: center;
`;

export default Schedule;