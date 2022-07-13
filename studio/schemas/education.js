export default {
	name: 'education',
	title: 'Education',
	type: 'document',
	fields: [
		{
			name: 'institution',
			title: 'Institution',
			type: 'string',
		},
		{
			name: 'course',
			title: 'Course',
			type: 'string',
		},
		{
			name: 'date',
			title: 'Date',
			type: 'string',
		},
		{
			name: 'topics',
			title: 'Topics',
			type: 'array',
			of: [
				{
					name: 'topic',
					title: 'Topic',
					type: 'string',
				},
			],
		},
	],
};
