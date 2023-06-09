import styled from "styled-components";

const CardContainer = styled.div`
    height: 216px;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    width: 255px;
    height: 220px;
    padding: 2rem 5.25rem;
    text-align: center;
    background-color:${props=>(props.activeDarkMode ? '#252B42' : '#F1F3FA')};
    border-top: 5px solid ${props=>props.borderColor };;
    border-radius: 0.5rem;
    transition: background-color 0.3s ease 0s;
    @media screen and (max-width: 400px) {
        width: 326px;
    }
`;
const RRSSContainer = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    -webkit-box-align: center;
    align-items: center;
    gap: 16px;
    color: ${props=>(props.activeDarkMode ? '#8C98C6' : '#63687D')};
    transition: color 0.3s ease 0s;
`;
const Username = styled.span`
    font-weight: bold;
`;
const FollowerCount = styled.span`
    font-size: 56px;
    font-weight: 700;
    text-align: center;
    color: ${props=>(props.activeDarkMode ? '#ffffff' : '#1D1F29')};

`;
const FollowerName = styled.span`
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 5px;
    text-align: center;

    color: ${props=>(props.activeDarkMode ? '#8C98C6' : '#63687D')};

`;
const FollowersToday = styled.div`
display: flex;
gap:8px;
color: ${props=>(props.growed ? '#1EB589' : '#DC414C' )};
font-size: 12px;
font-weight: 700;
align-items: center;
`;
export {CardContainer,RRSSContainer,Username, FollowerCount,FollowerName,FollowersToday};