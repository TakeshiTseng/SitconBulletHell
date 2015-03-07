(function(){


// need add
// <script src="https://cdn.socket.io/socket.io-1.3.4.js"></script>
// first

// set sbh-root on top
$('#sbh-root').css('zIndex', '100');

var socket = io('http://localhost:3001');

socket.on('connection', function(socket){
    console.log('socket io connected!');
});

socket.on('irc_msg', function(msg){
    console.log('message: ' + msg);

    // create a float text object.
    var float_text = document.createElement('div');
    float_text.innerHTML = msg;
    $('#sbh-root').append(float_text);

    // animate.
    // convert to jquery object first
    float_text = $(float_text);
    float_text.attr('class', 'sbh-text');

    // generate y position
    var view_height = window.screen.height;
    var rnd_top = 100 + Math.random() * (view_height - 100);
    float_text.css('top', rnd_top + 'px');

    // setup x position
    var view_width = window.screen.width;
    float_text.css('left', view_width + 'px');

    // move it!
    float_text.animate({left: '-' + view_width + 'px'}, 10000, 'linear', function() {
    	float_text.remove();
    });
});

})();
