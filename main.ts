music.play(music.stringPlayable("C5 D A F F A D C5 ", 120), music.PlaybackMode.UntilDone)
basic.forever(function () {
    maqueenPlusV2.controlMotor(maqueenPlusV2.MyEnumMotor.AllMotor, maqueenPlusV2.MyEnumDir.Forward, 255)
    maqueenPlusV2.ledRainbow(1, 360)
    maqueenPlusV2.showColor(maqueenPlusV2.NeoPixelColors.Red)
    basic.showIcon(IconNames.TShirt)
})
