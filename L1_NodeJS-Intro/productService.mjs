export const findMax = (arr) => {
	return arr.find(e => e.price === Math.max(...arr.map(e => e.price)));
}

export const findMinWomen = (arr) => {
	const womenList = arr.filter(e => e.type === "Women");
	return womenList.find(e => e.price === Math.min(...arr.map(e => e.price)));
}
