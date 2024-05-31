import axios from "axios"
axios.defaults.baseURL = "https://api.unsplash.com/"
export const getImagesApi = async (searchQuery) => {
    const clientId = "E0PSjWqmuZaub7NT0PLe1j-UtSSUEYZlhi8PuvQHXKM"
    const response = await axios.get("search/photos", {
        params: {
        query: searchQuery,
            client_id: clientId,
        },
    })
    return response
}