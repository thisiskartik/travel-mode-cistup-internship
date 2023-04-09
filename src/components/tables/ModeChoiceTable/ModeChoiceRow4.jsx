export default function ModeChoiceRow4({ delay1, delay2, delay3, delay4, delay5 }) {
	return (
		<tr className="bg-gray-100 h-20">
			<td>{delay1 && <>... up to {delay1} min more</>}</td>
			<td>{delay2 && <>... up to {delay2} min more</>}</td>
			<td>{delay3 && <>... up to {delay3} min more</>}</td>
			<td>{delay4 && <>... up to {delay4} min more</>}</td>
			<td>{delay5 && <>... up to {delay5} min more</>}</td>
		</tr>
	);
}
