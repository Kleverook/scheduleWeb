window.onload = function () {
    check_login = function (element) {
        console.log(element.value)
    }

    check_user = function () {
        login = document.getElementById('login')
        password = document.getElementById('password')
        console.log(login.value)
        console.log(password.value)

        xmlhttp = getXmlHttp()
        xmlhttp.open('GET', '/api?login='+login.value+"&password="+password.value, true)
        xmlhttp.setRequestHeader('Content-Type', 'text/plain')
        xmlhttp.send("")
        xmlhttp.onreadystatechange = function () {
            if (xmlhttp.readyState == 4) {
                if (xmlhttp.status == 200) {
                    console.log(xmlhttp.responseText)
                }
            }
        }
    }
}