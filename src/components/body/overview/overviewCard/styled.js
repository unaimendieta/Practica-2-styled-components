import styled from "styled-components";

const CardContainer = styled.div`
    height: 125px;
    width: 255px;
    display: flex;
    flex-direction: column;
    padding:0 31px ;
    justify-content: center;
    gap: 21px;
    border-radius: 5px;
    background-color:${props=>(props.activeDarkMode ? '#252B42' : '#F1F3FA')};
    @media screen and (max-width: 400px) {
        width: 326px;
    }
`;
const CardHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;
const CardTitle = styled.p`
    font-size: 14px;
    font-weight: 700;

    color: ${props=>(props.activeDarkMode ? '#8C98C6' : '#63687D')};
`;
const CardInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
`;
const FollowerQuantity = styled.p`
    font-size: 32px;
    font-weight: 700;
    color: ${props=>(props.activeDarkMode ? '#ffffff' : '#1D1F29')};

`;
const FollowersChange = styled.div`
   display: flex;
    gap:8px;
    color: ${props=>(props.growed ? '#1EB589' : '#DC414C' )};
    font-size: 12px;
    font-weight: 700;
    align-items: center;

`;


export {CardContainer,CardHeader,CardTitle,CardInfo,FollowerQuantity,FollowersChange};