import { Form } from "react-router-dom";

import TravelModeInput from "./TravelModeInput";
import TravelDistanceInput from "./TravelDistanceInput";

export function TravelProfileForm() {
	return (
		<Form
			className="bg-white shadow px-4 py-6 border rounded flex flex-col gap-6"
			method="post"
			action="mode-choice"
		>
			<h2 className="text-center text-3xl font-bold text-gray-800">
				Respondent Travel profile
			</h2>
			<TravelModeInput />
			<TravelDistanceInput />
			<button
				className="bg-primary text-light font-bold w-24 h-12 rounded place-self-center hover:bg-gray-800 transition-colors"
				type="submit"
			>
				Submit
			</button>
		</Form>
	);
}
