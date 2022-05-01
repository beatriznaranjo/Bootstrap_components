var alertPlaceholderSucc = document.getElementById('liveAlertPlaceholderSucc')
var alertTriggerSucc = document.getElementById('liveAlertBtnSucc')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholderSucc.append(wrapper)
}

if (alertTriggerSucc) {
  alertTriggerSucc.addEventListener('click', function () {
    alert('Congratulations, this is a success message', 'success')
  })
}
