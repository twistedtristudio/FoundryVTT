Hooks.once('diceSoNiceReady', (dice3d) => {
    dice3d.addSystem({ id: "ExtraLife", name: "ExtraLife"}, true); 
    dice3d.addDicePreset({
      type: "d20",
      labels: [
        // "modules/ExtraLife_dice/images/nat1.png"
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "modules/extralife_dice/images/EL_wings-.png"
      ],
      bumpMaps: [
       // "modules/ExtraLife_dice/images/nat1_BUMP.png"
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        "modules/extralife_dice/images/EL_wings-.png"
      ],
      system: "ExtraLife"
    },"d20");

    dice3d.addDicePreset({
      type: "d2",
      labels: [
        "†",
        "modules/extralife_dice/images/EL_wings-.png"
      ],
      bumpMaps: [
        ,
        "modules/extralife_dice/images/EL_wings-.png"
      ],
      system: "ExtraLife"
    },"d2");
   
    dice3d.addDicePreset({
      type: "d4",
      labels: [
        "†",
        "2",
        "3",
        "modules/extralife_dice/images/EL_wings-.png"
      ],
      system: "ExtraLife"
    },"d4");
   
    dice3d.addDicePreset({
      type: "d6",
      labels: [
        "†",
        "2",
        "3",
        "4",
        "5",
        "modules/extralife_dice/images/EL_wings-.png"
      ],
      system: "ExtraLife"
    },"d6");
      
    dice3d.addDicePreset({
      type: "d8",
      labels: [
        "†",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "modules/extralife_dice/images/EL_wings-.png"
      ],
      system: "ExtraLife"
    },"d8");
      
    dice3d.addDicePreset({
      type: "d10",
      labels: [
        "†",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "modules/extralife_dice/images/EL_wings-.png"
      ],
      system: "ExtraLife" 
    },"d10");
   
    dice3d.addDicePreset({
      type: "d12",
      labels: [
        "†",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "modules/extralife_dice/images/EL_wings-.png"
      ],
      system: "ExtraLife"
    },"d12");
      
    dice3d.addDicePreset({
      type: "d100",
      labels: [
        "10",
        "20",
        "30",
        "40",
        "50",
        "60",
        "70",
        "80",
        "90",
        "modules/extralife_dice/images/EL_wings-.png",
      ],
      system: "ExtraLife"
    },"d100");

  //  dice3d.addTexture("ExtraLife", {
  //      name: "ExtraLife",
  //      composite: "source-over",
  //      source: "modules/arkangel/images/arkangel-texture.png",
  //      bump:"modules/arkangel/images/arkangel-texture_bump.png" //puoi anche lasciarla vuoto
  //  });
  });