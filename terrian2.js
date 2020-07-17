function stage(){
    var down = 180;
    var indu = 10;
    var size = 20;
    var Fterrain = [];
    var blue = ('rgb(0%, 0%, 100%)');
    var green = ('hsb(160, 100%, 50%)');
    this.cFstage = function(width,random){ //creatFirstStage
        for(var x = 0; x * size <= width; x ++){
            var hight = noise(x /indu,random) * 100;
            var y = -Math.round(hight / size)*size + down;
            
            rect(x*size - width /2, y, size, size);

            //Fterrain.push(parseInt(y,10))
            Fterrain.push(y/10)
        }
         return Fterrain
    }
    this.move = function(width){
        var newhight = noise(x /indu) * 100;
        var newy = -Math.round(newhight / size)*size + down;
        rect(x*size - width /2, newy, size, size);
    }



}