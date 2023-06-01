import { header, link } from './Header.css'

export const Header = () => {
	return (
		<nav>
			<img className={header} src="../../public/640px-Y_Combinator_logo.svg.png" alt="Logo" />
			<a className={link} href="/" >
				Hakers News
			</a>
		</nav >
	)
}