
if(window.innerWidth > 786){
    window.onscroll = function() {scrollFunction()};
}
else if(window.innerWidth < 786){
    document.querySelector(".navbar").style.backgroundColor="white"
    document.querySelector(".navbar").style.boxShadow="0px 10px 16px 0px rgb(0 0 0 / 8%)"
    document.querySelector(".navbar").style.minHeight="90px"

}
 

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    document.querySelector(".navbar").style.backgroundColor="white"
    document.querySelector(".navbar").style.boxShadow="0px 10px 16px 0px rgb(0 0 0 / 8%)"
    document.querySelector(".navbar").style.minHeight="90px"



  } else {
    document.querySelector(".navbar").style.minHeight="128px"
    document.querySelector(".navbar").style.backgroundColor="#ffffff00"

    
  }
}

let rev = 0;
carousel(rev);

function previous() {
    rev = rev - 1;
    carousel(rev);
}

function next() {
    rev = rev + 1;
    carousel(rev);
   
    
    setTimeout(next,6000)

    
    
}
next();




function carousel(review) {
    let reviews = document
        .getElementsByClassName("scrolldiv");

    if (review >= reviews.length) {
        review = 0;
        rev = 0;
    }
    if (review < 0) {
        review = reviews.length - 1;
        rev = reviews.length - 1;
    }
    for (let i = 0; i < reviews.length; i++) {
        reviews[i].style.display = "none";
    }
    reviews[review].style.display = "flex";
   
    

}    
