export const getTours = async (url:string) => {
	const response = await fetch(url);
	if(response.status === 200){
		return response.json();
	}
	return response;
};
