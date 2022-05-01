var alertPlaceholderDanger = document.getElementById('liveAlertPlaceholderDanger')
var alertTriggerDanger = document.getElementById('liveAlertBtnDanger')

function alert(message, type) {
  var wrapper = document.createElement('div')
  wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholderDanger.append(wrapper)
}

if (alertTriggerDanger) {
  alertTriggerDanger.addEventListener('click', function () {
    alert('If you continue, all content will be deleted', 'danger')
  })
}