export const trim = (str) => {
	if (typeof str != 'string') {
		throw Error('must be a string');
	} else {
		return str.replace(/^\s+|\s+$/g, '');
	}
};