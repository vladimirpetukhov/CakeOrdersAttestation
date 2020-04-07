import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Editor() {
	const [value, setValue] = useState('');

	const handleOnChange = (e, editor) => {
		const data = editor.getData();
		console.log(data);
		setValue(data);

		return <CKEditor editor={ClassicEditor} onChange={handleOnChange} />;
	};
}

export default Editor;
