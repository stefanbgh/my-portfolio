import { FunctionComponent, JSX } from "preact";

import "./Info.scss";

const Info: FunctionComponent = (): JSX.Element => {
	return (
		<div className="personal__info">
			<h1 className="personal__info_full-name" data-aos="fade-right">
				Stefan Blagojevic!
			</h1>
			<h4 data-aos="fade-left">
				<span>Junior Software Developer</span> 💻
			</h4>
		</div>
	);
};

export default Info;
