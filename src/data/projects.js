import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/web-project-2.jpg';
import MobileImage1 from '../images/mobile-project-1.jpg';
import MobileImage2 from '../images/mobile-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';

import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';
import Image4 from '../images/mobile-project-1.jpg';
import Image5 from '../images/web-project-1.jpg';
import Image6 from '../images/ui-project-2.jpg';

import Timenote_1 from "../images/timenote_1.PNG"
import Timenote_2 from "../images/timenote_2.PNG"
import Timenote_3 from "../images/timenote_3.PNG"

import resumania_1 from "../images/resumania.png"

import captures_1 from "../images/captures.png"

import nativelyopen_1 from "../images/nativelyopen.png"

import coderella_1 from "../images/coderella.PNG"
import coderella_2 from "../images/coderella.PNG"
import coderella_3 from "../images/coderella.PNG"

import UIImage2 from '../images/ui-project-2.jpg';

import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const projectsData = [
	{
		id: 1,
		title: 'Resumania - AI Resume Maker',
		category: 'Web Application + AI',
		img: resumania_1,
		ProjectHeader: {
			title: 'Resumania - AI Resume Maker',
			publishDate: 'Jul 27, 2021',
			tags: 'UI / Frontend',
			description: 'Resumania is an AI resume maker using Next.js, FastAPI, LLM API, MongoDB, and Node.js.',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: Image1,
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: Image2,
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: Image3,
			},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To create an AI-powered tool that helps users build professional resumes effortlessly.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Next.js',
						'FastAPI',
						'LLM API',
						'MongoDB',
						'Node.js',
					],
				},
			],
			ProjectDetailsHeading: 'Work Done',
			ProjectDetails: [
				{
					id: 1,
					details: `In developing Resumania, we embarked on creating a comprehensive AI-powered resume builder designed to simplify the resume creation process for users. Our team leveraged Next.js to build a responsive and dynamic user interface that ensures an optimal user experience across various devices. FastAPI was chosen for its high performance and ease of integration with the AI models. We integrated a language model API (LLM API) to dynamically generate personalized resume content based on user inputs, significantly reducing the time and effort required for users to create their resumes.`,
				},
				{
					id: 2,
					details: `The development process involved implementing secure data management practices using MongoDB to ensure user privacy and data security, adhering to industry standards and regulations. The backend, built using Node.js, facilitated seamless interaction between the frontend and the AI models, ensuring a smooth and efficient user experience. Throughout the development process, we focused on creating an intuitive and user-friendly interface, incorporating feedback from user testing to continually improve the application's usability and functionality.`,
				},
				{
					id: 3,
					details: `Looking ahead, our future scope includes expanding the AI capabilities to offer more personalized and diverse resume templates, integrating additional features such as job application tracking and interview preparation tools. We also plan to enhance the security measures and scalability of the platform to accommodate a growing user base, ensuring that Resumania remains a reliable and innovative tool for job seekers worldwide.`,
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/realstoman',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/realstoman',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/c/StomanStudio',
				},
			],
		},
	},
	{
		id: 2,
		title: 'Captures.Live',
		category: 'Web + Mobile + AI Application',
		img: captures_1,
		ProjectHeader: {
			title: 'Captures.Live',
			publishDate: 'Aug 15, 2021',
			tags: 'Mobile / AI',
			description: 'Captures.Live is an AI face detection model and image storage application using Next.js, Node.js, Python, OpenCV, PostgreSQL, MongoDB, and AWS.',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'AI Face Detection Model',
				img: Image1,
			},
			{
				id: 2,
				title: 'AI Face Detection Model',
				img: Image2,
			},
			{
				id: 3,
				title: 'AI Face Detection Model',
				img: Image3,
			},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To simplify the process of identifying people in event photos and provide a secure image storage solution.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Next.js',
						'Node.js',
						'Python',
						'OpenCV',
						'PostgreSQL',
						'MongoDB',
						'AWS',
					],
				},
			],
			ProjectDetailsHeading: 'Work Done',
			ProjectDetails: [
				{
					id: 1,
					details: `The development of Captures.Live involved creating a sophisticated AI model capable of accurately detecting faces in various conditions, such as different lighting and angles, which we achieved using Python and OpenCV. This AI model was integrated into a user-friendly application built with Next.js, ensuring a seamless and intuitive user experience.`,
				},
				{
					id: 2,
					details: `The backend infrastructure, constructed using Node.js and PostgreSQL, was designed to handle high volumes of image data efficiently, supporting swift image storage and retrieval. We also incorporated MongoDB to manage user data and AWS to provide a secure and scalable cloud storage solution, enhancing the application's performance and reliability. Throughout the development process, we emphasized data security and user privacy, implementing best practices to protect user information.`,
				},
				{
					id: 3,
					details: `Looking to the future, we plan to enhance Captures.Live by incorporating more advanced AI features such as emotion recognition and image tagging. We also aim to expand the storage capabilities and introduce new functionalities like collaborative albums and event-based photo sharing. Our goal is to make Captures.Live a comprehensive solution for managing and organizing event photos, providing users with an unparalleled digital asset management experience.`,
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/realstoman',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/realstoman',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/c/StomanStudio',
				},
			],
		},
	},
	{
		id: 3,
		title: 'NativelyOpen.me',
		category: 'Web Application',
		img: nativelyopen_1,
		ProjectHeader: {
			title: 'NativelyOpen.me',
			publishDate: 'Sep 10, 2021',
			tags: 'Web / Tools',
			description: 'NativelyOpen.me is a link shortener and dashboard for influencers to track link clicks using Next.js, Node.js, Redis, and MongoDB.',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Link Shortening Dashboard',
				img: Image4,
			},
			{
				id: 2,
				title: 'Link Shortening Dashboard',
				img: Image5,
			},
			{
				id: 3,
				title: 'Link Shortening Dashboard',
				img: Image6,
			},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To provide influencers with an easy-to-use tool for shortening links and tracking engagement metrics.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Next.js',
						'Node.js',
						'Redis',
						'MongoDB',
					],
				},
			],
			ProjectDetailsHeading: 'Work Done',
			ProjectDetails: [
				{
					id: 1,
					details: `The development of NativelyOpen.me was driven by the need for a scalable and efficient link management tool. We utilized Next.js to create a responsive and interactive user interface that allows influencers to easily shorten links and view engagement metrics. The backend, built with Node.js, was designed to handle a high volume of requests, ensuring fast and reliable link redirection.`,
				},
				{
					id: 2,
					details: `To manage the real-time data, we integrated Redis, which provides quick access to frequently used data, enhancing the performance of the application. MongoDB was used to store user data and link statistics securely, ensuring data integrity and availability. Throughout the development, we focused on optimizing the application's performance and user experience, conducting extensive testing and iteration to achieve the best results.`,
				},
				{
					id: 3,
					details: `In the future, we plan to expand NativelyOpen.me's features by adding advanced analytics capabilities, such as geographical tracking and user behavior analysis. We also aim to introduce integration with various social media platforms, allowing influencers to manage their links and view engagement metrics directly from their social media accounts. Our goal is to create a comprehensive link management and analytics tool that meets the evolving needs of influencers and marketers.`,
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/realstoman',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/realstoman',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/c/StomanStudio',
				},
			],
		},
	},
	{
		id: 4,
		title: 'Timenote: Your Personal Scheduling Assistant',
		category: 'Web Application',
		img: Timenote_1,
		ProjectHeader: {
			title: 'Timenote: Your Personal Scheduling Assistant',
			publishDate: 'Oct 5, 2021',
			tags: 'Web / Productivity',
			description: 'Timenote is a Calendly clone using Next.js, Node.js, and MongoDB.',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Home Page',
				img: Timenote_1,
			},
			{
				id: 2,
				title: 'Blog Page',
				img: Timenote_2,
			},
			{
				id: 3,
				title: 'Scheduling Dashboard',
				img: Timenote_3,
			},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To provide users with an efficient scheduling tool that simplifies appointment management.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Next.js',
						'Node.js',
						'MongoDB',
					],
				},
			],
			ProjectDetailsHeading: 'Work Done',
			ProjectDetails: [
				{
					id: 1,
					details: `The development of Timenote aimed to create a seamless scheduling experience for users, similar to that of Calendly. We used Next.js to build a responsive user interface that allows users to easily create and manage appointments. The backend was constructed using Node.js, providing a robust and scalable foundation for handling user data and scheduling logic.`,
				},
				{
					id: 2,
					details: `MongoDB was employed to store user data and appointment information, ensuring quick access and reliability. We implemented various features such as calendar integration, automatic email notifications, and customizable scheduling options to enhance the user experience. Throughout the project, we conducted extensive user testing to refine the application's functionality and usability.`,
				},
				{
					id: 3,
					details: `In the future, we plan to introduce additional features such as video conferencing integration, advanced scheduling analytics, and team collaboration tools. Our goal is to make Timenote a comprehensive scheduling assistant that caters to both individual users and teams, streamlining the appointment scheduling process and improving overall productivity.`,
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/realstoman',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/realstoman',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/c/StomanStudio',
				},
			],
		},
	},
	{
		id: 5,
		title: 'Coderella',
		category: 'Web Application',
		img: coderella_1,
		ProjectHeader: {
			title: 'Coderella - Empowering Girls in Tech',
			publishDate: 'Nov 10, 2021',
			tags: 'Web / Education / Funding',
			description: 'Coderella is a platform designed to empower girls by providing funding for their studies and offering resources to learn about coding.',
		},
		ProjectImages: [
			{
				id: 1,
				title: 'Empowering Girls in Tech',
				img: coderella_1,
			},
			{
				id: 2,
				title: 'Empowering Girls in Tech',
				img: coderella_2,
			},
			{
				id: 3,
				title: 'Empowering Girls in Tech',
				img: coderella_3,
			},
		],
		ProjectInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To create a supportive community where girls can obtain funding for their education and learn coding skills to advance their careers in technology.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'React',
						'Node.js',
						'Express',
						'MongoDB',
						'Stripe API',
					],
				},
			],
			ProjectDetailsHeading: 'Work Done',
			ProjectDetails: [
				{
					id: 1,
					details: `Coderella was conceptualized with the aim of bridging the gender gap in technology by providing girls with the necessary resources and support to excel in their studies and careers. The platform was developed using React for a responsive and interactive user interface, making it accessible and easy to use for all users. Our team utilized Node.js and Express to build a robust backend infrastructure that handles user registrations, profile management, and secure payment processing through the Stripe API.`,
				},
				{
					id: 2,
					details: `The development process included extensive research and collaboration with educators and industry experts to create a comprehensive curriculum that covers various aspects of coding, from basic programming to advanced topics. MongoDB was used to manage user data and ensure secure storage of personal information. We also integrated features that allow users to create fundraising campaigns, donate to other users' campaigns, and track their funding progress in real-time.`,
				},
				{
					id: 3,
					details: `Moving forward, our future plans for Coderella include expanding the platform's reach by partnering with schools and tech organizations to provide more resources and opportunities for girls interested in coding. We aim to introduce new features such as mentorship programs, coding competitions, and collaborative projects to further engage and support our users. Additionally, we plan to enhance the platform's scalability and security to accommodate a growing user base and ensure a safe and empowering environment for all users.`,
				},
			],
			SocialSharingHeading: 'Share This',
			SocialSharing: [
				{
					id: 1,
					name: 'Twitter',
					icon: <FiTwitter />,
					url: 'https://twitter.com/realstoman',
				},
				{
					id: 2,
					name: 'Instagram',
					icon: <FiInstagram />,
					url: 'https://instagram.com/realstoman',
				},
				{
					id: 3,
					name: 'Facebook',
					icon: <FiFacebook />,
					url: 'https://facebook.com/',
				},
				{
					id: 4,
					name: 'LinkedIn',
					icon: <FiLinkedin />,
					url: 'https://linkedin.com/',
				},
				{
					id: 5,
					name: 'Youtube',
					icon: <FiYoutube />,
					url: 'https://www.youtube.com/c/StomanStudio',
				},
			],
		},
	},
];
