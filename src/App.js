import { AnimatePresence } from 'framer-motion';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import AppFooter from './components/shared/AppFooter';
import AppHeader from './components/shared/AppHeader';
import './css/App.css';
import UseScrollToTop from './hooks/useScrollToTop';

const About = lazy(() => import('./pages/AboutMe'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const ProjectSingle = lazy(() => import('./pages/ProjectSingle.jsx'));
const ProjectSingle_1 = lazy(() => import('./pages/ProjectSingle_1.jsx'));

const Experiences = lazy(() => import('./pages/Experiences'));
const ExperienceSingle = lazy(() => import('./pages/ExperienceSingle.jsx'));


function App() {
	return (
		<AnimatePresence>
			<div className=" bg-secondary-light dark:bg-primary-dark transition duration-300">
				<Router>
					<ScrollToTop />
					<AppHeader />
					<Suspense fallback={""}>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="projects" element={<Projects />} />
							<Route path="/experiences" element={<Experiences />} />
							{/* <Route
								path="experiences/single-experience"
								element={<ExperienceSingle />}
							/> */}
							
							<Route
								path="projects/single-project"
								element={<ProjectSingle />}
							/>
							<Route path="projects/:projectId" element={<ProjectSingle />} />

							<Route path="experiences/:experienceId" element={<ExperienceSingle />} />


							<Route path="about" element={<About />} />
							<Route path="contact" element={<Contact />} />
						</Routes>
					</Suspense>
					<AppFooter />
				</Router>
				<UseScrollToTop />
			</div>
		</AnimatePresence>
	);
}

export default App;
