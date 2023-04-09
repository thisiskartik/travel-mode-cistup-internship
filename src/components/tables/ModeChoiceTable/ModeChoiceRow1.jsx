import RadioButton from "../../general/RadioButton";

export default function ModeChoiceRow1({ mode1, mode2, mode3, mode4, mode5 }) {
	return (
		<tr className="bg-gray-800 text-white h-20 text-center">
			<th>
				<RadioButton
					id={mode1}
					name="mode"
					value={mode1}
					className="place-self-center w-full mb-2"
				/>{" "}
				{mode1}
			</th>
			<th>
				<RadioButton
					id={mode2}
					name="mode"
					value={mode2}
					className="place-self-center w-full mb-2"
				/>{" "}
				{mode2}
			</th>
			<th>
				<RadioButton
					id={mode3}
					name="mode"
					value={mode3}
					className="place-self-center w-full mb-2"
				/>{" "}
				{mode3}
			</th>
			<th>
				<RadioButton
					id={mode4}
					name="mode"
					value={mode4}
					className="place-self-center w-full mb-2"
				/>{" "}
				{mode4}
			</th>
			<th>
				<RadioButton
					id={mode5}
					name="mode"
					value={mode5}
					className="place-self-center w-full mb-2"
				/>{" "}
				{mode5}
			</th>
		</tr>
	);
}
