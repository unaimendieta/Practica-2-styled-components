import { HeaderSecondTitle, HeaderTitle, StyledHeader, StyledHeaderContent, SwitchContainer, SwitchInput, SwitchInputLabel, SwitchText } from "./styled";

const Header = ({activeDarkMode, handleClick,text}) => {
	return (
		<>
		<StyledHeader  activeDarkMode={activeDarkMode}>
			<StyledHeaderContent>
				<div>
					<HeaderTitle  activeDarkMode={activeDarkMode}>Social Media Dashboard</HeaderTitle>
					<HeaderSecondTitle  activeDarkMode={activeDarkMode}>Total followers 22.270</HeaderSecondTitle>
				</div>
				<SwitchContainer>
					<SwitchText   activeDarkMode={activeDarkMode}>{text}</SwitchText>						
					<SwitchInput onClick={handleClick} type="checkbox" id="toggleMode" ></SwitchInput>
					<SwitchInputLabel  activeDarkMode={activeDarkMode} htmlFor="toggleMode"></SwitchInputLabel>					
				</SwitchContainer>
			</StyledHeaderContent>
		</StyledHeader>
		</>
	);
};

export default Header;