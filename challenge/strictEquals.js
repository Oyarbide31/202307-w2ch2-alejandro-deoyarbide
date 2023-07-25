/*
usas el metodo Object.is()pq te sirve para determinar si dos valores son iguales.
*/
// export const strictEquals = (a, b) => {
//   let result = Object.is(a, b);
//   return result;
// };

export const strictEquals = (a, b) => {
  if (isNaN(a) && isNaN(b) && typeof a == "number" && typeof b == typeof a) {
    return true;
  }
  if (a == b && a == 0 && typeof a == "number") {
    if (
      (Math.sign(a) == 0 && Math.sign(b) == -0) ||
      (Math.sign(a) == -0 && Math.sign(b) == 0)
    ) {
      return false;
    }
  }

  if (typeof a != typeof b) {
    return false;
  }
  if (a != b) {
    return false;
  }
  return true;
};
