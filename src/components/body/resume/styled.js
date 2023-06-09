import styled from "styled-components";

const ResumeContainer = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    @media screen and (max-width: 400px) {
    flex-direction: column;
    justify-content: center;
    gap: 30px;
}
`;


export {ResumeContainer};