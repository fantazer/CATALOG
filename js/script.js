
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
})


