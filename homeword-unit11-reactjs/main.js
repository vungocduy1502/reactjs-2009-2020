//Exercise 1

// Viết 1 hàm trả về 1 array, nhận vào 2 tham số, tham số thứ 1 là ký tự cần lặp, tham số thứ 2 là số lần lặp
// vd: đầu vào ('ahihi', 3)
// Thì Kết quả là:
// ['ahihi', 'ahihi', 'ahihi']

// solution 1
const parameter1 = (string, number) => {
    const array = []
    for (let i = 0; i < number; i++) {
        array.push(string)
    }
    return array
  }

  // sulution 2
  const parameter2 = (string, number) => {
    const array = []
    let i = 0 
    while (i < number) {
        array.push(string)
      i++
    }
    return array
  }

//Exercise 2

// Viết 1 hàm để đảo ngược 1 mảng, không được dùng hàm array.reverse()
// Vd input:
// ['a', 1, '9', 'apple']
// Thì output phải là:
// ['apple', '9', 1, 'a']

const reverseTheArray = (array = []) => {
    const array = []
    for (let i = arr.length - 1; i >= 0; i--) {
      result.push(input[i])
    }
    return array
  }


//Exercise 3

// Xóa đi các giá trị được xem là sai
// Vd intput:
// [0, 1, false, 2, undefined, '', 3, null]
// Thì output là:
// [1, 2, 3]

const deleteFailValues = (array = []) => {
    const result = array.filter(character => character !== undefined && character !== null && character !== false && character !== '')
    return result
  }

// Exercise 4

// Tạo ra 1 array gồm các object có key và value tương ứng cặp array ban đầu
// Vd intput:
// const data = [['a', 1], ['b', 2]]
// Thì output là:
// { a: 1, b: 2 }

const createObject = (array = []) => {
    const object = {}
    array.forEach(item => {
      newObject[item[0]] = item[1]
    })
    return object
  }

//Exercise 5

// Sắp xếp mảng tăng dần
// Vd intput:
// [6, 4, 0, 3, -2, 1]
// Thì output là:
// [-2, 0, 1, 3, 4, 6]

function sort(data) {
   var result = data.sort((a,b)=>{
      return a - b;
   })
   console.log(result)
}
// run([1,4,2,6,5,7])

// Exercise 6

// Kiểm tra input đầu vào có phải là object hay không?
// Vd:
// const data = { a: 1 }
// return true
// const data = [1, 2, 3]
// return false

const checkObject = object => {
	if (Array.isArray(object) || typeof object !== 'object') {
		return false
	} else {
		return true
	}
}

// Exercise 7

// Viết 1 hàm trả về các key (của 1 object) khác các key truyền vào Vd:
// const obj = { a: 1, b: 2, c: 3, d: 4 }
// // truyền vào a, c
// return { b: 2, d: 4 }

const convertObject = (object = {}, array = []) => {
    for (let key in object) {
        array.forEach(element => {
        if (key === element) {
          delete(object[key])
        }
      })
    }
    return object
}


// Exercise 8

// Viết hàm nhập vào 1 array có nhiều hơn 5 phần tử Xóa phần tử số 2, 3 trong array Return mảng sau khi đã xóa

const deleteArrayItem = (array = []) => {
    if (array.length < 5) return 
    array.splice(1, 2)
    return array
}

  // Exercise 9
  const students = [
    { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
    { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
    { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
    { id: 4, name: 'Vũ Ngọc Duy', score: 9.9 },
    { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
    { id: 6, name: 'Phí Duy Quân', score: 9.6 },
    { id: 7, name: 'Trần Minh Minh', score: 6.1 }
  ]
 
const Student = students => {
const array = []
	students.map(student => {
		if (student.score < 5 && student.name.indexOf('Duy') !== 1) {
			array.push('Fail')
		} else {
			array.push('Pass')
		}
	})
	return array
}
  

