
$(document).ready(function() {

    //left menu 
    $('.left-nsi').click(function(){
        $('.main-cont-left-menu-item-nsi').slideToggle();
        $(this).find('.main-cont-left-menu-arrow').toggle();
    })

    $('.left-meta').click(function(){
        $('.main-cont-left-menu-item-meta').slideToggle();
        $(this).find('.main-cont-left-menu-arrow').toggle();
    })
    //left menu  - end

    $('.tree').treegrid();
    $('.treegrid-expander').click();

    $('[class*="treegrid-parent"]').find('.tree-head').css('background', '#CEDAE9')
    //tree last element
    $('.tree tr .table').each(function() {
        var trTable = $(this).parent().parent();
        trTable.prev('tr').find('.tree-head').addClass('tree-last-row')
    })

    $('.tree-last-row .glyphicon').click(function() {
        $(this).parent().toggleClass('tree-toggle-classTable')
    })

    //Add paddings
    $('[class*="treegrid-parent"]').each(function(){
       if ($(this).treegrid('getDepth')==1){
            $(this).find('td').css('marginLeft',40);
        }
        if ($(this).treegrid('getDepth')==2){
            $(this).find('td').css('marginLeft',80);
        }
        if ($(this).treegrid('getDepth')==3){
            $(this).find('td').css('marginLeft',120);
        }
        if ($(this).treegrid('getDepth')==4){
            $(this).find('td').css('marginLeft',160);
        } 
        
    });
   

    var flag = false;

    //Slide right-menu
	$('.toggle-rightTable').click(function(){
        $(this).toggleClass('active-icon')
        $('.right-slidePanel').animate({ opacity: "toggle" })
    })

	$('.IconBackNormal').click(function(){
        $('.toggle-rightTable').toggleClass('active-icon')
    })


    //fix active icon
    $('.IconPrintNormal50').addClass('always-activePrint');

    $('.IconCreateServiceNormal50').parent().addClass('buttonAdd');
    $('.IconCreateServiceNormal50').parent().addClass('button-href-checkbox');
    $('.IconCreateServiceNormal50').parent().addClass('active-icon');


    //fix button

	$('.always-activePrint').click(function(){
        var goodLink = $(this).attr('href');
        document.location.href = goodLink;
    });

    //инициализация таблиц и добавление комбо-боксов в зависимости от контроллера
    var locarr = window.location.pathname.split('/');
    var controllername = locarr[1];
    if (controllername === "") {
        controllername = "Services";
    }
    switch (controllername) {
    case 'Services':
        $('.bs3-dataTable').dataTable({
            "oLanguage": {
                "sLengthMenu": "_MENU_ записей на страницу",
                "sSearch": "Поиск:",
                "sZeroRecords": "Ничего не найдено - извините",
                "sInfo": "Показано с _START_ по _END_ из _TOTAL_ записей",
                "sInfoEmpty": "Показано с 0 по 0 из 0 записей",
                "sInfoFiltered": "(отфильтровано из _MAX_ записей)",
                "oPaginate": {
                    "sFirst": "Первая",
                    "sLast": "Посл.",
                    "sNext": "Вперед",
                    "sPrevious": "Назад"
                },
                "bSortable": false
            },
            responsive: true
        }).columnFilter({
            sPlaceHolder: 'head:after',
            aoColumns: [
                { type: "text" },
                { type: "text" },
                {
                    type: "select",
                    values: ['Новая', 'Разрабатывается', 'В эксплуатации', 'Предоставление предостановлено', 'Не предоставляется']
                },
                {
                    type: "select",
                    values: ['Конечная', 'Системная']
                },
                {
                    type: "select",
                    values: ['1-й уровень', '2-й уровень', '3-й уровень', '4-й уровень']
                },
                { type: "text" },
                { type: "text" }
            ]
        });
        break;
    case 'QualifierOperations':
        $('.bs3-dataTable').dataTable({
            "oLanguage": {
                "sLengthMenu": "_MENU_ записей на страницу",
                "sSearch": "Поиск:",
                "sZeroRecords": "Ничего не найдено - извините",
                "sInfo": "Показано с _START_ по _END_ из _TOTAL_ записей",
                "sInfoEmpty": "Показано с 0 по 0 из 0 записей",
                "sInfoFiltered": "(отфильтровано из _MAX_ записей)",
                "oPaginate": {
                    "sFirst": "Первая",
                    "sLast": "Посл.",
                    "sNext": "Вперед",
                    "sPrevious": "Назад"
                },
                "bSortable": false
            },
            responsive: true
        }).columnFilter({
            sPlaceHolder: 'head:after',
            aoColumns: [
                { type: "text" },
                { type: "text" },
                {
                    type: "select",
                    values: ['Новая', 'В эксплуатации', 'Разрабатывается', 'Выведена из эксплуатации']
		}		
            ]
        });
        break;
    case 'QualifierProducts':
        $('.bs3-dataTable').dataTable({
            "oLanguage": {
                "sLengthMenu": "_MENU_ записей на страницу",
                "sSearch": "Поиск:",
                "sZeroRecords": "Ничего не найдено - извините",
                "sInfo": "Показано с _START_ по _END_ из _TOTAL_ записей",
                "sInfoEmpty": "Показано с 0 по 0 из 0 записей",
                "sInfoFiltered": "(отфильтровано из _MAX_ записей)",
                "oPaginate": {
                    "sFirst": "Первая",
                    "sLast": "Посл.",
                    "sNext": "Вперед",
                    "sPrevious": "Назад"
                },
                "bSortable": false
            },
            responsive: true
        }).columnFilter({
    sPlaceHolder : 'head:after',
            aoColumns: [
                { type: "text" },
                { type: "text" },
                {
                    type: "select",
                    values: ['Новая', 'В эксплуатации', 'Разрабатывается', 'Выведена из эксплуатации']
                }
            ]
        });
        break;
    case 'ITSystems':
        $('.bs3-dataTable').dataTable({
            "oLanguage": {
                "sLengthMenu": "_MENU_ записей на страницу",
                "sSearch": "Поиск:",
                "sZeroRecords": "Ничего не найдено - извините",
                "sInfo": "Показано с _START_ по _END_ из _TOTAL_ записей",
                "sInfoEmpty": "Показано с 0 по 0 из 0 записей",
                "sInfoFiltered": "(отфильтровано из _MAX_ записей)",
                "oPaginate": {
                    "sFirst": "Первая",
                    "sLast": "Посл.",
                    "sNext": "Вперед",
                    "sPrevious": "Назад"
                },
                "bSortable": false
            },
            responsive: true
        }).columnFilter({
            sPlaceHolder: 'head:after',
            aoColumns: [
                 { type: "text"},
                 { type: "text"},
                {
                    type: "select",
                    values: ['Новая', 'В эксплуатации', 'Разрабатывается', 'Выведена из эксплуатации']
                },
                {
                    type: "select",
                    values: ['1-й уровень', '2-й уровень', '3-й уровень', '4-й уровень']
                },
                 { type: "text"},
                 { type: "text"}
               ] 
		});
        break;
    }


//date Picker
    $('#date-event-one').datetimepicker({
        locale: 'ru',
        format: 'DD.MM.YYYY'
    });

    //date Picker
    $('.date-event').datetimepicker({
        locale: 'ru',
        format: 'DD.MM.YYYY'
    });

    //date Picker hours
    $('.date-event-hours').datetimepicker({
        locale: 'ru',
        format: 'LT'
    });

    ////table-tree
    //$(".table-tree").jstree({
    //"checkbox" : {
    //  "keep_selected_style" : false
    //},
    //"core" : {
    //    "multiple" : false,
    //    "animation" : 0
    //  }
    // });

    //tooltip
    $('[data-toggle="tooltip"]').tooltip();

    $(".chosen-select").chosen({
        allow_single_deselect: true
    });

    $('.head-right-avatarInfo').click(function() {
        $('.head-right-avatar-menu').slideToggle()
    })

    var figure = $('.methamodel-head-item-figure-block');
    var dropBlock = $('.figure-dropblock');
    var circlebutton = $('.circle-button');
    figure.click(function() {
        figure.each(function() {
            $(this).removeClass('bgwhite').find(dropBlock).removeClass("displayblock");
            $(this).find(circlebutton).removeClass("active-icon")
        })
        $(this).addClass("bgwhite").find(dropBlock).addClass("displayblock");
        $(this).find(circlebutton).addClass("active-icon")
    });

    var colorChar = $('.methamodel-head-item-textFont-typeRow-colors');
    colorChar.click(function() {
        colorChar.each(function() {
            $(this).removeClass('bgwhite').find(dropBlock).removeClass("displayblock");
        })
        $(this).addClass("bgwhite").find(dropBlock).addClass("displayblock");
    });

    //Toggle for filter
    $('.row-catalog-date-pick-toggle').click(function() {
        $('.row-catalog-date-pick-toggle-filter').slideToggle();
        $('.row-catalog-date-pick-toggle').toggleClass('filter-color');
    });

    /*var iconBread = $('.breadcrumb-button');
    iconBread.click(function(){
        iconBread.each(function(){
            $(this).removeClass('active-icon');
        })
        $(this).toggleClass('active-icon');
    })*/

    $('.breadcrumb-button-one').click(function() {
        $(this).toggleClass("active-icon");
        $(".breadcrumb-button-two").removeClass("active-icon");
        $('.hidden-table-toggle-one').toggleClass("hidden");
        $('.hidden-table-toggle-two').addClass("hidden");
    });

    $('.breadcrumb-button-two').click(function() {
        $(this).toggleClass("active-icon");
        $(".breadcrumb-button-one").removeClass("active-icon");
        $('.hidden-table-toggle-two').toggleClass("hidden");
        $('.hidden-table-toggle-one').addClass("hidden");
    });


//Destroy liks
    var unClick = function(el, message) {
        $(el).parent().removeClass('active-icon');
        $(el).bind('click', function(e) {
            alert(message);
            e.preventDefault();

        });
    };

    //Hill link
    var hillClick = function(el) {
        $(el).unbind('click');
        $(el).parent().addClass('active-icon');
    };

    //Return urls
    var returnUrl = function() {
        $('.button-href-checkbox a').each(function() {
            var hrefButton = $(this).attr('href').split('?id=')[0];
            $(this).attr('href', hrefButton);
        });
    };


    //Не выбрано ни одного чекбокса
    var zeroCheckbox = function() {
        unClick('#edittable', 'Необходимо выбрать объект для редактирования');
        returnUrl();
        $('#export').attr('onclick', 'ExportToXML()');
    }
    zeroCheckbox();

    //Var for url
    var valCheckbox = '';
    var valCheckboxItem;
    var currentHref = $('#docxexport').attr('href');
    var getUrl = function() {
        $('input[type=checkbox]').each(function() {
            if ($(this).is(':checked')) {
                valCheckboxItem = $(this).val();
                valCheckbox = valCheckbox + valCheckboxItem + ',';

                $('.button-href-checkbox a').each(function() {
                    var hrefButton = $(this).attr('href').split('?id=')[0] + '?id=';
                    resuktHref = hrefButton + valCheckbox;
                    resuktHref = resuktHref.substring(0, resuktHref.length - 1)
                    $(this).attr('href', resuktHref);
                })
                console.log(valCheckbox)
                var forExport = valCheckbox.substring(0, valCheckbox.length - 1);
                var funcExport = 'ExportToXML(\"' + forExport + '\")';
                $('#export').attr('onclick', funcExport);
                $('#docxexport').attr('href', currentHref + "?param=" + forExport);
            }
        })
    }

    //Control buttons
    var lisenterTable = function(boxChekcbox) {

        $(boxChekcbox).click(function() {
            var numbChecked = 0;
            valCheckbox = '';
            numbChecked = $('input[type=checkbox]:checked').length
            console.log(numbChecked)

            //не выбранно ни одного
            if (numbChecked === 0) {
                zeroCheckbox();
            };

            //выбран один
            if (numbChecked === 1) {
                flag = false;
                $('.button-edit').addClass('active-icon');
                getUrl();
                hillClick('#edittable')
                hillClick('.IconCreateServiceNormal50')
            };

            //выбрано более
            if (numbChecked > 1) {
                getUrl();
                if (!flag) {
                    flag = true;
                    unClick('#edittable', 'Необходимо выбрать только один объект в качестве родительского');
                    unClick('.IconCreateServiceNormal50', 'Необходимо выбрать только один объект в качестве родительского');
                }
            };


        })

    }

    lisenterTable('.dataTable');
    lisenterTable('.tree input[type=checkbox]');


    //clearsearch
    $(".clearable").clearSearch();
    //$('.clearable').width('200px').change();
    $('.clear_input').click(function() {
        $.post('/Services/Search')
            .done(function(data) {
                $('.tree').html(data);
                $('.tree').treegrid();
                $('.treegrid-expander').click();
                lisenterTable('.dataTable');
                lisenterTable('.tree input[type=checkbox]');
            })
            .fail(function(xhr) {
                document.clear();
                document.write(xhr.responseText);
                document.close();
            });
    })

    //поиск по имени
    $('#searchbutton').click(function() {
            var name = document.getElementById('Name').value;
            $.post('/' + controllername + '/Search', { name: name })
                .done(function(data) {
                    $('.filter-result-container').html(data);
                    switch (controllername) {
                    case 'Services':
                        $('.bs3-dataTable').dataTable({
                            "oLanguage": {
                                "sLengthMenu": "_MENU_ записей на страницу",
                                "sSearch": "Поиск:",
                                "sZeroRecords": "Ничего не найдено - извините",
                                "sInfo": "Показано с _START_ по _END_ из _TOTAL_ записей",
                                "sInfoEmpty": "Показано с 0 по 0 из 0 записей",
                                "sInfoFiltered": "(отфильтровано из _MAX_ записей)",
                                "oPaginate": {
                                    "sFirst": "Первая",
                                    "sLast": "Посл.",
                                    "sNext": "Вперед",
                                    "sPrevious": "Назад"
                                },
                                "bSortable": false
                            },
                            responsive: true
                        }).columnFilter({
                            sPlaceHolder: 'head:after',
                            aoColumns: [
                                { type: "text" },
                                { type: "text" },
                                {
                                    type: "select",
                                    values: ['Новая', 'Разрабатывается', 'В эксплуатации', 'Предоставление предостановлено', 'Не предоставляется']
                                },
                                {
                                    type: "select",
                                    values: ['Конечная', 'Системная']
                                },
                                {
                                    type: "select",
                                    values: ['1-й уровень', '2-й уровень', '3-й уровень', '4-й уровень']
                                },
                                { type: "text" },
                                { type: "text" }
                            ]
                        });
                        break;
                    case 'QualifierOperations':
                        $('.bs3-dataTable').dataTable({
                            "oLanguage": {
                                "sLengthMenu": "_MENU_ записей на страницу",
                                "sSearch": "Поиск:",
                                "sZeroRecords": "Ничего не найдено - извините",
                                "sInfo": "Показано с _START_ по _END_ из _TOTAL_ записей",
                                "sInfoEmpty": "Показано с 0 по 0 из 0 записей",
                                "sInfoFiltered": "(отфильтровано из _MAX_ записей)",
                                "oPaginate": {
                                    "sFirst": "Первая",
                                    "sLast": "Посл.",
                                    "sNext": "Вперед",
                                    "sPrevious": "Назад"
                                },
                                "bSortable": false
                            },
                            responsive: true
                        }).columnFilter({
                            sPlaceHolder: 'head:after',
                            aoColumns: [
                                { type: "text" },
                                { type: "text" },
                                {
                                    type: "select",
                                    values: ['Новая', 'В эксплуатации', 'Разрабатывается', 'Выведена из эксплуатации']
                                }
                            ]
                        });
                        break;
                    case 'QualifierProducts':
                        $('.bs3-dataTable').dataTable({
                            "oLanguage": {
                                "sLengthMenu": "_MENU_ записей на страницу",
                                "sSearch": "Поиск:",
                                "sZeroRecords": "Ничего не найдено - извините",
                                "sInfo": "Показано с _START_ по _END_ из _TOTAL_ записей",
                                "sInfoEmpty": "Показано с 0 по 0 из 0 записей",
                                "sInfoFiltered": "(отфильтровано из _MAX_ записей)",
                                "oPaginate": {
                                    "sFirst": "Первая",
                                    "sLast": "Посл.",
                                    "sNext": "Вперед",
                                    "sPrevious": "Назад"
                                },
                                "bSortable": false
                            },
                            responsive: true
                        }).columnFilter({
                            sPlaceHolder: 'head:after',
                            aoColumns: [
                                { type: "text" },
                                { type: "text" },
                                {
                                    type: "select",
                                    values: ['Новая', 'В эксплуатации', 'Разрабатывается', 'Выведена из эксплуатации']
                                }
                            ]
                        });
                        break;
                    case 'ITSystems':
                        $('.bs3-dataTable').dataTable({
                            "oLanguage": {
                                "sLengthMenu": "_MENU_ записей на страницу",
                                "sSearch": "Поиск:",
                                "sZeroRecords": "Ничего не найдено - извините",
                                "sInfo": "Показано с _START_ по _END_ из _TOTAL_ записей",
                                "sInfoEmpty": "Показано с 0 по 0 из 0 записей",
                                "sInfoFiltered": "(отфильтровано из _MAX_ записей)",
                                "oPaginate": {
                                    "sFirst": "Первая",
                                    "sLast": "Посл.",
                                    "sNext": "Вперед",
                                    "sPrevious": "Назад"
                                },
                                "bSortable": false
                            },
                            responsive: true
                        }).columnFilter({
                            sPlaceHolder: 'head:after',
                            aoColumns: [
                                { type: "text" },
                                { type: "text" },
                                {
                                    type: "select",
                                    values: ['Новая', 'В эксплуатации', 'Разрабатывается', 'Выведена из эксплуатации']
                                },
                                {
                                    type: "select",
                                    values: ['1-й уровень', '2-й уровень', '3-й уровень', '4-й уровень']
                                },
                                { type: "text" },
                                { type: "text" }
                            ]
                        });
                        break;
                    }
                })
                .fail(function(xhr) {
                    document.clear();
                    document.write(xhr.responseText);
                    document.close();
                });
        }
    );

    //фильтрация
    $('#filterapply').click(function() {
        var customers = [];
        $('#Customers_chosen a.search-choice-close').each(function() {
            var temp = $(this).attr("data-option-array-index");
            temp = parseInt(temp) + 1;
            var val = $('#Customers option:nth-child(' + temp + ')').attr("value");
            customers.push(val);
        });
        $('#CustomerList').val(customers.join(','));

        var users = [];
        $('#Users_chosen a.search-choice-close').each(function() {
            var temp = $(this).attr("data-option-array-index");
            temp = parseInt(temp) + 1;
            var val = $('#Users option:nth-child('+temp+')').attr("value");
            users.push(val);
        });
        $('#UserList').val(users.join(','));

        var temp = '/' + controllername + '/Filter';

        $.post(temp, $('#filter-form').serialize())
            .done(function(data) {
                $('.filter-result-container').html(data);
                switch (controllername) {
                case 'Services':
                    $('.bs3-dataTable').dataTable({
                        "oLanguage": {
                            "sLengthMenu": "_MENU_ записей на страницу",
                            "sSearch": "Поиск:",
                            "sZeroRecords": "Ничего не найдено - извините",
                            "sInfo": "Показано с _START_ по _END_ из _TOTAL_ записей",
                            "sInfoEmpty": "Показано с 0 по 0 из 0 записей",
                            "sInfoFiltered": "(отфильтровано из _MAX_ записей)",
                            "oPaginate": {
                                "sFirst": "Первая",
                                "sLast": "Посл.",
                                "sNext": "Вперед",
                                "sPrevious": "Назад",
                            },
                            "bSortable": false,
                        },
                        responsive: true
                    }).columnFilter({
                        sPlaceHolder: 'head:after',
                        aoColumns: [
                            { type: "text" },
                            { type: "text" },
                            {
                                type: "select",
                                values: ['Новая', 'Разрабатывается', 'В эксплуатации', 'Предоставление предостановлено', 'Не предоставляется']
                            },
                            {
                                type: "select",
                                values: ['Конечная', 'Системная']
                            },
                            {
                                type: "select",
                                values: ['1-й уровень', '2-й уровень', '3-й уровень', '4-й уровень']
                            },
                            { type: "text" },
                            { type: "text" }
                        ]
                    });
                    break;
                case 'QualifierOperations':
                    $('.bs3-dataTable').dataTable({
                        "oLanguage": {
                            "sLengthMenu": "_MENU_ записей на страницу",
                            "sSearch": "Поиск:",
                            "sZeroRecords": "Ничего не найдено - извините",
                            "sInfo": "Показано с _START_ по _END_ из _TOTAL_ записей",
                            "sInfoEmpty": "Показано с 0 по 0 из 0 записей",
                            "sInfoFiltered": "(отфильтровано из _MAX_ записей)",
                            "oPaginate": {
                                "sFirst": "Первая",
                                "sLast": "Посл.",
                                "sNext": "Вперед",
                                "sPrevious": "Назад",
                            },
                            "bSortable": false,
                        },
                        responsive: true
                    }).columnFilter({
                        sPlaceHolder: 'head:after',
                        aoColumns: [
                            { type: "text" },
                            { type: "text" },
                            {
                                type: "select",
                                values: ['Новая', 'В эксплуатации', 'Разрабатывается', 'Выведена из эксплуатации']
                            }
                        ]
                    });
                    break;
                case 'QualifierProducts':
                    $('.bs3-dataTable').dataTable({
                        "oLanguage": {
                            "sLengthMenu": "_MENU_ записей на страницу",
                            "sSearch": "Поиск:",
                            "sZeroRecords": "Ничего не найдено - извините",
                            "sInfo": "Показано с _START_ по _END_ из _TOTAL_ записей",
                            "sInfoEmpty": "Показано с 0 по 0 из 0 записей",
                            "sInfoFiltered": "(отфильтровано из _MAX_ записей)",
                            "oPaginate": {
                                "sFirst": "Первая",
                                "sLast": "Посл.",
                                "sNext": "Вперед",
                                "sPrevious": "Назад",
                            },
                            "bSortable": false,
                        },
                        responsive: true
                    }).columnFilter({
                        sPlaceHolder: 'head:after',
                        aoColumns: [
                            { type: "text" },
                            { type: "text" },
                            {
                                type: "select",
                                values: ['Новая', 'В эксплуатации', 'Разрабатывается', 'Выведена из эксплуатации']
                            }
                        ]
                    });
                    break;
                case 'ITSystems':
                    $('.bs3-dataTable').dataTable({
                        "oLanguage": {
                            "sLengthMenu": "_MENU_ записей на страницу",
                            "sSearch": "Поиск:",
                            "sZeroRecords": "Ничего не найдено - извините",
                            "sInfo": "Показано с _START_ по _END_ из _TOTAL_ записей",
                            "sInfoEmpty": "Показано с 0 по 0 из 0 записей",
                            "sInfoFiltered": "(отфильтровано из _MAX_ записей)",
                            "oPaginate": {
                                "sFirst": "Первая",
                                "sLast": "Посл.",
                                "sNext": "Вперед",
                                "sPrevious": "Назад",
                            },
                            "bSortable": false,
                        },
                        responsive: true
                    }).columnFilter({
                        sPlaceHolder: 'head:after',
                        aoColumns: [
                            { type: "text" },
                            { type: "text" },
                            {
                                type: "select",
                                values: ['Новая', 'В эксплуатации', 'Разрабатывается', 'Выведена из эксплуатации']
                            },
                            {
                                type: "select",
                                values: ['1-й уровень', '2-й уровень', '3-й уровень', '4-й уровень']
                            },
                            { type: "text" },
                            { type: "text" }
                        ]
                    });
                    break;
                }
            });
    });

    //т.к. chosen устанавливает размер полей при запуске, то нельзя скрыть панель фильтра сразу, иначе он устанавливает размер в 0
    $('.row-catalog-date-pick-toggle-filter').css("display", "none");

    //"многооконный режим"
    $('a').not('.samewindow').click(function() {
        $(this).attr("target", "_blank");
    });

    //Добавление кнопок "Выбрать все" и "Убрать все" на multiple select
    $("select").on("chosen:showing_dropdown", function (evnt, params) {
        var chosen = params.chosen,
            $dropdown = $(chosen.dropdown),
            $field = $(chosen.form_field);
        if (!chosen.__customButtonsInitilized) {
            chosen.__customButtonsInitilized = true;
            var contained = function (el) {
                var container = document.createElement("div");
                container.appendChild(el);
                return container;
            }
            var width = $dropdown.width();
            var opts = chosen.options || {},
                showBtnsTresshold = opts.disable_select_all_none_buttons_tresshold || 0;
            optionsCount = $field.children().length,
            selectAllText = opts.select_all_text || 'Выбрать все',
            selectNoneText = opts.uncheck_all_text || 'Убрать все';
            if (chosen.is_multiple && optionsCount >= showBtnsTresshold) {
                var selectAllEl = document.createElement("a"),
                    selectAllElContainer = contained(selectAllEl),
                    selectNoneEl = document.createElement("a"),
                    selectNoneElContainer = contained(selectNoneEl);
                selectAllEl.appendChild(document.createTextNode(selectAllText));
                selectNoneEl.appendChild(document.createTextNode(selectNoneText));
                $dropdown.prepend("<div class='ui-chosen-spcialbuttons-foot' style='clear:both;border-bottom: 1px solid black;'></div>");
                $dropdown.prepend(selectNoneElContainer);
                $dropdown.prepend(selectAllElContainer);
                var $selectAllEl = $(selectAllEl),
                    $selectAllElContainer = $(selectAllElContainer),
                    $selectNoneEl = $(selectNoneEl),
                    $selectNoneElContainer = $(selectNoneElContainer);
                var reservedSpacePerComp = (width - 25) / 2;
                $selectNoneElContainer.addClass("ui-chosen-selectNoneBtnContainer")
                    .css("float", "right").css("padding", "5px 8px 5px 0px")
                    .css("max-width", reservedSpacePerComp + "px")
                    .css("max-height", "30px").css("overflow", "hidden");
                $selectAllElContainer.addClass("ui-chosen-selectAllBtnContainer")
                    .css("float", "left").css("padding", "5px 5px 5px 7px")
                    .css("max-width", reservedSpacePerComp + "px")
                    .css("max-height", "30px").css("overflow", "hidden");
                $selectAllEl.on("click", function (e) {
                    e.preventDefault();
                    $field.children().prop('selected', true);
                    $field.trigger('chosen:updated');
                    return false;
                });
                $selectNoneEl.on("click", function (e) {
                    e.preventDefault();
                    $field.children().prop('selected', false);
                    $field.trigger('chosen:updated');
                    return false;
                });
            }
        }
    });

    $('input[name="EverydayAvailable"]').change(function() {
        $('.available-time-group').toggleClass('disable-inline-input-row');
        $('.time-available').each(function() {
            if ($(this).prop("disabled")) {
                $(this).prop("disabled", false);
            } else {
                $(this).prop("disabled", true);
            }
        });
    });

    $('input[name="EverydaySupport"]').change(function () {
        $('.support-time-group').toggleClass('disable-inline-input-row');
        $('.time-support').each(function () {
            if ($(this).prop("disabled")) {
                $(this).prop("disabled", false);
            } else {
                $(this).prop("disabled", true);
            }
        });
    });
})


