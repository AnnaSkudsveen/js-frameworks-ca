async function GetData() {
  try {
    const response = await fetch("https://v2.api.noroff.dev/online-shop/");
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export default GetData;
