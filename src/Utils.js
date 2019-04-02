function addLeadingZero(num) {
    var s = num;
    if (num < 10) {
        s = "0" + s;
    }
    return s;
}

function getCurrentDatetime() {
    var date = new Date();
    var day = "" + addLeadingZero(date.getUTCDate());
    var month = "" + addLeadingZero(date.getUTCMonth() + 1);
    var year = "" + date.getUTCFullYear();
    var hours = "" + date.getHours();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    var minutes = "" + addLeadingZero(date.getMinutes());
    return day + "/" + month + "/" + year + ", " + hours + ":" + minutes + " " + ampm;
}

function cloneDict(dict) {
    var newDict = {};
    for (var key in dict) {
        if (dict[key] !== undefined) {
           if (dict[key] === null) {
                newDict[key] = null;
            } else if (dict[key].constructor === Object) {
                newDict[key] = cloneDict(dict[key]);
            } else if (dict[key].constructor === Array) {
                newDict[key] = [];
                for (var i = 0; i < dict[key].length; i++) {
                    if (dict[key][i].constructor === Object) {
                        newDict[key].push(cloneDict(dict[key][i]));
                    } else {
                        newDict[key].push(dict[key][i]);
                    }
                }
            } else {
                newDict[key] = dict[key];
            }
        }
    }
    return newDict;
}

module.exports = {getCurrentDatetime, cloneDict};