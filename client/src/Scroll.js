import React from "react";
import styled from "styled-components";
// Arrow React Icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"

// Date Scroll Button Component
const Scroll = ({ id, date, setDate }) => {
    return <ScrollButton
        onClick={() => id === "left" ?
        setDate(new Date(date.setDate(date.getDate() - 1))) : id === "right" ?
        setDate(new Date(date.setDate(date.getDate() + 1))) : null
    }>
        {id === "left" && <>
            <FaArrowLeft size="100px" />
            Previous Day
        </>}

        {id === "right" && <>
            <FaArrowRight size="100px" />
            Next Day
        </>}
    </ScrollButton>
};

// Styled Component
const ScrollButton = styled.button`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    max-width: 200px;
    flex: 1;
    padding: 20px;
    font-weight: bold;
    font-size: large;
    border: none;
    background: none;
    transition: 200ms ease-in-out;

    &:hover { background: white };

    &:active { background: #aaa };
`;

export default Scroll;