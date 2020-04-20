// 49. Group Anagrams https://leetcode.com/problems/group-anagrams/
const groupAnagrams = (strs) => {
	//     input strings in an array
	//     ouput is an array with arrays of anagrams
	if (strs.length === 0) return []
	if (strs.length === 1) return [strs]
	let myMap = new Map()

	for (let i = 0; i < strs.length; i++) {
		//use the spread operator on an array, sort the string and then convert it to string
		const currKey = [...strs[i]].sort().toString()
		// set the map with getting the currentKey and the current charac of string
		if (myMap.has(currKey)) myMap.set(currKey, [...myMap.get(currKey), strs[i]])
		if (!myMap.has(currKey)) myMap.set(currKey, [strs[i]])
	}

	return [...myMap.values()]
}
