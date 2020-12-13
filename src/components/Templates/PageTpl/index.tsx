import React, { Children, memo, useState } from 'react';
import { palette } from 'styled-theme';
import styled from 'styled-components';
import { Header } from '../../Molecules/Header'
import { Sidebar } from '../../Molecules/Sidebar'

const Invol = styled.div<{ palette: string }>`
	background: ${palette({ primary: 1 }, 1)};
	min-height: 100vh;
	overflow: hidden;
`
const Container = styled.div<{ isActive: boolean }>`
	width: 100%;
	padding: 40px;
	transition: all 0.3s ease-out;
	transform: ${props => props.isActive ? 'translateX(351px)' : 'translateX(0px)'};
`

interface PageTplProps {
	palette: string;
	children: any;
}

export const PageTpl: React.FC<PageTplProps> = memo(({ palette, children }) => {
	const [burgerActive, setBurgerActive] = useState(false);
	const toggleBurger = () =>{
		setBurgerActive(!burgerActive);
	}
	return (
		<Invol palette={palette}>
			<Header palette={palette} isActive={burgerActive} onClick={toggleBurger} />
			<Sidebar palette={palette} isActive={burgerActive} />
			<Container isActive={burgerActive}>
				{children}
			</Container>
		</Invol>
	)
});