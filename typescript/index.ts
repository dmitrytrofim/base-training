interface Obj {
  name: string;
  street: {
    house: string
    name: string
  }
}

const obj: Obj = {
  name: 'Dan',
  street: {
    house: 12,
    name: 'test'
  }
}
