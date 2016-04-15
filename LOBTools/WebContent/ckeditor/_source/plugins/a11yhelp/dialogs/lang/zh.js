/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/licensePortions Copyright IBM Corp., 2009-2015.
 */

CKEDITOR.plugins.setLang( 'a11yhelp', 'zh',
{
	//do not translate anything with the form ${xxx} 
	
	title : "帮助",
	contents : "帮助内容。要关闭此对话框，请按 ESC。",
	legend :
	[
		{
			name : "辅助功能选项指示信息",
			items :
			[
				{
					name : "编辑器工具栏",
					legend: "按 ${toolbarFocus} 可浏览到工具栏。" +
						"按 TAB 键和 SHIFT+TAB 可移到下一个和上一个工具栏组。" +
						"按左方向键和右方向键可移到下一个和上一个工具栏按钮。" +
						"按空格键或 ENTER 键可激活工具栏按钮。"
				},

				{
					name: "编辑器对话框",
					legend:
						"在对话框内，按 TAB 键可浏览至下一个对话框元素，按 SHIFT+TAB 可移到上一个对话框元素，按 ENTER 键可提交对话框，按 ESC 键可取消对话框。" +
						"当对话框具有多个选项卡时，可以在对话框跳格顺序中使用 ALT+F10 或 Tab 键来访问选项卡列表。" +
						"在选项卡列表上，使用右方向键和左方向键可分别移到下一个和上一个选项卡。"
				},

				{
					name : "编辑器上下文菜单",
					legend :
						"按 ${contextMenu} 或应用程序键可打开上下文菜单。" +
						"然后，按 TAB 键或下方向键可移到下一个菜单选项。" +
						"按 SHIFT+TAB 键或上方向键可移到上一个选项。" +
						"按空格键或 ENTER 键可选择菜单选项。" +
						"按空格键、ENTER 键或右方向键可打开当前选项的子菜单。" +
						"按 ESC 键或左方向键可返回到父菜单项。" +
						"按 ESC 键可关闭上下文菜单。"
				},

				{
					name : "编辑器列表框",
					legend :
						"在列表框内，按 TAB 键或下方向键可移到下一个列表项。" +
						"按 SHIFT+TAB 键或上方向键可移到上一个列表项。" +
						"按空格键或 ENTER 键可选择列表选项。" +
						"按 ESC 键可关闭列表框。"
				},

				{
					name : "编辑器元素路径栏（如果可用*）",
					legend :
						"按 ${elementsPathFocus} 可浏览到元素路径栏。" +
						"按 TAB 键或右方向键可移到下一个元素按钮。" +
						"按 SHIFT+TAB 键或左方向键可移到上一个按钮。" +
						"按空格键或 ENTER 键可选中编辑器中的元素。"
				}
			]
		},
		{
			name : "命令",
			items :
			[
				{
					name : " 撤销命令",
					legend : "按 ${undo}"
				},
				{
					name : " 重做命令",
					legend : "按 ${redo}"
				},
				{
					name : " 粗体命令",
					legend : "按 ${bold}"
				},
				{
					name : " 斜体命令",
					legend : "按 ${italic}"
				},
				{
					name : " 下划线命令",
					legend : "按 ${underline}"
				},
				{
					name : " 链接命令",
					legend : "按 ${link}"
				},
				{
					name : " 工具栏折叠命令（如果可用*）",
					legend : "按 ${toolbarCollapse}"
				},
				{
					name: ' 访问上一个焦点空间命令',
					legend: '按下 ${accessPreviousSpace}，以便在无法访问的焦点空间中直接将空格插入光标前面。' +
						'无法访问的焦点空间是编辑器中您无法放置光标的位置' + 
						'使用鼠标或键盘。例如：使用此命令在相邻的表元素之间插入内容。'
				},
				{
					name: ' 访问下一个焦点空间命令',
					legend: '按下 ${accessNextSpace}，以便在无法访问的焦点空间中直接将空格插入光标后面。' +
						'无法访问的焦点空间是编辑器中您无法放置光标的位置' +
						'使用鼠标或键盘。例如：使用此命令在相邻的表元素之间插入内容。'
				},
				{
					name : " 增加缩进量",
					legend : "按 ${indent}"
				},
				{
					name : " 减少缩进量",
					legend : "按 ${outdent}"
				},				
				{
					name : " 文本方向为从左到右",
					legend : "按 ${bidiltr}"
				},
				{
					name : " 文本方向为从右到左",
					legend : "按 ${bidirtl}"
				},
				{
					name: ' 常用笔',
					legend: '按编辑器内的 ${ibmpermanentpen}（Mac 上的 Alt+Cmd+T）可激活/取消激活常用笔。'
				},
				{
					name : " 辅助功能选项帮助",
					legend : "按 ${a11yHelp}"
				}
			]
		},
		
		{	//added by ibm
			name : "注",
			items :
			[
				{	
					name : "",
					legend : "* 管理员可能已将某些功能禁用。"
				}
			]
		}
	],
	backspace: '退格键',
	tab: 'Tab 键',
	enter: 'Enter 键',
	shift: 'Shift 键',
	ctrl: 'Ctrl 键',
	alt: 'Alt 键',
	pause: 'Pause 键',
	capslock: '大写锁定键',
	escape: 'ESC 键',
	pageUp: '向上翻页键',
	pageDown: '向下翻页键',
	end: '结束',
	home: '主页',
	leftArrow: '向左方向键',
	upArrow: '向上方向键',
	rightArrow: '向右方向键',
	downArrow: '向下方向键',
	insert: '插入',
	'delete': '删除',
	leftWindowKey: '左 Windows 键',
	rightWindowKey: '右 Windows 键',
	selectKey: '选择键',
	numpad0: '数字小键盘 0',
	numpad1: '数字小键盘 1',
	numpad2: '数字小键盘 2',
	numpad3: '数字小键盘 3',
	numpad4: '数字小键盘 4',
	numpad5: '数字小键盘 5',
	numpad6: '数字小键盘 6',
	numpad7: '数字小键盘 7',
	numpad8: '数字小键盘 8',
	numpad9: '数字小键盘 9',
	multiply: '乘',
	add: '添加',
	subtract: '减',
	decimalPoint: '小数点',
	divide: '除',
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
	numLock: '数字锁定键',
	scrollLock: '滚动锁定键',
	semiColon: '分号键',
	equalSign: '等号键',
	comma: '逗号键',
	dash: '连字符键',
	period: '句号键',
	forwardSlash: '正斜杠键',
	graveAccent: '波浪符键',
	openBracket: '左方括号键',
	backSlash: '反斜杠键',
	closeBracket: '右方括号键',
	singleQuote: '单引号键',
	
	ibm :
	{
		helpLinkDescription : "在新窗口中打开更多帮助主题",
		helpLink : "更多帮助主题"
	}

});

