import { CardContainer, FollowerCount, FollowerName, FollowersToday, RRSSContainer, Username } from "./styled";

const Card = ({activeDarkMode, color,img,username,numFollowers,followersText,todayQuantity,growed}) => {
	return (
	<>
        
	<CardContainer activeDarkMode={activeDarkMode} borderColor={color}>
        <RRSSContainer>
            <img src={img} alt="" />
            <Username>{username}</Username>
        </RRSSContainer>
        <FollowerCount  activeDarkMode={activeDarkMode}>{numFollowers}</FollowerCount>
        <FollowerName  activeDarkMode={activeDarkMode}>{followersText}</FollowerName>
        <FollowersToday growed={growed}>
            <img src={growed ? '/images/icon-up.svg' : '/images/icon-down.svg'} alt="" />
            <span >{todayQuantity} Today</span>
        </FollowersToday>
    </CardContainer>
	</>
	);
};


export default Card;