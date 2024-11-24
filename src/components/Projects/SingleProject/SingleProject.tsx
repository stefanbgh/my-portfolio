import { FunctionComponent, JSX } from "preact";
import { IProjectInfo } from "../../../typescript/interfaces/IProjectInfo";

interface IProps extends IProjectInfo {
	isReversed: boolean;
}

const SingleProject: FunctionComponent<IProps> = ({
	id,
	text,
	image,
	link,
	isReversed,
}): JSX.Element => {
	return (
		<div
			data-aos={isReversed ? "fade-left" : "fade-right"}
			className={
				isReversed
					? "projects__group-project__reverse"
					: "projects__group-project"
			}
		>
			<div class="projects__group-project__text">
				<p>
					{text}{" "}
					<a href={link} target="_blank" rel="noopener noreferrer">
						<span>(View more)</span>
					</a>
				</p>
			</div>
			<div className="projects__group-project__image">
				<a href={link} target="_blank" rel="noopener noreferrer">
					<img
						width={id === 5 ? 175 : 500}
						src={image}
						alt={`project${id}`}
					/>
				</a>
			</div>
		</div>
	);
};

export default SingleProject;
