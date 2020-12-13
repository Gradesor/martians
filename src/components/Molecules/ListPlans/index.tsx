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
	height: 60px;
	padding-right: 20px;
	border-bottom: 1px solid  rgba(255, 255, 255, 0.2);;
`

interface ListPlansProps {
	data: any;
	palette: string;
}

export const ListPlans: React.FC<ListPlansProps> = memo(({ data, palette, }) => {
	const theme: any = useTheme();
	const content = data.map((item:any)=>{
		return(
			<InvolElem>
				<WrapTitle>
					<WrapIcon>
						<Svg name={item.name} />
					</WrapIcon>
					<div style={{ marginLeft: 4 }}>
						<Text fSize="14px" fontFamily={font('bold')}>
							{item.title}	
						</Text>
						<Text fSize="12px" fontFamily={font('bold')} style={{ opacity: 0.5 }}>
							<EOLocale.Text id="listDescr" greenhouse={item.greenhouse} bushes={item.bushes} />
						</Text>						
					</div>
				</WrapTitle>
				{item.status ? 
					<Text fSize="12px" color={theme.palette[palette][4]}>
						<EOLocale.Text id="plansSuccess" />
					</Text>
				:
					<Text fSize="12px" color={theme.palette[palette][10]} style={{textAlign: 'center'}}>
						<EOLocale.Text id="plansTime" /> <br/>
						{item.time}
					</Text>
				}
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