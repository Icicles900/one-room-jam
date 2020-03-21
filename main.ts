enum ActionKind {
    Walking,
    Idle,
    Jumping
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
f f 6 6 f 6 7 6 6 6 6 6 6 6 6 6 
f f 6 f 7 6 7 7 6 6 6 6 6 6 6 6 
f f f 8 7 7 6 7 6 7 7 6 6 6 6 6 
f f f f 8 7 6 6 7 7 8 6 6 6 6 6 
f f f f 6 8 f 6 7 8 6 6 6 6 6 6 
f f f f f 6 f 6 6 6 6 6 6 7 6 6 
f f f f f f 6 6 6 6 6 6 6 7 6 6 
f f f f 6 6 6 6 6 6 6 6 6 8 6 6 
f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 
f f f f f 6 6 6 6 6 6 6 6 6 6 6 
f f f f f 6 6 6 6 6 6 6 6 6 6 6 
f f f f f 7 6 f 6 6 6 6 6 6 6 6 
f f f f f f f 6 6 6 6 6 6 6 6 6 
f f f f f 8 6 6 6 6 6 6 6 7 6 6 
f f f f 6 6 6 6 6 6 6 6 6 6 6 6 
f f f f f 6 6 6 6 6 6 6 6 6 6 6 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f 6 f f f f f f f f f 6 f f f f 
f 6 6 f f f f f 7 f 8 6 f 6 6 f 
f f 6 6 f f f 6 7 f 6 f 6 6 f 6 
6 f 6 6 6 6 f 6 6 6 6 6 6 7 6 6 
6 6 6 6 6 6 f 6 6 6 6 6 6 7 6 6 
6 6 6 6 6 6 f 6 6 6 6 6 6 8 6 6 
6 6 6 6 6 6 6 f 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 7 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 7 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 8 6 6 6 6 6 6 6 7 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
6 6 6 6 6 6 7 6 f 6 6 6 6 f f f 
6 6 6 6 7 6 7 7 6 f f f f f f f 
6 6 6 8 7 7 6 7 6 7 7 f f f f f 
6 6 6 6 8 7 6 6 7 7 8 f f f f f 
6 6 6 6 f 8 6 6 7 8 6 f f f f f 
6 6 6 6 6 f f 6 6 6 6 f f f f f 
6 6 6 6 6 6 6 f 6 6 f f f f f f 
6 6 6 6 6 6 6 f f 6 6 f f f f f 
6 6 6 6 6 6 6 6 f f f f f f f f 
6 6 6 6 6 6 6 6 6 6 6 f f f f f 
6 6 6 6 6 6 6 6 6 f 6 f f f f f 
6 6 6 6 6 7 6 6 6 6 f f f f f f 
6 6 6 6 6 7 6 6 6 6 6 f f f f f 
6 6 6 6 6 8 6 6 f f 6 6 f f f f 
6 6 6 6 6 6 6 6 6 6 f f f f f f 
6 6 6 6 6 6 6 6 6 6 6 6 f f f f 
`
    //% blockIdentity=images._tile
    export const tile6 = img`
6 6 6 6 6 6 7 6 6 6 6 6 6 6 6 6 
6 6 6 6 7 6 7 7 6 6 6 6 6 6 6 6 
6 6 6 8 7 7 6 7 6 7 7 6 6 6 6 6 
6 6 6 6 8 7 6 6 7 7 8 6 6 6 6 6 
6 6 6 6 6 8 6 6 7 8 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 
6 6 f f 6 6 6 6 6 6 6 6 6 7 6 6 
6 f 6 6 6 6 f 6 6 6 6 6 6 8 6 6 
f 6 6 6 6 6 6 f 6 6 6 6 f 6 6 6 
f 6 6 6 6 6 6 f 6 6 6 f f 6 6 6 
f 6 f f f 6 f 6 6 6 6 f 6 6 6 6 
f 6 f f f f f 6 6 6 f 6 6 6 f 6 
f 6 f f f f f f f 6 f 6 6 6 6 f 
f f f f f f f f f f f 6 6 f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`
    //% blockIdentity=images._tile
    export const tile7 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f e e f f f f f f f f f f f f f 
f e e f f f e e f f f f f f f f 
f f e e f f e e f f f e e f f f 
f f e e f f f f f f e e e e f f 
e e f f f f f f e f e e e e f f 
e e f f f f f e e f f e e f f f 
f f f f e e f e e f f f f f f f 
`
    //% blockIdentity=images._tile
    export const tile8 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f 6 7 6 f f f 6 f f f 
f f f f f f 6 6 7 7 f 6 6 6 f f 
6 f f f 6 8 6 6 7 8 f 6 6 f f f 
6 f 6 6 6 6 6 6 6 f 6 6 6 f f f 
6 f 6 6 6 6 6 6 6 6 6 6 6 f f f 
6 6 f 6 6 6 6 6 6 6 6 6 f f f f 
6 6 f 6 6 6 6 6 6 6 6 6 f f f f 
6 6 6 6 6 6 6 6 6 6 f f f f f f 
6 6 6 6 6 6 6 6 6 f 6 6 f f f f 
6 6 6 6 6 7 6 6 6 6 6 6 f f f f 
6 6 6 6 6 7 6 6 6 6 6 6 6 6 6 f 
6 6 6 6 6 8 6 6 6 6 6 6 6 f 6 f 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 f f 
6 6 6 6 6 6 6 6 6 6 6 6 6 f f f 
`
    //% blockIdentity=images._tile
    export const tile9 = img`
6 6 6 6 6 6 7 6 6 6 6 6 f f f f 
6 6 6 6 7 6 7 7 6 6 f f 6 6 f f 
6 6 6 8 7 7 6 7 6 f 7 6 6 f f f 
6 6 6 6 8 7 6 6 7 7 8 6 6 f 6 f 
6 6 6 6 6 8 6 6 7 8 6 6 6 6 f f 
6 6 6 6 6 6 6 6 6 6 6 6 6 f f f 
6 6 6 6 6 6 6 6 6 6 6 6 6 f f f 
6 6 6 6 6 6 6 6 6 6 6 6 6 8 f f 
6 6 6 6 6 6 6 6 6 6 6 6 6 f f f 
6 f 6 6 6 6 6 6 f 6 6 6 6 f f f 
6 6 f 6 6 6 6 f 6 6 6 6 6 f f f 
6 6 f f f 7 6 f 6 6 6 6 6 f f f 
6 6 f f f f f f f f 6 6 6 f f f 
f f f f f f f f f f f 6 6 7 f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`
    //% blockIdentity=images._tile
    export const tile10 = img`
f f 6 6 6 6 7 6 6 6 6 6 6 6 6 6 
f f f 6 7 6 7 7 6 6 6 6 6 6 6 6 
f f f 8 7 7 6 7 6 7 7 6 6 6 6 6 
f f f f f f 6 6 7 7 8 6 6 6 6 6 
f f f 6 6 8 f f 7 8 6 6 6 6 6 6 
f f f 6 6 6 6 f 6 6 6 6 6 7 6 6 
f f f 6 6 6 6 6 6 6 6 6 6 7 6 6 
f f f 6 6 6 6 6 6 6 6 6 6 8 6 6 
f f f f 6 6 6 6 6 6 6 6 6 6 f 6 
f f f f 6 6 f f 6 6 6 6 6 f 6 6 
f f f f f 6 f 6 6 6 6 6 6 f 6 6 
f f f f f f 6 6 6 f 6 6 6 6 f 6 
f f f f f f 6 6 6 6 f 6 6 6 f 6 
f f f f f f f 6 6 f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`
    //% blockIdentity=images._tile
    export const tile11 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f 7 7 f f f f f f f 6 6 6 
f f f f 8 7 f f f 7 8 6 6 6 6 6 
f f 6 6 6 8 6 6 f 8 6 6 6 6 6 6 
f f 6 6 6 6 6 6 f 6 6 6 6 7 6 6 
f 6 6 f 6 6 6 6 f 6 6 6 6 7 6 6 
f f f 6 6 6 6 6 f 6 6 6 6 8 6 6 
f f 6 6 6 6 6 6 6 f 6 6 6 6 6 6 
f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 
f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 
f f f 6 f f 6 6 6 6 6 6 6 6 6 6 
f f f f f 7 6 6 6 6 6 6 6 6 6 6 
f f f 6 6 8 6 6 6 6 6 6 6 7 6 6 
f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 
f f f 6 6 6 6 6 6 6 6 6 6 6 6 6 
`
    //% blockIdentity=images._tile
    export const tile12 = img`
6 6 6 6 6 6 7 6 6 6 6 6 6 6 6 6 
6 6 6 6 7 6 7 7 6 6 6 6 6 6 6 6 
6 6 6 8 7 7 6 7 6 7 7 6 6 6 6 6 
6 6 6 6 8 7 6 6 7 7 8 6 6 6 6 6 
6 6 6 6 6 8 6 6 7 8 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 7 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 7 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 8 6 6 6 6 6 6 6 7 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`
    //% blockIdentity=images._tile
    export const tile13 = img`
6 6 6 6 6 6 7 6 6 6 6 6 6 6 6 6 
6 6 6 6 7 6 7 7 6 6 6 6 6 6 6 6 
6 6 6 8 7 7 6 7 6 7 7 6 6 6 6 6 
6 6 6 6 8 7 6 6 7 7 8 6 6 6 6 6 
6 6 6 6 6 8 6 6 7 8 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 7 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 7 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 8 6 6 6 6 6 6 6 7 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`
    //% blockIdentity=images._tile
    export const tile14 = img`
6 6 6 6 6 6 7 6 6 6 6 6 6 6 6 6 
6 6 6 6 7 6 7 7 6 6 6 6 6 6 6 6 
6 6 6 8 7 7 6 7 6 7 7 6 6 6 6 6 
6 6 6 6 8 7 6 6 7 7 8 6 6 6 6 6 
6 6 6 6 6 8 6 6 7 8 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 7 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 7 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 8 6 6 6 6 6 6 6 7 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`
    //% blockIdentity=images._tile
    export const tile15 = img`
6 6 6 6 6 6 7 6 6 6 6 6 6 6 6 6 
6 6 6 6 7 6 7 7 6 6 6 6 6 6 6 6 
6 6 6 8 7 7 6 7 6 7 7 6 6 6 6 6 
6 6 6 6 8 7 6 6 7 7 8 6 6 6 6 6 
6 6 6 6 6 8 6 6 7 8 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 7 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 8 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 7 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 7 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 8 6 6 6 6 6 6 6 7 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`
    //% blockIdentity=images._tile
    export const tile17 = img`
f f f f f f f f f f f f f f f e 
f f f f f f f f f f f f f f e e 
f f f f f f f f f f f f f f e e 
f f f f f f f f f f f f f e f f 
f f f f f f f f f f f e f e e e 
f f f f f f f f f f f e e f f e 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f e e 
f f f f f f f f f f f e e f e f 
f e e f f f f f f f f e e f f e 
f e e f f f e e f f f f f f e e 
f f e e f f e e f f f e e f e e 
f f e e f f f f f f e e e e f f 
e e f f e e f f e f e e e e f e 
e e f f f f f e e f f e e f e e 
f f f f e e f e e f e f f e f f 
`
    //% blockIdentity=images._tile
    export const tile18 = img`
e e f f f f f f f f f f f f f f 
f f f e f f f f f f f f f f f f 
f e e e f f f f f f f f f f f f 
e e f f f f f f f f f f f f f f 
f e f f e f f f f f f f f f f f 
e e e f e f f f f f f f f f f f 
f f e f e f f f f f f f f f f f 
e e f f f f f f f f f f f f f f 
e f f f e f f f f f f f f f f f 
f e e f f e f f f f f f f f f f 
e e e f f f e e f f f f f f e e 
f f e e f f e e f f f e e f f f 
f f e e f f f f f f e e e e f e 
e e f f f f f f e f e e e e f f 
f e f f f f f e e f f e e f f e 
f f f f e e f e e f f f f f e e 
`
    //% blockIdentity=images._tile
    export const tile19 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
/**
 * Your Livestreams are very useful.
 */
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Player1.destroy()
})
info.onCountdownEnd(function () {
    game.over(true, effects.confetti)
})
info.onLifeZero(function () {
    info.stopCountdown()
    info.setLife(0)
    game.over(false, effects.dissolve)
})
let Snake: Sprite = null
let Player1: Sprite = null
tiles.setTilemap(tiles.createTilemap(
            hex`100010000406060606060606060606060606060705160f0f0f0f0f0f0f0f0f0f0f0f1308050d0203020303010101020101011008050d0202020202010102020303031008050d0101020202020202010101031008050d0202010101020202010101011008050d0102030302010202010101011008050d0102020301010202020101011008050d0202010102020301020201011008050d0202020201010101010301011008050d0202010101010102020301011008050d0202010101020203010301011008050d0101020202020102020201011008050d0103030201020201010201011008051511111111111111111111111114081d12121212121212121212121212121c`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tileDarkGrass3,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass2,sprites.builtin.forestTiles5,sprites.builtin.forestTiles9,sprites.builtin.forestTiles6,sprites.builtin.forestTiles7,sprites.builtin.forestTiles11,sprites.builtin.forestTiles15,sprites.builtin.forestTiles13,sprites.builtin.forestTiles14,sprites.builtin.forestTiles18,myTiles.tile2,sprites.castle.tileGrass1,myTiles.tile4,myTiles.tile5,myTiles.tile6,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile13,myTiles.tile14,myTiles.tile15,sprites.builtin.forestTiles19,myTiles.tile17,myTiles.tile18,myTiles.tile19],
            TileScale.Sixteen
        ))
