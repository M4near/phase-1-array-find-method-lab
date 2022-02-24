// code your solution here
function superbowlWinCB(element){
    return (element.result === "W")
}

function superbowlWin(games){
   let res = games.find(superbowlWinCB)
   return res === undefined ? res : res.year
}