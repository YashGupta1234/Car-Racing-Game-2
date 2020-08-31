class Form{
    constructor(){

    }
    display(){
        var title = createElement("h2");
        title.html("Multiplayer Car Racing Game");
        title.position(130,0);
        var input = createInput("Name");
        var button = createButton("Start");
        input.position(130,160);
        button.position(250,200);
        button.mousePressed(function(){
            input.hide();
            button.hide();
            var name = input.value();
            PlayerCount ++;
            player.updatename(name);
            player.updatecount(PlayerCount)
                var greeting = createElement("h3");
                greeting.html("Welcome"+ " " + name);
                greeting.position(130,160);
            })
    }
}