import React, { memo } from 'react';
import { font } from 'styled-theme';
import styled from 'styled-components';
import { Text } from '../../Atoms/Text'
import { Svg } from '../../Atoms/Svg'
const Wrap = styled.div`
	display: flex;
	align-items: center;
`
const Avatar = styled.img`
	width: 50px;
	height: 50px;
	object-fit: cover;
	margin-right: 12px;
`

interface UserHeaderProps {
	data: any;
	isActive: boolean;
	onClick: () => void;
}

export const UserHeader: React.FC<UserHeaderProps> = memo(({ data, isActive, onClick }) => {
	return (
		<Wrap>
			<Avatar src={data.avatar} alt="Avatar" />
			<div>
				<Text fontFamily={font('bold')} fSize="16px">
					{data.name}
				</Text>
				<Text fontFamily={font('regular')} fSize="16px" style={{opacity: 0.5}}>
					{data.position}
				</Text>
			</div>
			<Svg name="icChev" style={{width: 10, height: 5, marginLeft: 23}} />

		</Wrap>
	)
});