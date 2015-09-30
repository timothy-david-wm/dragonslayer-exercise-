/**
 * Created by session2 on 9/28/15.
 */

var slaying = true;

var youHit = Math.floor(Math.random() * 2);

var damageThisRound = Math.floor(Math.random()*5 + 1);

var totalDamage = 0;

console.log("You are a pecefull villager, a dragon apears and burninates yoru whole village, except you.");
switch(prompt("You are a pecefull villager, a dragon apears and burninates yoru whole village, except you, what do you do? \n1. Run at the dragon to fight him \n2. Cry \n3. pretend you're the king")){

    case "2":alert("You cry, after weeks of no people around you to farm, you die of starvation");console.log("You cry, after weeks of no people around you to farm, you die of starvation");
        break;
    case "3":
        alert("You pretend you're the king, you go mad with fake power, and die of thirst becouse you refused to get your own water when no pesent would give it to you...");
        alert("stupid peasents");
        console.log("You pretend you're the king, you go mad with fake power, and die of thirst becouse you refused to get your own water when no pesent would give it to you...");
        console.log("stupid peasents");
        break;
    case "1":
        alert("You find the dragon, you take your rake in hand, the dragon is already dead");
        console.log("You find the dragon, you take your rake in hand, the dragon is already dead");
        alert("but the dragon had an egg, it hatched, the baby dragon sayd \"I am the burninator\", it attacks you, you fight back");
        console.log("but the dragon had an egg, it hatched, the baby dragon sayd \"I am the burninator\", it attacks you, you fight back");
        while(slaying){
            if(youHit == 1){alert("you hit the dragon"); totalDamage += damageThisRound;}else{console.log("You have been burninated"); slaying = false;}
            if(totalDamage >= 5){alert("you win, you ahve avenged your village");console.log("you win, you have avenged your village");slaying = false;}
        }
        break;
}