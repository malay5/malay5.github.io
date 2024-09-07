// Import images
import WebImage1 from '../images/web-project-1.jpg';
import WebImage2 from '../images/web-project-2.jpg';
import MobileImage1 from '../images/mobile-project-1.jpg';
import MobileImage2 from '../images/mobile-project-2.jpg';
import UIImage1 from '../images/ui-project-1.jpg';
import UIImage2 from '../images/ui-project-2.jpg';
import Sharperly from '../images/sharperly.png'
import Specx from '../images/specx.PNG'
import Locus from '../images/Locus.PNG'
import Grobanq from '../images/grobanq.png'
import Blackcoat from '../images/blackcoat.png'
import Th1 from '../images/th1.PNG'
import Image1 from '../images/ui-project-1.jpg';
import Image2 from '../images/web-project-2.jpg';
import Image3 from '../images/mobile-project-2.jpg';

import Grobanq1 from "../images/grobanq_1.png"
import Grobanq2 from "../images/grobanq_2.png"
import Grobanq3 from "../images/grobanq_3.png"

import Sharperly1 from "../images/sharperly_1.png"
import Sharperly2 from "../images/sharperly_2.png"
import Sharperly3 from "../images/sharperly_3.png"

import BlackCoat_1 from "../images/blackcoat_1.png"
import BlackCoat_2 from "../images/blackcoat_2.png"
import BlackCoat_3 from "../images/blackcoat_3.png"

import Specx_1 from "../images/specx_1.PNG"
import Specx_2 from "../images/specx_2.PNG"
import Specx_3 from "../images/specx_3.PNG"

import {
	FiFacebook,
	FiInstagram,
	FiLinkedin,
	FiTwitter,
	FiYoutube,
} from 'react-icons/fi';

