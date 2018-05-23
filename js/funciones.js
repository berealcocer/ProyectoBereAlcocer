// JavaScript Document
var calificacion = 0;
var drag =0;
$(function(){
 $(".dragable").draggable();	
 $("#dropzone").droppable({
            drop: function(event, ui) {
             	if($(ui.draggable).attr("id")=="dg_1"){
				calificacion = 4 + calificacion;
				drag=1;
				$(".retro").css("color", "#72aabd");
		        $(".retro").html("Felicidades, seleccionaste la respuesta correcta.");
				$("#calificacion").html("Calificación final<br><p style='font-size:28px;'>" + calificacion + "</p>");
			}
					else{
						$(".retro").css("color", "red");
			$(".retro").html("Tu respuesta fue incorrecta, te recomiendo volver a revisar el contenido de esta Lección.");
						}
            },
            over: function(event, ui) {
				
             
            },
            out: function(event, ui) {
                //$(this).css('background', 'cyan');
            }
        });
		
	$(".btn_enviar_2").click(function() {
    Oculta();
	$("#pagina_8").show();
   });
   
 
	
  $(".anterior").click(function() {
	Oculta();
	$("#pagina_"+$(this).attr("pagina")).show();
  });
  
  $(".siguiente").click(function() {
	Oculta();
	$("#pagina_"+$(this).attr("pagina")).show();
  });
  
  $(".menu .boton").click(function() {
	 Oculta();
	 var seccion = $(this).attr("href");
	 if(seccion === "#introduccion")
		$("#pagina_1").show();
     else if(seccion === "#contenido")
		$("#pagina_3").show();
	 else if(seccion === "#ejercicio")
		$("#pagina_6").show();
	 else if(seccion === "#referencias")
		$("#pagina_9").show();
  });  
  
  $("#btn_1").click(function() {
	$("#informacion_btn_2").hide();
	$("#informacion_btn_1").show();
	$("#recurso .informacion").css("border","1px solid #008891");
  });
  
  
    $("#btn_2").click(function() {
	$("#informacion_btn_1").hide();
	$("#informacion_btn_2").show();
	$("#recurso .informacion").css("border","1px solid #00587a");
  });
  
   $(".btn_iniciar").click(function() {
     Oculta(); 
  	$("#pagina_7").show();
   });
   
   $(".btn_enviar").click(function() {
	var grupo = $(this).attr("grupo");
	var sig = $(this).attr("siguiente");
	
	if( $("input[type=radio][name="+grupo+"]").is(':checked') ) {
		if(parseInt($("input[type=radio][name="+grupo+"]:checked" ).val())==3){
		 $(".retro").css("color", "#72aabd");
		 $(".retro").html("Felicidades, seleccionaste la respuesta correcta.");
		}
		else{
			$(".retro").css("color", "red");
			$(".retro").html("Tu respuesta fue incorrecta, te recomiendo volver a revisar el contenido de esta Lección.");
			
			}
		
    	calificacion = parseInt($("input[type=radio][name="+grupo+"]:checked" ).val()) + calificacion;
		//setTimeout (OcultaEjercicios(sig), 5000); 
		setTimeout(function(){OcultaEjercicios(sig);},4000);
		$("#calificacion").html("Calificación final<br><p style='font-size:28px;'>" + calificacion + "</p>");
	}   
	else{
		$(".retro").css("color", "#FC0");
		$(".retro").html("Elige una respuesta antes de enviarla");
	}
	
	 

   });
   
});

function OcultaEjercicios(siguiente){
	$(".retro").html("");
	$("#ejercicio1").hide();
	$("#ejercicio2").hide();
	$("#ejercicio3").hide();
	$("#"+siguiente).show();
	}

function Oculta(){
	var x= 1;
	for (x=1; x<=9; x++){
		$("#pagina_"+x).hide();
		}
	}

