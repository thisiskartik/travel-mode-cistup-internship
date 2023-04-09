import { useCallback, useMemo } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faBus,
	faAngleRight,
	faBicycle,
	faTrain,
	faMotorcycle,
	faCar,
	faTaxi,
	faMobile,
} from "@fortawesome/free-solid-svg-icons";

import {
	TRAVEL_MODE_VALUES,
	TRAVEL_DISTANCE_VALUES,
} from "../../forms/TravelProfileForm/TravelProfileValues";

export default function ModeChoiceRow2({
	mode1trans,
	mode2trans,
	mode3,
	mode4,
	mode5,
	ivtt1,
	ivtt2,
	ivtt3,
	ivtt4,
	ivtt5,
}) {
	const getMode12Icon = useCallback(
		trans =>
			trans === 0 ? (
				<FontAwesomeIcon icon={faBus} />
			) : (
				<>
					<FontAwesomeIcon icon={faBus} />
					<FontAwesomeIcon icon={faAngleRight} />
					<FontAwesomeIcon icon={faBus} />
				</>
			),
		[]
	);

	const mode3Icon = useMemo(() => {
		if (mode3 === TRAVEL_MODE_VALUES.WALK_OR_BICYCLE.value) {
			return <FontAwesomeIcon icon={faBicycle} />;
		} else if (mode3 === TRAVEL_MODE_VALUES.METRO.value) {
			return <FontAwesomeIcon icon={faTrain} />;
		}
	}, [mode3]);

	const mode4Icon = useMemo(() => {
		if (mode4 === TRAVEL_MODE_VALUES.OWN_TWO_WHEELER.value) {
			return <FontAwesomeIcon icon={faMotorcycle} />;
		} else if (mode4 === TRAVEL_MODE_VALUES.OWN_CAR.value) {
			return <FontAwesomeIcon icon={faCar} />;
		}
	}, [mode4]);

	const mode5Icon = useMemo(() => {
		if (mode5 === TRAVEL_MODE_VALUES.AUTO.value) {
			return <FontAwesomeIcon icon={faTaxi} />;
		} else if (mode5 === TRAVEL_MODE_VALUES.APP_BASED_RIDE.shortValue) {
			return <FontAwesomeIcon icon={faMobile} />;
		}
	}, [mode5]);

	return (
		<tr className="bg-gray-100 h-20">
			<td>
				{ivtt1 && (
					<div className="flex flex-col gap-1">
						{getMode12Icon(mode1trans)}
						{ivtt1}
					</div>
				)}
			</td>
			<td>
				{ivtt2 && (
					<div className="flex flex-col gap-1">
						{getMode12Icon(mode2trans)}
						{ivtt2}
					</div>
				)}
			</td>
			<td>
				{ivtt3 && (
					<div className="flex flex-col gap-1">
						{mode3Icon}
						{ivtt3}
					</div>
				)}
			</td>
			<td>
				{ivtt4 && (
					<div className="flex flex-col gap-1">
						{mode4Icon}
						{ivtt4}
					</div>
				)}
			</td>
			<td>
				{ivtt5 && (
					<div className="flex flex-col gap-1">
						{mode5Icon}
						{ivtt5}
					</div>
				)}
			</td>
		</tr>
	);
}