Player1 = sprites.create(img`
. . . . . . . c c . . . . . . . 
. . . . c c c 6 5 c 6 6 . . . . 
. . . . c 6 c 5 5 c 7 6 . . . . 
. . . 6 c c 7 5 5 7 c 6 6 . . . 
. . c c 7 7 7 7 7 5 7 7 c 6 . . 
. 6 6 6 c 6 7 7 7 7 6 c c 6 6 . 
c 7 7 7 6 c 7 c 6 7 6 7 7 7 7 6 
c c c 6 6 6 c 6 6 6 6 7 7 6 6 6 
. c c 7 6 6 6 6 6 7 7 7 7 c 6 . 
. c 7 7 6 6 7 6 6 7 7 6 7 7 c . 
. c c c c 7 7 6 7 7 7 c c c c . 
. . . . c 7 c c c c 7 c . . . . 
. . . . . 6 e e e e c . . . . . 
. . . . . e e e e e e . . . . . 
. . . . e e . e e . e e . . . . 
. . . . . . . e e . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(Player1)
Player1.setPosition(76, 52)
scene.cameraFollowSprite(Player1)
info.setLife(1)
game.showLongText("Survive, it's really not that hard.", DialogLayout.Center)
info.startCountdown(20)
game.onUpdateInterval(2000, function () {
    Snake = sprites.create(img`
. . . . c c c c c c . . . . . . 
. . . c 6 7 7 7 7 6 c . . . . . 
. . c 7 7 7 7 7 7 7 7 c . . . . 
. c 6 7 7 7 7 7 7 7 7 6 c . . . 
. c 7 c 6 6 6 6 c 7 7 7 c . . . 
. f 7 6 f 6 6 f 6 7 7 7 f . . . 
. f 7 7 7 7 7 7 7 7 7 7 f . . . 
. . f 7 7 7 7 6 c 7 7 6 f c . . 
. . . f c c c c 7 7 6 f 7 7 c . 
. . c 7 2 7 7 7 6 c f 7 7 7 7 c 
. c 7 7 2 7 7 c f c 6 7 7 6 c c 
c 1 1 1 1 7 6 f c c 6 6 6 c . . 
f 1 1 1 1 1 6 6 c 6 6 6 6 f . . 
f 6 1 1 1 1 1 6 6 6 6 6 c f . . 
. f 6 1 1 1 1 1 1 6 6 6 f . . . 
. . c c c c c c c c c f . . . . 
`, SpriteKind.Enemy)
    Snake.setPosition(Math.randomRange(0, scene.screenWidth()), Math.randomRange(0, scene.screenHeight()))
    Snake.follow(Player1, 50)
})
