// Dialogo para deletar

  $('#confirmDelete').on('show.bs.modal', function (e) {

      $message = $(e.relatedTarget).attr('data-message');

      $(this).find('.modal-body p').text($message);

      $title = $(e.relatedTarget).attr('data-title');

      $(this).find('.modal-title').text($title);

      // Pass form reference to modal for submission on yes/ok

      var form = $(e.relatedTarget).closest('form');

      $(this).find('.modal-footer #confirm').data('form', form);

  });

  $('#confirmDelete').find('.modal-footer #confirm').on('click', function(){

      $(this).data('form').submit();

  });


// Dialogo para deletar


  // Dialogo para Salvar
    $('#confirmSave').on('show.bs.modal', function (e) {

        $message = $(e.relatedTarget).attr('data-message');

        $(this).find('.modal-body p').text($message);

        $title = $(e.relatedTarget).attr('data-title');

        $(this).find('.modal-title').text($title);

        // Pass form reference to modal for submission on yes/ok

        var form = $(e.relatedTarget).closest('form');

        $(this).find('.modal-footer #confirm').data('form', form);

    });

    $('#confirmSave').find('.modal-footer #confirm').on('click', function(){

        $(this).data('form').submit();

    });
