//$('#showsExhibition a:first').tab('show');

$(function () {
  $('#showsExhibition a:first').tab('show')
})
$(function () {
  $('#badges a:first').tab('show')
})

$('input[type="file"]').inputfile({
uploadText: '<span class="glyphicon glyphicon-upload"></span> Selecione su archivo',
removeText: '<span class="glyphicon glyphicon-trash"></span>',
restoreText: '<span class="glyphicon glyphicon-remove"></span>',
 
uploadButtonClass: 'btn btn-primary',
removeButtonClass: 'btn btn-default'
});

$(function() {
		$('#myStat1').circliful();
		$('#myStat3').circliful();
		$('#myStat4').circliful();
		$('#myStat2').circliful();
		$('#myStat5').circliful();
		
    });