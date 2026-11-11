export async function fetchCaves() {
  const response = await fetch("/api/v1/cave");
  if (!response.ok) {
    const error = new Error('An error occurred fetching caves');
    error.code = response.status;
    error.info = await response.json();
    throw error;
  }

  return await response.json();
}
