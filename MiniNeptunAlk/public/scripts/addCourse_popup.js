$('#btnAddCourse').on('click', function (e) {
    e.preventDefault();
    let $modal = $('.modal');
        $modal = $(`<div class="modal fade confirm-modal" tabindex="-1" role="dialog" id="addCourseModal">
  <div class="modal-dialog modal-md" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <div class="alert alert-danger"></div>
        <div class="form-area"></div>
      </div>
    </div>
  </div>
</div>`);
        var $formArea = $modal.find('.form-area');
        var $alertArea = $modal.find('.alert');
        $alertArea.hide();
        $formArea.load('/lectures/addCourse form',function(){
            $modal.modal('show');
            var addCourseForm=$modal.find('form');
            addCourseForm.on('submit',function(e){
                e.preventDefault();
                const data=$(this).serializeArray();
                Promise.resolve(
                $.ajax({
                    url: '/ajax/addCourse',
                    method: 'POST',
                    data,
                    dataType: 'json',
                    headers: { 'csrf-token': $('[name="_csrf"]').val()}
                })
                ).then(j=>{
                    if(j.success){
                        $modal.modal('hide');
                        location.reload(true);
                    }else{
                        $alertArea.load('/lectures/addCourse .alert',function(){
                            $alertArea.show();
                            $modal.modal('show');
                        })
                    }
                })
            })

        })
    }

);