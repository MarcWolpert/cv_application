// PracticalExperience.jsx
import { useState } from 'react';

export function PracticalExperience() {
	const [forms, setForms] = useState([
		{
			companyName: '',
			positionTitle: '',
			responsibilities: '',
			dateFrom: '',
			dateTo: '',
		},
	]);

	const handleChange = (index, e) => {
		const updatedForms = [...forms];
		updatedForms[index] = {
			...updatedForms[index],
			[e.target.name]: e.target.value,
		};
		setForms(updatedForms);
	};

	const addNewForm = () => {
		setForms([
			...forms,
			{
				companyName: '',
				positionTitle: '',
				responsibilities: '',
				dateFrom: '',
				dateTo: '',
			},
		]);
	};

	const deleteForm = (e, index) => {
		e.preventDefault();
		if (forms.length > 1) {
			const updatedForms = [...forms];
			updatedForms.splice(index, 1);
			setForms(updatedForms);
		}
	};

	return (
		<div className='workExperienceContainer'>
			{forms.map((form, index) => (
				<form key={index} className='formInput divided'>
					<h2 className='experienceCounter'>Work Experience #{index + 1}:</h2>
					<label htmlFor={`companyName-${index}`}>Company Name:</label>
					<input
						type='text'
						name='companyName'
						id={`companyName-${index}`}
						value={form.companyName}
						onChange={(e) => handleChange(index, e)}
						maxLength={70}
						placeholder='Google'
					/>
					<label htmlFor={`positionTitle-${index}`}>Position Title:</label>
					<input
						type='text'
						name='positionTitle'
						id={`positionTitle-${index}`}
						value={form.positionTitle}
						onChange={(e) => handleChange(index, e)}
						maxLength={70}
						placeholder='Data Scientist'
					/>
					<label htmlFor={`responsibilities-${index}`}>Main Responsibilities:</label>
					<input
						type='text'
						name='responsibilities'
						id={`responsibilities-${index}`}
						value={form.responsibilities}
						onChange={(e) => handleChange(index, e)}
						maxLength={70}
					/>
					<label htmlFor={`dateFrom-${index}`}>Date Worked From:</label>
					<input
						type='date'
						name='dateFrom'
						id={`dateFrom-${index}`}
						value={form.dateFrom}
						onChange={(e) => handleChange(index, e)}
					/>
					<label htmlFor={`dateTo-${index}`}>Date Worked Until:</label>
					<input
						type='date'
						name='dateTo'
						id={`dateTo-${index}`}
						value={form.dateTo}
						onChange={(e) => handleChange(index, e)}
					/>
					<button
						className='deleteButton interactiveButton'
						onClick={(e) => {
							console.log('Delete Button Clicked.');
							deleteForm(e, index);
						}}
					>
						Delete
					</button>
				</form>
			))}
			<button
				className='addMore interactiveButton'
				id='addMoreID'
				type='button'
				onClick={addNewForm}
			>
				Add More Experience
			</button>
		</div>
	);
}
