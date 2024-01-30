export async function fetchMeals() {
  const response = await fetch("http://localhost:3000/meals");
  const respData = await response.json();

  if (!response.ok) {
    throw new Error(respData.message || "Failed to fetch places.");
  }

  return respData;
}

export async function submitOrder(requestBody) {
  const response = await fetch("http://localhost:3000/orders", {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const respData = await response.json();

  if (!response.ok) {
    throw new Error(respData.message || "Failed to submit the order.");
  }

  return respData;
}
