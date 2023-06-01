import { style } from "@vanilla-extract/css";

export const header = style({
	height: '26px',
	alignItems: 'center',
	borderBottom: '1px solid #eee',
	display: 'flex',
	gap: '16px',
	padding: '8px 18px',
})

export const link = style({
	color: '#374151',
	fontSize: '18px',
	margin: 0,
	textDecoration: 'none'
})

export const contImg = style({
	width: '30px',
	height: '30px'
})