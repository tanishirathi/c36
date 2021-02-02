class Player{

constructor(){}
    
getCount (){
var PC = database.ref("playerCount")
PC.on("value",function (data){
playerCount = data.val()

})
}
updateCount(count){
database.ref("playerCount").update({
playerCount:count
})
}
update (name){
var PI="player"+playerCount
database.ref(PI).set({
name:name
})
}}