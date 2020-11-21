const API_URL = "http://localhost:1337";

export const callApi = async (path, method, body) => {
  const response = await fetch(`${API_URL}${path}`, {
    method,
    headers: {
      "content-type": "application/json"
    },
    credentials: "include",
    body: JSON.stringify(body)
  })
  const data = await response.json();

  return data;
}
