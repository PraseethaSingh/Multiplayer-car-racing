class Form {
    constructor(){
        this.button = createButton("Play"),
        this.input = createInput(""),
        this.greeting = createElement('h3')

        this.reset = createButton("Reset")
        

    }
    hide(){
        this.greeting.hide()
        this.button.hide()
        this.input.hide()
    }
    display(){
        var title = createElement("h2")
        title.html("Multiplayer Car Racing Game")
        title.position(displayWidth/2-50,0);

       
        this.input.position(displayWidth/2-40,displayHeight/2-80);

        
        this.button.position(displayWidth/2+30,displayHeight/2);


        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value()
            playerCount+=1
            player.index = playerCount;
            console.log(playerCount)
            player.update()
            player.updateCount(playerCount)
            this.greeting.html("hello "+player.name)
            this.greeting.position(displayWidth/2-70,displayHeight/4)
        })

        this.reset.position(displayWidth-100,20)

        this.reset.mousePressed(()=>{

            player.updateCount(0)
            game.update(0)
            Player.updatecarsatend(0)
            player.remove()

        })

       


    }
}