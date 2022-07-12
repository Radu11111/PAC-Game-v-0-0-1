let pac_x = parseInt(1 + Math.random() * 9)
let pac_y = parseInt(1 + Math.random() * 9)

let coin_x = parseInt(1 + Math.random() * 9)
let coin_y = parseInt(1 + Math.random() * 9)

let bomb_x = parseInt(1 + Math.random() * 9)
let bomb_y = parseInt(1 + Math.random() * 9)

let score = 0
let healthPoints = 100

let coin_colect = false
let bomb_exploded = false

function action() {
    switch (event.key) {
        case "ArrowUp":
            if (pac_y > 1) pac_y--; break
        case "ArrowDown":
            if (pac_y < 10) pac_y++; break
        case "ArrowRight":
            if (pac_x < 10) pac_x++; break
        case "ArrowLeft":
            if (pac_x > 1) pac_x--; break
    }
    if (pac_x == coin_x && pac_y == coin_y) {
        score += 10
        coin_colect = true
    }
    else if (pac_x == bomb_x && pac_y == bomb_y) {
        healthPoints -= 10
        bomb_exploded = true
    }
    renderMap()
}



function renderMap() {
    gameMap.innerHTML = ``
    for (let y = 1; y <= 10; y++) {
        for (let x = 1; x <= 10; x++) {

            if (x == pac_x && y == pac_y) {
                gameMap.innerHTML += `<div class="pac"></div>`
            } else if (x == coin_x && y == coin_y) {
                if (coin_colect == false) {
                    gameMap.innerHTML += `<div class="coin"></div>`
                } else {
                    gameMap.innerHTML += `<div></div>`
                }
            }
            else if (x == bomb_x && y == bomb_y) {
                if (bomb_exploded == false) {
                    gameMap.innerHTML += `<div class="bomb"></div>`
                } else {
                    gameMap.innerHTML += `<div></div>`

                }
            }
            else {
                gameMap.innerHTML += `<div></div>`
            }
        }
    }
    gameScore.innerHTML = `Score: ${score}`
    gameHealth.innerHTML = `Health Points: ${healthPoints}`
}
renderMap()
//hw1 : add limits(1,10) to pacman movement -done
//hw2  : add bomb(-10),add hp (health points) 0 ..100 -done
//hw3 :Add coin_state,bomb_state -false/true <movement
//      coins_state,bomb_state >renderMap() -done
//hw4* : add more coins & bomb (2-3)
//hw5* : add random coords -done