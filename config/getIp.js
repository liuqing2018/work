/**
 * Created by Administrator on 2018/6/1.
 */
const os = require('os'),
    ips = [],
    ifaces = os.networkInterfaces();

// ip address
for (var dev in ifaces) {
    ifaces[dev].forEach(function (details, alias) {
        if (details.family == 'IPv4') {
            ips.push(details.address);
        }
    });
}
module.exports = ips;
