var alertPlaceholderWarning = document.getElementById('liveAlertPlaceholderWarning')
var alertTriggerWarning = document.getElementById('liveAlertBtnWarning')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholderWarning.append(wrapper)
}

if (alertTriggerWarning) {
  alertTriggerWarning.addEventListener('click', function () {
    alert('your password is not strong enough', 'warning')
  })
}
