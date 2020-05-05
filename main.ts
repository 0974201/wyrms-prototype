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
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . c c . . . . . . 
. . . . . c a a a a . . . . . . 
. . . . . a a f f b a . . . . . 
. . . . c a b f f c b . . . . . 
. . . . c b b b a f c b . . . . 
. . . . c b a c a b b b . . . . 
. . . . . b b f f a a c . . . . 
. . . . . . a a b b c . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, playa, -71, 50)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    playa.say(":D", 200)
    otherSprite.destroy()
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    game.over(true, effects.confetti)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprite.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    playa.say(":D", 200)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    playa.say(":(", 200)
})
info.onLifeZero(function () {
    game.over(false, effects.hearts)
})
let projectile: Sprite = null
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
playa = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . 3 3 3 3 . . . 
. . . . . . . . 3 3 3 3 3 3 . . 
. . . . . . . 3 3 . . . 3 3 3 . 
. . . . . . 3 3 . . . . . . . . 
. . . . . . 3 3 . . . . . . . . 
. . . . . . 3 3 . . . . . . . . 
. . . . . . . c c c c . . . . . 
. . . . . . . . b 2 b b . . . . 
. . . . . . . . . . . b b . . . 
. . . . . . . . . . . c c . . . 
. 3 . . . . . . . . . 3 3 . . . 
. 3 3 . . . . . . . . 3 3 . . . 
. . 3 3 3 3 3 3 3 3 3 3 . . . . 
. . . 3 3 3 3 3 3 3 . . . . . . 
`, SpriteKind.Player)
let werty = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . e e e e e e . . . . . . 
. . . e e e e e e e e . . . . . 
. . e c e e e e e e e e . . . . 
. e c e e e e e d e e e . . . . 
. e c e e e e e f e e e 3 3 . . 
. e c e e e e e e e e e e c . . 
e c e e e e e e e e e e e e . . 
e c e e e e e e e e e e e . . . 
e c e e e e e d 1 e e e . . . . 
e c e e e e e e d 1 e e . . . . 
e c e e e e e e e d e e . . . . 
. e c e e e e e c e e e e . . . 
. e c c e e e c e e e e e e e . 
. . e c c c e e e e e e e e e . 
`, SpriteKind.Enemy)
tiles.placeOnTile(werty, tiles.getTileLocation(5, 8))
let thfhtfh = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . e e e e e e . . . . . . 
. . . e e e e e e e e . . . . . 
. . e c e e e e e e e e . . . . 
. e c e e e e e d e e e . . . . 
. e c e e e e e f e e e 3 3 . . 
. e c e e e e e e e e e e c . . 
e c e e e e e e e e e e e e . . 
e c e e e e e e e e e e e . . . 
e c e e e e e d 1 e e e . . . . 
e c e e e e e e d 1 e e . . . . 
e c e e e e e e e d e e . . . . 
. e c e e e e e c e e e e . . . 
. e c c e e e c e e e e e e e . 
. . e c c c e e e e e e e e e . 
`, SpriteKind.Enemy)
tiles.placeOnTile(thfhtfh, tiles.getTileLocation(4, 14))
controller.moveSprite(playa)
tiles.placeOnRandomTile(playa, sprites.dungeon.stairNorth)
scene.cameraFollowSprite(playa)
info.setLife(3)
let phood = sprites.create(img`
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
let mySprite = sprites.create(sprites.builtin.coin0, SpriteKind.Enemy)
let fghfgh = sprites.create(sprites.builtin.coin0, SpriteKind.Enemy)
game.onUpdateInterval(500, function () {
    tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 8))
    mySprite.setVelocity(180, 50)
    tiles.placeOnTile(fghfgh, tiles.getTileLocation(4, 14))
    fghfgh.setVelocity(200, 50)
})
