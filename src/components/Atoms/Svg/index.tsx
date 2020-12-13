import React from 'react';
import styled from 'styled-components';
import icons from '../../../assets/img/sprite.svg'

const Wrap = styled.div<{ fSize: string; fontWeight: string; color: string; fontFamily: string; }>`
	color: ${props => props.color};
	font-size: ${props => props.fSize};
	font-weight: ${props => props.fontWeight};
	font-family: ${props => props.fontFamily};
`

interface SvgProps {
	name: string;
	style?: React.CSSProperties | undefined
}

export const Svg: React.FC<SvgProps> = ({ name, style }) => {
	return (
		<svg className="inline-svg-icon" style={style}>
			<use xlinkHref={`${icons}#${name}`} name={name} />
		</svg>
	)
};