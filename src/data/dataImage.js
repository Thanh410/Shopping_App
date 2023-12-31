let arrKey = [];

function groupBy(objectArray, property) {
    return objectArray.reduce(function (accumulator, obj) {
      let key = obj[property];
      if(arrKey.length <= 0) {
          arrKey.push(key);
      }
      else {
        const searchKey = arrKey.find((a) => a === key);
        if(!searchKey) {
          arrKey.push(key);
        }
      }
      if (!accumulator[key]) {
        accumulator[key] = []
      }
      accumulator[key].push(obj)
      return accumulator
    }, {})
  }


function printWithKey (a, b, c ) {
    for (let i in a) {
        let code = a[i];
        if(b[code] !== undefined) {
          c = [...c, b[code]]
        }
    }
    return c;
}



export const lastResult = (flow, listProduct) => {
    let newArrProduct = []
    let groupedStudents = groupBy(listProduct, flow)
    return printWithKey(arrKey, groupedStudents, newArrProduct)
}
