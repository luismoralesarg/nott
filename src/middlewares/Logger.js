const myLogger = function (req, res, next) {
    
    const today = new Date();
    const dd = String(today. getDate()). padStart(2, '0');
    const mm = String(today. getMonth() + 1). padStart(2, '0');
    const yyyy = String(today.getFullYear());
    const hh = String(today.getHours());
    const mi = String(today.getMinutes());
    const ss = String(today.getSeconds());

    const date = dd + '/' + mm + '/' + yyyy + ' ' + hh + ':'+ mi +':' + ss;
    console.log(date + ' | ' + req.method + ' ' + req.baseUrl);
    next();
};

module.exports = myLogger;