/**
 * Asynchronously fetches product data from the Noroff online shop API.
 *
 * @async
 * @function GetData
 * @returns {Promise<Array<Object>>} A promise that resolves to an array of product objects.
 * If an error occurs, an empty array is returned.
 */

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
