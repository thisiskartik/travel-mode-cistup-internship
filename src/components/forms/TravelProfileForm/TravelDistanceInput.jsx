import RadioButton from "../../general/RadioButton";

import { TRAVEL_DISTANCE_VALUES } from "./TravelProfileValues";

export default function TravelDistanceInput() {
	return (
		<div>
			<p className="mb-2 font-bold text-gray-800">
				What is the total distance between your home and workplace?
			</p>
			<div className="flex flex-col justify-evenly gap-1">
				<RadioButton
					id={TRAVEL_DISTANCE_VALUES.LESS_THAN_FIVE.key}
					name="travel_distance"
					value={TRAVEL_DISTANCE_VALUES.LESS_THAN_FIVE.key}
					label={TRAVEL_DISTANCE_VALUES.LESS_THAN_FIVE.value}
				/>
				<RadioButton
					id={TRAVEL_DISTANCE_VALUES.FIVE_TO_TEN.key}
					name="travel_distance"
					value={TRAVEL_DISTANCE_VALUES.FIVE_TO_TEN.key}
					label={TRAVEL_DISTANCE_VALUES.FIVE_TO_TEN.value}
				/>
				<RadioButton
					id={TRAVEL_DISTANCE_VALUES.TEN_TO_FIFTEEN.key}
					name="travel_distance"
					value={TRAVEL_DISTANCE_VALUES.TEN_TO_FIFTEEN.key}
					label={TRAVEL_DISTANCE_VALUES.TEN_TO_FIFTEEN.value}
				/>
				<RadioButton
					id={TRAVEL_DISTANCE_VALUES.FIFTEEN_TO_TWENTY.key}
					name="travel_distance"
					value={TRAVEL_DISTANCE_VALUES.FIFTEEN_TO_TWENTY.key}
					label={TRAVEL_DISTANCE_VALUES.FIFTEEN_TO_TWENTY.value}
				/>
				<RadioButton
					id={TRAVEL_DISTANCE_VALUES.TWENTY_TO_TWENTYFIVE.key}
					name="travel_distance"
					value={TRAVEL_DISTANCE_VALUES.TWENTY_TO_TWENTYFIVE.key}
					label={TRAVEL_DISTANCE_VALUES.TWENTY_TO_TWENTYFIVE.value}
				/>
				<RadioButton
					id={TRAVEL_DISTANCE_VALUES.GREATER_THAN_TWENTYFIVE.key}
					name="travel_distance"
					value={TRAVEL_DISTANCE_VALUES.GREATER_THAN_TWENTYFIVE.key}
					label={TRAVEL_DISTANCE_VALUES.GREATER_THAN_TWENTYFIVE.value}
				/>
			</div>
		</div>
	);
}
