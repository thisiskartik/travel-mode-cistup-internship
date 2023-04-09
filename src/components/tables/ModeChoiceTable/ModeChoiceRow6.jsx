import { useMemo } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup, faUsers, faPerson } from "@fortawesome/free-solid-svg-icons";

export default function ModeChoiceRow6({ crowd1, crowd2, crowd3 }) {
	const crowdData = useMemo(
		() => ({
			1: {
				value: "Many seats available",
				icon: <FontAwesomeIcon icon={faUserGroup} />,
			},
			2: {
				value: "Some seats available",
				icon: <FontAwesomeIcon icon={faUsers} />,
			},
			3: {
				value: "All seats occupied; standing space available",
				icon: (
					<div className="flex place-content-center gap-2">
						<FontAwesomeIcon icon={faUsers} />
						<FontAwesomeIcon icon={faPerson} />
					</div>
				),
			},
			4: {
				value: "Fully crowded or packed",
				icon: (
					<div className="flex place-content-center gap-2">
						<FontAwesomeIcon icon={faUsers} />
						<FontAwesomeIcon icon={faUsers} />
					</div>
				),
			},
		}),
		[]
	);

	return (
		<tr className="bg-gray-100 h-20">
			<td>
				{crowdData[crowd1] && (
					<div className="flex flex-col gap-1">
						{crowdData[crowd1].icon}
						{crowdData[crowd1].value}
					</div>
				)}
			</td>
			<td>
				{crowdData[crowd2] && (
					<div className="flex flex-col gap-1">
						{crowdData[crowd2].icon}
						{crowdData[crowd2].value}
					</div>
				)}
			</td>
			<td>
				{crowdData[crowd3] && (
					<div className="flex flex-col gap-1">
						{crowdData[crowd3].icon}
						{crowdData[crowd3].value}
					</div>
				)}
			</td>
			<td></td>
			<td></td>
		</tr>
	);
}
