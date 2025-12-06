const API_URL = "http://localhost:3000/frases"; 
// Ajusta el puerto si tu backend usa otro

export const getFrases = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const createFrase = async (texto: string) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ texto }),
  });
  return response.json();
};

export const deleteFrase = async (id: number) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
  return response.json();
};
