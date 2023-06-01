import { header, link, contImg } from './Header.css'

export const Header = () => {
	return (
		<nav className={header}>
			<img className={contImg} src="../../public/640px-Y_Combinator_logo.svg.png" alt="Logo" />
			<a className={link} href="/" >
				Hackers News
			</a>
		</nav >
	)
}