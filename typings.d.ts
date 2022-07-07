export interface AboutProp {
	_id: string;
	title: string;
	description: string;
	imgUrl: {
		asset: {
			url: string;
		};
	};
}

export interface ProjectProp {
	_id: string;
	title: string;
	description: string;
	projectUrl: string;
	codeLink: string;
	slug: string;
	imgUrl: {
		asset: {
			url: string;
		};
	};
	tags: [string];
}
