import ExperienceGrid from '../components/experiences/ExperienceGrid';
import { ExperincesProvider } from '../context/ExpereincesContext';

const Experiences = () => {
	return (
		<ExperincesProvider>
			<div className="container mx-auto">
				
				<ExperienceGrid />
			</div>
		</ExperincesProvider>
	);
};

export default Experiences;
