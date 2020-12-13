import React, { memo } from 'react';
import { font } from 'styled-theme';
import { palette } from 'styled-theme';
import styled, { useTheme } from 'styled-components';
import { EOLocale } from 'eo-locale'
import { GroupIndicatorsTitle } from '../../Atoms/GroupIndicatorsTitle'
import { Text } from '../../Atoms/Text';
import { Svg } from '../../Atoms/Svg';

const Wrap = styled.div`
	width: 100%;
	height: 100%;
	overflow: auto;
	border-top: 1px solid rgba(255, 255, 255, 0.2);
	padding-left: 12px;
`
const WrapIcon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 28px;
	height: 28px;
`
const WrapTitle = styled.div`
	display: flex;
	align-items: center;
`
const InvolElem = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 56px;
	padding-right: 20px;
	border-bottom: 1px solid  rgba(255, 255, 255, 0.2);
`

interface ListConditionsProps {
	data: any;
	palette: string;
}

export const ListConditions: React.FC<ListConditionsProps> = memo(({ data, palette, }) => {
	const content = (Object.keys(data)).map((item:any)=>{
		const valueItem = data[item]
		return(
			<InvolElem>
				<WrapTitle>
					<WrapIcon>
						<Svg name={item} />
					</WrapIcon>
					<Text fSize="14px" fontFamily={font('bold')} style={{ marginLeft: 4 }}>
						<EOLocale.Text id={item} />
					</Text>
				</WrapTitle>
				<Text fSize="14px" style={{ opacity: 0.8, letterSpacing: '0.02em' }}>
					{`${valueItem.value}${valueItem.symbol}`}
				</Text>
			</InvolElem>
		)
	})
	return (
		<div>
			<Wrap>
				{content}
			</Wrap>
		</div>
	)
});