
$(document).ready(function(){

	//Slide right-menu
	$('.toggle-rightTable').click(function(){
		$(this).toggleClass('active-icon')
		$('.right-slidePanel').animate({opacity: "toggle"})
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

    
 
 		//Destroy liks
    var unClick = function(el,message){
    			$(el).parent().removeClass('active-icon')
    			$(el).bind('click', function(e){
    				alert(message);
		        e.preventDefault();

					})
    }

    //Hill link
     var hillClick = function(el){
	    	$(el).unbind('click');
	    	$(el).parent().addClass('active-icon')
		}

		//Return urls
    var returnUrl = function(){
    	$('.button-href-checkbox a').each(function () {
	        var hrefButton = $(this).attr('href').split('?id=')[0] ;
	        $(this).attr('href', hrefButton);
			})
    }


		//Не выбрано ни одного чекбокса
		var zeroCheckbox = function(){
				unClick('.IconEditNormal50','Необходимо выбрать объект для редактирования');
		  	returnUrl();
		  	$('#export').attr('onclick','ExportToXML()');
			}
		zeroCheckbox();

		//Var for url
    var valCheckbox = '';
    var valCheckboxItem;
    var getUrl = function(){
	    	$('input[type=checkbox]').each(function () {
			        if ($(this).is(':checked')) {
								valCheckboxItem = $(this).val();
					      valCheckbox = valCheckbox + valCheckboxItem + ',';

					    	$('.button-href-checkbox a').each(function () {
						        var hrefButton = $(this).attr('href').split('?id=')[0] + '?id=';
						        resuktHref = hrefButton + valCheckbox;
						        resuktHref = resuktHref.substring(0, resuktHref.length - 1)
						        $(this).attr('href', resuktHref);
						    })
					    	console.log(valCheckbox)
						    var forExport = valCheckbox.substring(0, valCheckbox.length - 1);
					      var funcExport = 'ExportToXML(' + forExport + ')';
					      $('#export').attr('onclick',funcExport);
						  }
	    })
    }

    //Control buttons
		var lisenterTable = function(boxChekcbox){

				$(boxChekcbox).click(function(){
						var  numbChecked = 0;
						valCheckbox = '';
						numbChecked= $('input[type=checkbox]:checked').length
				    console.log(numbChecked)

						//не выбранно ни одного
				    if (numbChecked === 0) {
				    	 zeroCheckbox();
				    };

				    //выбран один
				    if (numbChecked === 1) {
				    	$('.button-edit').addClass('active-icon');
				    	getUrl();
				    	hillClick('.IconEditNormal50')
				    	hillClick('.IconCreateServiceNormal50')
				    };

				    //выбрано более
				    if (numbChecked > 1) {
				    		getUrl();
				    		unClick('.IconEditNormal50','Необходимо выбрать только один объект в качестве родительского');
				    		unClick('.IconCreateServiceNormal50','Необходимо выбрать только один объект в качестве родительского');
				    };


			    })
			    
			}
		
		lisenterTable('.dataTable input[type=checkbox]');
		
})


