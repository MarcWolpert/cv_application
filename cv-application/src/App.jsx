// App.jsx
import { useState } from 'react';
import './App.css';
import { BasicInformation } from './components/basicInformation';
import { EducationalInformation } from './components/educationalInformation';
import { PracticalExperience } from './components/practicalExperience';

function App() {
	const [basicInformation, setBasicInformation] = useState({});
	const [educationalInformation, setEducationalInformation] = useState({});
	const [practicalInformation, setPracticalInformation] = useState({});

	return (
		<div id='container'>
			<div id='inputContent'>
				<BasicInformation
					onChange={setBasicInformation}
					name={''}
					email={''}
					phoneNumber={''}
				/>
				<EducationalInformation
					onChange={setEducationalInformation}
					school={''}
					studyTitle={''}
					dateStudy={''}
				/>
				<PracticalExperience onChange={setPracticalInformation} />
			</div>
			<div id='displayContent'>
				<ul>
					<li>{basicInformation.name}</li>
					<li>{basicInformation.email}</li>
					<li>{basicInformation.phoneNumber}</li>
					<li>{educationalInformation.school}</li>
					<li>{educationalInformation.studyTitle}</li>
					<li>{educationalInformation.dateStudy}</li>
					{Object.entries(practicalInformation).map(([infoKey, infoValues]) => {
						return Object.entries(infoValues).map(([fieldKey, fieldValue]) => {
							return <li key={`${infoKey}-${fieldKey}`}>{fieldValue}</li>;
						});
					})}
				</ul>
			</div>
		</div>
	);
}

export default App;
