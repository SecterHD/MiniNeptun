function ajaxDelete(url) {
  const headers = {
    'csrf-token': $('[name="_csrf"]').val()
  }
  return Promise.resolve(
    $.ajax({
      url,
      method: 'DELETE',
      dataType: 'json',
      headers
    })
  )
}

function my_confirm() {
  // return Promise.resolve(confirm(question))
  let _resolve
  let _reject

  let $modal = $('.modal')
  $modal = $(`<div class="modal fade confirm-modal" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-sm" role="document">
        <div class="modal-content">
        <div class="modal-body">
            Biztosan szeretné végrehajtani?
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-success modal-ok" data-dismiss="modal">OK</button>
            <button type="button" class="btn btn-danger modal-cancel" data-dismiss="modal">Mégse</button>
        </div>
        </div>
    </div>
</div>`);
  $modal.modal('show')

  $modal.find('.modal-ok').on('click', function (e) {
    _resolve(true)
  })

  $modal.find('.modal-cancel').on('click', function (e) {
    _resolve(false)
  })
  return new Promise(function (resolve, reject) {
    _resolve = resolve
    _reject = reject
  })
}

$('.form').on('submit', function (e) {
  e.preventDefault()
  my_confirm().then(response => {
    if (response) {
      const url = '/ajax' + $(this).attr('action')
      ajaxDelete(url)
        .then(data => {
          location.reload(true)
        })
        .catch(xhr => {
          $('.help-block').text(xhr.responseText)
        })
    }
  })
})
