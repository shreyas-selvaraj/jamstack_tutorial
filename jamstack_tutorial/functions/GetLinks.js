const axios = require('axios')
require('dotenv').config()
const { GET_LINKS }  = require("./utils/LinkQueries")
const sendQuery = require("./utils/SendQuery")
const formattedResponse = require("./utils/FormattedResponse")

exports.handler = async (event) => {
    try {
        const res = await sendQuery(GET_LINKS)
        const data = res.allLinks.data
        return formattedResponse(200, data)
    }
    catch(err){
        console.error(err)
        return formattedResponse(500, { err: "Something went wrong." })
    }

}