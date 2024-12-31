import { useState } from 'react';
export function EducationalInformation(props) {
	const [items, handleItem] = useState(props);
	const handleChange = (e) => {
		handleItem({
			...items,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<form className='formInput divided' action=''>
			<h2>Education Information: </h2>
			<label htmlFor='school'>School:</label>
			<input
				type='text'
				name='school'
				id='schoolInput'
				value={items.school}
				onChange={handleChange}
				maxLength={70}
				placeholder='UCLA'
			/>
			<label htmlFor='studyTitle'>Area of Study:</label>
			<input
				placeholder='Computer Science'
				name='studyTitle'
				id='studyTitleInput'
				type='text'
				value={items.studyTitle}
				onChange={handleChange}
				maxLength={40}
			/>
			<label htmlFor='dateStudy'>Date of Study:</label>
			<input
				type='date'
				name='dateStudy'
				id='dateStudyInput'
				value={items.dateStudy}
				onChange={handleChange}
			/>
			<input
				className='interactiveButton'
				type='submit'
				value='Submit'
				onSubmit={handleSubmit}
				onClick={handleSubmit}
			/>
		</form>
	);
}
