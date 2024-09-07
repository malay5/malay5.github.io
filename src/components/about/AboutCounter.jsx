import { useCountUp } from 'react-countup';
import CounterItem from './CounterItem';

const AboutCounter = () => {
	useCountUp({ ref: 'experienceCounter', end: 2, duration: 2 });
	useCountUp({ ref: 'githubStarsCounter', end: 20, duration: 2 });
	useCountUp({ ref: 'feedbackCounter', end: 92, duration: 2 });
	useCountUp({ ref: 'projectsCounter', end: 77, duration: 2 });
	useCountUp({ ref: 'commitCounter', end: 1775, duration: 4 });
	useCountUp({ ref: 'projectCounter', end: 10, duration: 4 });
	useCountUp({ ref: 'technologiesMastered', end: 10, duration: 4 });

	return (
		<div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
			<div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
				<CounterItem
					title="Years of experience"
					counter={<span id="experienceCounter" />}
					measurement="+"
				/>

				<CounterItem
					title="Projects Completed"
					counter={<span id="projectCounter" />}
					measurement="+"
				/>

<CounterItem
					title="Technologies Mastered"
					counter={<span id="technologiesMastered" />}
					measurement="+"
				/>

<CounterItem
					title="Github Code Commits"
					counter={<span id="commitCounter" />}
					measurement="+"
				/>

				{/* <CounterItem
					title="Stars on GitHub"
					counter={<span id="githubStarsCounter" />}
					measurement="k+"
				/> */}

				{/* <CounterItem
					title="Positive feedback"
					counter={<span id="feedbackCounter" />}
					measurement="%"
				/> */}

				{/* <CounterItem
					title="Projects completed"
					counter={<span id="projectsCounter" />}
					measurement="%"
				/> */}
			</div>
		</div>
	);
};

export default AboutCounter;
