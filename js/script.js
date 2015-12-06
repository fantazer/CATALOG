
$(document).ready(function(){
	$('.IconPrintNormal50').addClass('always-activePrint')
	$('.bs3-dataTable').DataTable(
			{
				"oLanguage": {
				"sLengthMenu": "_MENU_ записей на страницу",
				"sSearch": "Поиск:",
				"sZeroRecords": "Ничего не найдено - извините",
				"sInfo": "Показано с _START_ по _END_ из _TOTAL_ записей",
				"sInfoEmpty": "Показано с 0 по 0 из 0 записей",
				"sInfoFiltered": "(filtered from _MAX_ total records)",
				"oPaginate": {
				"sFirst": "Первая",
				"sLast":"Посл.",
				"sNext":"Вперед",
				"sPrevious":"Назад",
				},
				"bSortable": false
			}	
		}		
	);

	//date Picker
	$('#date-event-one').datetimepicker({
                    locale: 'ru',
                		format: 'DD/MM/YYYY'
                });

	//date Picker
	$('.date-event').datetimepicker({
                    locale: 'ru',
                		format: 'DD/MM/YYYY'
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

	//chosen
	$(".chosen-select").chosen();

	$('.head-right-avatar').click(function(){
		$('.head-right-avatar-menu').slideToggle()
	})

	var figure = $('.methamodel-head-item-figure-block');
	var dropBlock = $('.figure-dropblock');
	var circlebutton = $('.circle-button');
	figure.click(function(){
		figure.each(function(){
			$(this).removeClass('bgwhite').find(dropBlock).removeClass("displayblock");
			$(this).find(circlebutton).removeClass("active-icon")
		})
			$(this).addClass("bgwhite").find(dropBlock).addClass("displayblock");
			$(this).find(circlebutton).addClass("active-icon")
		});

		var colorChar = $('.methamodel-head-item-textFont-typeRow-colors');
		colorChar.click(function(){
		colorChar.each(function(){
			$(this).removeClass('bgwhite').find(dropBlock).removeClass("displayblock");
		})
			$(this).addClass("bgwhite").find(dropBlock).addClass("displayblock");
		});

		//Toggle for filter
		$('.row-catalog-date-pick-toggle').click(function(){
			 $('.row-catalog-date-pick-toggle-filter').slideToggle();
			 $('.row-catalog-date-pick-toggle').toggleClass('filter-color');

		})

		/*var iconBread = $('.breadcrumb-button');
		iconBread.click(function(){
			iconBread.each(function(){
				$(this).removeClass('active-icon');
			})
			$(this).toggleClass('active-icon');
		})*/

		$('.breadcrumb-button-one').click(function(){
			$(this).toggleClass("active-icon");
			$(".breadcrumb-button-two").removeClass("active-icon");
			$('.hidden-table-toggle-one').toggleClass("hidden");
			$('.hidden-table-toggle-two').addClass("hidden");
		})

		$('.breadcrumb-button-two').click(function(){
			$(this).toggleClass("active-icon");
			$(".breadcrumb-button-one").removeClass("active-icon");
			$('.hidden-table-toggle-two').toggleClass("hidden");
			$('.hidden-table-toggle-one').addClass("hidden");
		})


		$('.tree').treegrid();
		$('.treegrid-expander').click();

    //get url from checkbox for treeTable
    $('.button-href-checkbox a').bind('click', function(e){
        e.preventDefault();
		})
		var valCheckboxItem;
		$('.tree').click(function () {
				$('.button-href-checkbox a').bind('click', function(e){
		        e.preventDefault();
				})
		    var valCheckbox = '';
		    if ($('.tree input[type=checkbox]').is(":checked")) {
		        $('.button-href-checkbox').addClass('active-icon');
		    } else {
		        $('.button-href-checkbox').removeClass('active-icon')
		    }
		    var i = 0;
		    $('.tree input[type=checkbox]').each(function () {
		    		
		        if ($(this).is(':checked')) {
		        		$('.button-href-checkbox a').unbind('click')
		            i++;
		            valCheckboxItem = $(this).val();
		            valCheckbox = valCheckbox + valCheckboxItem + ',';
		            console.log(i);
		            console.log(valCheckbox);
		            $('.button-href-checkbox a').each(function () {
		                var hrefButton = $(this).attr('href').split('?id=')[0] + '?id=';
		                resuktHref = hrefButton + valCheckbox;
		                resuktHref = resuktHref.substring(0, resuktHref.length - 1)
		                $(this).attr('href', resuktHref);
		            })
		            if (i > 1) {
		                $('.button-edit').removeClass('active-icon');
		                $('.button-edit').bind('click', function(e){
								        e.preventDefault();
										})
		            };

		        };
		    })

		});

    //get url from checkbox for dataTable
		$('.page-card-datatable').click(function () {
		    var valCheckbox = '';
		    if ($('.page-card-datatable input[type=checkbox]').is(":checked")) {
		        $('.button-href-checkbox').addClass('active-icon');
		    } else {
		        $('.button-href-checkbox').removeClass('active-icon')
		    }
		    var i = 0;
		    $('.page-card-datatable input[type=checkbox]').each(function () {
		        if ($(this).is(':checked')) {
		            i++;
		            valCheckboxItem = $(this).val();
		            valCheckbox = valCheckbox + valCheckboxItem + ',';
		            console.log(i);
		            $('.button-href-checkbox a').each(function () {
		                var hrefButton = $(this).attr('href').split('?id=')[0] + '?id=';
		                resuktHref = hrefButton + valCheckbox;
		                resuktHref = resuktHref.substring(0, resuktHref.length - 1)
		                $(this).attr('href', resuktHref);
		            })
		            if (i > 1) {
		                $('.button-edit').removeClass('active-icon');
		            };
		        };
		    })

		});
  

})


