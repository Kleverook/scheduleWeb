function getXmlHttp() {
    var xmlhttp;
    try {
        xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
            xmlhttp = false;
        }
    }
    ;
    if (!xmlhttp && typeof XMLHttpRequest != 'undefined') {
        xmlhttp = new XMLHttpRequest();
    }
    ;
    return xmlhttp;
};

// function check_task() {
//     var xmlhttp = getXmlHttp();
//     xmlhttp.open('POST', '/', true);
//     xmlhttp.setRequestHeader('Content-Type', 'application/json');
//     xmlhttp.send(JSON.stringify({"command": "check_task"}));
//     xmlhttp.onreadystatechange = function () {
//         if (xmlhttp.readyState == 4) {
//             if (xmlhttp.status == 200) {
//                 var dict = JSON.parse(xmlhttp.responseText);
//                 for (var key in dict) {
//                     var elem = document.querySelector('tr[id="' + key + '"] td:nth-of-type(3)');
//                     if (elem.querySelector(".overlay-loader")) {
//                         elem.querySelector(".overlay-loader").remove();
//                     }
//                     elem.innerHTML = dict[key][0];
//                 }
//                 ;
//             }
//             ;
//         }
//         ;
//     };
//     if (document.querySelectorAll('table div[class="overlay-loader"]').length) {
//         setTimeout(check_task, 1 * 1000);
//     }
//     ;
// };