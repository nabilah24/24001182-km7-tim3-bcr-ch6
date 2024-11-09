export const getUsers = async (name) => {
  const token = localStorage.getItem("token");
  let params;
  if (name) {
    params.name = name;
  }
  let url =
    `${import.meta.env.VITE_API_URL}/types` +
    new URLSearchParams(params);

  const response = await fetch(url, {
    headers: {
      authorization: `Bearer ${token}`,
    },
    method: "GET",
  });

  // get data
  const result = await response.json();
  return result;
};