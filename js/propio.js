(function ($) {

    $(document).ready(function(){

        
        
        // === Comprobación del código === NW5P-9LUH-9GH6-R6QX
        $("#inputCodigo").on("input",function(){
            var vInputCodigo = $("#inputCodigo").val();
            
            if(vInputCodigo == 'NW5P-9LUH-9GH6-R6QX'){ // Si son iguales
                $("#btnDescubrirSecreto").removeAttr("disabled");
            } else { // Si son diferentes
                $("#btnDescubrirSecreto").attr("disabled", "disabled");
            }

        });

        // === Control del botón principal
        $("#btnDescubrirSecreto").on("click",function(){
            $('#pagina1').fadeOut();
            
            setTimeout(function(){
                $('#pagina2').fadeIn();
            }, 1500);
            
            
        });
        


    });

    


})(jQuery);