const success = (res, content, status = 200) => {
    res.status(status).json(content);
};

const error = (res, message, status = 400) => {
    res.status(status).json({ message });
};

const defineError = (res, errorMsg, condition, errorResponse = 'Not Autorized') => {
    if (errorMsg.includes(condition)) return error(res, errorResponse, 401);
    else return error(res, 'Internal Error', 500);
};

module.exports = { success, error, defineError };
