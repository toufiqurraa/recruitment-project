function coundDownSqn(arr: number[]) {
  let result: any = [];

  let x: number = 0;

  let y: number[] = [];

  if (!arr.length) result = [0, []];

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);

    if (arr[i] === 1) {
      x++;
      y.push(arr[i]);
    }

    if (arr[i] - arr[i + arr[i] - 1] === arr[i + 1]) {
      y.push(arr[i]);
    }
  }

  let new_list: number[] = [];

  for (let i = 0; i <= y.length; i++) {
    new_list.push(y[i]);

    if (y[i] == 1) {
      result.push(new_list);

      new_list = [];
    }
  }

  result.unshift(x);

  return result;
}

console.log(coundDownSqn([]));
// coundDownSqn([1, 1, 2, 1])
// coundDownSqn([4, 8, 3, 2, 1, 2])
