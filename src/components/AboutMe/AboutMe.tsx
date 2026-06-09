import { FunctionComponent, JSX } from "preact";

import { Title } from "..";

import "./AboutMe.scss";

const AboutMe: FunctionComponent = (): JSX.Element => {
    return (
        <section id="about" className="about__me">
            <Title title="About Me" />

            <p className="about__me-text" data-aos="fade-up">
                As a software engineer, I have a strong, advanced knowledge of 
                <span className="highlight"> TypeScript, React, and Next.js</span>, 
                while I'm also comfortable working with 
                <span className="highlight"> Vue and Angular</span>. I focus on writing clean, readable code and I love building interactive user interfaces with modern tools like 
                <span className="highlight"> Tailwind and Shadcn/UI</span>. For forms and simple state management, I regularly use 
                <span className="highlight"> Zustand, Zod, and React Hook Form</span>.
                <br /><br />
                I always try to deliver high-quality code and create web applications that are useful in the real world. On the backend, I work easily with 
                <span className="highlight"> Node.js and Express.js</span>, and I understand important patterns like 
                <span className="highlight"> Dependency Injection (DI)</span>. My main database is 
                <span className="highlight"> MySQL</span>, which I connect using 
                <span className="highlight"> Sequelize ORM</span>, and I handle security with 
                <span className="highlight"> JSON Web Tokens (JWT)</span>.
                <br /><br />
                Right now, my main goal is to learn more about backend architecture using 
                <span className="highlight"> PHP and Symfony</span>. However, I am open-minded and always ready to learn new technologies that my future IT team needs.
            </p>
        </section>
    );
};

export default AboutMe;
