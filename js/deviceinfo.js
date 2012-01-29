function onLoad4() {
    document.addEventListener("deviceready", onDeviceReady, false)
}

function onDeviceReady() {
    var myDiv = document.getElementById('props');
    myDiv.innerHTML = 'Device Name: ' + device.name + '<br />' +
    'Device PhoneGap: ' + device.phonegap + '<br />' +
    'Device Platform: ' + device.platform + '<br />' +
    'Device UUID: ' + device.uuid + '<br />' +
    'Device Version: ' + device.version + '<br />';
}