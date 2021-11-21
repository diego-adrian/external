
// const palindrome = word => word.split('').reverse().join('');
const palindrome = word => {
  return new Promise((resolve, reject) => {
    if (!word) reject('La palabra esta vacia');
    const palabraInvertida = word.split('').reverse().join('');
    resolve(palabraInvertida);
  });
}

const palindrome2 = word => {
  return new Promise((resolve, reject) => {
    if (!word) reject('La palabra esta vacia');
    const palabraInvertida = word.split('').reverse().join('');
    resolve(palabraInvertida);
  });
}

test('Verificacion', () => {
  expect(2 + 2).toBe(4);
});

// test('Quiero verificar que hola es igual a aloh', () => {
//   return palindrome('hola')
//     .then(str => {
//       expect(str).toBe('aloh');
//     })
// });

// test('Quiero verificar que hola es igual a aloh', async () => {
//   const response = await palindrome('hola');  
//   expect(response).toBe('alo');
// });

// test('Quiero verificar la igualdad de un objeto', () => {
//   var obj = { token: 1, user: 'Adrian', id: 1};
//   var resObjAuth = { token: 1, user: 'Adrian', id: 1};
//   expect(obj).toEqual(resObjAuth);
// });


// var nombres = ['Adrian', 'Cinthia', 'Adriel', 'Cinthia'];

// var setNombres = new Set(nombres);
// console.log(setNombres);

// test('Queremos verificar que el nombre Adriel se encuentre en el array', () => {
//   expect(new Set(nombres)).toContain('Adriel');
// });


// var holaMundo = 'Hola mundo';

// test('Que la palabra hola este dentro de mi variable holaMundo', () => {
//   expect(holaMundo).not.toMatch(/todos/);
// });

// test('Quiero verificar que 1 === 1', () => {
//   expect(1 === 2).toBeTruthy();
// });


// test('Quiero verificar que 2 + 2 = 4', () => {
//   expect(2 + 2).toBe(4);
// })

// test('Quiero verificar que 2 + 2 = 4 pero usado toEqual', () => {
//   expect(2 + 2).toEqual(4);
// })

// test('Quiero verificar que 5 es mayor 4', () => {
//   expect(4).toBeGreaterThan(3);
// })