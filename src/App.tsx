import { type ChangeEvent, useState } from 'react';
import Form from './Form';
import Input from './Input';
import Button from './Button';
import loremData from './data.js';
import { nanoid } from 'nanoid';

type InputData = {
	amount: string;
};

const App = () => {
	const [count, setCount] = useState(1);
	const [text, setText] = useState<string[]>([]);

	const handleSave = (data: unknown) => {
		const { amount } = data as InputData;
		setText(loremData.slice(0, parseInt(amount)));
	};

	return (
		<section className="section-center">
			<h4>tired of boring lorem ipsum?</h4>
			<Form className="lorem-form" onSave={handleSave}>
				<Input
					id="amount"
					label="amount"
					name="amount"
					type="number"
					min="1"
					step="1"
					max="8"
					value={count}
					onChange={(e: ChangeEvent<HTMLInputElement>) => setCount(parseInt(e.target.value))}
				/>
				<Button className="btn" text="generate" type="submit" />
			</Form>
			<article className="lorem-text">
				{text.map((item) => {
					return <p key={nanoid()}>{item}</p>;
				})}
			</article>
		</section>
	);
};
export default App;
