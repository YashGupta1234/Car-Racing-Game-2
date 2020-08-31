class Player{
    constructor(){
    }
    getcount(){
        var playercountref = database.ref("PlayerCount");
        playercountref.on("value", function(data){
            PlayerCount = data.val();
        })
    }
    updatename(name){
        var playerindex = "Player" + PlayerCount;
        database.ref(playerindex).set({
            Name: name
        })
    }
    updatecount(count){
        database.ref("/").update({
            PlayerCount: count
        })
    }
}