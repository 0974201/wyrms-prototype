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
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.forestTiles14, function (sprite, location) {
    game.splash(":)")
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . b b b b b b b . . . . . . . . . . . 
. . . . . . . . . . . b b 6 6 6 6 3 3 3 3 b a a . . . . . . . . 
. . . . . . . . . b b 3 3 6 7 7 7 6 3 3 3 6 6 3 a a . . . . . . 
. . . . . . . . b 3 3 3 3 3 8 8 8 3 3 3 3 8 9 6 3 3 a a . . . . 
. . . . . . . b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 8 9 6 3 3 a a . . . 
. . . . . . b 3 4 4 4 3 3 3 3 3 3 3 3 3 3 3 3 8 6 3 3 b a e . . 
. . . . . b 3 4 5 5 4 3 3 3 3 3 3 3 3 3 3 4 4 4 3 3 3 3 a e . . 
. . . . b 3 3 3 2 2 3 3 3 d d d d 3 3 3 3 4 5 5 2 3 3 d a e e . 
. . . b 3 d 3 3 3 3 3 3 d d 3 b b b b 3 3 3 2 2 3 3 3 d a b e . 
. . b 3 d 3 3 3 3 3 3 d 3 b b 3 3 b b 3 3 3 3 3 3 3 3 d a 4 e . 
. . b d 3 3 3 3 3 3 3 3 b 3 3 a a b 3 3 3 3 3 3 3 2 2 3 a 4 e e 
. b 3 d 3 6 6 3 3 3 3 b 3 3 a a b 3 3 3 6 6 3 3 2 4 4 2 b 4 e e 
. b d 3 b 9 8 3 3 3 3 a 3 a a 3 3 3 3 3 8 7 6 3 3 e e 3 b 4 e e 
. b d 6 9 8 3 3 3 3 b a a a 3 3 3 3 3 3 3 8 7 6 3 3 b b 4 b e e 
b 3 d 6 8 3 3 3 3 3 b b a 3 3 3 3 3 3 3 3 3 8 6 3 b a 4 4 e b e 
b d d 3 3 3 3 3 3 3 b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 4 4 b e b e 
a d d 6 6 6 6 3 3 3 3 3 3 2 2 3 3 3 3 6 6 3 3 3 b a 4 4 b b b e 
a d 6 7 7 7 6 3 3 3 3 3 2 4 4 2 3 3 6 9 8 3 d 3 a 4 4 4 b 4 e . 
a d d 8 8 8 b 3 3 3 3 3 3 e e 3 3 6 9 8 3 3 d 3 a 4 4 b 4 4 e . 
a d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 6 8 3 3 d 3 a 4 4 4 b 4 e . . 
a 3 d d 3 3 3 3 3 4 4 4 3 3 3 3 3 d d d d 3 a 4 4 4 b 4 4 e . . 
a b 3 3 d d d 3 2 5 5 4 3 3 3 3 d d 3 3 a a 4 4 4 b 4 4 e . . . 
. e a b b 3 d d 3 2 2 3 3 3 3 3 b a a a 4 4 4 4 b 4 4 e . . . . 
. e b a b b 3 d 3 3 3 d 3 3 b a a 4 4 4 4 4 3 b 4 4 e . . . . . 
. . e b a a b 3 d d d 3 a a a 4 4 4 4 4 3 3 b 4 4 e . . . . . . 
. . e e b b a a b 3 3 a 4 4 4 4 4 3 3 3 b 4 4 4 e . . . . . . . 
. . . e e e b b a a b 4 4 4 b 3 3 3 b 4 4 4 4 e . . . . . . . . 
. . . . e b e e e b b b b b b b b 4 4 4 4 e e . . . . . . . . . 
. . . . . e e b b b b 4 4 4 4 4 4 4 4 e e . . . . . . . . . . . 
. . . . . . . e e e b b b 4 4 4 e e e . . . . . . . . . . . . . 
. . . . . . . . . . e e e e e e . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, playa, -100, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    playa.say(":D", 200)
    phood.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    playa.say(":D", 200)
    werty.destroy()
    mySprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(info.life() - 1)
    playa.say(":D", 200)
    phood.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    playa.say(":(", 200)
})
info.onLifeZero(function () {
    game.over(false, effects.hearts)
})
let projectile: Sprite = null
let phood: Sprite = null
let mySprite: Sprite = null
let werty: Sprite = null
let playa: Sprite = null
tiles.setTilemap(tiles.createTilemap(
            hex`13001300010a171717171717171717171717171717170e04030303030316030303030303030303030306040505050505160505050505050505050505070405050909090909090909090909090905050704050509050505050505050505050505050507040505090505050505050505050505050505070405050909090505090909090909090905050704050509050505050505050505050509050507040505090505050505050505050505090505070405050909090909090909090905050905050704050505050505050505050509050509050507040505050505050505050505090505090505070405050909090909090905050905050905050704050509050505050505050505050509050507040505090505050505050505050505090505070409090909090909090909090905050905050704050505050505050505050509050509050507040505050505050505050505090505090505071c03030303030303030303030303030905021b`,
            img`
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . . 2 . . . . . . . . . . . . 2 
2 . . . . 2 . . . . . . . . . . . . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 
2 . . 2 . . . . . . . . . . . . . . 2 
2 . . 2 . . . . . . . . . . . . . . 2 
2 . . 2 2 2 . . 2 2 2 2 2 2 2 2 . . 2 
2 . . 2 . . . . . . . . . . . 2 . . 2 
2 . . 2 . . . . . . . . . . . 2 . . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 . . 2 
2 . . 2 2 2 2 2 2 2 . . 2 . . 2 . . 2 
2 . . 2 . . . . . . . . . . . 2 . . 2 
2 . . 2 . . . . . . . . . . . 2 . . 2 
2 2 2 2 2 2 2 . . 2 2 2 2 . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 . . 2 
2 . . . . . . . . . . . 2 . . 2 . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . . 2 
`,
            [myTiles.tile0,sprites.dungeon.stairLarge,sprites.dungeon.stairNorth,sprites.builtin.forestTiles6,sprites.builtin.forestTiles9,sprites.builtin.forestTiles10,sprites.builtin.forestTiles7,sprites.builtin.forestTiles11,sprites.builtin.forestTiles8,sprites.builtin.forestTiles12,sprites.builtin.forestTiles1,sprites.builtin.forestTiles29,sprites.builtin.forestTiles27,sprites.builtin.forestTiles24,sprites.builtin.forestTiles20,sprites.builtin.forestTiles18,sprites.builtin.forestTiles19,sprites.builtin.forestTiles17,sprites.builtin.forestTiles26,sprites.dungeon.hazardHole,sprites.builtin.oceanDepths9,sprites.builtin.oceanDepths10,sprites.builtin.forestTiles14,sprites.builtin.forestTiles2,sprites.builtin.forestTiles5,sprites.castle.tileDarkGrass3,sprites.dungeon.stairSouth,sprites.builtin.forestTiles15,sprites.builtin.forestTiles13],
            TileScale.Sixteen
        ))
playa = sprites.create(sprites.duck.duck3, SpriteKind.Player)
werty = sprites.create(sprites.builtin.clownFish1, SpriteKind.Enemy)
tiles.placeOnTile(werty, tiles.getTileLocation(5, 8))
mySprite = sprites.create(sprites.builtin.coin0, SpriteKind.Enemy)
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
tiles.placeOnTile(phood, tiles.getTileLocation(3, 17))
game.onUpdateInterval(500, function () {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 8))
    mySprite.setVelocity(180, 50)
})
