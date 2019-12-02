$(document).ready(function() {

	//var disneyAPI = 'http://www.whateverorigin.org/get?url=' + encodeURIComponent('https://touringplans.com/walt-disney-world/resort-dining.json') + '&callback=?';	
	var disneyAPI = 'http://www.whateverorigin.org/get?url=' + encodeURIComponent('https://touringplans.com/magic-kingdom/attractions.json') + '&callback=?';

	$.ajax({
		url: disneyAPI,
		type: 'GET',
		dataType: 'json',
		contentType:'application/json',
		success: function (data) {
			var montarHTML = '';
			var jsn=JSON.parse(data.contents);
			montarHTML='<ul>';
			$.each( jsn, function( i, item ) {
				montarHTML +='<li class="grid-25 tablet-grid-25">';
				montarHTML+='<p>'+item.name+'</p></li>';
			});
			montarHTML+='</ul>';
			$('#conteudo').html(montarHTML);
		},
		error: function(){
			alert("Deu ruim");
		}		  
	});

  
});