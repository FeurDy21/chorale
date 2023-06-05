/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	config.toolbar = 'observation';
	config.toolbar_MyToolbar =[
[ 'Source', '-', 'Save', 'NewPage', 'DocProps', 'Preview', 'Print', '-', 'Templates' ],
[ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo' ],
[ 'Find', 'Replace', '-', 'SelectAll', '-', 'SpellChecker', 'Scayt' ],
[ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton',
'HiddenField' ],
'/',
[ 'Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat' ],
[ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv',
'-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl' ],
[ 'Link', 'Unlink', 'Anchor' ],
[ 'Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak', 'Iframe' ],
];

config.removePlugins = 'resize';
config.resize_enabled = false;

config.resize_minWidth = 300;
config.resize_minHeight = 300;
config.resize_maxWidth = 800;
config.resize_maxHeight = 600;
config.width = 735;
config.height = 150;
config.resize_dir = 'vertical';
config.resize_dir = 'horizontal';
config.resize_dir = 'both';
};


