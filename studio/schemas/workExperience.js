export default {
	name: 'workExperience',
	title: 'Work Experience',
	type: 'document',
	fields: [
		{ name: 'role', title: 'Role', type: 'string' },
		{ name: 'date', title: 'Date', type: 'string' },
		{
			name: 'company',
			title: 'Company',
			type: 'string',
		},
		{
			name: 'duties',
			title: 'Duties',
			type: 'array',
			of: [{ name: 'duty', title: 'Duty', type: 'string' }],
		},
		{
			name: 'techStacks',
			title: 'Tech Stacks',
			type: 'array',
			of: [{ name: 'teckStack', title: 'Tech Stack', type: 'string' }],
		},
	],
};
