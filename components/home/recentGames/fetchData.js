export const fetchData = async () => {
  try {
    const res = await fetch(
      process.env.NEXT_PUBLIC_NODE_ENV === "production"
        ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/games?id=1&name=1&tags=1&information=1&repacksList=1&category=1&page=${page}`
        : `http://localhost:3000/games?id=1&name=1&tags=1&information=1&repacksList=1&category=1&page=${page}`,
      {
        method: "GET",
      }
    );
    const dataObj = await res.json();
    return await dataObj[0].data;
  } catch (error) {
    console.log(error.message);
  }
};
