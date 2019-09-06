/// Код пишем здесь

//task 1
let car = {
  model: 'somecar',
  wheels: 4,
  isStop: true,
  motorCylinders: 5,
  start: function() {
    return 'car is start'
  }
};

let man = {
  hands: 2,
  foots: 1,
  head: true,
  colorskin: 'white',
  walk: function() {
    return 'man walks'
  }
};

let ocean = {
  temperature: 20,
  hightWave: '3m',
  soundWave: true,
  stormOn: function() {
    return 'Storm is on'
  },
  stormOff: function() {
    return 'Storm is off'
  }
};

let beach = {...car, ...man, ...ocean};
function showMessage() {
  return beach
};

//task 2
function showMessageTask2() {
  return Object.values(beach).forEach(element => {
      console.log(element)
      
  });
};


//task3

