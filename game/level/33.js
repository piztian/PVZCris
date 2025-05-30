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
		],
		ZName: [oZombie, oZombie2, oConeheadZombie, oCXZombie, oBucketheadZombie, oXBZombie],
		PicArr: (function () {
			return ["images/interface/backgroundLG.jpg"];
		})(),
		SunNum: 100,
		LF: [0, 3, 3, 3, 3, 3, 3],
		backgroundImage: "images/interface/backgroundLG.jpg",
		CanSelectCard: 1,
		DKind: 0,
		LevelName: "Level 4-3",
		LvlEName: 33,
		LargeWaveFlag: {
			10: $("imgFlag4"),
			20: $("imgFlag3"),
			30: $("imgFlag2"),
			40: $("imgFlag1"),
		},
		StartGameMusic: "Lg_pk",
	},
	{
		AZ: [
			[oZombie, 4, 1],
			[oZombie2, 2, 1],
			[oConeheadZombie, 1, 12],
			[oCXZombie, 1, 5],
			[oBucketheadZombie, 1, 15],
			[oXBZombie, 1, 2],
		],
		FlagNum: 40,
		FlagToSumNum: {
			a1: [3, 3, 9, 10, 13, 15],
			a2: [1, 2, 3, 3, 4, 5, 6, 15],
		},
		FlagToMonitor: {
			9: [ShowLargeWave, 0],
			19: [ShowLargeWave, 0],
			29: [ShowLargeWave, 0],
			39: [ShowFinalWave, 0],
		},
		FlagToEnd() {
			NewImg("imgSF", "images/Card/Plants/Gun.png", "left:627px;top:325px;clip:rect(auto,auto,60px,auto)", EDAll, {
				onclick() {
					GetNewCard(this, oGun, 34);
				},
			});
			NewImg("PointerUD", "images/interface/PointerDown.gif", "top:290px;left:636px", EDAll);
		},
	}
);
