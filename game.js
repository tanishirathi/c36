class Game{

    constructor(){}
        
    getState (){
    var GS = database.ref("gameState")
    GS.on("value",function (data){
    gameState = data.val()
    
    })
    }
    update(state){
    database.ref("gameState").update({
    gameState:state
    })
    }
    start(){
    if( gameState === 0 ){
    player= new Player();
    player.getCount ();
    form= new Form ();
    form.display ();
    }
    }}