export const experiencesData = [
	{
		id: 5,
		title: 'Specx E-Learning (LMS)',
		category: 'Freelance Full Stack Web Developer',
		location: "India",
		img: Specx, // Add the image path if available
		ExperienceHeader: {
			title: 'Specx E-Learning (LMS)',
			publishDate: 'Jul 27, 2021',
			tags: 'UI / Frontend',
			description: '',
		},
		ExperienceImages: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: Specx_1,
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: Specx_2,
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: Specx_3,
			},
		],
		ExperienceInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To develop a comprehensive e-learning platform that facilitates seamless learning experiences for students and educators through an intuitive and interactive interface.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'React.js',
						'MongoDB',
						'Node.js',
					],
				},
			],
			ProjectDetailsHeading: 'Work Done',
			ProjectDetails: [
				{
					id: 1,
					details: `The development of Specx E-Learning (LMS) was initiated with the goal of creating a modern and efficient learning management system that caters to the needs of students and educators. Leveraging React.js, we designed a responsive and user-friendly interface that allows users to navigate through courses, assignments, and resources with ease. The backend, built using Node.js, ensures efficient data processing and secure user authentication, while MongoDB provides a robust database solution for storing course materials, user data, and other critical information.`,
				},
				{
					id: 2,
					details: `Throughout the development process, we focused on implementing features that enhance the learning experience, such as real-time notifications, interactive quizzes, and progress tracking. Our team collaborated with educators to ensure that the platform meets the educational standards and requirements. We also integrated various APIs to facilitate seamless content delivery and communication between students and educators.`,
				},
				{
					id: 3,
					details: `Moving forward, our future scope includes expanding the platform's capabilities by incorporating advanced features such as AI-driven personalized learning paths, virtual classrooms, and gamified learning experiences. We also aim to enhance the platform's scalability to accommodate a growing user base and ensure a secure and reliable learning environment. Additionally, we plan to establish partnerships with educational institutions to broaden the platform's reach and impact.`,
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
		title: 'Locus - Logistics Optimization & Decision-making Platform',
		category: 'Data Science Intern',
		location: " Bengaluru, India",
		img: Locus, // Add the image path if available
		ExperienceHeader: {
			title: 'Contributed to the development and testing of a comprehensive geocoder using Python, resulting in an in-house solution for accurate and efficient address geocoding.',
			publishDate: 'Nov 2022 - July 2023',
			tags: 'Data Science / Geocoding',
		},
		ExperienceInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To optimize logistics and decision-making processes through the development and implementation of a comprehensive geocoding solution.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'Python',
						'Geocoding APIs',
						'Data Science',
					],
				},
			],
			ProjectDetailsHeading: 'Work Done',
			ProjectDetails: [
				{
					id: 1,
					details: `During my internship at Locus, I was involved in the development and testing of a geocoding solution aimed at improving the accuracy and efficiency of address geocoding. Using Python and various geocoding APIs, we built a robust geocoder that could handle a large volume of address data with high precision. The solution was designed to integrate seamlessly with the existing logistics platform, providing real-time geocoding capabilities that enhanced route optimization and decision-making processes.`,
				},
				{
					id: 2,
					details: `The methodology involved extensive data analysis and testing to ensure the accuracy and reliability of the geocoding results. We implemented machine learning algorithms to refine the geocoding process and reduce errors. Additionally, we developed tools for data validation and error correction, ensuring that the geocoded addresses met the required standards for logistics operations.`,
				},
				{
					id: 3,
					details: `In the future, the focus will be on further enhancing the geocoding solution by incorporating more advanced machine learning techniques and expanding the database of address information. We also plan to integrate additional features such as real-time traffic data and predictive analytics to further optimize logistics operations. By continuously improving the geocoding solution, we aim to provide a more efficient and reliable logistics platform that can meet the evolving needs of the industry.`,
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
		title: 'Grobanq: Nigerian FinTech Company',
		category: 'Founding Software Developer',
		location:"Remote",
		img: Grobanq, // Add the image path if available
		ExperienceHeader: {
			title:'Grobanq: Nigerian FinTech Company',
			description: 'Initiated and led the software development efforts at Grobanq, a pioneering Nigerian FinTech company, leveraging MongoDB, ExpressJS, NodeJS, NextJS, and Anchor technologies.',
			publishDate: 'Sept 2023 - Feb 2024',
			tags: 'FinTech / Nigerian Market',
		},
		ExperienceInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To develop a cutting-edge FinTech platform tailored for the Nigerian market, providing secure and efficient financial services to users.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'MongoDB',
						'ExpressJS',
						'NodeJS',
						'NextJS',
						'Anchor',
					],
				},
			],
			ProjectDetailsHeading: 'Work Done',
			ProjectDetails: [
				{
					id: 1,
					details: `As the founding software developer at Grobanq, I led the development of a comprehensive FinTech platform designed to address the unique financial needs of the Nigerian market. Utilizing MongoDB, ExpressJS, NodeJS, and NextJS, we built a secure and scalable backend system that supports various financial services, including digital wallets, payments, and loans. The platform's user interface, developed with NextJS, ensures a seamless and intuitive user experience.`,
				},
				{
					id: 2,
					details: `Throughout the development process, we prioritized security and compliance with financial regulations. We implemented robust authentication and encryption mechanisms to protect user data and transactions. Additionally, we integrated Anchor technology to facilitate decentralized finance (DeFi) solutions, enabling users to access innovative financial products and services.`,
				},
				{
					id: 3,
					details: `Looking ahead, our future scope includes expanding the platform's capabilities by adding more financial services and improving the user experience through continuous feedback and iteration. We also plan to explore partnerships with other FinTech companies and financial institutions to broaden our service offerings and reach more users. By staying at the forefront of FinTech innovation, Grobanq aims to become a leading financial services provider in Nigeria and beyond.`,
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
		ExperienceImages: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: Grobanq1,
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: Grobanq2,
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: Grobanq3,
			},
		],

	},
	{
		id: 2,
		title: 'Blackcoat.tech',
		category: 'Cofounder (CTO)',
		location:"Delhi",
		img: Blackcoat, // Add the image path if available
		ExperienceImages: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: BlackCoat_1,
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: BlackCoat_2,
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: BlackCoat_3,
			},
		],
		ExperienceHeader: {
			title: 'Blackcoat.tech - AI-powered Legal Consultation Platform',
			description:'Co-founded and led development of Blackcoat.tech, pioneering a cutting-edge RAG-based Chatbot for Indian Law, positioning it as an industry leader in legal technology.',
			publishDate: 'Nov 2023 - Feb 2024',
			tags: 'Chatbot / Legal Technology / RAG',
		},
		ExperienceInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To develop a revolutionary chatbot that leverages Retrieval-Augmented Generation (RAG) technology to provide accurate and efficient legal assistance in the Indian legal context.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'RAG Technology',
						'Natural Language Processing (NLP)',
						'Machine Learning',
					],
				},
			],
			ProjectDetailsHeading: 'Work Done',
			ProjectDetails: [
				{
					id: 1,
					details: `As a cofounder and CTO of Blackcoat.tech, I led the development of a state-of-the-art chatbot designed to assist with legal queries and processes in India. Using RAG technology, we created a system that combines information retrieval with natural language generation to provide precise and contextually relevant responses to user queries. This approach significantly enhances the chatbot's ability to handle complex legal questions and deliver accurate information.`,
				},
				{
					id: 2,
					details: `The development process involved extensive research and collaboration with legal experts to ensure that the chatbot's responses are legally sound and reliable. We implemented advanced machine learning algorithms to improve the chatbot's understanding of legal terminology and context. Additionally, we focused on creating a user-friendly interface that allows users to interact with the chatbot effortlessly, ensuring a seamless and efficient user experience.`,
				},
				{
					id: 3,
					details: `Looking forward, we plan to expand the chatbot's capabilities by incorporating more advanced NLP techniques and machine learning models to further enhance its accuracy and efficiency. We also aim to extend the chatbot's coverage to include more areas of law and legal processes, making it a comprehensive tool for legal assistance. By continuously innovating and improving the technology, Blackcoat.tech strives to remain at the forefront of legal technology and provide unparalleled value to its users.`,
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
		id: 6,
		title: 'Sharperly: The Dispatch Giant of Africa',
		location:"Remote",
		category: 'Founding Software Developer',
		img: Sharperly, // Add the image path if available
		ExperienceHeader: {
			title: 'Sharperly: The Dispatch Giant of Africa',
			description: 'Led a team of 4 developers in the design, development, and deployment of backend systems for a logistics company specializing in parcel delivery.',
			publishDate: 'August 2023 - Present',
			tags: 'Logistics / Backend Development',
		},
		ExperienceInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To develop and deploy a robust backend system for a logistics company, enhancing parcel delivery efficiency and management.',
			Technologies: [
				{
					title: 'Tools & Technologies',
					techs: [
						'React Native (App development)',
						'Python',
						'GoLang',
						'Nextjs',
						'NodeJS',
						'MongoDB',
						'Paystack (Payment Gateway)'
					],
				},
			],
			ProjectDetailsHeading: 'Work Done',
			ProjectDetails: [
				{
					id: 1,
					details: `At Sharperly, I led a team of developers in creating a comprehensive backend system for a logistics company. The system was designed to handle various logistics operations, including parcel tracking, delivery management, and customer notifications. We utilized advanced database management techniques to ensure data integrity and reliability, while also implementing efficient API integration to facilitate seamless communication between different components of the logistics platform.`,
				},
				{
					id: 2,
					details: `The development process involved rigorous testing and optimization to ensure that the backend system could handle high volumes of data and transactions. We also focused on creating a scalable architecture that can accommodate the company's future growth and expansion. Throughout the project, we collaborated closely with the logistics team to understand their requirements and deliver a solution that meets their operational needs.`,
				},
				{
					id: 3,
					details: `Looking ahead, we plan to enhance the backend system by incorporating advanced analytics and machine learning capabilities. This will enable the logistics company to gain deeper insights into their operations and make data-driven decisions to improve efficiency and customer satisfaction. Additionally, we aim to further optimize the system's performance and scalability to support the company's continued growth.`,
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
		ExperienceImages: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: Sharperly1,
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: Sharperly2,
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: Sharperly3,
			},
		],
	},
	{
		id: 1,
		title: 'Th1 (Under Development)',
		category: 'Founding Software Developer',
		location:"Remote",
		img: Th1, // Add the image path if available
		ExperienceHeader: {
			title: 'Pioneered the development of a groundbreaking platform, leveraging Langchains and AI, to revolutionize the video editing marketplace.',
			publishDate: 'March 2024 - Present',
			tags: 'Langchains / AI / Video Editing',
		},
		ExperienceInfo: {
			ObjectivesHeading: 'Objective',
			ObjectivesDetails: 'To create a revolutionary video editing platform that leverages Langchains and AI to provide advanced editing capabilities and streamline the video production process.',
			SocialSharing:[
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
				}
			]
		},
		ExperienceImages: [
			{
				id: 1,
				title: 'Kabul Project Management UI',
				img: Sharperly1,
			},
			{
				id: 2,
				title: 'Kabul Project Management UI',
				img: Sharperly2,
			},
			{
				id: 3,
				title: 'Kabul Project Management UI',
				img: Sharperly3,
			},
		],
	}
];

