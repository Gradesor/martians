import React, { memo } from 'react';
import { font } from 'styled-theme';
import { palette } from 'styled-theme';
import styled, { useTheme, css } from 'styled-components';
import { EOLocale } from 'eo-locale'
import { observer } from 'mobx-react'
import { GroupIndicatorsTitle } from '../../Atoms/GroupIndicatorsTitle'
import { Text } from '../../Atoms/Text';
import { Svg } from '../../Atoms/Svg';

const Wrap = styled.div`
	display: flex;
	width: 100%;
`
const WrapIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`
const InvolElem = styled.div`
	cursor: pointer;
	display: flex;
	width: 95%;
	margin-top: 8px;
`

const WrapElem = styled.div<{ palette: string; isLast?: boolean; isFirst?: boolean}>`
	width: 130px;
	height: 110px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
    padding: 20px 0;
	background: transparent;
	border-radius: 5px;
	position: relative;
	&:hover{
		background: ${palette({ primary: 1 }, 1)};
	}
	${props => !props.isFirst && css`
	margin-left: 5px;
	`
	};
	${props => !props.isLast && css`
	margin-right: 5px;
		&:before{
			content: '';
			position: absolute;
			top: 25px;
			right: -5px;
			width: 2px;
			height: 35px;
			background: ${palette({ primary: 0 }, 1)};
			opacity: 0.2;
		}
	`}
`

interface GroupIndicatorsProps {
	data: any;
	palette: string;
	titleId: string;
}

export const GroupIndicators: React.FC<GroupIndicatorsProps> = observer(({ data, palette, titleId, }) => {
	const theme: any = useTheme();
	let colorIndicators = theme.palette[palette][4];
	let descrId = 'conditionSucces';
	if (data?.condition === 'NORMAL'){
		colorIndicators = theme.palette[palette][5];
		descrId = 'conditionNormal';
	} else if (data?.condition === 'BAD'){
		colorIndicators = theme.palette[palette][6];
		descrId = 'conditionBad';
	}
	
	const content = data?.indicators.map((item:any, index:number)=>
	{
		if(item?.data?.name){
			let colorText = theme.palette[palette][0];
			if (item?.data?.condition === 'BAD') {
				colorText = theme.palette[palette][6];
			}
		return(
		<WrapElem palette={palette} isFirst={index === 0} isLast={(index+1)===data?.indicators.length}>
			<WrapIcon>
				<Svg name={item?.data?.name} style={{width: 32, height: 40}} />
				<Text fSize="20px" style={{ opacity: 0.8, width: 44, textAlign: 'center', marginLeft: 4 }} color={colorText}>
					{`${item?.data?.curency.toFixed(1)} ${item?.data?.symbol}`}
				</Text>
			</WrapIcon>
			<Text fSize="14px" style={{ opacity: 0.8, letterSpacing: '0.02em' }} >
				<EOLocale.Text id={item?.data?.name}/>
			</Text>
		</WrapElem>
		)}
	})
	return (
		<div style={{width: '100%'}}>
			<Wrap>
				<GroupIndicatorsTitle
					palette={palette}
					color={colorIndicators}
					titleId={titleId}
					descrId={descrId}
				/>
			</Wrap>
			<InvolElem>
				{content}
			</InvolElem>
		</div>
	)
});