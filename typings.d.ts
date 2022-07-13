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

export interface skillProp {
	_id: string;
	name: string;
	shadowColor: string;
	icon: {
		asset: {
			url: string;
		};
	};
}

export interface ExperienceProp {
	_id?: string;
	role: string;
	company: string;
	date: string;
	duties: Array<string>;
	techStacks: Array<string>;
}

export interface EducationProp {
	_id?: string;
	institution: string;
	course: string;
	date: string;
	topics: Array<string>;
}
