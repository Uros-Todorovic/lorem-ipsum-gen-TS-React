import { type ComponentPropsWithoutRef } from 'react';

type InputProps = {
	id: string;
	label: string;
} & ComponentPropsWithoutRef<'input'>;

const Input = ({ id, label, ...props }: InputProps) => {
	return (
		<>
			<label htmlFor={id}>{label}</label>
			<input id={id} {...props} />
		</>
	);
};

export default Input;
