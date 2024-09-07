import { useState, createContext } from 'react';
import { experiencesData } from '../data/experience';

// Create projects context
export const ExpereincesContext = createContext();

// Create the projects context provider
export const ExperincesProvider = (props) => {
	const [experiences, setExperiences] = useState(experiencesData);
	console.log(experiencesData)
	const [searchExperience, setSearchExperience] = useState('');
	const [selectExperience, setSelectExperience] = useState('');

	// Search projects by project title
	const searchExperiencesByTitle = experiences.filter((item) => {
		const result = item.title
			.toLowerCase()
			.includes(searchExperience.toLowerCase())
			? item
			: searchExperience === ''
			? item
			: '';
		return result;
	});

	// Select projects by project category
	const selectExperiencesByCategory = experiences.filter((item) => {
		let category =
			item.category.charAt(0).toUpperCase() + item.category.slice(1);
		return category.includes(selectExperience);
	});

	return (
		<ExpereincesContext.Provider
			value={{
				experiences,
				selectExperience,
				searchExperience,
				setSearchExperience,
				searchExperiencesByTitle,
				setSelectExperience,
				setSearchExperience,
				selectExperiencesByCategory,
			}}
		>
			{props.children}
		</ExpereincesContext.Provider>
	);
};
