import { useEffect } from "react";

import TravelProfileForm from "../components/forms/TravelProfileForm";

export default function Home() {
	useEffect(() => {
		document.title = "Respondent Travel profile | Travel Mode";
	}, []);

	return (
		<>
			<TravelProfileForm />
		</>
	);
}
