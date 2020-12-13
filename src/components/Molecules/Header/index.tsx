import React, { memo } from 'react';
import { palette, font } from 'styled-theme';
import styled from 'styled-components';
import { Text } from '../../Atoms/Text'
import { Burger } from '../../Atoms/Burger'
import { UserHeader } from '../../Molecules/UserHeader'
import { EOLocale } from 'eo-locale'
import MocAvatar from '../../../assets/img/mocAvatar.png'
import LogoIco from '../../../assets/img/logo.svg'
const WrapBurger = styled.div`
	display: flex;
	align-items: center;
`
const Logo = styled.img`
	width: 148px;
	height: 30px;
`
const Wrap = styled.div<{palette: string}>`
	padding: 15px 40px;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid ${palette({ primary: 3 }, 1)};
`

interface HeaderProps {
	palette: string;
	isActive: boolean;
	onClick: ()=>void;
}

export const Header: React.FC<HeaderProps> = memo(({ palette, isActive, onClick }) => {
	const mocUser = {
		avatar: MocAvatar,
		name: 'Рубин Марсианский',
		position: 'Удобряет всё и вся'
	}
	return(
		<Wrap palette={palette}>
			<WrapBurger>
				<Burger
					palette={palette}
					isActive={isActive}
					onClick={onClick}
				/>
				<Text fontFamily={font('bold')} style={{marginLeft: 30}}>
					<EOLocale.Text id="dashBordTitle" />
				</Text>
			</WrapBurger>
			<Logo src={LogoIco} alt="Logo"/>
			<UserHeader
				data={mocUser}
				isActive={false}
				onClick={()=>{}}
			/>

		</Wrap>
	)
});