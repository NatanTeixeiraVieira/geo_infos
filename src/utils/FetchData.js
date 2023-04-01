export const GetData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  return data;
};

export const GetMultipleDatas = async (urls) => {
  const promises = urls.map((url) => fetch(url));
  const responses = await Promise.all(promises);
  const data = await Promise.all(responses.map((response) => response.json()));
  return data;
};
