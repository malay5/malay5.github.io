import { useParams } from 'react-router-dom';
import ExperienceGallery from '../components/experiences/ExperienceGallery';
import ExperienceHeader from '../components/experiences/ExperienceHeader';
import ExperienceInfo from '../components/experiences/ExperienceInfo';
import ExperienceRelatedProjects from '../components/experiences/ExperienceRelatedProjects';
import { SingleProjectProvider } from '../context/SingleProjectContext';
import { experiencesData } from '../data/experience';
import { motion } from 'framer-motion';
// import ExperienceHeader from '../components/experiences/ExperienceHeader';

const ExperienceSingle = () => {
    const { experienceId } = useParams();
    console.log("Project id",experienceId)
    const project = experiencesData.find((proj) => proj.id === parseInt(experienceId));

    if (!project) {
        return <div>Project not found</div>;
    }
	else{
		console.log(project)
	}

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, delay: 1 }}
            transition={{
                ease: 'easeInOut',
                duration: 0.6,
                delay: 0.15,
            }}
            className="container mx-auto mt-5 sm:mt-10"
        >
            <SingleProjectProvider project={project}>
                <ExperienceHeader project={project} />
                <ExperienceGallery projects={project} />
                <ExperienceInfo project={project} />
                {/* <ExperienceRelatedProjects project={project} /> */}
            </SingleProjectProvider>
        </motion.div>
    );
};

export default ExperienceSingle;
