export const get_api_data = async () => {
    const url = 'https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=6d28a1833043465e896549da9c1943de';
    const data = await fetch ( url );
    const data_json  = await data.json();
    return data_json;
}
