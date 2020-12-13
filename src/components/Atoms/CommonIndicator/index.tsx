import React, { memo } from 'react';
import { palette } from 'styled-theme';
import styled, { css, useTheme } from 'styled-components';
import { EOLocale } from 'eo-locale'
import { Text } from '../../Atoms/Text'
import { font } from 'styled-theme';

const WrapIndicator = styled.div`
	display: flex;
	align-items: center;
	margin-top: 12px;
`

const Indicator = styled.div<{palette: string, count:number, color: string;}>`
	width: 30px;
	height: 100px;
	background: ${palette({ primary: 0 }, 1)};
	border-radius: 5px;
	position: relative;
	overflow: hidden;
	margin-right: 20px;
	&::before{
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: ${props => `${props.count}%`};
		background-color:${props => props.color};
	}
`
interface CommonIndicatorProps { 
	palette: string;
	count: number;
}

export const CommonIndicator: React.FC<CommonIndicatorProps> = memo(({ palette, count}) => {
	const theme:any = useTheme();
	console.log(theme)
	let color = 'red';
	if(count < 90 && count >= 50){
		color = theme.palette[palette][5];
	}else if(count < 50){
		color = theme.palette[palette][6];
	}
	return (
		<div>
			<Text fontFamily={font('bold')} style={{width: 101}}>
				<EOLocale.Text id="commonIndicatorTitle"/>
			</Text>
			<WrapIndicator>
				<Indicator palette={palette} count={count} color={color} />
				<Text fontFamily={font('bold')} fSize="36px">
					{`${count}%`}
				</Text>
			</WrapIndicator>
		</div>
	)
});