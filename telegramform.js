$(document).ready(function () {

    // $(".form-test").submit(function () {

    //     var name = $('#username').val();
    //     var phone = $('#phone').val();
    //     var age = $('#age').val();

    //     if ($('#username').val() != "") {

    //       var url = "https://script.google.com/macros/s/AKfycbx7-naExuTtwQxsdC12b-XJVEbwq2Cpo4tUg9Nen72_H7ORh-w/exec";
    //       $.post(url,
    //       {
    //         name: name,
    //         phone: phone,
    //         age: age
    //       },
    //       function(data, status){
    //         alert("Data: " + data + "\nStatus: " + status);
    //       });

    //     } else {

    //       return false;
    //     }

    // }
    $(".form-signin").submit(function () {

        var formID = $(this).attr('id');
        var formNm = $('#' + formID);
        
        var message = $(formNm).find(".form-message");
        var formTitle = $(formNm).find(".form-title");

        var token = "530206525:AAGNJ7WY58k_D5QhJlrn4wcdLHEuvASXfZs";
        var chat_id = "-329126431";

        var postMessage = "";

        if ($('#username').val() != "") {

          // Консультация
          var name = $('#username').val();
          var phone = $('#phone').val();
          var age = $('#age').val();

          $('#username').val('');
          $('#phone').val('');
          $('#age').val('');

          postMessage = "Бесплатная Консультация%0A%0AИмя: " + name + "%0AТелефон: " + phone + 
          "%0AВозраст: "  + age;
        
        } else if ($('#usernameModal').val() != "") {

          // Заявка
          var name = $('#usernameModal').val();
          var phone = $('#phoneModal').val();
          var age = $('#ageModal').val();
          var type = $('#typeModal').val();

          $('#usernameModal').val('');
          $('#phoneModal').val('');
          $('#ageModal').val('');
          $('#typeModal').val('');

          $('#apply').modal('hide');

          postMessage = "Заявка на курс " + type + "%0A%0AИмя: " + name + "%0AТелефон: " + phone + 
          "%0AВозраст: " + age;
        
        } else if ($('#usernameMessage').val() != "") {

          // Консультация
          var name = $('#usernameMessage').val();
          var phone = $('#phoneMessage').val();
          var email = $('#emailMessage').val();
          var message = $('#messageMessage').val();

          $('#usernameMessage').val('');
          $('#phoneMessage').val('');
          $('#emailMessage').val('');
          $('#messageMessage').val('');

          postMessage = "Консультация по вопросу%0A%0AИмя: " + name + "%0AТелефон: " + phone +
          "%0AEmail: " + email  + "%0A%0AСообщение:%0A" + message;
        }

        // alert(postMessage);

        $.ajax({
            type: "POST",
            url: 'https://script.google.com/macros/s/AKfycbx7-naExuTtwQxsdC12b-XJVEbwq2Cpo4tUg9Nen72_H7ORh-w/exec',
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