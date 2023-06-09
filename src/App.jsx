import { useState } from "react";
import Header from "./components/header/header";
import Body from "./components/body/Body";
import { GlobalStyles } from "./styles/globalStyles";


const App = () => {
	const [activeDarkMode, setActiveDarkMode] = useState(true);
	const [switchSpanText, setSwitchSpanText] = useState("Light Mode");
	return (
	<>
	<GlobalStyles activeDarkMode={activeDarkMode}/>
	<Header text={switchSpanText} activeDarkMode={activeDarkMode} handleClick={()=>changeDarkMode(activeDarkMode, setActiveDarkMode, setSwitchSpanText)}/>
	<Body activeDarkMode={activeDarkMode}/>
	</>
	);
};

const changeDarkMode = (activeDarkMode, setActiveDarkMode, setSwitchSpanText) => {
    setActiveDarkMode(!activeDarkMode);
	
	if (activeDarkMode) {
		setSwitchSpanText("Dark Mode");
	}else{
		setSwitchSpanText("Light Mode");
	}
};

export default App;
