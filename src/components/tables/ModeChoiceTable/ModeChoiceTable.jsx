import { useMemo } from "react";

import ModeChoiceRow1 from "./ModeChoiceRow1";
import ModeChoiceRow2 from "./ModeChoiceRow2";
import ModeChoiceRow3 from "./ModeChoiceRow3";
import ModeChoiceRow4 from "./ModeChoiceRow4";
import ModeChoiceRow5 from "./ModeChoiceRow5";
import ModeChoiceRow6 from "./ModeChoiceRow6";
import ModeChoiceRow7 from "./ModeChoiceRow7";
import selectRandom from "./selectRandom";
import {
	TRAVEL_MODE_VALUES,
	TRAVEL_DISTANCE_VALUES,
} from "../../forms/TravelProfileForm/TravelProfileValues";

export function ModeChoiceTable({ data, travelMode, travelDistance }) {
	const mode3 = useMemo(
		() =>
			travelDistance === TRAVEL_DISTANCE_VALUES.LESS_THAN_FIVE.key
				? TRAVEL_MODE_VALUES.WALK_OR_BICYCLE.value
				: TRAVEL_MODE_VALUES.METRO.value,
		[travelDistance]
	);

	const mode4 = useMemo(() => {
		if (travelMode === TRAVEL_MODE_VALUES.OWN_TWO_WHEELER.key) {
			return TRAVEL_MODE_VALUES.OWN_TWO_WHEELER.value;
		} else if (travelMode === TRAVEL_MODE_VALUES.OWN_CAR.key) {
			return TRAVEL_MODE_VALUES.OWN_CAR.value;
		} else {
			return selectRandom([
				TRAVEL_MODE_VALUES.OWN_TWO_WHEELER.value,
				TRAVEL_MODE_VALUES.OWN_CAR.value,
			]);
		}
	}, [travelMode]);

	const mode5 = useMemo(() => {
		if (travelMode === TRAVEL_MODE_VALUES.AUTO.key) {
			return TRAVEL_MODE_VALUES.AUTO.value;
		} else if (travelMode === TRAVEL_MODE_VALUES.APP_BASED_RIDE.key) {
			return TRAVEL_MODE_VALUES.APP_BASED_RIDE.shortValue;
		} else {
			return selectRandom([
				TRAVEL_MODE_VALUES.AUTO.value,
				TRAVEL_MODE_VALUES.APP_BASED_RIDE.shortValue,
			]);
		}
	}, [travelMode]);

	if (data) {
		const modeChoiceData = data.Data[0];
		return (
			<table className="table-auto w-full text-center">
				<thead>
					<ModeChoiceRow1
						mode1={modeChoiceData.mode_1}
						mode2={modeChoiceData.mode_2}
						mode3={mode3}
						mode4={mode4}
						mode5={mode5}
					/>
				</thead>
				<tbody>
					<tr className="h-10 bg-slate-600 text-white">
						<td colSpan={5}>
							Total travel time spent while inside the vehicle&#40;s&#41;
						</td>
					</tr>
					<ModeChoiceRow2
						mode1trans={modeChoiceData["mode_1.trans"]}
						mode2trans={modeChoiceData["mode_2.trans"]}
						mode3={mode3}
						mode4={mode4}
						mode5={mode5}
						ivtt1={modeChoiceData["mode_1.ivtt"]}
						ivtt2={modeChoiceData["mode_2.ivtt"]}
						ivtt3={modeChoiceData["mode_3.ivtt"]}
						ivtt4={modeChoiceData["mode_4.ivtt"]}
						ivtt5={modeChoiceData["mode_5.ivtt"]}
					/>
					<tr className="h-10 bg-slate-600 text-white">
						<td colSpan={5}>Total travel time spent outside vehicle&#40;s&#41;</td>
					</tr>
					<ModeChoiceRow3
						time1={
							modeChoiceData["mode_1.walktime"] + modeChoiceData["mode_1.waittime"]
						}
						time2={
							modeChoiceData["mode_2.walktime"] + modeChoiceData["mode_2.waittime"]
						}
						time3={
							modeChoiceData["mode_3.walktime"] + modeChoiceData["mode_3.waittime"]
						}
						time4={
							modeChoiceData["mode_4.walktime"] + modeChoiceData["mode_4.waittime"]
						}
						time5={
							modeChoiceData["mode_5.walktime"] + modeChoiceData["mode_5.waittime"]
						}
					/>
					<tr className="h-10 bg-slate-600 text-white">
						<td colSpan={5}>
							Possible delay due to traffic congestion or other uncertainties
						</td>
					</tr>
					<ModeChoiceRow4
						delay1={modeChoiceData["mode_1.tvariab"]}
						delay2={modeChoiceData["mode_2.tvariab"]}
						delay3={modeChoiceData["mode_3.tvariab"]}
						delay4={modeChoiceData["mode_4.tvariab"]}
						delay5={modeChoiceData["mode_5.tvariab"]}
					/>
					<tr className="h-10 bg-slate-600 text-white">
						<td colSpan={5}>Total one-way cost of travel</td>
					</tr>
					<ModeChoiceRow5
						cost1={modeChoiceData["mode_1.tcost"]}
						cost2={modeChoiceData["mode_2.tcost"]}
						cost3={modeChoiceData["mode_3.tcost"]}
						cost4={modeChoiceData["mode_4.tcost"]}
						cost5={modeChoiceData["mode_5.tcost"]}
					/>
					<tr className="h-10 bg-slate-600 text-white">
						<td colSpan={5}>Extent of crowding in the vehicle</td>
					</tr>
					<ModeChoiceRow6
						crowd1={modeChoiceData["mode_1.crowd"]}
						crowd2={modeChoiceData["mode_2.crowd"]}
						crowd3={modeChoiceData["mode_3.crowd"]}
					/>
					<tr className="h-10 bg-slate-600 text-white">
						<td colSpan={5}>Service Type</td>
					</tr>
					<ModeChoiceRow7
						service1={modeChoiceData["mode_1.serv"]}
						service2={modeChoiceData["mode_2.serv"]}
					/>
				</tbody>
			</table>
		);
	} else {
		return <p>Loading...</p>;
	}
}
