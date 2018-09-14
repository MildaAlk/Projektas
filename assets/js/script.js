(function(){  

    //automatic video play after play button is pressed

    var pop = document.querySelector( '.popup' );  
    var vid = document.querySelector( '.vid' ).src;
    
    // adding a js event on play button in header, so when it is pressed, an intro video would pop up and start to play

    var playbutton = document.querySelector( '.icon-Play-Video-Icon' );
    playbutton.addEventListener( 'click' , video);

    function video () {
        
        pop.classList.remove ( "hidden");    

        // when video pop ups, it needs to start auto play
        // in video url autoplay=1 means video will autoplay, so need to add this text to url
       

        var n = vid.search('autoplay=0');

        if (n==-1 ){

            var auto = vid + '?autoplay=1';
            document.querySelector( '.vid' ).src = auto;

        } else{

            var auto = vid.replace('autoplay=0','&autoplay=1');
            document.querySelector( '.vid' ).src = auto;
        }
    };

    // to escape the video, adding event to x button to go back to the starting page

    var xbutton = document.querySelector( '.x' );
    xbutton.addEventListener( 'click' , escape);

    function escape () {
        
        pop.classList.add ( "hidden");     

        document.querySelector( '.vid' ).src = vid;

    };

    // auto background slider

    var index = 1;

    function autoSlide(){

        var image = document.getElementsByClassName("slide");
        

        for(i=0; i<image.length; i++){

            image[i].style.display = 'none';

        };

        if(index>image.length){ index=1 };

        image[index-1].style.display = "block";
        index++;
        
        setTimeout(autoSlide,3000);
    
    };

    autoSlide();

}()); 
