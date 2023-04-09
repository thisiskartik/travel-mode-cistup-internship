import RadioButton from "../../general/RadioButton";

import { TRAVEL_MODE_VALUES } from "./TravelProfileValues";

export default function TravelModeInput() {
	return (
		<div>
			<p className="mb-2 font-bold text-gray-800">
				Q1. What is your most frequently used means of travel from your home to work
				location?
			</p>
			<div className="flex flex-col justify-evenly gap-1">
				<RadioButton
					id={TRAVEL_MODE_VALUES.BUS.key}
					name="travel_mode"
					value={TRAVEL_MODE_VALUES.BUS.key}
					label={TRAVEL_MODE_VALUES.BUS.value}
				/>
				<RadioButton
					id={TRAVEL_MODE_VALUES.METRO.key}
					name="travel_mode"
					value={TRAVEL_MODE_VALUES.METRO.key}
					label={TRAVEL_MODE_VALUES.METRO.value}
				/>
				<RadioButton
					id={TRAVEL_MODE_VALUES.OWN_TWO_WHEELER.key}
					name="travel_mode"
					value={TRAVEL_MODE_VALUES.OWN_TWO_WHEELER.key}
					label={TRAVEL_MODE_VALUES.OWN_TWO_WHEELER.value}
				/>
				<RadioButton
					id={TRAVEL_MODE_VALUES.OWN_CAR.key}
					name="travel_mode"
					value={TRAVEL_MODE_VALUES.OWN_CAR.key}
					label={TRAVEL_MODE_VALUES.OWN_CAR.value}
				/>
				<RadioButton
					id={TRAVEL_MODE_VALUES.WALK_OR_BICYCLE.key}
					name="travel_mode"
					value={TRAVEL_MODE_VALUES.WALK_OR_BICYCLE.key}
					label={TRAVEL_MODE_VALUES.WALK_OR_BICYCLE.value}
				/>
				<RadioButton
					id={TRAVEL_MODE_VALUES.AUTO.key}
					name="travel_mode"
					value={TRAVEL_MODE_VALUES.AUTO.key}
					label={TRAVEL_MODE_VALUES.AUTO.value}
				/>
				<RadioButton
					id={TRAVEL_MODE_VALUES.APP_BASED_RIDE.key}
					name="travel_mode"
					value={TRAVEL_MODE_VALUES.APP_BASED_RIDE.key}
					label={TRAVEL_MODE_VALUES.APP_BASED_RIDE.value}
				/>
			</div>
		</div>
	);
}
