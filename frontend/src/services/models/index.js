export const getModels = async (nickName) => {
  const token = localStorage.getItem("token");
  let params;
  if (nickName) {
    params.nick_name = nickName;
  }

  let url =
    `${import.meta.env.VITE_API_URL}/models` + new URLSearchParams(params);

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
