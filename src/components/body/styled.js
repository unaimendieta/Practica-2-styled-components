import styled from "styled-components";

const MainContent = styled.main`
    position: relative;
    top: -75px;
    max-width: 1110px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    gap: 46px;
    @media screen and (max-width: 400px) {
        max-width: 326px;
        align-items: center;

    }
`;

export {MainContent};