// Breakfast --> 7:00 a.m.
// Lunch --> 12:00 p.m.
// Dinner --> 7:00 p.m.

function timeToEat(givenTime: string) {
  const timeRemaining: number[] = []

  let [time, modifier] = givenTime.split(' ')

  let [hour, min] = time.split(':')

  console.log('modifier:::  ' + modifier)
  console.log('hour:::  ' + Number(hour))
  console.log('min:::  ' + Number(min))

  // if (modifier == 'p.m.' Number(hour) >= 1) {
  //   console.log('object')
  // }

  const breakfast: string = '7:00 a.m.'
  let [bTime] = breakfast.split(' ')
  let [bHour] = bTime.split(':')

  const lunch: string = '12.00 p.m.'
  let [lTime] = lunch.split(' ')
  let [lHour] = lTime.split(':')

  const dinner: string = '7.00 p.m.'
  let [dTime] = dinner.split(' ')
  let [dHour] = dTime.split(':')

  if (modifier == 'a.m.' && Number(hour) == 7 && Number(min) == 0) {
    timeRemaining.push(0, 0)
  }

  if (modifier == 'p.m.' && Number(hour) == 7 && Number(min) == 0) {
    timeRemaining.push(0, 0)
  }

  if (modifier == 'p.m.' && Number(hour) == 7 && Number(min) == 0) {
    timeRemaining.push(0, 0)
  }

  // breakfast time
  if ((modifier == 'a.m.' && Number(hour) >= 1 && Number(hour) < 7) || Number(hour) == 12) {
    console.log('breakfast')

    if (Number(hour) == 12 && Number(min) == 0 && modifier == 'a.m.') timeRemaining.push(7, 0)

    if (Number(hour) == 12 && Number(min) != 0 && modifier == 'a.m.') timeRemaining.push(6, 60 - Number(min))

    if (Number(min) == 0 && Number(hour) >= 1 && Number(hour) < 7) {
      timeRemaining.push(Number(bHour) - Number(hour), 0)
    }

    if (Number(min) != 0 && Number(hour) >= 1 && Number(hour) < 7) {
      timeRemaining.push(Number(bHour) - Number(hour) - 1, 60 - Number(min))
    }
  }

  // lunch time
  if (modifier == 'a.m.' && Number(hour) < 12 && Number(hour) >= 7) {
    console.log('lunch')

    if (Number(min) == 0 && Number(hour) < 12 && Number(hour) > 7) {
      timeRemaining.push(Number(lHour) - Number(hour), 0)
    }

    if (Number(min) != 0 && Number(hour) < 12 && Number(hour) >= 7) {
      timeRemaining.push(Number(lHour) - Number(hour) - 1, 60 - Number(min))
    }
  }

  // dinner time
  if ((modifier == 'p.m.' && Number(hour) >= 1 && Number(hour) < 7) || Number(hour) == 12) {
    console.log('dinner')

    if (Number(hour) == 12 && Number(min) != 0 && modifier == 'p.m.') timeRemaining.push(Number(hour) - Number(dHour) + 1, 60 - Number(min))

    if (Number(min) == 0 && Number(hour) >= 1 && Number(hour) < 7) {
      timeRemaining.push(Number(dHour) - Number(hour), 0)
    }

    if (Number(min) != 0 && Number(hour) >= 1 && Number(hour) < 7) {
      timeRemaining.push(Number(dHour) - Number(hour) - 1, 60 - Number(min))
    }
  }

  return timeRemaining
}

console.log(timeToEat('07:10 a.m.'))
