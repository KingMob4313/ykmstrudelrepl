//a wavefolder for use with a slider, sine or other -1 0 1 variable
register('wavefold', (x, pat) => pat
  .n(x * 2 + 3)
  .fm(x * 4 + 3)
)

//a spinning speaker emulator for use with a slider, sine or other -1 0 1 variable
//.whirlitzer(slider(0.5)) will get you want you want
register('whirlitzer', (x, pat) => pat
  .phaser((x * 3) + 4)
