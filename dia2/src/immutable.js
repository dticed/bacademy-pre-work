const john = {
  name: 'John',
  surname: 'Doe',
  age: 30,
  hobbies: ['Surf', 'Design'],
}

//const jane = {john}

const jane = {
  ...john,
  name: 'Jane',
  hobbies: [...john.hobbies ,'MuayThai', 'Programming']
}

console.log(john === jane)

console.log('John:', john)
console.log('Jane:', jane)
