// Image
function buttonEdit(e, samp){
    var dataContent = $("#cards").attr("data-content");
    resetEditable(e, "button");
    
    if (dataContent === "none"){ 
           alert("Please select the element in the left to add contents.")  
    }
    else {
        dataEditor("true");
        $(".addedEditables").attr("style","");
        $(".addedEditables").attr("onClick","");
           $(".addedEditables").addClass("indiButton").removeClass("empty-content").html("<a href=\"#\" data-button=\"newEdit\" style=\"display:inline-block;background-color: red; color: #fff;padding-top: 10px; padding-bottom: 10px;padding-left: 10px; padding-right: 10px; text-decoration:none; border-radius:4px;\" class=\"buttonNowEditing\" target=\"_blank\" data-position=\"left\">Button</a>");
    $(".block-body-button").addClass("in");
        
            $(".currentAdding").each(function(){
        $(this).removeClass("currentAdding");
    })
    $(e).parent().addClass("currentAdding");
        
    }
 
         
}

function buttonEditData(e){
    var dddd = $(e).parent().prev().addClass("buttonNowEditing");
    var ddddd = $(e).parent().prev().attr("class");
    
    var rr = $(".buttonNowEditing").attr("data-button");
    tabposition("blocks");
        $(".block-body-button").addClass("in");
    resetEditable(e, "button");
    if(rr === "edited"){
        
        dataEditor("true");
        $("[data-button]").attr("data-button","editing");
       var hhttmmll  = $(e).parent().parent().addClass("currentEditing").find(".buttonNowEditing").text();
       
        var paddingLeftStringify  = $(e).parent().parent().addClass("currentEditing").find(".buttonNowEditing").css("padding-left");
       
        var paddingTopStringify  = $(e).parent().parent().addClass("currentEditing").find(".buttonNowEditing").css("padding-top");

        var url  = $(e).parent().parent().addClass("currentEditing").find(".buttonNowEditing").attr("href");
        
        var btnBackground  = $(e).parent().parent().addClass("currentEditing").find(".buttonNowEditing").css("background-color");
        
         var btnTextColor  = $(e).parent().parent().addClass("currentEditing").find(".buttonNowEditing").css("color");

        var btnPosition  = $(e).parent().parent().addClass("currentEditing").attr("data-position");
        
        if(btnPosition === "left"){
            buttonPlacementActiveToggler()
            $(".bLeft").addClass("active");
        }
        else if (btnPosition === "right"){
         buttonPlacementActiveToggler()
            $(".bRight").addClass("active");
        } 
        else if (btnPosition === "center"){
         buttonPlacementActiveToggler()
            $(".bCenter").addClass("active");
        }
        else if (btnPosition === "block"){
         buttonPlacementActiveToggler()
            $(".bBlock").addClass("active");
        }
        
        
        var paddingLeft = trimAlphabets(paddingLeftStringify);
        var paddingTop = trimAlphabets(paddingTopStringify);
        
        $(".btn-text").val(hhttmmll);
        $(".pad-rl").val(paddingLeft);
        $(".pad-tb").val(paddingTop);
        $(".btn-link").val(url);
        $(".btn-text-color").val(btnTextColor);
        $(".btn-color").val(btnBackground);
        
        $("#btnBgColor").val(btnBackground);
        $("#textColor").val(btnTextColor);
        $("#textColor").next().find(".sp-preview-inner").css("background-color",btnTextColor);
        $("#btnBgColor").next().find(".sp-preview-inner").css("background-color",btnBackground);
    }
    
    clickableParentEdit(e);
    
    
}
function trimAlphabets(paddingLeft){
    paddingLeftValue = paddingLeft.replace(/[a-z]*/gi, '').trim();
                     return paddingLeftValue;
}



$(".btn-text").on("keyup , change", function(){
    var contentcheck = $(".buttonNowEditing").text();
    var textVal = $(this).val();
    $(".buttonNowEditing").text(textVal);
});
$(".btn-link").on("keyup , change", function(e){
//    var urlVal = $(this).val();
     var input = $(this);
    var val = input.val();
    if (val && !val.match(/^.+:\/\/.*/)) {
        input.val('http://' + val);
    }
    var btnUrlVal = $(".btn-link").val();
     $(".buttonNowEditing").attr("href", btnUrlVal);
});

$(".pad-tb").on("keyup , change", function(){
    var paddingVal = $(this).val();
    $(".buttonNowEditing").css({
        "padding-top": paddingVal + "px",
        "padding-bottom": paddingVal + "px",
    });
});
$(".pad-rl").on("keyup , change", function(){
    var paddingVal = $(this).val();
    $(".buttonNowEditing").css({
        "padding-left": paddingVal + "px",
        "padding-right": paddingVal + "px",
    });
});

function btnPlacement(placement , e){
    if(placement === "left"){
       
        buttonPlacementActiveToggler(e);
        $(".buttonNowEditing").css("display","inline-block").parent().css("text-align", "left").attr("data-position","left");
         $(e).addClass("active"); 
    }
    else if(placement === "right"){
        buttonPlacementActiveToggler(e);

        $(".buttonNowEditing").css("display","inline-block").parent().css("text-align", "right").attr("data-position","right");
        $(e).addClass("active"); 
    }
     else if(placement === "center"){
         buttonPlacementActiveToggler(e);
        $(".buttonNowEditing").css("display","inline-block").parent().css("text-align", "center").attr("data-position","center");
         $(e).addClass("active"); 
    }
     else if(placement === "block"){
         buttonPlacementActiveToggler(e);
        $(".buttonNowEditing").css("display","block").parent().css("text-align", "center").attr("data-position","block");
         $(e).addClass("active"); 
    }
}


function buttonPlacementActiveToggler(){
     $(".buttonPlacement").each(function(){
          $(this).removeClass("active");
        })
     
}




$("#btnBgColor").on("change", function(){
    var btnBg = $(this).val();
    $(".btn-color").val(btnBg);
    $(".buttonNowEditing").css("background-color", btnBg);
});

$("#textColor").on("change", function(){
    var btnBg = $(this).val();
    $(".btn-text-color").val(btnBg);
    $(".buttonNowEditing").css("color", btnBg);
});

