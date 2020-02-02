import { validacao } from './app.js'
// Quando o DOM estiver pronto, vai chamar a arrow function anônima que executa a função para validar todos os forms
$('document').ready(() =>
	validacao('#formulario-alunos', {
		rules: {
			nome: { required: true, minlength: 3, maxlength: 50 },
			cpf: { required: true, maxlength: 11 },
			email: { required: true, minlength: 3, maxlength: 50 },
			tel: { required: true, minlength: 3, maxlength: 14 },
			login: { required: true, minlength: 3, maxlength: 20 },
			senha: { required: true, minlength: 3, maxlength: 255 },
			confirmaSenha: { required: true, equalTo: '#senha' }
		},
		messages: {
			nome: {
				required: 'Campo nome é obrigatório',
				minlength: 'O nome deve possuir no mínimo 3 caracteres'
			},
			cpf: {
				required: 'Campo CPF é obrigatório'
			},
			email: {
				required: 'Campo email é obrigatório',
				email: 'Por favor, insira um email válido'
			},
			tel: {
				required: 'Campo celular é obrigatório',
				minlength: 'Mínimo 3 dígitos',
				maxlength: 'Máximo 20 dígitos'
			},
			login: {
				required: 'Campo login é obrigatório',
				minlength: 'Mínimo 3 caractéres',
				maxlength: 'Máximo 20 caractéres'
			},
			senha: {
				required: 'Campo senha é obrigatório',
				minlength: 'A senha deve possuir no mínimo 3 caracteres'
			},
			confirmaSenha: {
				required: 'Campo confirmar senha é obrigatório',
				equalTo: 'As senhas devem coincidir'
			}
		}
	})
)
