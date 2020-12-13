import React, { memo } from 'react';
import { palette } from 'styled-theme';
import styled, { css } from 'styled-components';
import { EOLocale } from 'eo-locale'
import { Svg } from '../../Atoms/Svg'
import { Text } from '../../Atoms/Text'

const Wrap = styled.div<{ palette: string; isActive: boolean}>`
	padding-top: 30px;
	padding-left: 30px;
	padding-right: 40px;
	position: fixed;
	transition: all 0.3s ease-out;
	width: 351px;
	top: 81px;
	height: 100vh;
	left: ${props => props.isActive ? '0px' : '-351px'};
	background: ${palette({ primary: 2 }, 1)};
`
const WrapElem = styled.div<{ palette: string; isActive?: boolean }>`
	margin-bottom: 24px;
	display: flex;
	align-items: center;
	cursor: pointer;
	& .sidesElems{
		background: transparent;
		${props => props.isActive && css`
			background: rgba(70, 74, 82, 0.8)!important;
		`}
		&:hover{
			background: rgba(70, 74, 82, 0.3);
		}
		& svg{
			width: 55px;
			height: 55px;
		}
	}
`
const WrapIco = styled.div`
	transition: all 0.3s ease-out;
	margin-right: 24px;
	width: 66px;
	height: 66px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
`
interface SidebarProps { 
	palette: string;
	isActive: boolean;
}

export const Sidebar: React.FC<SidebarProps> = memo(({ palette, isActive }) => {
	return (
		<Wrap palette={palette} isActive={isActive}>
			<WrapElem palette={palette} isActive>
				<WrapIco className="sidesElems">
					<Svg name="home"/>
				</WrapIco>
				<Text>
					<EOLocale.Text id="home"></EOLocale.Text>
				</Text>
			</WrapElem>
			<WrapElem palette={palette}>
				<WrapIco className="sidesElems">
					<Svg name="analyt" />
				</WrapIco>
				<Text>
					<EOLocale.Text id="analyt"></EOLocale.Text>
				</Text>
			</WrapElem>
		</Wrap>
	)
});