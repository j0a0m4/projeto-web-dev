$('document').ready(() => App())

function App() {
	validacao('#formulario')
}

function validacao(form_id) {
	const form_config = {
		rules: {
			nome: { required: true, minlength: 5 },
			senha: { required: true, minlength: 5 },
			email: { required: true }
		},
		messages: {
			nome: {
				required: 'Campo nome é obrigatório',
				minlength: 'O nome deve possuir no mínimo 5 caracteres'
			},
			senha: {
				required: 'Campo senha é obrigatório',
				minlength: 'A senha deve possuir no mínimo 5 caracteres'
			},
			email: {
				required: 'Campo email é obrigatório'
			}
		}
	}

	$(form_id).validate(form_config)
}
