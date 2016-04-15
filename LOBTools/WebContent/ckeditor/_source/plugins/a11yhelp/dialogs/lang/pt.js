/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/licensePortions Copyright IBM Corp., 2009-2015.
 */

CKEDITOR.plugins.setLang( 'a11yhelp', 'pt',
{
	//do not translate anything with the form ${xxx} 
	
	title : "Ajuda",
	contents : "Conteúdos da ajuda. Para fechar esta caixa de diálogo prima ESC.",
	legend :
	[
		{
			name : "Instruções de acessibilidade",
			items :
			[
				{
					name : "Barra de ferramentas do editor",
					legend: "Prima ${toolbarFocus} para navegar até à barra de ferramentas. " +
						"Aceda ao grupo da barra de ferramentas seguinte e anterior com as teclas TAB e SHIFT+TAB. " +
						"Aceda ao botão da barra de ferramentas seguinte e anterior com as teclas SETA PARA A DIREITA ou SETA PARA A ESQUERDA. " +
						"Prima BARRA DE ESPAÇOS ou ENTER para activar o botão da barra de ferramentas."
				},

				{
					name: "Caixa de diálogo do editor",
					legend:
						"Numa caixa de diálogo, prima TAB para navegar até ao elemento seguinte da caixa de diálogo, prima SHIFT+TAB para mudar para o elemento da caixa de diálogo anterior, prima ENTER para submeter a caixa de diálogo e prima ESC para cancelar a caixa de diálogo." +
						"Quando uma caixa de diálogo tem vários separadores, a lista de separadores pode ser acedida com ALT+F10 ou TAB como parte da ordem de tabulação da caixa de diálogo. " +
						"Com a lista de separadores seleccionada, aceda ao separador seguinte e anterior com as teclas SETA PARA A DIREITA e SETA PARA A ESQUERDA, respectively."
				},

				{
					name : "Menu contextual do editor",
					legend :
						"Prima ${contextMenu} ou TECLA DE APLICAÇÃO para abrir o menu contextual. " +
						"Em seguida, aceda à opção de menu seguinte com a tecla TAB ou SETA PARA BAIXO. " +
						"Aceda à opção anterior com as teclas SHIFT+TAB ou SETA PARA CIMA. " +
						"Prima BARRA DE ESPAÇOS ou ENTER para seleccionar a opção de menu. " +
						"Abra o submenu da opção actual com a tecla BARRA DE ESPAÇOS, ENTER ou SETA PARA A DIREITA. " +
						"Regresse ao item de menu ascendente com a tecla ESC ou SETA PARA A ESQUERDA. " +
						"Feche o menu contextual com a tecla ESC."
				},

				{
					name : "Caixa de lista do editor",
					legend :
						"Numa caixa de lista, aceda ao item seguinte da lista com a tecla TAB ou SETA PARA BAIXO. " +
						"Aceda ao item anterior da lista com as teclas SHIFT + TAB ou SETA PARA CIMA. " +
						"Prima BARRA DE ESPAÇOS ou ENTER para seleccionar a opção da lista. " +
						"Prima ESC para fechar a caixa de lista."
				},

				{
					name : "Barra de caminho de elementos do editor (se disponível*)",
					legend :
						"Prima ${elementsPathFocus} para navegar até à barra de caminho de elementos. " +
						"Aceda ao botão seguinte do elemento com a tecla TAB ou SETA PARA A DIREITA. " +
						"Aceda ao botão anterior com as teclas SHIFT+TAB ou SETA PARA A ESQUERDA. " +
						"Prima BARRA DE ESPAÇOS ou ENTER para seleccionar o elemento no editor."
				}
			]
		},
		{
			name : "Comandos",
			items :
			[
				{
					name : " Comando Anular",
					legend : "Prima ${undo}"
				},
				{
					name : " Comando Refazer",
					legend : "Prima ${redo}"
				},
				{
					name : " Comando Negrito",
					legend : "Prima ${bold}"
				},
				{
					name : " Comando Itálico",
					legend : "Prima ${italic}"
				},
				{
					name : " Comando Sublinhado",
					legend : "Prima ${underline}"
				},
				{
					name : " Comando Ligação",
					legend : "Prima ${link}"
				},
				{
					name : " Comando Contrair barra de ferramentas (se disponível*)",
					legend : "Prima ${toolbarCollapse}"
				},
				{
					name: ' Comando Aceder ao espaço com o foco anterior',
					legend: 'Prima ${accessPreviousSpace} para inserir espaço num espaço de foco não acessível imediatamente antes do cursor. ' +
						'Um espaço de foco não acessível é uma localização no editor na qual não é possível posicionar o cursor ' + 
						'utilizando o rato ou o teclado. Por exemplo: utilize este comando para inserir conteúdo entre dois elementos adjacentes numa tabela.'
				},
				{
					name: ' Comando Aceder ao espaço com o foco seguinte',
					legend: 'Prima ${accessNextSpace} para inserir espaço num espaço de foco não acessível imediatamente após o cursor. ' +
						'Um espaço de foco não acessível é uma localização no editor na qual não é possível posicionar o cursor ' +
						'utilizando o rato ou o teclado. Por exemplo: utilize este comando para inserir conteúdo entre dois elementos adjacentes numa tabela.'
				},
				{
					name : " Aumentar indentação",
					legend : "Prima ${indent}"
				},
				{
					name : " Diminuir indentação",
					legend : "Prima ${outdent}"
				},				
				{
					name : " Orientação do texto da esquerda para a direita",
					legend : "Prima ${bidiltr}"
				},
				{
					name : " Orientação do texto da direita para a esquerda",
					legend : "Prima ${bidirtl}"
				},
				{
					name: ' Marcador permanente',
					legend: 'Prima ${ibmpermanentpen} (Alt+Cmd+T em MAC) no editor para activar/desactivar o marcador permanente.'
				},
				{
					name : " Ajuda de acessibilidade",
					legend : "Prima ${a11yHelp}"
				}
			]
		},
		
		{	//added by ibm
			name : "Nota",
			items :
			[
				{	
					name : "",
					legend : "* Algumas funções podem ser desactivadas pelo administrador."
				}
			]
		}
	],
	backspace: 'Backspace',
	tab: 'Tab',
	enter: 'Enter',
	shift: 'Shift',
	ctrl: 'Ctrl',
	alt: 'Alt',
	pause: 'Pause',
	capslock: 'Caps Lock',
	escape: 'Escape',
	pageUp: 'Page Up',
	pageDown: 'Page Down',
	end: 'Fim',
	home: 'Início',
	leftArrow: 'Seta para a esquerda',
	upArrow: 'Seta para cima',
	rightArrow: 'Seta para a direita',
	downArrow: 'Seta para baixo',
	insert: 'Inserir',
	'delete': 'Eliminar',
	leftWindowKey: 'Tecla Windows da esquerda',
	rightWindowKey: 'Tecla Windows da direita',
	selectKey: 'Tecla Select',
	numpad0: 'Teclado numérico 0',
	numpad1: 'Teclado numérico 1',
	numpad2: 'Teclado numérico 2',
	numpad3: 'Teclado numérico 3',
	numpad4: 'Teclado numérico 4',
	numpad5: 'Teclado numérico 5',
	numpad6: 'Teclado numérico 6',
	numpad7: 'Teclado numérico 7',
	numpad8: 'Teclado numérico 8',
	numpad9: 'Teclado numérico 9',
	multiply: 'Multiplicar',
	add: 'Adicionar',
	subtract: 'Subtrair',
	decimalPoint: 'Vírgula decimal',
	divide: 'Dividir',
	f1: 'F1',
	f2: 'F2',
	f3: 'F3',
	f4: 'F4',
	f5: 'F5',
	f6: 'F6',
	f7: 'F7',
	f8: 'F8',
	f9: 'F9',
	f10: 'F10',
	f11: 'F11',
	f12: 'F12',
	numLock: 'Num Lock',
	scrollLock: 'Bloqueio de deslocamento',
	semiColon: 'Ponto e vírgula',
	equalSign: 'Sinal de igual',
	comma: 'Vírgula',
	dash: 'Traço',
	period: 'Ponto final',
	forwardSlash: 'Barra',
	graveAccent: 'Acento grave',
	openBracket: 'Parêntesis de abertura',
	backSlash: 'Barra invertida',
	closeBracket: 'Parêntesis de fecho',
	singleQuote: 'Plica',
	
	ibm :
	{
		helpLinkDescription : "Abrir mais tópicos de ajuda numa nova janela",
		helpLink : "Mais tópicos de ajuda"
	}

});

