export const getData = (endpoint: string) => {
  return fetch(endpoint).then((result) => result.json());
};
