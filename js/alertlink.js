var alertPlaceholderLink = document.getElementById('liveAlertPlaceholderLink')
var alertTriggerLink = document.getElementById('liveAlertBtnLink')

function alertLink(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<a href="#" class="alert-link">an example link</a><button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholderLink.append(wrapper)
}

if (alertTriggerLink) {
  alertTriggerLink.addEventListener('click', function () {
    alertLink('This alert contains ', 'primary')
  })
}