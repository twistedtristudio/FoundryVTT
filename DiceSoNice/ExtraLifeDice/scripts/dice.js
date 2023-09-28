Hooks.once('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({ id: "ExtraLife", name: "ExtraLife"}, true); 

    dice3d.addDicePreset({
      type: "d4",
      modelFile: "modules/extralife_dice/models/ExtraLife-D4.glb",
      system: "ExtraLife"
    },"d4");

    dice3d.addDicePreset({
      type: "d6",
      modelFile: "modules/extralife_dice/models/ExtraLife-D6.glb",
      system: "ExtraLife"
    },"d6");

    dice3d.addDicePreset({
      type: "d8",
      modelFile: "modules/extralife_dice/models/ExtraLife-D8.glb",
      system: "ExtraLife"
    },"d8");

    dice3d.addDicePreset({
      type: "d10",
      modelFile: "modules/extralife_dice/models/ExtraLife-D10.glb",
      system: "ExtraLife"
    },"d10");

    dice3d.addDicePreset({
      type: "d12",
      modelFile: "modules/extralife_dice/models/ExtraLife-D12.glb",
      system: "ExtraLife"
    },"d12");

    dice3d.addDicePreset({
      type: "d20",
      modelFile: "modules/extralife_dice/models/ExtraLife-D20.glb",
      system: "ExtraLife"
    },"d20");

    dice3d.addDicePreset({
      type: "d100",
      modelFile: "modules/extralife_dice/models/ExtraLife-D100.glb",
      system: "ExtraLife"
    },"d100");

  });