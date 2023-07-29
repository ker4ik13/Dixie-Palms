export const getTours = async (url) => {
    const response = await fetch(url);
    if (response.status === 200) {
        return response.json();
    }
    return response;
};
