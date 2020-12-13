import React, { memo } from 'react';
import { font } from 'styled-theme';
import { palette } from 'styled-theme';
import styled from 'styled-components';
import { EOLocale } from 'eo-locale'
import { ListConditions } from '../../Molecules/ListConditions'
import { Text } from '../../Atoms/Text';

const Wrap = styled.div<{palette: string}>`
	width: 100%;
	height: 100%;
	background: ${palette({ primary: 1 }, 1)};
	border-radius: 5px;
`

interface GreenhouseConditionProps {
	data: any;
	palette: string;
}

export const GreenhouseCondition: React.FC<GreenhouseConditionProps> = memo(({ data, palette, }) => {
	return (
		<Wrap palette={palette}>
			<Text fontFamily={font('bold')} style={{padding: '16px 20px'}}>
				<EOLocale.Text id="greenhouseConditionTitle" count={data.count}/>
			</Text>
			<ListConditions palette={palette} data={data.parametrs} />
		</Wrap>
	)
});