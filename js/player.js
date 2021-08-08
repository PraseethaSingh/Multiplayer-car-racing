class Player {
    constructor(){
        this.name = null ;
        this.distance = 0;
        this.index = null;
        this.rank = null;

    }
    getCount(){
        var playerCountref = database.ref("playerCount")
        playerCountref.on("value", (data)=>{
            playerCount = data.val()
            })
    }
updateCount(count){
    database.ref('/').update({playerCount:count})
}

update(){
    var playerIndex = "players/player"+this.index
    database.ref(playerIndex).set({name:this.name,distance:this.distance})
}

remove(){
    var removing = database.ref("players")
    removing.remove()
}

static getPlayerInfo(){
    var playerinforef = database.ref('players')
    playerinforef.on("value",(data)=>{all_players=data.val()
    })
}

getcarsatend(){
    database.ref("carsatend").on("value",(data)=>
    {this.rank=data.val()})
}

getcarsatendcount(){
    var countref= database.ref("carsatend")
    countref.on("value",(data)=>{endcount=data.val()})
    console.log(endcount)
}

static updatecarsatend(rank1){
    database.ref("/").update({carsatend:rank1})
}

}