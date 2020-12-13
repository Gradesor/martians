import React, { memo } from 'react';
import { font } from 'styled-theme';
import { palette } from 'styled-theme';
import styled, { useTheme } from 'styled-components';
import { EOLocale } from 'eo-locale'
import { ListPlans } from '../../Molecules/ListPlans'
import { Text } from '../../Atoms/Text';

const Wrap = styled.div<{palette: string}>`
	width: 15%;
	border-radius: 5px;
	background: ${palette({ primary: 7 }, 1)};
`

interface NotificationsProps {
	data: any;
	palette: string;
}

export const Notifications: React.FC<NotificationsProps> = memo(({ data, palette, }) => {
	
	return (
		
		<Wrap palette={palette}>
			<Text fontFamily={font('bold')} style={{padding: '16px 20px'}}>
				<EOLocale.Text id="notificationsTitle" />
			</Text>
			<ListPlans palette={palette} data={data} />
		</Wrap>
		
	)
});