import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div<{ fSize: string; fontWeight: string; color: string; fontFamily: string; }>`
	color: ${props => props.color};
	font-size: ${props => props.fSize};
	font-weight: ${props => props.fontWeight};
	font-family: ${props => props.fontFamily};
`

interface TextProps {
	fSize?: string;
	fontWeight?: string;
	color?: string;
	fontFamily?: string;
	style?: React.CSSProperties | undefined
	children:any;
}

export const Text: React.FC<TextProps> = ({ fSize = "18px", fontWeight = "normal", color = "#fff", fontFamily = "ProximaNova Regular", children, style }) => {
	return (
		<Wrap fSize={fSize} fontWeight={fontWeight} color={color} fontFamily={fontFamily} style={style}>
			{children}
		</Wrap>
	)
};