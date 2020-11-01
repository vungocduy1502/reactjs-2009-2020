//Exercise 1:
function isEqual(arr1, arr2) {
    return arr1.toString() == arr2.toString()
}

//Exercise 2:
function flatten(arr) {
    const result = arr.toString()
    return result.split(',')
}

//Exercise 3:
function chunk(arr, size) {
    const array = []
    while (arr.length) {
        array.push(arr.splice(0, size))
    }
    return array
  }

  //Exercise 4:
function intersection(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            arr1[i] == arr2[j]
        }
        return arr2[i]
    }

}

  //Exercise 5:
function compareDate(input) {
    const date = new Date(input)
    const dateSale = new Date('Oct 30, 2020 12:30:32')
    if (date <= dateSale) return true;
    return false
}

  //Exercise 6:
const regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
function checkEmail(email) {
    return regexEmail.test(email)
}

const regexUserName = /^[a-zA-Z_]{1}[\w_]+/;
function checkUser(userName) {
    if (userName.indexOf('__') === -1) return regexUserName.test(userName)
    return false
}