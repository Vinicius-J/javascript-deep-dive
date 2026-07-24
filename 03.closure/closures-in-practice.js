//* closure pode ser usado quando é preciso repetir a lógica, mudando apenas os valores bases da função

// function createMultiplier(operator) {
//   return (number) => number * operator;
// }

// const double = createMultiplier(2);
// const triple = createMultiplier(3);

// console.log(double(5));
// console.log(triple(5));

function myfunction1(data) {
  let _data = data;
  return {
    getData() {
      console.log(_data);
    },
    setData(newData) {
      _data = newData;
      console.log(_data);
    },
  };
}

const createData = myfunction1([{ name: "Vinícius", age: 23 }]);
