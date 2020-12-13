import React, { memo } from 'react';
import { palette } from 'styled-theme';
import styled, { css, useTheme } from 'styled-components';
import { EOLocale } from 'eo-locale'
import { Svg } from '../../Atoms/Svg'
import { Text } from '../../Atoms/Text'
import { font } from 'styled-theme';

const WrapIndicator = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;	
`
const WrapTitle = styled.div`
	display: flex;
`
const WrapInfoIndic = styled.div<{palette:string}>`
	transition: all 0.3s ease-out;
	background-color: transparent;
	width: 30px;
	height: 30px;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	&:hover{
		background-color: ${palette({ primary: 1 }, 1)};
	}
`

const Indicator = styled.div<{palette: string, color: string;}>`
	width: 18px;
	height: 18px;
	background-color:${props => props.color};
	border-radius: 50%;
	margin-right: 12px;
`

interface GroupIndicatorsTitleProps { 
	palette: string;
	color: string;
	titleId: string;
	descrId: string;
}

export const GroupIndicatorsTitle: React.FC<GroupIndicatorsTitleProps> = memo(({ palette, color,  titleId, descrId}) => {
	const theme:any = useTheme();
	return (
		
		<WrapIndicator>
			<WrapTitle>
				<Indicator palette={palette} color={color} />
				<div>
					<Text fontFamily={font('bold')}>
						<EOLocale.Text id={titleId}/>
					</Text>
					<Text color={theme.palette[palette][0]} fSize="14px" style={{opacity: 0.5}}>
						<EOLocale.Text id={descrId} />
					</Text>
				</div>
			</WrapTitle>
			<WrapInfoIndic palette={palette} onClick={()=>{}}>
				<Svg name="infoIndic"/>
			</WrapInfoIndic>
		</WrapIndicator>
		
	)
});