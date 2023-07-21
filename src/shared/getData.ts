export const getData = async (url:string) => {
  const response = await fetch(url);
  const result = await response.json();
  console.log(result);
  return result;
};
