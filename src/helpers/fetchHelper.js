export const fetchHelper = async (url) => {
  let loading = true;

  let options = {
    method: "GET",
  };

  const fetchRes = await fetch(url, options);
  const status = fetchRes.status;
  const data = await fetchRes.json();

  loading = false;

  return {
    data,
    loading,
    status,
  };
};
