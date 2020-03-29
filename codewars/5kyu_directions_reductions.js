// 5 kyu problem https://www.codewars.com/kata/550f22f4d758534c1100025a

function dirReduc(arr) {
	if (arr.length > 1) {
		for (let i = 0; i < arr.length; i++) {
			if (
				(arr[i] == 'NORTH' && arr[i + 1] == 'SOUTH') |
				(arr[i] == 'SOUTH' && arr[i + 1] == 'NORTH')
			) {
				arr.splice(i, 2)
				dirReduc(arr)
			} else if (
				(arr[i] == 'WEST' && arr[i + 1] == 'EAST') |
				(arr[i] == 'EAST' && arr[i + 1] == 'WEST')
			) {
				arr.splice(i, 2)
				dirReduc(arr)
			}
		}
	}
	return arr
}
