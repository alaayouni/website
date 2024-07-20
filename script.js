
 // start_Function für Gallery
 $('.button').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        let filter = $(this).attr('data-filter');

        if(filter == 'All'){
            $('.gallery .image').show(400);
        }
        else{
            $('.gallery .image').not('.' +filter).hide(200);
            $('.gallery .image').filter('.' +filter).show(200);
        }
    });

    $('.gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true,
        }
    });

// End_Function für Gallery

//Start_Function für Contact
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}


function showPopup(event) {
    event.preventDefault();
    alert("Nachricht gesendet")
}

//End_function für contact
