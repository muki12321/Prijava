var email1 = document.getElementById('email');
var pass = document.getElementById('password'); 
var send = document.getElementById('submit');
var uspjesnaPrijava;

send.addEventListener('click', validacija);

email.addEventListener('focus',clear);
pass.addEventListener('focus',clear);

function validacija () {
	uspjesnaPrijava = 1;
	//email 
	//FIXME: it have to contains @ but not gmail... its optional 
	//FIXME: use === instead of == everywhere, explain me why



	if (email1.value.indexOf('gmail') == -1) {
		email1.value = 'Email mora biti GMAIL'
		uspjesnaPrijava = 0;
	};
	if (email1.value == '') {
		email1.value = 'Ovo polje je obavezno';
		//FIXME: it is not your job... to alert user in ant way
		email1.style.color = 'red';
		uspjesnaPrijava = 0;
	};

	//password
	//FIXME: don't check if field is empty... just use html attribute 'required'
	if (pass.value == '') {
		//FIXME: ??? wrong way .... it must not use value for warnings
		pass.value = 'Ovo polje je prazno';
		//FIXME: ?????????
		pass.style.color = 'red';
		uspjesnaPrijava = 0;	
	};

	//uspjesna prijava
	if (uspjesnaPrijava == 1) {
		window.location.assign('second.html');
	}
}

function clear () {
	this.value = '';
	this.style.color = 'black';
}

