import { reversePalette } from 'styled-theme/composer'

const theme = { palette: {}, reversePalette: {}, fonts: {}, sizes: {} }

theme.palette = {
	primary: [ 
		'#ffffff', // 0
		'#101010', // 1
		'#1C1D1E', // 2
		'#222328', // 3
		'#32D74B', // 4
		'#FFD60A', // 5
		'#FF1A1A', // 6
		'#1B1C1E', // 7
		'#1B1B1E', // 8
		'#282A2D', // 9
		'#8D8D8E', // 10
	] 
}
// color text 0
// main background 1
// background burger 2
// border header 3
// background positive indicator 4
// background normal indicator 5
// background negative indicator 6
// background DashBoardHeader elemets 7
// greenhouse background title 8
// greenhouse background elems 9


theme.reversePalette = reversePalette(theme.palette)

theme.fonts = {
	regular: 'ProximaNova Regular, sans-serif',
	bold: 'ProximaNova Bold, sans-serif',
}

theme.sizes = {
	maxWidth: '1100px',
}

export default theme
