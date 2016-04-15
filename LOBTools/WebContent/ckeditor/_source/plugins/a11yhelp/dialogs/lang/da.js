/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/licensePortions Copyright IBM Corp., 2009-2015.
 */

CKEDITOR.plugins.setLang( 'a11yhelp', 'da',
{
	//do not translate anything with the form ${xxx} 
	
	title : "Hjælp",
	contents : "Hjælpeindhold. Tryk på Esc for at lukke dialogboksen.",
	legend :
	[
		{
			name : "Instruktioner vedr. handicapvenlighed",
			items :
			[
				{
					name : "Editor - værktøjslinje",
					legend: "Tryk på ${toolbarFocus} for at navigere til værktøjslinjen. " +
						"Flyt til næste og forrige værktøjslinjegruppe ved at trykke på tabulatortasten og Skift+tabulatortast. " +
						"Flyt til næste og forrige værktøjslinjeknap ved at trykke på Højre pil eller Venstre pil. " +
						"Tryk på mellemrumstasten eller Enter for at aktivere værktøjslinjeknappen."
				},

				{
					name: "Editor - Dialog",
					legend:
						"Inde i en dialogboks kan du trykke på tabulatortasten for at navigere til næste dialogelement. Tryk på Skift+tabulatortast for at flytte til forrige dialogelement. Tryk på Enter for at sende indholdet af dialogboksen. Tryk på Esc for at annullere dialogboksen. " +
						"Hvis en dialogboks fra flere skilleblade, kan skillebladslisten nås med Alt+F10 eller med tabulatortasten som en del af tabuleringsrækkefølgen i dialogboksen. " +
						"Når skillebladslisten er i fokus, kan du skifte til næste og forrige skilleblad med henholdsvis højrepil og venstrepil."
				},

				{
					name : "Editor - Kontekstmenu",
					legend :
						"Tryk på ${contextMenu} eller programtasten for at åbne kontekstmenuen. " +
						"Flyt derefter til næste menupunkt med tabulatortasten eller pil ned. " +
						"Flyt til forrige menupunkt med Skift+tabulatortast eller pil op. " +
						"ryk på mellemrumstasten eller Enter for at vælge menupunktet. " +
						"Åbn undermenuen for det aktuelle menupunkt med mellemrumstasten eller Enter eller højre piltast. " +
						"Gå tilbage til det overordnede menupunkt med Esc eller venstre piltast. " +
						"Luk kontekstmenuen ved at trykke på Esc."
				},

				{
					name : "Editor - Liste",
					legend :
						"I en liste flytter du til næste punkt på listen med tabulatortasten eller pil ned. " +
						"Flyt til forrige punkt på listen med Skift+tabulatortast eller pil op. " +
						"Tryk på mellemrumstasten eller Enter for at vælge punktet på listen. " +
						"Tryk på Esc for at lukke listen."
				},

				{
					name : "Editor - Elementstilinje (hvis tilgængelig*)",
					legend :
						"Tryk på ${elementsPathFocus} for at navigere til elementstilinjen. " +
						"Flyt til næste elementknap med tabulatortasten eller højre piltast. " +
						"Flyt til forrige knap med Skift+tabulatortast eller venstre piltast. " +
						"Tryk på mellemrumstasten eller Enter for at vælge elementet i editoren."
				}
			]
		},
		{
			name : "Kommandoer",
			items :
			[
				{
					name : "  Fortryd-kommando",
					legend : "Tryk på ${undo}"
				},
				{
					name : "  Gentag-kommando",
					legend : "Tryk på ${redo}"
				},
				{
					name : "  Fed-kommando",
					legend : "Tryk på ${bold}"
				},
				{
					name : "  Kursiv-kommando",
					legend : "Tryk på ${italic}"
				},
				{
					name : "  Understreget-kommando",
					legend : "Tryk på ${underline}"
				},
				{
					name : "  Link-kommando",
					legend : "Tryk på ${link}"
				},
				{
					name : " Skjul værktøjslinje-kommando (hvis tilgængelig*)",
					legend : "Tryk på ${toolbarCollapse}"
				},
				{
					name: '  Kommando til adgang til forrige fokusområde',
					legend: 'Tryk på ${accessPreviousSpace} for at indsætte et mellemrum i et fokusområde, der ikke kan nås, lige foran markøren. ' +
						'Et fokusområde, der ikke kan nås, er en position i editoren, hvor du ikke kan placere markøren ' + 
						'med musen eller tastaturet. Eksempel: Brug kommandoen til at indsætte indhold mellem to tilstødende tabelelementer.'
				},
				{
					name: '  Kommando til adgang til næste fokusområde',
					legend: 'Tryk på ${accessNextSpace} for at indsætte et mellemrum i et fokusområde, der ikke kan nås, lige efter markøren. ' +
						'Et fokusområde, der ikke kan nås, er en position i editoren, hvor du ikke kan placere markøren ' +
						'med musen eller tastaturet. Eksempel: Brug kommandoen til at indsætte indhold mellem to tilstødende tabelelementer.'
				},
				{
					name : " Forøg indrykning",
					legend : "Tryk på ${indent} (gælder kun for US-tastaturer)"
				},
				{
					name : " Formindsk indrykning",
					legend : "Tryk på ${outdent} (gælder kun for US-tastaturer)"
				},				
				{
					name : " Tekstretning fra venstre mod højre",
					legend : "Tryk på ${bidiltr}"
				},
				{
					name : " Tekstretning fra højre mod venstre",
					legend : "Tryk på ${bidirtl}"
				},
				{
					name: ' Tusch',
					legend: 'Tryk på ${ibmpermanentpen} (Alt+Cmd+T på Mac) inde i editoren for at aktivere eller deaktivere tuschen.'
				},
				{
					name : " Hjælp til handicapvenlighed",
					legend : "Tryk på ${a11yHelp}"
				}
			]
		},
		
		{	//added by ibm
			name : "Bemærk",
			items :
			[
				{	
					name : "",
					legend : "* Visse funktioner kan være deaktiveret af administratoren."
				}
			]
		}
	],
	backspace: 'Baktast',
	tab: 'Tabulatortast',
	enter: 'Enter',
	shift: 'Skift',
	ctrl: 'Ctrl',
	alt: 'Alt',
	pause: 'Pause',
	capslock: 'Caps Lock',
	escape: 'Escape',
	pageUp: 'PgUp',
	pageDown: 'PgDn',
	end: 'End',
	home: 'Home',
	leftArrow: 'Venstrepil',
	upArrow: 'Pil op',
	rightArrow: 'Højrepil',
	downArrow: 'Pil ned',
	insert: 'Insert',
	'delete': 'Delete',
	leftWindowKey: 'Venstre Windows-tast',
	rightWindowKey: 'Højre Windows-tast',
	selectKey: 'Vælg tast',
	numpad0: 'Num. tastatur 0',
	numpad1: 'Num. tastatur 1',
	numpad2: 'Num. tastatur 2',
	numpad3: 'Num. tastatur 3',
	numpad4: 'Num. tastatur 4',
	numpad5: 'Num. tastatur 5',
	numpad6: 'Num. tastatur 6',
	numpad7: 'Num. tastatur 7',
	numpad8: 'Num. tastatur 8',
	numpad9: 'Num. tastatur 9',
	multiply: 'Multiplikation',
	add: 'Addition',
	subtract: 'Subtraktion',
	decimalPoint: 'Decimaltegn',
	divide: 'Division',
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
	scrollLock: 'Scroll Lock',
	semiColon: 'Semikolon',
	equalSign: 'Lig med',
	comma: 'Komma',
	dash: 'Streg',
	period: 'Punktum',
	forwardSlash: 'Skråstreg',
	graveAccent: 'Accent grave',
	openBracket: 'Åben parentes',
	backSlash: 'Omvendt skråstreg',
	closeBracket: 'Lukket parentes',
	singleQuote: 'Anførselstegn',
	
	ibm :
	{
		helpLinkDescription : "Åbn flere hjælpeemner i et nyt vindue",
		helpLink : "Flere emner i hjælp"
	}

});

