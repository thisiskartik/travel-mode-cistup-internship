import logo from "../../images/logo.svg";

export default function Header() {
	return (
		<header className="flex flex-col gap-2">
			<img src={logo} alt="Travel Mode Logo" className="w-1/6 place-self-center" />
		</header>
	);
}
