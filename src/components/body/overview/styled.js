import styled from "styled-components";

const OverviewCardContainer = styled.div`
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    justify-content: space-between;
    @media screen and (max-width: 400px) {
        max-width: 326px;
        align-items: center;
        
        flex-direction: column;
    }
`;
const OverviewHeader = styled.h2`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 24px;
    color: ${props=>(props.activeDarkMode ? '#ffffff' : '#63687D')};
    @media screen and (max-width: 400px) {
        max-width: 326px;
        align-items: center;

    }
`;


export {OverviewCardContainer,OverviewHeader};