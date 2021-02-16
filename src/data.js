import { v4 as uuidv4 } from 'uuid';

function ChillPop() {
	return [
		{
			name: 'Sugarless',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg',
			artist: 'The Field Tapes , Aviino',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=11243',
			color: ['#3e456a', '#91a19a'],
			id: uuidv4(),
			active: true,
		},
		{
			name: 'Lilo',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg',
			artist: 'Middle School, The Field Tapes',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=11244',
			color: ['#3e456a', '#91a19a'],
			id: uuidv4(),
			active: false,
		},
		{
			name: 'Hereafter',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg',
			artist: 'Makzo',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=11770',
			color: ['#3e456a', '#91a19a'],
			id: uuidv4(),
			active: false,
		},

		{
			name: 'Flashback',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg',
			artist: 'Blue Wednesday, Shopan',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=11225',
			color: ['#3e456a', '#91a19a'],
			id: uuidv4(),
			active: false,
		},
		{
			name: 'Lax Incense',
			cover:
				'https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg',
			artist: 'Mama Aiuto, Daphné',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=12125',
			color: ['#3e456a', '#91a19a'],
			id: uuidv4(),
			active: false,
		},
		{
			name: 'Seascape',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/11/f78c39b4bb6313ddd0354bef896c591bfb490ff8-1024x1024.jpg',
			artist: 'Makzo',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=11773',
			color: ['#3e456a', '#91a19a'],
			id: uuidv4(),
			active: false,
		},
		{
			name: 'Hidden Structure',
			cover:
				'https://chillhop.com/wp-content/uploads/2020/09/88e7eb711f8c71d87fc102e97cf91e36f692348d-1024x1024.jpg',
			artist: 'Leavv, Flitz&Suppe',
			audio: 'https://mp3.chillhop.com/serve.php/?mp3=9913',
			color: ['#3e456a', '#91a19a'],
			id: uuidv4(),
			active: false,
		},
	];
}

export default ChillPop;
