// saat tombol diklik, maka bg color berubah

const button = document.getElementsByTagName('button')[0];

button.addEventListener('click', function() {
	// document.body.style.backgroundColor = 'pink';
	// document.body.setAttribute('class', 'biru-muda');
	document.body.classList.toggle('biru-muda');
});



// ubah warna random

	// buat tombol

	const newButton = document.createElement('button');
	const newText = document.createTextNode('Acak Warna');
	newButton.appendChild(newText);

	button.after(newButton);

	// kasih event

	newButton.addEventListener('click', function() {
		const	r = Math.floor(Math.random() * 255 + 0),
				g = Math.floor(Math.random() * 255 + 0),
				b = Math.floor(Math.random() * 255 + 0);

		console.log(`rgb(${r}, ${g}, ${b})`);

		document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
	});



// ubah warna dengan mengatur rgb sendiri

const sRed = document.querySelector('input[name=sliderRed]');
const sGreen = document.querySelector('input[name=sliderGreen]');
const sBlue = document.querySelector('input[name=sliderBlue]');

sRed.addEventListener('input', function() {
	const	r = sRed.value,
			g = sGreen.value,
			b = sBlue.value;

	console.log(`rgb(${r}, ${g}, ${b})`);

	document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

sGreen.addEventListener('input', function() {
	const	r = sRed.value,
			g = sGreen.value,
			b = sBlue.value;
			
	console.log(`rgb(${r}, ${g}, ${b})`);

	document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});

sBlue.addEventListener('input', function() {
	const	r = sRed.value,
			g = sGreen.value,
			b = sBlue.value;
			
	console.log(`rgb(${r}, ${g}, ${b})`);

	document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
});



// mengubah warna dengan menggerakan kursor

document.body.addEventListener('mousemove', function(event) {

	// cari tau posisi mouse (x, y)
	// console.log(event.clientX);

	// ukuran browser
	// console.log(window.innerWidth);

	const xPos = Math.floor((event.clientX / window.innerWidth) * 255 + 0);
	const yPos = Math.floor((event.clientY / window.innerHeight) * 255 + 0);

	console.log(`rgb(${xPos}, ${yPos}, 100)`);

	document.body.style.backgroundColor = `rgb(${xPos}, ${yPos}, 100)`;
});