//hello world serverless function
exports.handler = async (event, context, callback) => {
    return {
        statusCode: 200,
        body: JSON.stringify({
            msg: "hello world"
        })
    }
}