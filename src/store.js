const l = [];
let callback = () => {};
const setCallback = (f) => {
	callback = f;
};
const add = (params, settings = {}) => {

	let popupParams = {};
	popupParams.settings = {};

	switch (typeof params) {
		case 'string':
			popupParams.title = null;
			popupParams.content = params;
			popupParams.animation = 'opacity';

			break;
		case 'object':
			const {title, content, positiveButton, animation = 'opacity', close = null} = params;

			popupParams.title = title;
			popupParams.content = content;
			popupParams.positiveButton = positiveButton;
			popupParams.animation = animation;
			popupParams.close = close;

			break;
		default:
			break;
	}

	if (settings.className) {
		popupParams.settings.className = settings.className;
	}

	l.push(popupParams);
	callback();
	return l.length - 1;
};

const close = (index = null) => {
	if (index === null) index = l.length - 1;
	if (l.length > index) {
		l.splice(index, 1);
		callback();
	}
};

const closeAll = (index = 0) => {
	while (l.length > 0) {
		l.pop();
	}
	callback();
};

export { l, add, close, closeAll, callback, setCallback };
