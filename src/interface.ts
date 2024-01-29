interface note {
	id: number;
	body: string;
	rank: number;
}

interface newNote {
	body: string;
	rank: string;
	app_pin: string;
}

const blankNewNote = {
	body: '',
	rank: '2.5',
	app_pin: ''
}