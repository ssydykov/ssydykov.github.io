$(document).ready(function () {
    
    $(".form-signin").submit(function () {

        var formID = $(this).attr('id');
        var formNm = $('#' + formID);
        
        var message = $(formNm).find(".form-message");
        var formTitle = $(formNm).find(".form-title");

        var token = "309839318:AAEkELQeIhTNnAJHn_gX1gzxB-J_w2rPC4Q";
        var chat_id = "-275778983";

        var test = $('#name').val();
        var name = $('#name').val();
        var phone = $('#phone').val();
        var message = $('#message').val();

        var postMessage = "Name: " + name + "%0APhone: " + phone + "%0AMessage: " + message;

        // alert(postMessage);

        $.ajax({
            type: "POST",
            url: 'https://api.telegram.org/bot' + token + '/sendMessage?chat_id=' + chat_id + '&parse_mode=html&text=' + postMessage,
            data: formNm.serialize(),
            success: function (data) {
              // Вывод сообщения об успешной отправке
              alert("Success!");
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