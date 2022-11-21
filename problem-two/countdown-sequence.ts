function coundDownSqn(arr: number[]) {
  const result: any = []

  let x: number = 0

  let y: number[][] = []

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) x++

    let newArr: number[] = []

    if (arr[i] - arr[i + 1] == 1 || arr[i] == 1) {
      while (arr[i] >= 1) {
        newArr = Array.of(arr[i])

        break
      }
    }

    y.push(newArr)
  }

  result.push(x)
  result.push(y)

  console.log(result)
}

coundDownSqn([4, 3, 2, 1, 3, 2, 1, 1])
// coundDownSqn([1, 1, 2, 1])
// coundDownSqn([4, 8, 3, 2, 1, 2])
