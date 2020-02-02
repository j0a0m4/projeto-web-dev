//  Definição da função que utiliza o jQuery Validator para validar o formulario
// form_selector (seleciona o formulário para ser validado)
// form_config (objeto que configura as regras e as mensagens de validação)
function validacao(form_selector, form_config) {
	$(form_selector).validate(form_config)
}

// Definção da função que vai executar as validações
function validar() {
	// Formulário Alunos
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
	//  Formulário Cursos
	validacao('#formulario-cursos', {
		rules: {
			nome_curso: { required: true, minlength: 3, maxlength: 50 }
		},
		messages: {
			nome_curso: {
				required: 'Campo nome curso é obrigatório',
				minlength: 'Mínimo 3 caractéres',
				maxlength: 'Máximo 20 caractéres'
			}
		}
	})
	// Formulário Instrutores
	validacao('#formulario-instrutores', {
		rules: {
			nome_instrutor: { required: true, minlength: 3, maxlength: 50 },
			email_instrutor: { required: true, minlength: 3, maxlength: 50 },
			login_instrutor: { required: true, minlength: 3, maxlength: 20 },
			senha_instrutor: { required: true, minlength: 3, maxlength: 255 },
			confirma_senha_instrutor: { required: true, equalTo: '#senha_instrutor' }
		},
		messages: {
			nome_instrutor: {
				required: 'Campo nome é obrigatório',
				minlength: 'O nome deve possuir no mínimo 3 caracteres'
			},
			email_instrutor: {
				required: 'Campo email é obrigatório',
				email: 'Por favor, insira um email válido'
			},
			login_instrutor: {
				required: 'Campo login é obrigatório',
				minlength: 'Mínimo 3 caractéres',
				maxlength: 'Máximo 20 caractéres'
			},
			senha_instrutor: {
				required: 'Campo senha é obrigatório',
				minlength: 'A senha deve possuir no mínimo 3 caracteres'
			},
			confirma_senha_instrutor: {
				required: 'Campo confirmar senha é obrigatório',
				equalTo: 'As senhas devem coincidir'
			}
		}
	})

	validacao('#formulario-matriculas', {
		rules: {
			id_alunos: { required: true },
			id_turmas: { required: true }
		},
		messages: {
			id_alunos: { required: 'Campo confirmar ID alunos é obrigatório' },
			id_turmas: { required: 'Campo confirmar ID turmas é obrigatório' }
		}
	})

	validacao('#formulario-turmas', {
		rules: {
			id_instrutores: { required: true },
			id_cursos: { required: true }
		},
		messages: {
			id_instrutores: {
				required: 'Campo confirmar ID instrutores é obrigatório'
			},
			id_cursos: { required: 'Campo confirmar ID cursos é obrigatório' }
		}
	})

	validacao('#formulario-administrador', {
		rules: {
			nome_administrador: { required: true, minlength: 3, maxlength: 50 },
			email_administrador: { required: true, minlength: 3, maxlength: 50 },
			login_administrador: { required: true, minlength: 3, maxlength: 20 },
			senha_administrador: { required: true, minlength: 3, maxlength: 255 },
			confirma_senha_administrador: {
				required: true,
				equalTo: '#senha_administrador'
			}
		},
		messages: {
			nome_administrador: {
				required: 'Campo nome é obrigatório',
				minlength: 'O nome deve possuir no mínimo 3 caracteres'
			},
			email_administrador: {
				required: 'Campo email é obrigatório',
				email: 'Por favor, insira um email válido'
			},
			login_administrador: {
				required: 'Campo login é obrigatório',
				minlength: 'Mínimo 3 caractéres',
				maxlength: 'Máximo 20 caractéres'
			},
			senha_administrador: {
				required: 'Campo senha é obrigatório',
				minlength: 'A senha deve possuir no mínimo 3 caracteres'
			},
			confirma_senha_administrador: {
				required: 'Campo confirmar senha é obrigatório',
				equalTo: 'As senhas devem coincidir'
			}
		}
	})
}

// Quando o DOM estiver pronto, vai chamar a arrow function anônima que executa a função para validar todos os forms
$('document').ready(() => validar())
