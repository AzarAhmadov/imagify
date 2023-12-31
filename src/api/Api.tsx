import axios from "axios";

const clientId = '4KQlsHTb_ZqUKDE_jtuqgvptS5WMgCrN_yc2FoD-_vg';

const searchImages = async (term: any) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: `Client-ID ${clientId}`,
        },
        params: {
            query: term,
            per_page: 30 
        }
    });
    return response.data.results;
};

export default searchImages;
