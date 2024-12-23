import { IProjectInfo } from "../typescript/interfaces/IProjectInfo";

import project1 from "../assets/electronex.webp";
import project2 from "../assets/ecoinwall.webp";
import project3 from "../assets/songsphere.webp";
import project4 from "../assets/server.webp";
import project5 from "../assets/exponative.webp";

export const projectInfo: IProjectInfo[] = [
	{
		id: 1,
		text: "E-commerce application offering a wide range of products with filtering, a shopping cart, reviews, and options to mark favorites. It uses React, TypeScript, Redux Toolkit, Firebase for authentication and real-time functionality, and Rapid API for efficient data delivery. The app allows users to easily manage forms and validation through Formik and Yup. Additionally, it integrates Full Calendar for event tracking and React Beautiful DND for drag-and-drop organization of items in the Admin dashboard.",
		image: project1,
		link: "https://react-ts-psi.vercel.app",
	},
	{
		id: 2,
		text: "Cryptocurrency management app enabling users to buy, sell, view, and delete transactions. It uses Vue.js 3, Pinia for state management, MySQL for the database, Mars.js for communication with the database and client, and Cryptocurrency Live API for real-time data. The app implements Axios interceptors for efficient handling of HTTP requests and responses. It also allows the generation of virtual cards and does not use real credit cards.",
		image: project2,
		link: "http://309n123.e2.mars-hosting.com/",
	},
	{
		id: 3,
		text: "Full-stack music application allowing users to listen to music, create personalized playlists, and explore information about their favorite artists. It uses React, Redux-Toolkit for state management, PostgreSQL for the database, and Supabase for OAuth authentication. The backend is based on Express.js for managing song and user data. The app also allows users to add songs to favorites and provides a music player for enjoying their favorite tracks.",
		image: project3,
		link: "https://song-sphere-client.vercel.app/",
	},
	{
		id: 4,
		text: "Backend application designed according to Clean Code architecture principles, using Node.js, TypeScript, Express, PostgreSQL, and Sequelize. It implements Dependency Injection with InversifyJS and uses JWT authentication for secure application access. Routing is facilitated by using routing-controllers, while data validation is handled by class-validator. The app allows image uploads using Sharp and Multer, and for email sending, it integrates Brevo SMTP with Nodemailer and Handlebars for creating dynamic email templates.",
		image: project4,
		link: "https://github.com/stefanbgh/ts-node",
	},
	{
		id: 5,
		text: "Mobile application developed with Expo and React Native, integrating OpenAI technologies – ChatGPT for interactive conversations and DALL-E for generating images based on user input. The app allows easy generation and downloading of images, as well as code copying when relevant in conversations. Additionally, it supports APK installation via a QR code generated by EAS.",
		image: project5,
		link: "https://github.com/stefanbgh/expo-native",
	},
];
