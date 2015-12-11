
$(document).ready(function(){

	


	//fix active icon
	$('.IconPrintNormal50').addClass('always-activePrint');

	$('.IconCreateServiceNormal50').parent().addClass('buttonAdd');
	$('.IconCreateServiceNormal50').parent().addClass('button-href-checkbox');
	$('.IconCreateServiceNormal50').parent().addClass('active-icon');


	//fix button

	$('.always-activePrint').click(function(){
		var goodLink = $(this).attr('href');
		document.location.href=goodLink;
	})

 
	$('.bs3-dataTable').dataTable(
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
				"bSortable": false,
			},
			responsive: true
		}		
	).columnFilter({
    sPlaceHolder : 'head:after',
    aoColumns: [ { type: "text"},
                 { type: "text"},
                 { type: "text"},
                 { type: "text"},
                 { type: "text"}
               ] 
		});



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

    $('.buttonAdd a').unbind('click');

		var valCheckboxItem;
		$('.tree').click(function () {
		    var valCheckbox = '';
		    if ($('.tree input[type=checkbox]').is(":checked")) {
		        $('.button-href-checkbox').addClass('active-icon');
		    } else {
		        $('.button-href-checkbox').removeClass('active-icon')
		    }
		    var i = 0;
		    $('.tree input[type=checkbox]').each(function () {
		    		
		        if ($(this).is(':checked')) {
				        	$('.button-href-checkbox').each(function(){
			        			if($(this).hasClass('active-icon')){
			        				$(this).find('a').unbind('click')
			        			}
			        		})

			            i++;
			            valCheckboxItem = $(this).val();
			            valCheckbox = valCheckbox + valCheckboxItem + ',';

			            $('.button-href-checkbox a').each(function () {
			                var hrefButton = $(this).attr('href').split('?id=')[0] + '?id=';
			                resuktHref = hrefButton + valCheckbox;
			                resuktHref = resuktHref.substring(0, resuktHref.length - 1)
			                $(this).attr('href', resuktHref);
			            })

			            /* For button export */
			            var forExport = valCheckbox.substring(0, valCheckbox.length - 1);
			            var funcExport = 'ExportToXML(' + forExport + ')';
		            	$('#export').attr('onclick',funcExport);
		            	/* For button export */
		            	
			            if (i > 1) {
		                $('.button-edit').removeClass('active-icon');
		                $('.button-edit').bind('click', function(e){
								        e.preventDefault();
										}) 

										$('.buttonAdd').removeClass('active-icon');
		                $('.buttonAdd').bind('click', function(e){
								        e.preventDefault();
										})


										$('.circle-button').each(function(){
											if ($(this).hasClass('buttonAdd') || $(this).hasClass('button-edit')) {
													$(this).click(function(){
														alert('Выберите только один элемент')
													})
											};
										})

		            };
			            if (i === 1) {
			                $('.button-edit').unbind('click');
			                $('.buttonAdd').unbind('click');
			            };
		        }
		        if (i===0) {
		        	$('.button-href-checkbox a').each(function () {
			                var hrefButton = $(this).attr('href').split('?id=')[0] ;
			                $(this).attr('href', hrefButton);
			            })
		        	$('#export').attr('onclick','ExportToXML()');

		        	 $('.button-href-checkbox').each(function(){
		          	if (!$(this).hasClass('active-icon')) {
		          		$(this).bind('click', function(e){
							        e.preventDefault();
									})
		          	};
		          })

		        	 $('.circle-button').each(function(){
											if ($(this).hasClass('button-edit') ) {
													$(this).click(function(){
														alert('Необходимо выбрать элемент для редактирования')
													})
											};
							})

		        };
		    })

		});

    //get url from checkbox for dataTable
		$('.page-card-datatable input[type=checkbox]').click(function () {
		    var valCheckbox = '';
		    if ($('.page-card-datatable input[type=checkbox]').is(":checked")) {
		        $('.button-href-checkbox').addClass('active-icon');
		    } else {
		        $('.button-href-checkbox').removeClass('active-icon')
		    }
		    var i = 0;
		    $('.page-card-datatable input[type=checkbox]').each(function () {
		        if ($(this).is(':checked')) {
			        	
			        	$('.button-href-checkbox').each(function(){
		        			if($(this).hasClass('active-icon')){
		        				$(this).find('a').unbind('click')
		        			}
		        		})

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

		            /* For button export */
		            var forExport = valCheckbox.substring(0, valCheckbox.length - 1);
			          var funcExport = 'ExportToXML(' + forExport + ')';
		            $('#export').attr('onclick',funcExport);
								/* For button export */
		            if (i > 1) {
		                $('.button-edit').removeClass('active-icon');
		                $('.button-edit').bind('click', function(e){
								        e.preventDefault();
										}) 

										$('.buttonAdd').removeClass('active-icon');
		                $('.buttonAdd').bind('click', function(e){
								        e.preventDefault();
										})


										$('.circle-button').each(function(){
											if ($(this).hasClass('buttonAdd') || $(this).hasClass('button-edit')) {
													$(this).click(function(){
														alert('выберите только один элемент')
													})
											};
										})

		            };
		            if (i === 1) {
		                $('.button-edit').unbind('click');
		                $('.buttonAdd').unbind('click');

		            };
		        };
		        if (i===0) {
		        	$('.button-href-checkbox a').each(function () {
			                var hrefButton = $(this).attr('href').split('?id=')[0] ;
			                $(this).attr('href', hrefButton);
			            })
		          $('#export').attr('onclick','ExportToXML()');

		          $('.button-href-checkbox').each(function(){
		          	if (!$(this).hasClass('active-icon')) {
		          		$(this).bind('click', function(e){
							        e.preventDefault();
									})
		          	};
		          })

		          $('.buttonAdd').addClass('active-icon').unbind('click');

		          
		        };
		    })

		});
 

})


