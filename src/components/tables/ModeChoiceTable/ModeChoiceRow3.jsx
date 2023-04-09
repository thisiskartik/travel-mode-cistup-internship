export default function ModeChoiceRow3({ time1, time2, time3, time4, time5 }) {
	if (time2) {
		console.log(time2);
	}
	return (
		<tr className="bg-gray-100 h-20">
			<td>{time1 && <>{time1}</>}</td>
			<td>{time2 && <>{time2}</>}</td>
			<td>{time3 && <>{time3}</>}</td>
			<td>{time4 && <>{time4}</>}</td>
			<td>{time5 && <>{time5}</>}</td>
		</tr>
	);
}
