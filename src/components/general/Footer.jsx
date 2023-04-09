import { Link } from "react-router-dom";

import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
	return (
		<p className="font-black text-center text-xl">
			Made with <FontAwesomeIcon className="text-red-500" icon={faHeart} /> for Summer
			Internship @ CiSTUP by{" "}
			<Link className="underline text-blue-500" to="https://www.linkedin.com/in/imkartik/">
				Kartik Arora
			</Link>
		</p>
	);
}
