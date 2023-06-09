import styled from "styled-components";

const StyledHeader = styled.header`
    background-color:${props=>(props.activeDarkMode ? '#20222F' : '#F7F9FF')};
    height: 250px;
    transition: background-color 0.3s linear 0s;
`;
const StyledHeaderContent = styled.div`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    max-width: 1110px;
    margin-left: auto;
    margin-right: auto;
    transition: background-color 0.3s linear 0s;
    @media screen and (max-width: 400px) {
    max-width: 326px;
    flex-direction: column;
    align-items: flex-start;
    gap:41px;
    }
`;
const HeaderTitle = styled.h1`
    margin: 2.25rem 0px 0.5rem;
    color: ${props=>(props.activeDarkMode ?   '#ffffff':'#1D1F29' )};
    transition: color 0.3s linear 0s;
    @media screen and (max-width: 400px) {
    font-size: 24px;
    }
`;
const HeaderSecondTitle = styled.h2`
    color: ${props=>(props.activeDarkMode ?   '#8C98C6' :'#63687D')};
    transition: color 0.3s linear 0s;
    @media screen and (max-width: 400px) {
    font-size: 14px;
    }
`;
const SwitchContainer = styled.div`
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    @media screen and (max-width: 400px) {
        width: 100%;
        justify-content: space-between;
    }
`;
const SwitchText = styled.span`
    margin-right: 1rem;
    color: ${props=>(props.activeDarkMode ?   '#ffffff' : '#848BAB' )};
`;


const SwitchInputLabel = styled.label`
    position: relative;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 50px;
    height: 25px;
    border-radius: 1rem;
    padding: 0.25rem;
    cursor: pointer;

    background: ${props=>(props.activeDarkMode ?   'linear-gradient(rgb(64, 219, 130), rgb(56, 143, 231))' :'#AEB3CB')};;
    &:before {
        content: "";
        position: absolute;
    };
    &:after{
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        background-color: rgb(37, 43, 66);
        transform: translateX(0px);
        transition: transform 0.3s linear 0s, background-color 0.3s linear 0s;
    };
`;
const SwitchInput = styled.input`
    display: none;
    &:checked + ${SwitchInputLabel} {
        transform: translateX(calc(43px - 100%))
  }
`;

export {StyledHeader,StyledHeaderContent,HeaderTitle,HeaderSecondTitle,SwitchText,SwitchInput,SwitchInputLabel,SwitchContainer};