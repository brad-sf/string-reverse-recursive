const stringReverse = (string) => {
	if (string.length < 1) {
		return string;
	} else {
		const splitString = string.split('');
		return splitString.pop() + stringReverse(splitString.join(''));
	}
};

module.exports = stringReverse;
