// const { admin, database } = require('../utils/firebase')


const demoController = (demoRequestFromRouteHandler) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log("Some Async Activity Here")
            resolve({
                status: 0,
                payload: {
                    msg: "Activity Done",
                }
            })
        }
        catch (e) {
            console.log("Error in Demo Activity")
            reject({
                statusCode: 1,
                payload: {
                    msg: "Server Side error contact support",
                    Error: e
                }
            })
        }

    })
}

module.exports = {
    demoController,
    // ControllerFunction2,
    // ControllerFunction3,
    //  ..
    //  ..
}
