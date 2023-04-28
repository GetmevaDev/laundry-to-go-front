export async function fetchAPI(path) {
  try {
    const response = await fetch(
      `https://laundry-to-go.herokuapp.com/api/${path}`
      // `http://localhost:1337/api/${path}`
    );

    const data = await response.json();

    return data;
  } catch (error) {
    return {
      props: {
        data: null,
      },
    };
  }
}
