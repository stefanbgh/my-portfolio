import { FunctionComponent, JSX } from "preact";

import "./Desc.scss";

const Desc: FunctionComponent = (): JSX.Element => {
	return (
		<div className="desc" data-aos="fade-up">
			<p>I enjoy working with Typescript, Next, React & Vue, while for</p>
			<p>
				backend development, I use Express.js & MySQL with Sequelize 🎧
			</p>
		</div>
	);
};

export default Desc;
