import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
  }
body {
	font-family: 'Inter', sans-serif;
	
    height: 100vh;
    transition: background-color 0.3s linear 0s;
    background-color: ${props=>(props.activeDarkMode ?   '#1D1F29':'#ffffff' )};
}
`;

export {GlobalStyles};