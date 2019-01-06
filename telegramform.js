// $('#apply').on('show.bs.modal', function (event) {
//   var button = $(event.relatedTarget) // Button that triggered the modal
//   var recipient = button.data('type') // Extract info from data-* attributes
//   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//   var modal = $(this)
//   modal.find('.modal-subtitle').text('Бесплатная консультация по курсу "' + recipient + '"')
//   modal.find('.modal-body input').val(recipient)
// })
$(document).ready(function () {

    $(".form-signin").submit(function () {

        var formID = $(this).attr('id');
        var formNm = $('#' + formID);
        
        var message = $(formNm).find(".form-message");
        var formTitle = $(formNm).find(".form-title");

        var token = "530206525:AAGNJ7WY58k_D5QhJlrn4wcdLHEuvASXfZs";
        var chat_id = "-329126431";

        var test = $('#username').val();
        var name = $('#username').val();
        var phone = $('#phone').val();
        var age = $('#age').val();
        var type = $('#type').val();
        var email = $('#email').val();
        var message = $('#message').val();

        $('#username').val('');
        $('#phone').val('');
        $('#age').val('');
        $('#email').val('');
        $('#message').val('');

        $('#apply').modal('hide');

        var postMessage = "Имя: " + name + "%0AТелефон: " + phone + "%0AEmail: " + email  + "%0AВозраст: " + age + "%0AMessage: " + message;

        // alert(postMessage);

        $.ajax({
            type: "POST",
            url: 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + chat_id + '&parse_mode=html&text=' + postMessage,
            data: formNm.serialize(),
            success: function (data) {
              // Вывод сообщения об успешной отправке
              alert("Спасибо, Ваша заявка принята! Мы свяжемся с Вами в ближайшее время.");
              message.html(data);
              formTitle.css("display","none");
              setTimeout(function(){
                formTitle.css("display","block");
                message.html('');
                $('input').not(':input[type=submit], :input[type=hidden]').val('');
              }, 3000);
            },
            error: function (jqXHR, text, error) {
                // Вывод сообщения об ошибке отправки
                console.log(error);
                message.html(error);
                formTitle.css("display","none");
                setTimeout(function(){
                  formTitle.css("display","block");
                  message.html('');
                  $('input').not(':input[type=submit], :input[type=hidden]').val('');
                }, 3000);
            }
        });
        return false;
    });
});