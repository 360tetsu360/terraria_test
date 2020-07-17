function terrain(width,height,random){
    var hightSa = 200;
    var indu = 30;
    var size = 10
    var terrain = {};
    for(let x = 0; x*size <= width; x ++){
        var c = ('rgb(0%, 0%, 100%)');
        var g =('hsb(160, 100%, 50%)');
        
        var hight = noise(x / indu,random) * 100;
        var y = -Math.round(hight / size)*size + hightSa;

        if(y > 160 ){
            fill(c);
            
            var deep = y - 170;
            var deepBlock = deep / size;
            var num1 = 0;
            for(var blocks = 0; blocks <= deepBlock; blocks ++){
                
                rect(x*size - width /2, y - blocks*size, size, size);
                
                
                //terrain['waterX' + x + 'under' + num1] = y - blocks*10;
                num1 += size;
            }
            
        }
        else{
            fill(g);
        }
        
        terrain['terrainX' + x] = y
        rect(x*size - width /2, y, size, size);
        
        var num2 = 0
        for(var under = y; under < height/2; under +=size){
            rect(x*size - width/2 , under,size,size)
            
            if(under < y+size*2){
                fill(g);
            }else{
                fill(255, 204, 0)
            //terrain['UnderX' + x + 'under'+num2] = under;
            num2 += size
        }}
        fill(255, 204, 0)
        ellipse(200, -180, 120);
        
    }
    return terrain
    /*this.loadTerrain = function(){
        for(var x =0;)

    }*/
    
}
