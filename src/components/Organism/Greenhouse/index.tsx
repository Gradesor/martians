import React, { memo, useState } from 'react';
import { palette } from 'styled-theme';
import styled from 'styled-components';
import { EOLocale } from 'eo-locale'
import { font } from 'styled-theme';
import { GreenhouseElement } from '../../Molecules/GreenhouseElement'
import { GreenhouseCondition } from '../../Molecules/GreenhouseCondition'
import { Text } from '../../Atoms/Text'
const Wrap = styled.div<{ palette: string; }>`
	background-color: ${palette({ primary: 8 }, 1)};	
	width: 69%;
	border-radius: 5px;
	overflow: hidden;
`
const WrapElement = styled.div<{palette: string}>`
	display: flex;
	justify-content: space-between;
	padding: 14px;
	width: 100%;	
	background-color: ${palette({ primary: 9 }, 1)};
`
const WrapGreenHouse = styled.div`
	display: flex;
	width: 73%;
	justify-content: space-between;
	flex-wrap: wrap;
`
const WrapList = styled.div`
	width: 26%;
`
interface GreenhouseProps { 
	palette: any;
	data: any;
}

export const Greenhouse: React.FC<GreenhouseProps> = memo(({ palette, data }) => {
	const count = 89;
	const [actualCondition, setActualCondition] = useState({ count: 1, parametrs: data[0].parametrs});
	const content = data.map((item:any, index: number)=>(
		<GreenhouseElement palette={palette} index={index} data={item} />
	))
	return (
		<Wrap palette={palette}>
			<Text fontFamily={font('bold')} style={{ padding: 13}}>
				<EOLocale.Text id="greenhouseTitle"/>
			</Text>
			<WrapElement palette={palette} >
				<WrapGreenHouse>
					{content}					
				</WrapGreenHouse>
				<WrapList>
					<GreenhouseCondition palette={palette} data={actualCondition}/>
				</WrapList>
			</WrapElement>
		</Wrap>
	)
});