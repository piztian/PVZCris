oS.Init(
	{
		PName: [
			oPeashooter,
			oSunFlower,
			oCherryBomb,
			oWallNut,
			oPotatoMine,
			oSnowPea,
			oChomper,
			oRepeater,
			oPuffShroom,
			oSunShroom,
			oFumeShroom,
			oGraveBuster,
			oHypnoShroom,
			oScaredyShroom,
			oIceShroom,
			oDoomShroom,
			oLilyPad,
			oSquash,
			oThreepeater,
			oTangleKlep,
			oJalapeno,
			oSpikeweed,
			oTorchwood,
			oTallNut,
			oOxygen,
			ostar,
			oTTS,
			oGun,
			oTenManNut,
			oSeaAnemone,
			oCactus,
			oGatlingPea,
		],
		ZName: [oZombie, oConeheadZombie, oHeiFootballZombie, oXBZombie, oJY],
		PicArr: (function () {
			return ["images/interface/backgroundLG.jpg"];
		})(),
		SunNum: 200,
		LF: [0, 3, 3, 3, 3, 3, 3],
		backgroundImage: "images/interface/backgroundLG.jpg",
		CanSelectCard: 1,
		DKind: 0,
		LevelName: "Level 4-8",
		LvlEName: 38,
		LargeWaveFlag: {
			10: $("imgFlag4"),
			20: $("imgFlag3"),
			30: $("imgFlag2"),
			45: $("imgFlag1"),
		},
		StartGameMusic: "Lg_pk",
	},
	{
		AZ: [
			[oZombie, 6, 1],
			[oConeheadZombie, 2, 1],
			[oXBZombie, 1, 20],
			[oHeiFootballZombie, 1, 10, [10, 30, 45]],
			[oJY, 1, 5, [5, 10, 15, 20, 25, 30, 45]],
		],
		FlagNum: 45,
		FlagToSumNum: {
			a1: [3, 4, 5, 9, 9, 13, 15, 19, 20, 23, 25, 30, 50],
			a2: [1, 2, 3, 4, 4, 5, 6, 7, 7, 8, 9, 10, 20, 30, 45],
		},
		FlagToMonitor: {
			9: [ShowLargeWave, 0],
			19: [ShowLargeWave, 0],
			29: [ShowLargeWave, 0],
			44: [ShowFinalWave, 0],
		},
		FlagToEnd() {
			NewImg("imgSF", "images/Card/Plants/TwinSunflower.png", "left:627px;top:325px;clip:rect(auto,auto,60px,auto)", EDAll, {
				onclick() {
					GetNewCard(this, oTwinSunflower, 0);
				},
			});
			NewImg("PointerUD", "images/interface/PointerDown.gif", "top:290px;left:636px", EDAll);
		},
	}
);
