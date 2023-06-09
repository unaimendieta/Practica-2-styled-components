import Card from "./card/Card";
import { ResumeContainer } from "./styled";

const Resume = ({activeDarkMode}) => {
	return (
	<>
    <ResumeContainer>
        <Card activeDarkMode={activeDarkMode} color="#178FF5" img="/images/icon-facebook.svg" username="@nathanf" numFollowers="1.987" followersText="FOLLOWERS" todayQuantity={12} growed={true}/>
        <Card activeDarkMode={activeDarkMode} color="#1DA1F2" img="/images/icon-twitter.svg" username="@nathanf" numFollowers="1.044" followersText="FOLLOWERS" todayQuantity={99} growed={true}/>
        <Card activeDarkMode={activeDarkMode} color="#FDC366" img="/images/icon-instagram.svg" username="@nathanf" numFollowers="11k" followersText="FOLLOWERS" todayQuantity={1099} growed={true}/>
        <Card activeDarkMode={activeDarkMode} color="#C4032B" img="/images/icon-youtube.svg" username="@nathanf" numFollowers="8.239" followersText="SUBSCRIBER" todayQuantity={144} growed={false}/>
    </ResumeContainer>
	</>
	);
};


export default Resume;