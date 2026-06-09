import { FunctionComponent, JSX } from "preact";

import "./Desc.scss";

const Desc: FunctionComponent = (): JSX.Element => {
	return (
		<div className="desc" data-aos="fade-up">
			<p>I enjoy working with TypeScript and frontend frameworks like Next.js, Vue & Angular,</p>
			<p>
				while for backend development, my go-to stack is Express.js and MySQL with Sequelize 🎧
			</p>
		</div>
	);
};

export default Desc;
