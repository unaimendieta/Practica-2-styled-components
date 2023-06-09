import OverviewCard from "./overviewCard/OverviewCard";
import { OverviewCardContainer, OverviewHeader } from "./styled";


const Overview = ({activeDarkMode}) => {
	return (
	<>  <div>
            <OverviewHeader activeDarkMode={activeDarkMode}>Overview - Today</OverviewHeader>
            <OverviewCardContainer>
                <OverviewCard activeDarkMode={activeDarkMode} cardTitle="Page Views" img="/images/icon-facebook.svg" numFollowers="87" todayQuantity={3} growed={true}/>
                <OverviewCard activeDarkMode={activeDarkMode} cardTitle="Likes" img="/images/icon-facebook.svg" numFollowers="52" todayQuantity={2} growed={false}/>
                <OverviewCard activeDarkMode={activeDarkMode} cardTitle="Likes" img="/images/icon-instagram.svg" numFollowers="5.462" todayQuantity={2257} growed={true}/>
                <OverviewCard activeDarkMode={activeDarkMode} cardTitle="Profile Views" img="/images/icon-instagram.svg" numFollowers="52k" todayQuantity={1375} growed={true}/>
                <OverviewCard activeDarkMode={activeDarkMode} cardTitle="Retweets" img="/images/icon-twitter.svg" numFollowers="117" todayQuantity={303} growed={true}/>
                <OverviewCard activeDarkMode={activeDarkMode} cardTitle="Likes" img="/images/icon-twitter.svg" numFollowers="507" todayQuantity={553} growed={true}/>
                <OverviewCard activeDarkMode={activeDarkMode} cardTitle="Likes" img="/images/icon-youtube.svg" numFollowers="107" todayQuantity={19} growed={false}/>
                <OverviewCard activeDarkMode={activeDarkMode} cardTitle="Total Views" img="/images/icon-youtube.svg" numFollowers="1407" todayQuantity={12} growed={false}/>
            </OverviewCardContainer>
    </div>
	</>
	);
};


export default Overview;