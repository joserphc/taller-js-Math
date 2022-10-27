const obj = {
    123: 'Juanito Alcachofa',
    456: 'Juanita Alcaparra',
  };

function solution(obj) {
    let arrayOfObject = []
    let objectKeys = Object.keys(obj)
    let objectValues = Object.values(obj)

    for (let index = 0; index < objectKeys.length; index++) {
        let objectInArray = {
            id: objectKeys[index],
            name: objectValues[index]
        }
        arrayOfObject.push(objectInArray)
    }

    return arrayOfObject
}

solution(obj)

