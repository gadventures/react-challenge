import hotels from './__data__';

export function fetchHotels() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({data: hotels}), 1000)
  });
}
