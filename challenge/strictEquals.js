/*
vas a usar el metodo Object.is()pq te sirve para determinar si dons valores son iguales.
*/
export const strictEquals = (a, b) => {
  let result = Object.is(a, b);
  if (Object.is(NaN, NaN)) {
    return result;
  }
};
