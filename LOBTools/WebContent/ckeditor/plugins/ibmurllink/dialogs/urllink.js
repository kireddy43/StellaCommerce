﻿/* Copyright IBM Corp. 2009-2015  All Rights Reserved. */var linkDialog=function(c,d){var h=c.plugins.ibmurllink,i=CKEDITOR.plugins.link,f,g=!1,j=function(a){var b={},e=a&&(a.data("cke-saved-href")||a.getAttribute("href"))||"",f;g=!1;(f=e.match(/^#(.*)$/)&&c.filter.check("a[name]"))?(g=!0,b.anchor={},b.anchor.name=b.anchor.id=f[1],a&&(b.text=a.getText())):(b.href=e,a&&(b.target=a.getAttribute("target")||"",b.text=a.getText()));"bookmark"==d||g?this.parts.title.setText(c.lang.ibmurllink.documentbookmarktitle):this.parts.title.setText(c.lang.ibmurllink.title);
b.anchors=i.getEditorAnchors(c);this._.selectedElement=a;return b};return{title:c.lang.ibmurllink.title,resizable:CKEDITOR.DIALOG_RESIZE_NONE,minWidth:300,minHeight:200,onShow:function(){var a=c.getSelection(),b="";if(a.getType()==CKEDITOR.SELECTION_ELEMENT){var e=a.getSelectedElement();e.is("a")&&(b=e)}if(""==b){var d=a.getRanges();if(1!==d.length)return;d[0].shrink(CKEDITOR.SHRINK_TEXT);b=d[0].getCommonAncestor(!0).getAscendant("a",!0)}this.setupContent(j.apply(this,[b]));e=this.getContentElement("info",
"txtDisplay");e.enable();b?(a.selectElement(b),f=h.findInnerElement(b),(h.hasChildElementNodes(f)||f instanceof CKEDITOR.dom.element&&"img"==f.getName())&&e.disable()):d[0].collapsed||(h.containsElementNodes(d)&&e.disable(),CKEDITOR.env.ie?(a.unlock(!0),e.setValue(a.getSelectedText()),a.lock()):e.setValue(a.getSelectedText()))},onOk:function(){var a={};this.commitContent(a);var b={};if("bookmark"==d||g){if(""==a.anchor.name)return;b.href="#"+(a.anchor.name||"");b.text=a.text}else"urllink"==d&&(b.href=
a.url,b.target=a.target,b.text=a.text);if(this._.selectedElement){a=this._.selectedElement;if(b.text){var e=b.text;delete b.text}if("urllink"==d&&""==b.target||"bookmark"==d)a.hasAttribute("target")&&"_blank"===a.getAttribute("target")&&a.removeAttribute("target"),delete b.target;b.href&&(b["data-cke-saved-href"]=b.href);a.setAttributes(b);CKEDITOR.env.ie&&f.type===CKEDITOR.NODE_TEXT&&(f=h.findInnerElement(a));e&&f&&f.setText(e.replace(/ /g," "));delete this._.selectedElement}else b.src="urllink",
c.execCommand("insertLink",b)},contents:[{id:"info",style:"width: 100%",elements:[{type:"select",id:"anchorName","default":"",required:!0,label:c.lang.ibmurllink.linkTo,style:"width: 100%;",items:[[""]],setup:function(a){("bookmark"==d||g)&&0<a.anchors.length?this.getElement().show():this.getElement().hide();if(0<a.anchors.length){this.clear();for(var b=0;b<a.anchors.length;b++)a.anchors[b].name&&this.add(a.anchors[b].name);a.anchor&&this.setValue(a.anchor.name)}},commit:function(a){a.anchor||(a.anchor=
{});a.anchor.name=this.getValue()}},{type:"html",id:"noAnchors",style:"text-align: center; white-space: normal;",html:"<div>"+CKEDITOR.tools.htmlEncode(c.lang.link.noAnchors)+"</div>",focus:!1,setup:function(a){var b=this.getDialog().parts.dialog.getParent();("bookmark"==d||g)&&1>a.anchors.length?(this.getElement().show(),this.getDialog().getContentElement("info","requiredLabel").getElement().hide(),b.setAttribute("aria-describedby",this.domId)):(this.getElement().hide(),this.getDialog().getContentElement("info",
"requiredLabel").getElement().show(),b.hasAttribute("aria-describedby")&&b.removeAttribute("aria-describedby"))}},{id:"txtUrl",type:"text",required:!0,"default":"",label:c.lang.common.url,setup:function(a){"urllink"!=d||g?this.getElement().hide():this.getElement().show();a.href&&this.setValue(a.href)},commit:function(a){var b=CKEDITOR.tools.trim(this.getValue());/^([a-zA-Z]+:\/\/|\.|\/|mailto:)/.test(b)||(b="http://"+b);a.url=b},validate:function(){this.getDialog();return"bookmark"==d||g?!0:CKEDITOR.dialog.validate.notEmpty(c.lang.ibmurllink.nourl).apply(this)}},
{id:"txtDisplay",type:"text","default":"",style:"padding: 5px 0px;",label:c.lang.ibmurllink.linkText,inputStyle:CKEDITOR.env.ie&&9>CKEDITOR.env.version?"width:350px":"",setup:function(a){("bookmark"==d||g)&&1>a.anchors.length?this.getElement().hide():(this.getElement().show(),a.text&&this.setValue(a.text))},commit:function(a){if(this.isEnabled()){var b=this.getValue();a.text="urllink"==d?""!==b?b:a.url:""!==b?b:a.anchor.name}}},{type:"checkbox",id:"chkNewWindow",requiredContent:"a[target]",label:c.lang.ibmurllink.openinnew,
"default":!1,setup:function(a){("urllink"!=d||g)&&this.getElement().hide();a.target&&this.setValue(a.target&&"_blank"===a.target)},commit:function(a){a.target=this.getValue()?"_blank":""}}]}]}};CKEDITOR.dialog.add("urllink",function(c){return linkDialog(c,"urllink")});CKEDITOR.dialog.add("bookmark",function(c){return linkDialog(c,"bookmark")});