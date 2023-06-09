export default function RadioButton({ id, value, name, label, className, align }) {
	return (
		<div className={`flex flex-row justify-${align ? align : "right"} items-center gap-2`}>
			<input
				className={`accent-primary scale-150 ${className}`}
				type="radio"
				id={id}
				name={name}
				value={value}
			/>
			<label htmlFor={id}>{label}</label>
		</div>
	);
}
