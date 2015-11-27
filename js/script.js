
$(document).ready(function(){

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

	//table-tree
	$(".table-tree").jstree({
    "checkbox" : {
      "keep_selected_style" : false
    },
    "plugins" : [ "checkbox" ],
    "icon" : "glyphicon glyphicon-leaf"
 	 });

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
		})

		var iconBread = $('.breadcrumb-button');
		iconBread.click(function(){
			iconBread.each(function(){
				$(this).removeClass('active-icon');
			})
			$(this).addClass('active-icon');
		})

		$('.breadcrumb-button-one').click(function(){
			$('.hidden-table-toggle-one').toggleClass("hidden");
			$('.hidden-table-toggle-two').addClass("hidden");
		})

		$('.breadcrumb-button-two').click(function(){
			$('.hidden-table-toggle-two').toggleClass("hidden");
			$('.hidden-table-toggle-one').addClass("hidden");
		})

})


