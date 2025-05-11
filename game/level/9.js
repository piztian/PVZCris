oS.Init(
    {
        // Plantas disponibles (todas las plantas conocidas)
        PName: [
            oPeashooter, oSunFlower, oCherryBomb, oWallNut, oPotatoMine, 
            oSnowPea, oChomper, oRepeater, oThreepeater, oTorchwood, 
            oTallNut, oJalapeno, oSpikeweed, oSplitPea, oStarfruit, 
            oPumpkin, oMagnetShroom, oCactus, oGatlingPea, oTwinSunflower, 
            oGloomShroom, oFumeShroom, oDoomShroom, oCoffeeBean, oSpikerock, 
            oGoldMagnet, oWinterMelon, oCobCannon, oImitater, oLavaSpitter, 
            oVolcanoPlant, oFirePeashooter
        ],

        // Zombis disponibles
        ZName: [oZombie, oZombie2, oZombie3, oConeheadZombie, oPoleVaultingZombie, oBucketheadZombie],

        // Imágenes del nivel
        PicArr: [
            "images/interface/background1.jpg",
            "images/interface/ZombieNoteSmall.png",
            "images/interface/ZombieNote1.png"
        ],

        // Fondo del nivel
        backgroundImage: "images/interface/background1.jpg",
        
        // Permitir selección de plantas
        CanSelectCard: 1,
        
        // Nombre del nivel
        LevelName: "Level 1-9",
        LvlEName: 9,

        // Banderas de oleadas grandes
        LargeWaveFlag: {
            10: $("imgFlag3"),
            20: $("imgFlag2"),
            30: $("imgFlag1"),
        },
    },
    {
        // Configuración de los zombis por bandera
        AZ: [
            [oZombie, 2, 1],
            [oZombie2, 2, 1],
            [oZombie3, 2, 1],
            [oConeheadZombie, 2, 1],
            [oPoleVaultingZombie, 1, 1],
            [oBucketheadZombie, 1, 1],
        ],

        // Número total de banderas
        FlagNum: 30,

        // Configuración de aparición de zombis
        FlagToSumNum: {
            a1: [3, 5, 9, 10, 13, 15, 19, 20, 23, 25, 29],
            a2: [1, 2, 3, 10, 4, 5, 6, 15, 7, 8, 9, 25],
        },

        // Eventos en cada bandera importante
        FlagToMonitor: {
            9: [ShowLargeWave, 0],
            19: [ShowLargeWave, 0],
            29: [ShowFinalWave, 0],
        },

        // Final del nivel
        FlagToEnd() {
            NewImg("imgSF", "images/interface/ZombieNoteSmall.png", "left:667px;top:220px", EDAll, {
                onclick() {
                    PlayAudio("winmusic");
                    SetHidden($("PointerUD"));
                    SetStyle(this, {
                        width: "613px",
                        height: "399px",
                        left: "193px",
                        top: "100px",
                    }).src = "images/interface/ZombieNote1.png";
                    this.onclick = function () {
                        SelectModal(10); // Avanza al siguiente nivel
                    };
                },
            });
            NewImg("PointerUD", "images/interface/PointerDown.gif", "top:185px;left:676px", EDAll);
        },
    }
);
