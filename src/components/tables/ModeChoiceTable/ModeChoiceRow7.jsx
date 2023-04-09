import { useMemo } from "react";

import {
	faStarHalfStroke,
	faStar,
	faTemperatureArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ModeChoiceRow7({ service1, service2 }) {
	const serviceData = useMemo(
		() => ({
			1: {
				value: "Ordinary",
				icon: <FontAwesomeIcon icon={faStarHalfStroke} />,
			},
			2: {
				value: "Express Non-AC",
				icon: <FontAwesomeIcon icon={faStar} />,
			},
			3: {
				value: "Express AC",
				icon: (
					<div className="flex place-content-center gap-2">
						<FontAwesomeIcon icon={faStar} />
						<FontAwesomeIcon icon={faTemperatureArrowDown} />
					</div>
				),
			},
		}),
		[]
	);

	return (
		<tr className="bg-gray-100 h-20">
			<td>
				{serviceData[service1] && (
					<div className="flex flex-col gap-1">
						{serviceData[service1].icon}
						{serviceData[service1].value}
					</div>
				)}
			</td>
			<td>
				{serviceData[service2] && (
					<div className="flex flex-col gap-1">
						{serviceData[service2].icon}
						{serviceData[service2].value}
					</div>
				)}
			</td>
			<td></td>
			<td></td>
			<td></td>
		</tr>
	);
}
