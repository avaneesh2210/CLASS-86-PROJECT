var canvas = new fabric.Canvas('myCanvas');

player_x = 10;
player_y = 10;

var player_object = "";
var block_image_object = "";

function player_update() {
    fabric.Image.fromURL("superhero.jpg", function (Img) {
        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToWidth(140);
        player_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(player_object);
    });

}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(player_x);
        block_image_object.scaleToHeight(player_y);
        block_image_object.set({
            top: player_y,
            left: player_x
        });
        canvas.add(block_image_object);
    });
}
window.addEventListener("keydown", mykeydown);

function mykeydown(e) {
    keyPress = e.keyCode;
    console.log(keyPress);
    if (e.shiftKey == true && keyPress == '80') {
        console.log("p and shift pressed together");
        block_image_width = player_x + 10;
        block_image_height = player_y + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey && keyPress == '77') {
        console.log("m and shift pressed together");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (keyPress == '38') {
        up();
        console.log("up");
    }
    if (keyPress == '40') {
        down();
        console.log("down");
    }
    if (keyPress == '37') {
        left();
        console.log("left");
    }
    if (keyPress == '39') {
        right();
        console.log("right");
    }
    if (keyPress == '65') {
        new_image('captain_america_left_hand.png');
        console.log("a is pressed");
    }
    if (keyPress == '66') {
        new_image('hulk_face.png');
        console.log("b is pressed");
    }
    if (keyPress == '67') {
        new_image('hulk_left_hand.png');
        console.log("c is pressed");
    }
    if (keyPress == '68') {
        new_image('hulk_legs.png');
        console.log("d is pressed");
    }
    if (keyPress == '69') {
        new_image('hulk_right_hand.png');
        console.log("e is pressed");
    }
    if (keyPress == '70') {
        new_image('hulkd_body.png');
        console.log("f is pressed");
    }
    if (keyPress == '71') {
        new_image('ironman_body.png');
        console.log("g is pressed");
    }
    if (keyPress == '72') {
        new_image('ironman_face.png');
        console.log("h is pressed");
    }
    if (keyPress == '73') {
        new_image('ironman_left_hand.png');
        console.log("i is pressed");
    }
    if (keyPress == '74') {
        new_image('ironman_legs.png');
        console.log("j is pressed");
    }
    if (keyPress == '75') {
        new_image('ironman_right_hand.png');
        console.log("k is pressed");
    }
    if (keyPress == '76') {
        new_image('spiderman_body.png');
        console.log("l is pressed");
    }
    if (keyPress == '77') {
        new_image('spiderman_face.png');
        console.log("m is pressed");
    }
    if (keyPress == '78') {
        new_image('spiderman_left_hand.png');
        console.log("n is pressed");
    }
        if (keyPress == '79') {
        new_image('spiderman_legs.png');
        console.log("p is pressed");
    }
    if (keyPress == '80') {
        new_image('spiderman_right_hand.png');
        console.log("q is pressed");
    }
    if (keyPress == '81') {
        new_image('thor_face.png');
        console.log("r is pressed");
    }
    if (keyPress == '82') {
        new_image('thor_left_hand.png');
        console.log("s is pressed");
    }
    if (keyPress == '83') {
        new_image('thor_right_hand.png');
        console.log("t is pressed");
    }
}