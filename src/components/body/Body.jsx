import Overview from "./overview/Overiew";
import Resume from "./resume/Resume";
import { MainContent } from "./styled";


const Body = ({activeDarkMode}) => {
	return (
	<>
    <MainContent>
	    <Resume activeDarkMode={activeDarkMode}/>
        <Overview activeDarkMode={activeDarkMode}/>
    </MainContent>
	</>
	);
};


export default Body;