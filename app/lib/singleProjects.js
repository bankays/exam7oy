export const SingleProject = async (id) => {
  try {
    const response = await fetch(
      `https://api.escuelajs.co/api/v1/products/${id}`
    );
    return response.json();
  } catch (error) {
    console.log(error);
  }
};
