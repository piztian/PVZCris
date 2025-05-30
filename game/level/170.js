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
			oCactus,
			oPlantern,
			oSplitPea,
			oStarfruit,
			oPumpkinHead,
			oFlowerPot,
			oCoffeeBean,
			oGarlic,
			oSeaShroom,
			oOxygen,
			ostar,
			oTTS,
			oSeaAnemone,
			oGatlingPea,
			oGloomShroom,
			oTwinSunflower,
			oSpikerock,
			oTenManNut,
			oSnowRepeater,
			oCattail,
			oLotusRoot,
			oIceFumeShroom,
			oLaserBean,
		],
		ZName: [
			oZombie,
			oZombie2,
			oZombie3,
			oConeheadZombie,
			oBucketheadZombie,
			oCXZombie,
			oJackinTheBoxZombie,
			oFootballZombie,
			oCConeheadZombie,
			oPoleVaultingZombie,
			oHeiFootballZombie,
			oXBZombie,
			oCZombie,
			oDuckyTubeZombie2,
			oDuckyTubeZombie3,
			oDuckyTubeZombie4,
			oDuckyTubeZombie1,
			oDolphinRiderZombie,
			oCBucketheadZombie,
			oLGBOSS,
		],
		PicArr: (function () {
			return ["images/interface/background4.jpg"];
		})(),
		backgroundImage: "images/interface/background4.jpg",
		CanSelectCard: 1,
		LevelName: "常青之塔 20层",
		LvlEName: 170,
		SunNum: 5e3,
		DKind: 0,
		Coord: 2,
		LF: [0, 1, 1, 2, 2, 1, 1],
		StartGameMusic: "RigorMormist",
		LargeWaveFlag: { 5: $("imgFlag3"), 10: $("imgFlag1") },
		LoadAccess(a) {
			NewImg("dDave", "images/interface/Dave.gif", "left:0;top:81px", EDAll);
			NewEle("DivTeach", "div", 0, 0, EDAll);
			(function (d) {
				var b = arguments.callee;
				var c = $("DivTeach");
				switch (d) {
					case 0:
						PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
						c.onclick = null;
						$("dDave").src = "images/interface/Dave3.gif";
						oSym.addTask(
							200,
							() => {
								$("dDave").src = "images/interface/Dave.gif";
								c.onclick = function () {
									oSym.addTask(10, b, [1]);
								};
							},
							[]
						);
						innerText(c, "天哪,不知不觉已经到20层了。");
						break;
					case 1:
						PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
						c.onclick = null;
						$("dDave").src = "images/interface/Dave3.gif";
						oSym.addTask(
							200,
							() => {
								$("dDave").src = "images/interface/Dave.gif";
								c.onclick = function () {
									oSym.addTask(10, b, [2]);
								};
							},
							[]
						);
						innerText(c, "难度你也是知道的。");
						break;
					case 2:
						PlayAudio("crazydavelong" + Math.floor(1 + Math.random() * 3));
						c.onclick = null;
						$("dDave").src = "images/interface/Dave3.gif";
						oSym.addTask(
							200,
							() => {
								$("dDave").src = "images/interface/Dave.gif";
								c.onclick = function () {
									oSym.addTask(10, b, [3]);
								};
							},
							[]
						);
						innerText(c, "只是,这次你可能没有那么顺利");
						break;
					case 3:
						PlayAudio("crazydaveshort2");
						c.onclick = null;
						$("dDave").src = "images/interface/Dave3.gif";
						oSym.addTask(
							100,
							() => {
								$("dDave").src = "images/interface/Dave.gif";
								c.onclick = function () {
									oSym.addTask(10, b, [4]);
								};
							},
							[]
						);
						innerText(c, "祝你好运，不要被僵尸吃了!");
						break;
					case 4:
						$("dDave").src = "images/interface/Dave2.gif";
						ClearChild($("DivTeach"));
						oSym.addTask(
							50,
							() => {
								ClearChild($("dDave"));
								a(0);
							},
							[]
						);
				}
			})(0);
		},
	},
	{
		AZ: [
			[oZombie, 1, 1],
			[oZombie2, 1, 1],
			[oZombie3, 1, 1],
			[oConeheadZombie, 1, 1],
			[oBucketheadZombie, 1, 1],
			[oCXZombie, 1, 1],
			[oJackinTheBoxZombie, 1, 1],
			[oFootballZombie, 1, 1],
			[oDolphinRiderZombie, 1, 1],
			[oCConeheadZombie, 1, 1],
			[oPoleVaultingZombie, 1, 1],
			[oHeiFootballZombie, 1, 1],
			[oDuckyTubeZombie2, 1, 1],
			[oDuckyTubeZombie3, 1, 1],
			[oDuckyTubeZombie1, 1, 1],
			[oDuckyTubeZombie4, 1, 1],
			[oCZombie, 1, 1],
			[oXBZombie, 1, 1],
			[oCBucketheadZombie, 1, 1],
			[oLGBOSS, 1, 10, [10]],
		],
		FlagNum: 10,
		FlagToSumNum: { a1: [49, 52, 67], a2: [49, 52, 87] },
		FlagToMonitor: { 4: [ShowLargeWave, 0], 9: [ShowFinalWave, 0] },
		FlagToEnd() {
			NewImg("imgSF", "images/interface/trophy.png", "left:260px;top:233px", EDAll, {
				onclick() {
					SelectModal(171);
				},
			});
			NewImg("PointerUD", "images/interface/PointerDown.gif", "top:185px;left:676px", EDAll);
		},
	}
);
