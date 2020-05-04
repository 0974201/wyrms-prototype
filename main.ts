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
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    phood.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    game.over(true)
    effects.confetti.endScreenEffect()
})
info.onLifeZero(function () {
    game.over(false)
    effects.hearts.endScreenEffect()
})
let phood: Sprite = null
tiles.setTilemap(tiles.createTilemap(
            hex`1000100002000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001`,
            img`
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
`,
            [myTiles.tile0,sprites.dungeon.stairLarge,sprites.dungeon.stairNorth],
            TileScale.Sixteen
        ))
let playa = sprites.create(sprites.duck.duck3, SpriteKind.Player)
controller.moveSprite(playa)
tiles.placeOnRandomTile(playa, sprites.dungeon.stairNorth)
scene.cameraFollowSprite(playa)
info.setLife(3)
phood = sprites.create(img`
. . . . . . . e c 7 . . . . . . 
. . . . e e e c 7 7 e e . . . . 
. . c e e e e c 7 e 2 2 e e . . 
. c e e e e e c 6 e e 2 2 2 e . 
. c e e e 2 e c c 2 4 5 4 2 e . 
c e e e 2 2 2 2 2 2 4 5 5 2 2 e 
c e e 2 2 2 2 2 2 2 2 4 4 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 2 2 e 
c e e 2 2 2 2 2 2 2 2 2 2 4 2 e 
. e e e 2 2 2 2 2 2 2 2 2 4 e . 
. 2 e e 2 2 2 2 2 2 2 2 4 2 e . 
. . 2 e e 2 2 2 2 2 4 4 2 e . . 
. . . 2 2 e e 4 4 4 2 e e . . . 
. . . . . 2 2 e e e e . . . . . 
`, SpriteKind.Food)
