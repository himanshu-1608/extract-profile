const profile = require('./index.js');

console.log("Starting tests...");

check1 = profile();
if (check1 !== "Hello, User!!") {
    throw new Error('Module not working properly with default args! If you think there is a bug, please address it at: http://github.com/himanshu-1608/extract-profile/issues');
}
check2 = profile('himanshu-1608');
if (check2 !== "Hello, himanshu-1608!!") {
    throw new Error('Module not working properly with named args! If you think there is a bug, please address it at: http://github.com/himanshu-1608/extract-profile/issues');
}