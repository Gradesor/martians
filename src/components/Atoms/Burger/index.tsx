import React, { memo } from 'react';
import { palette } from 'styled-theme';
import styled, { css } from 'styled-components';

const Line = styled.div<{ palette: string; isActive: boolean; location: string; }>`
	height: 3px;
	width: 30px;
	transition: all 0.3s ease-out;
	background-color: ${palette({ primary: 0 }, 1)};
	margin-bottom: ${props => props.location === 'bottom' ? '0' : '4px'};
	${props=> props.isActive && css`
		${props.location === 'top' && css`
			position: absolute;
			top: 50%;
			transform: translateY(-50%) rotate(45deg);

		`}
		${props.location === 'bottom' && css`
			position: absolute;
			top: 50%;
			transform: translateY(-50%) rotate(-45deg);

		`}
		${props.location === 'center' && css`
			opacity: 0;
		`}
	`}
`

const Wrap = styled.div<{palette: string}>`
	width: 50px;
	height: 50px;
	background: ${palette({ primary: 2 }, 1)};
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	position: relative;
	cursor: pointer;
`
interface BurgerProps { 
	palette: string;
	isActive: boolean;
	onClick: ()=>void;
}

export const Burger: React.FC<BurgerProps> = memo(({ palette, isActive, onClick }) => {
	return (
		<Wrap palette={palette} onClick={() => onClick()}>
			<Line palette={palette} isActive={isActive} location="top"/>
			<Line palette={palette} isActive={isActive} location="center" />
			<Line palette={palette} isActive={isActive} location="bottom" />
		</Wrap>
	)
});