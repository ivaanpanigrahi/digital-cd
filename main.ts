input.onButtonPressed(Button.A, function () {
    music.play(music.stringPlayable("C5 B D G D C5 G F ", 120), music.PlaybackMode.UntilDone)
})
input.onGesture(Gesture.TiltLeft, function () {
    music.play(music.stringPlayable("A C5 D G B - F E ", 120), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    music.play(music.stringPlayable("- A E B G - C C5 ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        . # # # #
        . # . . #
        . # . . #
        . # . . #
        # # . # #
        `)
    music.play(music.stringPlayable("D - G C E B - A ", 120), music.PlaybackMode.UntilDone)
})
