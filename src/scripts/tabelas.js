function validacao(form_id, form_config) {
	$(form_id).validate(form_config)
}

function validar() {
	validacao('#formulario-alunos', {
		rules: {
			nome: { required: true, minlength: 3, maxlength: 50 },
			senha: { required: true, minlength: 3 },
			confirmaSenha: { required: true, minlength: 3, equalTo: '#senha' },
			email: { required: true, minlength: 3, maxlength: 50 },
			cpf: { required: true }
		},
		messages: {
			nome: {
				required: 'Campo nome é obrigatório',
				minlength: 'O nome deve possuir no mínimo 3 caracteres'
			},
			senha: {
				required: 'Campo senha é obrigatório',
				minlength: 'A senha deve possuir no mínimo 3 caracteres'
			},
			confirmaSenha: {
				required: 'Campo confirmar senha é obrigatório',
				minlength: 'A senha deve possuir no mínimo 3 caracteres',
				equalTo: 'As senhas devem coincidir'
			},
			email: {
				required: 'Campo email é obrigatório',
				email: 'Por favor, insira um email válido'
			},
			cpf: {
				required: 'Campo CPF é obrigatório'
			}
		}
	})
}

$('document').ready(() => validar())
