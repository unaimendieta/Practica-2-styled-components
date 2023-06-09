import { CardContainer, CardHeader, CardInfo, CardTitle, FollowerQuantity, FollowersChange } from "./styled";


const OverviewCard = ({activeDarkMode, color,img,numFollowers,cardTitle,todayQuantity,growed}) => {
	return (
	<>
        <CardContainer activeDarkMode={activeDarkMode}>
                <CardHeader >
                    <CardTitle activeDarkMode={activeDarkMode}>{cardTitle}</CardTitle>
                    <img src={img} alt="" />
                </CardHeader>
                <CardInfo  activeDarkMode={activeDarkMode}>
                    <FollowerQuantity activeDarkMode={activeDarkMode}>{numFollowers}</FollowerQuantity>
                    <FollowersChange growed={growed}>
                        <img src={growed ? '/images/icon-up.svg' : '/images/icon-down.svg'} alt="" />
                        <span >{todayQuantity}% Today</span>
                    </FollowersChange>
                </CardInfo>
            
        </CardContainer>
	</>
	);
};


export default OverviewCard;