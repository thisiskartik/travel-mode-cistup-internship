export default function ModeChoiceRow5({ cost1, cost2, cost3, cost4, cost5 }) {
	return (
		<tr className="bg-gray-100 h-20">
			<td>{cost1 && <>Rs. {cost1}</>}</td>
			<td>{cost2 && <>Rs. {cost2}</>}</td>
			<td>{cost3 && <>Rs. {cost3}</>}</td>
			<td>{cost4 && <>Rs. {cost4}</>}</td>
			<td>{cost5 && <>Rs. {cost5}</>}</td>
		</tr>
	);
}
