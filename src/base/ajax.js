var xhe = null
xhr = new XMLHttpRequest()
xhr.open('get', url, true)
xhr.send(null)
xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      success(xhr.responseText)
    } else {
      fail && fail(xhr.status)
    }
  }
}