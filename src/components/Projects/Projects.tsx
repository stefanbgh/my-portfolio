import { FunctionComponent, JSX } from "preact";

import { SingleProject, Title } from "../../components";
import { projectInfo } from "../../constants/projectInfo.constant";
import { IProjectInfo } from "../../typescript/interfaces/IProjectInfo";

import "./Projects.scss";

const Projects: FunctionComponent = (): JSX.Element => {
	return (
		<section className="projects">
			<Title title="Projects" />
			<div className="projects__group">
				{projectInfo.map((project: IProjectInfo, index: number) => {
					const { id, text, image, link } = project;

					return (
						<SingleProject
							id={id}
							text={text}
							image={image}
							link={link}
							isReversed={index % 2 === 1}
						/>
					);
				})}
			</div>
		</section>
	);
};

export default Projects;
