
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password'); 
const send = document.getElementById('logBtn');
const back = document.getElementById('backBtn');

const log = document.getElementById('log');
const page = document.getElementById('page');
const show = document.getElementById('show');


send.addEventListener('click',(e)=>{
	e.preventDefault();
	const email = emailInput.value;
	const password = passwordInput.value;

	const user = useri.filter((user) => 
		user.password + '' === password && user.email === email)
	if (user.length !== 0) {
		log.style.display = 'none';
		page.style.display = 'block';
		show.innerHTML = 'hi ' + user[0].email + ' ' + user[0].password;





back.addEventListener('click',(e)=>{
	e.preventDefault();
	log.style.display = 'block';
	page.style.display = 'none';
	emailInput.value = '';
	passwordInput.value = '';

});

