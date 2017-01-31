$(document).ready(function(){
                
                $('div>p a').click(function(event){
                    event.preventDefault();
                    var pagEnlazar = $(this).attr('href');
                    //alert(pagEnlazar);
                    $.ajax(
                        {   url: 'html/'+pagEnlazar+'.html',
                            async: false,
                            success: function (result)
                                {
                                    $('#content').html(result);
                                }
                        });
                });
                
                
            });


$(function () {
    $("#accordion").accordion({
        collapsible: true
    });
});

$(function() {
    $( "#tabs" ).tabs();
  });
