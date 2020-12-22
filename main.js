canvas = new fabric.Canvas('myCanvas');

x_position = 10;
y_position = 10;

block_height = "30";
block_width = "30";

player_object = "";
block_object = "";

function player_update() {
    fabric.Image.FromURL("iron_man.png", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(100);
        player_object.scaleToHeight(200);
        player_object.set({
            top: y_position,
            left: x_position
        })

       canvas.add(player_object);

    })
}

function new_block(get_image) {
    fabric.Image.FromURL(get_image, function(Img) {
        block_object = Img;

        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({
            top: y_position,
            left: x_position
        })

    canvas.add(block_object);

    })
}