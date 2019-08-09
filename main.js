<<<<<<< HEAD
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
=======
var email1 = document.getElementById('email');
var pass = document.getElementById('password'); 
var send = document.getElementById('submit');

var users = [{email:'abdullahahmetovic@gmail.com', password: 'abdullah'},// index 0
			 {email:'muhammed10@gmail.com', password: 'muhammed'}, // index 1
			 {email:'ahmed321@gmail.com', password: 'ahmed'}, // index 2
			 {email:'amar213@gmail.com', password: 'amar'}, // index 3
			 {email:'mojemail@gmail.com', password: 'ja'}]; // index 4

var uspjesnaPrijava;

email.addEventListener('focus',clear);
pass.addEventListener('focus',clear);

email.addEventListener('onchange', change);
pass.addEventListener('onchange', change);


send.addEventListener('click', validacija);

function validacija () {
	uspjesnaPrijava = 1;
	//email 
	//FIXME: it have to contains @ but not gmail... its optional --> DONE

	//FIXME: use === instead of == everywhere, explain me why 
		// == is equal to
		// === is equal to and equal to same type 
		// example : 0 == false --> true
		//			 0 === false --> false because 0 is a number, an integer and false is a boolean


	if (email1.value.indexOf('@gmail') == -1) { 
		email1.value = 'Email mora biti GMAIL'
		uspjesnaPrijava = 0;
	};

	if (email1.value == '') {
		email1.value = 'Ovo polje je obavezno';
		//FIXME: it is not your job... to alert user in ant way --> DONE
		//email1.style.color = 'red'; DELETE
		uspjesnaPrijava = 0;
	};

	//password
	//FIXME: don't check if field is empty... just use html attribute 'required' 
	if (pass.value == '') {
		//FIXME: ??? wrong way .... it must not use value for warnings --> DONE
		//pass.value = 'Ovo polje je prazno'; DELETE

		//FIXME: ?????????
		//pass.style.color = 'red'; DELETE
		uspjesnaPrijava = 0;	
	};

	//uspjesna prijava
	if (uspjesnaPrijava == 1) {
		window.location.assign('second.html');
		var data1 = email1.value;
>>>>>>> 22154cf87ed3cb40f15ceaaac93465de232cdbcb
	}
});

back.addEventListener('click',(e)=>{
	e.preventDefault();
	log.style.display = 'block';
	page.style.display = 'none';
	emailInput.value = '';
	passwordInput.value = '';

<<<<<<< HEAD
});
=======
function change () {
	
}
>>>>>>> 22154cf87ed3cb40f15ceaaac93465de232cdbcb
