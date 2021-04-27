const l = [];
let callback = () => {};
const setCallback = (f) => {
	callback = f;
};
const add = (params) => {
	if (typeof params === 'string') {
		l.push({title: null, content: params, animation: 'opacity'});
	} else if (typeof params === 'object') {
		const {title, content, positiveButton, animation = 'opacity'} = params;
		l.push({title, content, positiveButton, animation});
	}
	callback();
	return l.length-1
	
};

const close = (index) => {
	l.splice(index, 1);
	callback();
};

export { l, add, close, callback, setCallback };
