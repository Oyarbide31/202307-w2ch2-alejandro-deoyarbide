/*
vas a usar el metodo Object.is()pq te sirve para determinar si dons valores son iguales.
*/
export const strictEquals = (a, b) => {
  return Object.is(a, b);
};
