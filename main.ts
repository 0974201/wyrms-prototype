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
    game.over(true, effects.confetti)
})
info.onLifeZero(function () {
    game.over(false, effects.hearts)
})
let phood: Sprite = null
tiles.setTilemap(tiles.createTilemap(
            hex`10001000010a0a0a0a0a0a0a0a0a0a0a0a0a0a0e050303030303030303030303030303060909090509090909090909090909050704050905090505050505050505050507040509050905090909090909050905070405090509050905050505090509050704050905090509090909090905090507090909050905050505050505050905070405050509050909090909090909050704050905090509050505050505050507040509050905090509080808080808080405090509050905050505050505050704050909090509090909090909090907040505050505050505050505050509070909090909090909090909090905090704050505050505050505050505050902`,
            img`
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . . 2 . . . . . . . . . . 2 
2 2 2 . 2 2 2 2 2 2 2 2 2 2 . 2 
2 . . . 2 . . . . . . . . . . 2 
2 . . . 2 . 2 2 . . 2 2 . 2 . 2 
2 . 2 . 2 . 2 . . . . 2 . 2 . 2 
2 . 2 . 2 . 2 2 2 2 2 2 . 2 . 2 
2 . 2 . 2 . . . . . . . . 2 . 2 
2 . . . 2 . 2 2 2 2 2 2 2 2 . 2 
2 . 2 . 2 . 2 . . . . . . . . 2 
2 . 2 . 2 . 2 . 2 2 2 2 2 2 2 2 
2 . 2 . 2 . 2 . . . . . . . . . 
2 . 2 2 2 . 2 2 2 2 2 2 2 2 2 . 
2 . . . . . . . . . . . . . 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 . 
2 . . . . . . . . . . . . . 2 . 
`,
            [myTiles.tile0,sprites.dungeon.stairLarge,sprites.dungeon.stairNorth,sprites.builtin.forestTiles6,sprites.builtin.forestTiles9,sprites.builtin.forestTiles10,sprites.builtin.forestTiles7,sprites.builtin.forestTiles11,sprites.builtin.forestTiles8,sprites.builtin.forestTiles12,sprites.builtin.forestTiles1,sprites.builtin.forestTiles29,sprites.builtin.forestTiles27,sprites.builtin.forestTiles24,sprites.builtin.forestTiles20,sprites.builtin.forestTiles18,sprites.builtin.forestTiles19,sprites.builtin.forestTiles17,sprites.builtin.forestTiles26],
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
