import { FunctionComponent, JSX } from "preact";

import { Title } from "..";

import "./AboutMe.scss";

const AboutMe: FunctionComponent = (): JSX.Element => {
	return (
		<section id="about" className="about__me">
			<Title title="About Me" />

			<p className="about__me-text" data-aos="fade-up">
				As a junior Software Developer, I possess advanced knowledge of
				<span className="highlight">
					{" "}
					JavaScript, TypeScript, React & Vue
				</span>
				. With a keen eye for detail, I am skilled in building
				interactive user interfaces and utilizing tools like
				<span className="highlight">
					{" "}
					Redux, Pinia, React Router & Vue Router
				</span>{" "}
				for efficient state management and smooth navigation. I strive
				to deliver quality code and eagerly work on contributing my
				skills to create web applications that will be useful. For
				backend development, I use
				<span className="highlight"> Node.js</span> with the
				<span className="highlight"> Express.js</span> framework, along
				with <span className="highlight">InversifyJS</span> for
				<span className="highlight"> Dependency Injection (DI)</span>. I
				work with relational databases like
				<span className="highlight"> MySQL & PostgreSQL</span>, using
				<span className="highlight"> Sequelize ORM</span> for database
				access and for authentication, I use
				<span className="highlight"> JSON Web Token (JWT)</span>. My
				current focus is on learning
				<span className="highlight"> NestJS</span>.
			</p>
		</section>
	);
};

export default AboutMe;
