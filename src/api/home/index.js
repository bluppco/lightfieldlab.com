export const fetchHome = async ( ENDPOINT, collection_id, BEARER_TOKEN )  => {

    const options = {

        method: 'GET',

        headers: {

            'Authorization': `Bearer ${ BEARER_TOKEN }`

        }

    }
    const data = await fetch( ENDPOINT + collection_id, options )
    return await data.json()

}
