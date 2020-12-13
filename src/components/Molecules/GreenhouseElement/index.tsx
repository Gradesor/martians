import React, { memo } from 'react';
import { palette } from 'styled-theme';
import styled, { useTheme, css } from 'styled-components';
import { EOLocale } from 'eo-locale'
import { font } from 'styled-theme';
import { Text } from '../../Atoms/Text'
import { Svg } from '../../Atoms/Svg'
const Wrap = styled.div<{ palette: string; }>`
	width: 286px;
	height: 286px;
	border: 1px solid ${palette({ primary: 0 }, 1)};
	border-radius: 5px;
	padding: 12px;
	margin-bottom: 15px;
`
const WrapHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 24px;
`
const WrapIndicHeader = styled.div<{colorSvg: string}>`
	display: flex;
	& svg{
		& use{
			color: ${props => props.colorSvg};
		}
		margin-right: 7px;
		width: 14px;
		height: 20px;
	}
`
const WrapIndicators = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`
const IndicatorWrap = styled.div`
	width: 33%;
	margin-bottom: 56px;
`
const Indicator = styled.div < { palette: string; condition: string;align: string}>`
	width: 24px;
	height: 24px;
	cursor: pointer;
	border-radius: 50%;
	border: 2px solid #000;
	background: transparent;
	transition: all 0.3s ease-out;
	${props => props.condition === 'NORMAL' && css`
		border-color: ${palette({ primary: 0 }, 1)};
	`}
	${props => props.condition === 'WARNING' && css`	
		border-color: ${palette({ primary: 5 }, 1)};
		background: rgba(255, 214, 10, 0.2);
	`}
	${props => props.condition === 'ERROR' && css`	
		border-color: ${palette({ primary: 6 }, 1)};
		background: rgba(255, 26, 26, 0.3);
	`}
	${props => props.align === 'center' && css`	
		margin: 0 auto;
	`}
	${props => props.align === 'right' && css`	
		margin-left: auto;
	`}
`

interface GreenhouseProps { 
	palette: string;
	data: any;
	index: number;
}

export const GreenhouseElement: React.FC<GreenhouseProps> = memo(({ palette, data, index }) => {
	const theme:any = useTheme();	
	let colorIndic = theme.palette[palette][4];
	if (data.parametrs.generalCondition.value < 90 && data.parametrs.generalCondition.value >= 50) {
		colorIndic = theme.palette[palette][5];
	} else if (data.parametrs.generalCondition.value < 50) {
		colorIndic = theme.palette[palette][6];
	}
	const indicators = data.bushes.map((item:any, jindex:number)=>{
		let conditionBushes = 'NORMAL';
		if (item.generalCondition.value < 90 && item.generalCondition.value >= 50) {
			conditionBushes = 'WARNING';
		} else if (data.paremetrs.generalCondition.value < 50) {
			conditionBushes = 'ERROR';
		}
		let alignIndic = 'left';
		if((jindex+1)%3 === 0){
			alignIndic = 'right';
		}else{
			if(jindex+1>3){
				if (((jindex+1) - (jindex%3)) == 2){
					alignIndic = 'center';
				}
			}else{
				if((jindex+1) == 2){
					alignIndic = 'center';
				}
			}
		}
		return (
			<IndicatorWrap>
				<Indicator align={alignIndic} palette={palette} condition={conditionBushes} />
			</IndicatorWrap>
		)
	})
	return (
		<Wrap palette={palette}>
			<WrapHeader>
				<WrapIndicHeader colorSvg={colorIndic}>
					<Svg name="greenhouseIndic"/>
					<Text fontFamily={font('bold')} fSize="14px">
						{`${data.parametrs.generalCondition.value} ${data.parametrs.generalCondition.symbol}`}
					</Text>
				</WrapIndicHeader>
				<Text>
					<EOLocale.Text id="greenhouseElemTitle" />
					{` #${index+1}`}
				</Text>
			</WrapHeader>
			<WrapIndicators>
				{indicators}
			</WrapIndicators>			
		</Wrap>
	)
});