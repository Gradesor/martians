import React, { memo } from 'react';
import { palette } from 'styled-theme';
import styled from 'styled-components';
import { observer } from 'mobx-react'
import { GroupIndicators } from '../../Molecules/GroupIndicators'
import { CommonIndicator } from '../../Atoms/CommonIndicator'
import envIndic from '../../../Store/DashBoard/'
const Wrap = styled.div`
	display: flex;
	justify-content: space-between;
`
const Line = styled.div<{ palette: string;}>`
	width: 2px;
	height: 100%;
	background-color: ${palette({ primary: 0 }, 1)};
	opacity: 0.2;
	margin: 0 30px;
`
const WrapElement = styled.div<{palette: string; width: string}>`
	display: flex;
	padding: 0 20px;
	align-items: center;
	width: ${props => props.width};
	height: 200px;
	border-radius: 5px;
	background-color: ${palette({ primary: 7 }, 1)};

`

interface DashBoardHeaderProps { 
	palette: any;
	dataEnvironment: any;
	dataSoil: any;
}

export const DashBoardHeader: React.FC<DashBoardHeaderProps> = observer(({ palette, dataEnvironment, dataSoil  }) => {
	const count = 89;
	return (
		<Wrap>
			{ envIndic.environmentIndic && 
				<WrapElement palette={palette} width="45%" >
					<CommonIndicator palette={palette} count={count}/>
					<Line palette={palette}/>
					<GroupIndicators
						palette={palette}
						data={JSON.parse(envIndic?.environmentIndic)}
						titleId="enviromentIndicatorTitle"
					/>
				</WrapElement>
			}
			{ envIndic.soilIndic && 
			<WrapElement palette={palette} width="23%">
				<GroupIndicators
					palette={palette}
					data={JSON.parse(envIndic?.soilIndic)}
					titleId="soilIndicatorTitle"
				/>
			</WrapElement>
			}
			{ envIndic.waterIndic &&
				<WrapElement palette={palette} width="30%">
					<GroupIndicators
						palette={palette}
						data={JSON.parse(envIndic?.waterIndic)}
						titleId="waterIndicatorTitle"
					/>
				</WrapElement>
			}
		</Wrap>
	)
});