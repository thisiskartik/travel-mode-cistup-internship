import RadioButton from "../../general/RadioButton";

export default function ModeChoiceRow1({ mode1, mode2, mode3, mode4, mode5 }) {
	return (
		<tr className="bg-gray-800 text-white h-20 text-center">
			<th>
				<RadioButton id={mode1} name="mode" value={mode1} className="mb-2" align="center" />{" "}
				{mode1}
			</th>
			<th>
				<RadioButton id={mode2} name="mode" value={mode2} className="mb-2" align="center" />{" "}
				{mode2}
			</th>
			<th>
				<RadioButton id={mode3} name="mode" value={mode3} className="mb-2" align="center" />{" "}
				{mode3}
			</th>
			<th>
				<RadioButton id={mode4} name="mode" value={mode4} className="mb-2" align="center" />{" "}
				{mode4}
			</th>
			<th>
				<RadioButton id={mode5} name="mode" value={mode5} className="mb-2" align="center" />{" "}
				{mode5}
			</th>
		</tr>
	);
}
