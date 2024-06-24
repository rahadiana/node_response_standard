'use strict';
const ResponseHandler = function (code, data, msg) {

    function MessageData(msg) {
        return msg === null || msg === undefined
            ? ''
            : msg
    }

    function err(code, msg, data) {
        return {success: false, code: code, message: MessageData(msg), data: data}
    }

    function success(code, msg, data) {
        return {success: true, code: code, message: MessageData(msg), data: data}
    }

    const FinalReturn = data !== "" && code == 200
        ? success(code, msg, data)
        : err(code, msg, data)

    return JSON.stringify(FinalReturn)
}

const RawResponseHandler = function (code, data, msg) {

    function MessageData(msg) {
        return msg === null || msg === undefined
            ? ''
            : msg
    }

    function err(code, msg, data) {
        return {success: false, code: code, message: MessageData(msg), data: data}
    }

    function success(code, msg, data) {
        return {success: true, code: code, message: MessageData(msg), data: data}
    }

    const FinalReturn = data !== "" && code == 200
        ? success(code, msg, data)
        : err(code, msg, data)

    return FinalReturn
}

module.exports = {
    ResponseHandler,
    RawResponseHandler
}