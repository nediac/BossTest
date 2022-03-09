input.onButtonPressed(Button.A, function () {
    basic.pause(50)
    ME.move(1)
})
input.onButtonPressed(Button.B, function () {
    basic.pause(50)
    ME.turn(Direction.Right, 90)
})
let ME: game.LedSprite = null
let Boss = game.createSprite(4, 2)
ME = game.createSprite(2, 2)
let sprite = game.createSprite(4, 4)
let list = game.createSprite(3, 4)
let e = game.createSprite(2, 4)
let d = game.createSprite(1, 4)
let re = game.createSprite(0, 4)
let Boss2 = game.createSprite(4, 4)
loops.everyInterval(2000, function () {
    Boss.set(LedSpriteProperty.Y, randint(0, 4))
    if (true) {
        sprite.set(LedSpriteProperty.Y, randint(0, 4))
        list.set(LedSpriteProperty.Y, randint(0, 4))
        e.set(LedSpriteProperty.Y, randint(0, 4))
        d.set(LedSpriteProperty.Y, randint(0, 4))
        re.set(LedSpriteProperty.Y, randint(0, 4))
    }
})
basic.forever(function () {
    Boss.set(LedSpriteProperty.Brightness, 100)
    Boss2.set(LedSpriteProperty.Brightness, 100)
    ME.set(LedSpriteProperty.Brightness, 1)
})
basic.forever(function () {
    basic.pause(15000)
    basic.clearScreen()
    d.delete()
    e.delete()
    list.delete()
    re.delete()
    sprite.delete()
    Boss = game.createSprite(4, 2)
    Boss2 = game.createSprite(4, 2)
    ME = game.createSprite(2, 2)
    basic.pause(15000)
    basic.showString("Ho-w, w-why ahHHhHHh")
})
basic.forever(function () {
    basic.pause(15000)
    Boss2.set(LedSpriteProperty.Brightness, 100)
})
basic.forever(function () {
    if (ME.isTouching(list)) {
        if (true) {
            ME.turn(Direction.Right, 180)
        }
    }
})
basic.forever(function () {
    if (ME.isTouching(d)) {
        if (true) {
            ME.turn(Direction.Right, 180)
        }
    }
})
basic.forever(function () {
    if (ME.isTouching(e)) {
        if (true) {
            ME.turn(Direction.Right, 180)
        }
    }
})
basic.forever(function () {
    if (ME.isTouching(sprite)) {
        if (true) {
            ME.turn(Direction.Right, 180)
        }
    }
})
basic.forever(function () {
    if (ME.isTouching(re)) {
        if (true) {
            ME.turn(Direction.Right, 180)
        }
    }
})
loops.everyInterval(750, function () {
    Boss.set(LedSpriteProperty.X, randint(0, 4))
    Boss.set(LedSpriteProperty.Y, randint(0, 4))
})
loops.everyInterval(750, function () {
    basic.pause(15000)
    for (let index = 0; index < 1000; index++) {
        Boss2.set(LedSpriteProperty.X, randint(0, 4))
        Boss2.set(LedSpriteProperty.Y, randint(0, 4))
        basic.pause(1000)
    }
})
loops.everyInterval(100, function () {
    basic.pause(15000)
    if (ME.isTouching(Boss2)) {
        basic.pause(100)
        basic.clearScreen()
        basic.showString("You can not beat me!")
        game.gameOver()
    }
})
loops.everyInterval(100, function () {
    if (ME.isTouching(Boss)) {
        basic.pause(100)
        basic.clearScreen()
        basic.showString("You can not beat me!")
        game.gameOver()
    }
})
