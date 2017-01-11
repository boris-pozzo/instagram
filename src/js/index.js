//search bar

var hiddenDiv = document.getElementById("toggle");
var hiddenSpan = document.getElementById("recherche-fixe");
var isClicked= false;
var cuerpo = document.body;

var icon= document.getElementById("icon");
var search= document.getElementById("search")


function hide(e){
    if(isClicked){ 
        hiddenDiv.style.display="block";
    } else{
        hiddenDiv.style.display="none";
        search.appendChild(icon)
    }
    isClicked = !isClicked
    e.stopPropagation();
}

function show(e){
    isClicked = !isClicked;
    hiddenDiv.style.display="block";
}

hiddenDiv.addEventListener('click', hide);
cuerpo.addEventListener('click', show);


//modal

$('.resize').click(function(){
    $(this).each(function(){
/*var*/ src = $(this).find('img').attr("src");
        $('.overlay').css('display','flex');
        $('.image-selector').attr('src',src);
  });
});


//close modal

$('.fa-times').click(function(){
    $('.overlay').css('display', 'none');
});

// comments


$("input[type='text'").keypress(function (event) {
    if(event.which === 13){

        var a = ['Michelle', 'Poutine', 'Obama', 'François', 'Trudeau', 'Angela'];
        var randomValue = a[Math.floor(a.length * Math.random())];

    var todoText = $(this).val();
    $(this).val("");
    $("ul").append("<li class='comment-modal'>"+"<b>"+randomValue+"</b> "+todoText+"</li>")
    }
});


