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
		// var div = document.createElement('div');
		// div.style.width = '100px';
		// div.style.height = '100px';
		// div.style.background = 'red';
	}
}

function clear () {
	this.value = '';
	this.style.color = 'black';
}

