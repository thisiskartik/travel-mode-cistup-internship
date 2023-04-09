import { useEffect, useState } from "react";
import { Link, useActionData } from "react-router-dom";

import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ModeChoiceTable from "../components/tables/ModeChoiceTable";

import sampleDB0KM from "../data/sample_db_0km.json";
import sampleDB5KM from "../data/sample_db_5km.json";
import sampleDB10KM from "../data/sample_db_10km.json";
import sampleDB15KM from "../data/sample_db_15km.json";
import sampleDB20KM from "../data/sample_db_20km.json";
import sampleDB25KM from "../data/sample_db_25km.json";

import { TRAVEL_DISTANCE_VALUES } from "../components/forms/TravelProfileForm/TravelProfileValues";

export default function ModeChoice() {
	const travelProfile = useActionData();
	const [data, setData] = useState();

	useEffect(() => {
		document.title = "Mode choice | Travel Mode";
	}, []);

	useEffect(() => {
		switch (travelProfile?.travel_distance) {
			case TRAVEL_DISTANCE_VALUES.LESS_THAN_FIVE.key:
				setData(sampleDB0KM);
				break;
			case TRAVEL_DISTANCE_VALUES.FIVE_TO_TEN.key:
				setData(sampleDB5KM);
				break;
			case TRAVEL_DISTANCE_VALUES.TEN_TO_FIFTEEN.key:
				setData(sampleDB10KM);
				break;
			case TRAVEL_DISTANCE_VALUES.FIFTEEN_TO_TWENTY.key:
				setData(sampleDB15KM);
				break;
			case TRAVEL_DISTANCE_VALUES.TWENTY_TO_TWENTYFIVE.key:
				setData(sampleDB20KM);
				break;
			case TRAVEL_DISTANCE_VALUES.GREATER_THAN_TWENTYFIVE.key:
				setData(sampleDB25KM);
				break;
			default:
				setData(undefined);
				break;
		}
	}, [travelProfile?.travel_distance]);

	if (travelProfile && travelProfile?.travel_mode && travelProfile?.travel_distance) {
		console.log(data);
		return (
			<div className="bg-white shadow border rounded place-content-center">
				<ModeChoiceTable
					data={data}
					travelMode={travelProfile.travel_mode}
					travelDistance={travelProfile.travel_distance}
				/>
			</div>
		);
	} else {
		return (
			<div className="bg-white shadow px-4 py-16 border rounded">
				<FontAwesomeIcon
					className="text-center w-full text-6xl mb-6 text-red-500"
					icon={faCircleXmark}
				/>
				<p className="text-center font-medium">
					An error occurred please fill the{" "}
					<Link className="underline text-blue-500" to="/">
						Travel Profile
					</Link>{" "}
					form again.
				</p>
			</div>
		);
	}
}

export const modeChoiceAction = async ({ request }) => {
	const data = await request.formData();
	const travelProfile = {
		travel_mode: data.get("travel_mode"),
		travel_distance: data.get("travel_distance"),
	};

	return travelProfile;
};
