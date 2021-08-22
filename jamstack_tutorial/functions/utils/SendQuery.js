const axios = require('axios')
require('dotenv').config()

module.exports = async (query, variables) => {
    const {data: {data, errors}} = await axios({
        url: "https://graphql.us.fauna.com/graphql",
        method: 'POST',
        headers: {
            Authorization: `Bearer ${process.env.FAUNA_SECRET_KEY}`
        },
        data: {
            query: query,
            variables: variables
        }
    });
    if(errors){
        console.error(errors)
    }
    return data
}