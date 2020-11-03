class Form{
    constructor(){
        
    }
    display(){
        var title = createElement("h1")
        title.html("Multiplayer Car Racing Game")
        title.position(370,0);
        var input = createInput("Name")
        var button = createButton("Submit")
        input.position(130,160);
        button.position(200,200);
        var greeting = createElement("h3")
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var name = input.value()
            playerCount += 1
            player.update(name)
            player.updateCount(playerCount)
            greeting.html("Hello" + name + "Welcome to Multiplayer Car Racing Game")
            greeting.position(337,100);
        })

    }
}