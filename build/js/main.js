$( function() {

     /***** Плавная прокрутка *****/

     $('.menu__list li a').click( e => {
        e.preventDefault();
		elementClick = $(e.currentTarget).attr("href");
        destination = $(elementClick).offset().top - 30;
        $('body,html').animate({scrollTop: destination }, 800);
    });

    //Валидация и отправка формы
    $('[data-submit]').on('click', function(e) {
        e.preventDefault();
        $(this).parent('form').submit();
    })
    $.validator.addMethod(
        "regex",
        function(value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Please check your input."
    );

    // Функция валидации и вывода сообщений
    function valEl(el) {

        el.validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                mail: {
                    required: true,
                    email: true
                },
                text: {
                    required: true
                }
            },
            messages: {
                name: {
                    required: 'Поле обязательно для заполнения',
                    minlength: 'Имя должно содержать хотя бы 2 символа'
                },
                mail: {
                    required: 'Поле обязательно для заполнения',
                    email: 'Неверный формат E-mail'
                },
                text: {
                    required: 'Поле обязательно для заполнения'
                }
            },

            // Начинаем проверку id="" формы
            submitHandler: function(form) {
                $('#loader').fadeIn();
                var $form = $(form);
                var $formId = $(form).attr('id');
                switch ($formId) {
                    // Если у формы id="goToNewPage" - делаем:
                    case 'goToNewPage':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize(),
                            })
                            .always(function(response) {
                                //ссылка на страницу "спасибо" - редирект
                                location.href = 'https://wayup.in/lm/landing-page-marathon/success';
                                //отправка целей в Я.Метрику и Google Analytics
                                ga('send', 'event', 'masterklass7', 'register');
                                yaCounter27714603.reachGoal('lm17lead');
                            });
                        break;
                    // Если у формы id="popupResult" - делаем:
                    case 'popupResult':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize(),
                            })
                            .always(function(response) {
                                setTimeout(function() {
                                    $('#loader').fadeOut();
                                }, 800);
                                setTimeout(function() {
                                    $('#overlay').fadeIn();
                                    $form.trigger('reset');
                                    //строки для остлеживания целей в Я.Метрике и Google Analytics
                                }, 1100);
                                $('#overlay').on('click', function(e) {
                                    $(this).fadeOut();
                                });

                            });
                        break;
                }
                return false;
            }
        })
    }

    // Запускаем механизм валидации форм, если у них есть класс .js-form
    $('.js-form').each(function() {
        valEl($(this));
    });

});
