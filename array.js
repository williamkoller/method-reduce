const array = [
  {
    name: 'William',
    amount: 500
  },
  {
    name: 'Carlos',
    amount: 20
  }, 
  {
    name: 'Jonas',
    amount: 400
  },
  {
    name: 'Ribas',
    amount: 520
  }
]  

const result = array.reduce((acumulator, value) => {
  const exist = acumulator.find(item => item.name === value.name)
  if (exist) {
    exist.amount += value.amount
  } else {
    acumulator.push(value)
  }
  console.log(`result: ${value.amount}`)
  return acumulator
}, [])