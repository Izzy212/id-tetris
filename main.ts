enum GameMode {
    Animating,
    Attract,
    Main,
    NotReady,
    Processing,
    Settings
} 

interface InfoSprite {
    img: Image
    sprite: Sprite
} 

interface Pixel {
    x: number
    y: number
} 

interface PolyominoSprite {
    img: Image
    index: number
    sprite: Sprite
} 


const VERSION: string = '1.2'

const AUTODROP_INTERVAL: number = 25
const COLOR_BG: number = Color.Black
const DROP_INTERVAL_INITIAL: number = 1000
const IMAGE_MAIN: Image = img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555555555555555555555555555555555555555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555555555555555555555555555555555555555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555555555555555555555555555555555555555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555555555555555555555555555555555555555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555555555555555555555555555555555555555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555fffffffffffffffffffffffffffffff55555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555fffffffffffffffffffffffffffffff55555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555fffffffffffffffffffffffffffffff55555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555fffffffffffffffffffffffffffffff55555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555fffffffffffffffffffffffffffffff55555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555fffffffffffffffffffffffffffffff55555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555fffffffffffffffffffffffffffffff55555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555fffffffffffffffffffffffffffffff55555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555fffffffffffffffffffffffffffffff55555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555fffffffffffffffffffffffffffffff55555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555fffffffffffffffffffffffffffffff55555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555fffffffffffffffffffffffffffffff55555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555fffffffffffffffffffffffffffffff55555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555fffffffffffffffffffffffffffffff55555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555fffffffffffffffffffffffffffffff55555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555fffffffffffffffffffffffffffffff55555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555fffffffffffffffffffffffffffffff55555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555fffffffffffffffffffffffffffffff55555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555fffffffffffffffffffffffffffffff55555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555fffffffffffffffffffffffffffffff55555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555fffffffffffffffffffffffffffffff55555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555fffffffffffffffffffffffffffffff55555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555fffffffffffffffffffffffffffffff55555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555fffffffffffffffffffffffffffffff55555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555fffffffffffffffffffffffffffffff55555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555fffffffffffffffffffffffffffffff55555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555fffffffffffffffffffffffffffffff55555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555fffffffffffffffffffffffffffffff55555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555fffffffffffffffffffffffffffffff55555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555fffffffffffffffffffffffffffffff55555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffff11111fff55555fffffffffffffffffffffffffffffff55555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111fff55555555555555555555555555555555555555555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111fff55555555555555555555555555555555555555555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111fff55555555555555555555555555555555555555555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111fff55555555555555555555555555555555555555555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffff11111111111111111111111111111111111111111111111111111111111111fff55555555555555555555555555555555555555555ffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
`
const LEVEL_TIMER_FACTOR: number = 0.85
const LINES_PER_LEVEL: number = 5
const GRID_SIZE_NEXT_POLY: number = 6
const SCORE_PER_LINE: number = 10
const SCORE_PER_POLY: number = 1
const STARTING_LEVELS: number[] = [1, 5, 10]
const TEXT_HEADLINES: string[][] = [
    ['', ''],
    ['', ''],
    ['', ''],
    ['', VERSION]
]
const TEXT_ACTIONS: string[][] = [[
    'Left/Right/Down = Move',
    'Up = Rotate',
    'A = Auto Drop'
]]
const TEXT_DONE: string = 'Start!'
const TEXT_LINES: string = 'Lines'
const TEXT_NEXT_POLY: string[] = ['Next', 'Shape']
const TEXT_OPTIONS_HEADLINES: string[] = ['Options', '']
const TEXT_OPTIONS_POLYS_TAB: string = 'Shapes'
const TEXT_OPTIONS_POLYS: string[][] = [
    ['Tetris (Standard)', 'Tetris Hard (Difficult)', 'Both']
]
const TEXT_OPTIONS_SPEED_TAB: string = 'Start Speed'
const TEXT_OPTIONS_SPEED: string[][] = [
    ['Standard', 'Quicker', 'Fastest']
]
const TEXT_TITLES: string[] = ['Tetris']


let autoDrop: boolean = false
let canvas: Image[] = null
let currCanvas: number = 0
let currPoly: ActivePolyomino = null
let dropInterval: number = 0
let fullRows: number[] = []
let gameMode: GameMode = GameMode.NotReady
let gridSprite: Sprite = null
let linesCleared: number = 0
let linesSprite: InfoSprite = null
let nextAnimate: number = 0
let nextLevel: number = 0
let nextPoly: PolyominoSprite = null
let nextPolyLabel: InfoSprite = null
let numFlips: number = 0
let settingsScreen: OptionScreenCollection = null
let splashScreen: SplashScreens = null


startAttractMode()


function startAttractMode(): void {
    buildScreens()
    splashScreen.build()
    gameMode = GameMode.Attract
}  

function startGame(): void {
    gameMode = GameMode.NotReady
    splashScreen.release()
    scene.setBackgroundImage(IMAGE_MAIN)
    initGame()
    startNextPoly()
    updateScreen()
    gameMode = GameMode.Main
}   // startGame()

function startSettings(): void {
    gameMode = GameMode.NotReady
    splashScreen.destroySprites()
    settingsScreen.build()
    gameMode = GameMode.Settings
}  
game.onUpdate(function () {
    switch (gameMode) {
        case GameMode.Animating:
            if (game.runtime() >= nextAnimate) {
                flipScreens()
            }  
            break

        case GameMode.Attract:
            updateSplash()
            break

        case GameMode.Main:
            if (nextPoly && game.runtime() >= currPoly.nextDrop) {
                currPoly.change.row = 1
                updateScreen()
            }   
            break

        case GameMode.Settings:
            if (game.runtime() >= settingsScreen.nextTime) {
                settingsScreen.rotate()
            }   
            break
    }   
})  


controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    switch (gameMode) {
        case GameMode.Attract:
            startSettings()
            break

        case GameMode.Main:
            autoDrop = true
            currPoly.change.row = 1
            updateScreen()
            break

        case GameMode.Settings:
            settingsScreen.select()
            if (settingsScreen.done) {
                startGame()
            }   
            break
    }   
})  

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    switch (gameMode) {
        case GameMode.Attract:
            startSettings()
            break

        case GameMode.Main:
            break
    }   
})  

controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    switch (gameMode) {
        case GameMode.Attract:
            startSettings()
            break

        case GameMode.Main:
            currPoly.change.row = 1
            updateScreen()
            break

        case GameMode.Settings:
            settingsScreen.moveCursorDown()
            break
    }   
})  

controller.down.onEvent(ControllerButtonEvent.Repeated, function () {
    switch (gameMode) {
        case GameMode.Main:
            currPoly.change.row = 1
            updateScreen()
            break
    }       
})

controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    switch (gameMode) {
        case GameMode.Attract:
            startSettings()
            break

        case GameMode.Main:
            currPoly.change.column = -1
            updateScreen()
            break

        case GameMode.Settings:
            settingsScreen.moveCursorLeft()
            break
    }   
})  

controller.left.onEvent(ControllerButtonEvent.Repeated, function () {
    switch (gameMode) {
        case GameMode.Main:
            currPoly.change.column = -1
            updateScreen()
            break
    }       
})

controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    switch (gameMode) {
        case GameMode.Attract:
            startSettings()
            break

        case GameMode.Main:
            currPoly.change.column = 1
            updateScreen()
            break

        case GameMode.Settings:
            settingsScreen.moveCursorRight()
            break
    }   
})  

controller.right.onEvent(ControllerButtonEvent.Repeated, function () {
    switch (gameMode) {
        case GameMode.Main:
            currPoly.change.column = 1
            updateScreen()
            break
    }        
})

controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    switch (gameMode) {
        case GameMode.Attract:
            startSettings()
            break

        case GameMode.Main:
            let poly: Polyomino = gameShapes[currPoly.index]
            currPoly.orientation++
            if (currPoly.orientation >= poly.blocks.length) {
                currPoly.orientation = 0
            }   
            updateScreen()
            break

        case GameMode.Settings:
            settingsScreen.moveCursorUp()
            break
    }   
})  


function animateClearLines(): void {
    let newCanvas: number = 1 - currCanvas
    drawGameState(canvas[newCanvas])
    numFlips = 0
    nextAnimate = game.runtime() + dropInterval / 2
    gameMode = GameMode.Animating
}   


function buildScreens(): void {
    buildSplashScreen()
    buildSettingsScreen()
}   

function buildSettingsScreen(): void {
    let headlines: string[][] = []
    headlines.push(TEXT_OPTIONS_HEADLINES)
    for (let s of TEXT_HEADLINES) {
        headlines.push(s)
    }   
    settingsScreen = new OptionScreenCollection(
        TEXT_TITLES, Color.Yellow,
        headlines, Color.Brown
    )
    settingsScreen.titles.font = image.font8
    settingsScreen.headlines.font = image.font5
    settingsScreen.footer.font = image.font5
    settingsScreen.doneText = TEXT_DONE
    settingsScreen.addScreen(TEXT_OPTIONS_POLYS_TAB, TEXT_OPTIONS_POLYS, false)
    settingsScreen.addScreen(TEXT_OPTIONS_SPEED_TAB, TEXT_OPTIONS_SPEED, false)
    
    settingsScreen.setSelectionForScreen(0, 0, 0)
    settingsScreen.setSelectionForScreen(1, 0, 0)
}   

function buildSplashScreen(): void {
    splashScreen = new SplashScreens(
        TEXT_TITLES, Color.Yellow,
        TEXT_HEADLINES, Color.Brown,
        TEXT_ACTIONS, Color.LightBlue)
    splashScreen.addMovingSprite(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . c c c c 9 c c c c 9 c c c c 9 c c c c 9 . . . . . .
        . . . . . . c 9 9 9 9 c 9 9 9 9 c 9 9 9 9 c 9 9 9 9 . . . . . .
        . . . . . . c 9 9 9 9 c 9 9 9 9 c 9 9 9 9 c 9 9 9 9 . . . . . .
        . . . . . . c 9 9 9 9 c 9 9 9 9 c 9 9 9 9 c 9 9 9 9 . . . . . .
        . . . . . . 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 9 . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    `)
    splashScreen.addMovingSprite(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . c c c c 5 c c c c 5 . . . . . . . . . . .
        . . . . . . . . . . . c 5 5 5 5 c 5 5 5 5 . . . . . . . . . . .
        . . . . . . . . . . . c 5 5 5 5 c 5 5 5 5 . . . . . . . . . . .
        . . . . . . . . . . . c 5 5 5 5 c 5 5 5 5 . . . . . . . . . . .
        . . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . .
        . . . . . . . . . . . c c c c 5 c c c c 5 . . . . . . . . . . .
        . . . . . . . . . . . c 5 5 5 5 c 5 5 5 5 . . . . . . . . . . .
        . . . . . . . . . . . c 5 5 5 5 c 5 5 5 5 . . . . . . . . . . .
        . . . . . . . . . . . c 5 5 5 5 c 5 5 5 5 . . . . . . . . . . .
        . . . . . . . . . . . 5 5 5 5 5 5 5 5 5 5 . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    `)
    splashScreen.addMovingSprite(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . c c c c 4 . . . . . . . . . . . . . . . .
        . . . . . . . . . . . c 4 4 4 4 . . . . . . . . . . . . . . . .
        . . . . . . . . . . . c 4 4 4 4 . . . . . . . . . . . . . . . .
        . . . . . . . . . . . c 4 4 4 4 . . . . . . . . . . . . . . . .
        . . . . . . . . . . . 4 4 4 4 4 . . . . . . . . . . . . . . . .
        . . . . . . . . . . . c c c c 4 . . . . . . . . . . . . . . . .
        . . . . . . . . . . . c 4 4 4 4 . . . . . . . . . . . . . . . .
        . . . . . . . . . . . c 4 4 4 4 . . . . . . . . . . . . . . . .
        . . . . . . . . . . . c 4 4 4 4 . . . . . . . . . . . . . . . .
        . . . . . . . . . . . 4 4 4 4 4 . . . . . . . . . . . . . . . .
        . . . . . . . . . . . c c c c 4 c c c c 4 . . . . . . . . . . .
        . . . . . . . . . . . c 4 4 4 4 c 4 4 4 4 . . . . . . . . . . .
        . . . . . . . . . . . c 4 4 4 4 c 4 4 4 4 . . . . . . . . . . .
        . . . . . . . . . . . c 4 4 4 4 c 4 4 4 4 . . . . . . . . . . .
        . . . . . . . . . . . 4 4 4 4 4 4 4 4 4 4 . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    `)
    splashScreen.addMovingSprite(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . c c c c 6 . . . . . . . . . . .
        . . . . . . . . . . . . . . . . c 6 6 6 6 . . . . . . . . . . .
        . . . . . . . . . . . . . . . . c 6 6 6 6 . . . . . . . . . . .
        . . . . . . . . . . . . . . . . c 6 6 6 6 . . . . . . . . . . .
        . . . . . . . . . . . . . . . . 6 6 6 6 6 . . . . . . . . . . .
        . . . . . . . . . . . . . . . . c c c c 6 . . . . . . . . . . .
        . . . . . . . . . . . . . . . . c 6 6 6 6 . . . . . . . . . . .
        . . . . . . . . . . . . . . . . c 6 6 6 6 . . . . . . . . . . .
        . . . . . . . . . . . . . . . . c 6 6 6 6 . . . . . . . . . . .
        . . . . . . . . . . . . . . . . 6 6 6 6 6 . . . . . . . . . . .
        . . . . . . . . . . . c c c c 6 c c c c 6 . . . . . . . . . . .
        . . . . . . . . . . . c 6 6 6 6 c 6 6 6 6 . . . . . . . . . . .
        . . . . . . . . . . . c 6 6 6 6 c 6 6 6 6 . . . . . . . . . . .
        . . . . . . . . . . . c 6 6 6 6 c 6 6 6 6 . . . . . . . . . . .
        . . . . . . . . . . . 6 6 6 6 6 6 6 6 6 6 . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    `)
    splashScreen.addMovingSprite(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . c c c c a c c c c a c c c c a . . . . . . . . . . .
        . . . . . . c a a a a c a a a a c a a a a . . . . . . . . . . .
        . . . . . . c a a a a c a a a a c a a a a . . . . . . . . . . .
        . . . . . . c a a a a c a a a a c a a a a . . . . . . . . . . .
        . . . . . . a a a a a a a a a a a a a a a . . . . . . . . . . .
        . . . . . . . . . . . c c c c a . . . . . . . . . . . . . . . .
        . . . . . . . . . . . c a a a a . . . . . . . . . . . . . . . .
        . . . . . . . . . . . c a a a a . . . . . . . . . . . . . . . .
        . . . . . . . . . . . c a a a a . . . . . . . . . . . . . . . .
        . . . . . . . . . . . a a a a a . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    `)
    splashScreen.addMovingSprite(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . c c c c 7 c c c c 7 . . . . . . . . . . .
        . . . . . . . . . . . c 7 7 7 7 c 7 7 7 7 . . . . . . . . . . .
        . . . . . . . . . . . c 7 7 7 7 c 7 7 7 7 . . . . . . . . . . .
        . . . . . . . . . . . c 7 7 7 7 c 7 7 7 7 . . . . . . . . . . .
        . . . . . . . . . . . 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . .
        . . . . . . c c c c 7 c c c c 7 . . . . . . . . . . . . . . . .
        . . . . . . c 7 7 7 7 c 7 7 7 7 . . . . . . . . . . . . . . . .
        . . . . . . c 7 7 7 7 c 7 7 7 7 . . . . . . . . . . . . . . . .
        . . . . . . c 7 7 7 7 c 7 7 7 7 . . . . . . . . . . . . . . . .
        . . . . . . 7 7 7 7 7 7 7 7 7 7 . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    `)
    splashScreen.addMovingSprite(img`
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . c c c c 2 c c c c 2 . . . . . . . . . . . . . . . .
        . . . . . . c 2 2 2 2 c 2 2 2 2 . . . . . . . . . . . . . . . .
        . . . . . . c 2 2 2 2 c 2 2 2 2 . . . . . . . . . . . . . . . .
        . . . . . . c 2 2 2 2 c 2 2 2 2 . . . . . . . . . . . . . . . .
        . . . . . . 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . . . . . . .
        . . . . . . . . . . . c c c c 2 c c c c 2 . . . . . . . . . . .
        . . . . . . . . . . . c 2 2 2 2 c 2 2 2 2 . . . . . . . . . . .
        . . . . . . . . . . . c 2 2 2 2 c 2 2 2 2 . . . . . . . . . . .
        . . . . . . . . . . . c 2 2 2 2 c 2 2 2 2 . . . . . . . . . . .
        . . . . . . . . . . . 2 2 2 2 2 2 2 2 2 2 . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    `)
    splashScreen.movingSpriteOptions.mode = SpriteMode.BlankSpace
    splashScreen.movingSpriteOptions.dir = SpriteDirection.Both
}   


function clearLines(): void {
    fullRows = []
    for (let rowNum: number = ROWS - 1; rowNum >= 0; rowNum--) {
        let row: number[] = gameState[rowNum]
        let count: number = 0
        for (let cell of row) {
            if (cell > -1) {
                count++
            }   
        }   
        if (count >= COLUMNS) {
            fullRows.push(rowNum)
        }   
    }   

    if (fullRows.length > 0) {
        music.baDing.play()
       
        for (let row of fullRows) {
            for (let col: number = 0; col < COLUMNS; col++) {
                setBlock(row, col, -1)
            }   
        }   
        animateClearLines()
    }   
}   


function flipScreens(): void {
    nextAnimate = game.runtime() + dropInterval / 2
    let newCanvas: number = 1 - currCanvas
    gridSprite.setImage(canvas[newCanvas])
    currCanvas = newCanvas
    numFlips++
    if (numFlips === 5) {
        shiftLines()
        updateNextPolySprite()
        gameMode = GameMode.Main
    }   
}   


function initGame(): void {
    initShapes()
    initVars()
    initGameState()
    initGameSprites()
}   


function initGameSprites(): void {
    canvas = []
    canvas.push(createCanvas(ROWS, COLUMNS))
    canvas.push(createCanvas(ROWS, COLUMNS))
    currCanvas = 0
    gridSprite = sprites.create(canvas[currCanvas], 0)
    gridSprite.x = screen.width / 2
    gridSprite.y = screen.height / 2
    gridSprite.setFlag(SpriteFlag.Ghost, true)
    let img: Image = createCanvas(GRID_SIZE_NEXT_POLY, GRID_SIZE_NEXT_POLY)
    nextPoly = {
        img: img,
        index: 0,
        sprite: null
    }
    nextPoly.sprite = sprites.create(nextPoly.img, 0)
    nextPoly.sprite.x = screen.width - nextPoly.img.width / 2 - 10
    nextPoly.sprite.y = screen.height - nextPoly.img.height / 2 - 10
    nextPoly.sprite.setFlag(SpriteFlag.Ghost, true)
    img = image.create(6 * TEXT_TITLES[0].length, 35)
    linesSprite = {
        img: img,
        sprite: null
    }
    linesSprite.sprite = sprites.create(linesSprite.img, 0)
    linesSprite.sprite.x = img.width / 2 + 10
    linesSprite.sprite.y = screen.height - img.height / 2 - 10
    linesSprite.sprite.setFlag(SpriteFlag.Ghost, true)
    updateLinesSprite()
    img = image.create(30, 14)
    img.print(TEXT_NEXT_POLY[0], 0, 0, Color.Yellow, image.font5)
    img.print(TEXT_NEXT_POLY[1], 0, 7, Color.Yellow, image.font5)
    nextPolyLabel = {
        img: img,
        sprite: null
    }
    nextPolyLabel.sprite = sprites.create(nextPolyLabel.img, 0)
    nextPolyLabel.sprite.x = nextPoly.sprite.x
    nextPolyLabel.sprite.y = nextPoly.sprite.y - 32
    nextPolyLabel.sprite.setFlag(SpriteFlag.Ghost, true)
}   


function initShapes(): void {
    switch (settingsScreen.getSelectionForScreen(0, 0)) {
        case 0:
            gameShapes = TETROMINOES
            break

        case 1:
            gameShapes = PENTOMINOES
            break

        case 2:
            gameShapes = TETROMINOES.concat(PENTOMINOES)
            break
    }   
}  


function initVars(): void {
    fullRows = []
    linesCleared = 0
    nextLevel = LINES_PER_LEVEL
    autoDrop = false
    info.setScore(0)

    let startLevel: number = STARTING_LEVELS[settingsScreen.getSelectionForScreen(1, 0)]
    dropInterval = Math.round(DROP_INTERVAL_INITIAL * LEVEL_TIMER_FACTOR ** (startLevel - 1))
    info.setLifeImage(img`
        2 . 2 . 2 . 2 .
        2 . 2 . 2 . 2 .
        2 . 2 . 2 . 2 .
        2 . 2 . 2 . 2 .
        2 . 2 . 2 . 2 .
        2 . 2 . 2 . 2 .
        2 . . 2 . . 2 .
        2 2 . 2 . . 2 2
    `)
    info.setLife(startLevel)
}   


function levelUp(): void {
    nextLevel += LINES_PER_LEVEL
    dropInterval = Math.floor(dropInterval * LEVEL_TIMER_FACTOR)
    info.changeLifeBy(1)
    music.powerUp.play()
}   


function shiftLines(): void {
    linesCleared += fullRows.length
    info.changeScoreBy(SCORE_PER_LINE * 2 ** (fullRows.length - 1))
    updateLinesSprite()
    let shiftAmount: number = 1
    for (let index: number = 0; index < fullRows.length; index++) {
        let startRow: number = fullRows[index] - 1
        let endRow: number =
            index === fullRows.length - 1
                ? 0
                : fullRows[index + 1] + 1
        for (let row: number = startRow; row >= endRow; row--) {
            copyLine(row, row + shiftAmount)
        }   
        shiftAmount++
    }   
    if (linesCleared >= nextLevel) {
        levelUp()
    }   
}   


function startNextPoly(): void {
    autoDrop = false
    if (currPoly) {
        setPoly(currPoly)
        clearLines()
    } else {

        nextPoly.index = Math.randomRange(0, gameShapes.length - 1)
    }  
    let newPoly: Polyomino = gameShapes[nextPoly.index]
    currPoly = {
        change: {
            column: 0,
            row: 0
        },
        index: nextPoly.index,
        location: {
            column: Math.floor((COLUMNS - newPoly.blocks[0][0].length) / 2),
            row: 0 - newPoly.blocks[0].length
        },
        nextDrop: 0,
        orientation: 0
    }
    nextPoly.index = Math.randomRange(0, gameShapes.length - 1)
    
    if (gameMode !== GameMode.Animating) {
        updateNextPolySprite()
    }  
}   


function updateGridSprite(): void {
    let newCanvas: number = 1 - currCanvas
    drawGameState(canvas[newCanvas])
    gridSprite.setImage(canvas[newCanvas])
    currCanvas = newCanvas
}  


function updateLinesSprite(): void {
    linesSprite.img.fill(COLOR_BG)
    let font: image.Font = image.font8
    linesSprite.img.printCenter(TEXT_TITLES[0], 0, Color.Yellow, font)
    font = image.font5
    linesSprite.img.printCenter(TEXT_LINES, 20, Color.Yellow, font)
    linesSprite.img.printCenter('' + linesCleared, 27, Color.Yellow, font)
}   


function updateNextPolySprite(): void {
    nextPoly.img.fill(COLOR_BG)
  let poly: Polyomino = gameShapes[nextPoly.index]
    drawPoly(nextPoly.img, poly,
        Math.floor((GRID_SIZE_NEXT_POLY - poly.blocks[0].length) / 2),
        Math.floor((GRID_SIZE_NEXT_POLY - poly.blocks[0][0].length) / 2))
}   


function updateScreen(): void {
    gameMode = GameMode.Processing

    if (currPoly.change.row > 0) {
        if (autoDrop) {
            currPoly.nextDrop = game.runtime() + AUTODROP_INTERVAL
        } else {
            currPoly.nextDrop = game.runtime() + dropInterval
        }  
    }   
    if (currPoly.change.row !== 0 || currPoly.change.column !== 0) {
        currPoly.location.column += currPoly.change.column
        currPoly.location.row += currPoly.change.row
    }   
    if (setPoly(currPoly, false, true)) {
       
        
       
        setPoly(currPoly)
        updateGridSprite()
        setPoly(currPoly, true)
    } else {

        if (currPoly.change.row !== 0 || currPoly.change.column !== 0) {
            currPoly.location.column -= currPoly.change.column
            currPoly.location.row -= currPoly.change.row
        } else {

            let poly: Polyomino = gameShapes[currPoly.index]
            currPoly.orientation--
            if (currPoly.orientation < 0) {
                currPoly.orientation = poly.blocks.length - 1
            }   
        }  
        if (currPoly.change.row > 0 && currPoly.change.column === 0) {

            if (currPoly.location.row < 0) {
                game.over(false, effects.dissolve)
            } else {

                info.changeScoreBy(SCORE_PER_POLY)
                startNextPoly()
            }  
        }   
    }   
    currPoly.change = {
        column: 0,
        row: 0
    }


    if (gameMode === GameMode.Processing) {
        gameMode = GameMode.Main
    }  
}   


function updateSplash(): void {
    if (game.runtime() >= splashScreen.nextTime) {
        splashScreen.rotate()
    }   
    if (sprites.allOfKind(SpriteType.Moving).length === 0) {
        splashScreen.showScrollingSprite()
    }   
}   