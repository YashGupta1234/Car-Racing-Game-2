class Game{
    constructor(){
    }
    getState(){
        var gameStateref = database.ref("GameState");
        gameStateref.on("value", function(data){
            GameState = data.val();
        })
    }
    update(state){
        database.ref("/").update({
            GameState: state
        })
    }
    start(){
        if(GameState === 0){
            player = new Player();
            player.getcount();
            form = new Form();
            form.display();
        }
    }
}