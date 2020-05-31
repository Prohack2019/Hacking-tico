$("#panorama").ipanorama({
	sceneId: "main",
	scenes: {
		main: {
			type: "cube",
			image: {
				left: "img/panoramic.jpg",
				right: "img/lugares2.jpg",
				top: "img/lugares3.jpg",
				/*bottom: "assets/images/bottom.png",
				front: "assets/images/front.png",
				back: "assets/images/back.png",*/
			},
			hotSpots: [
				{
					pitch: 0,
					yaw: 0,
					sceneId: "second",
				},
			],
		},
		second: {
			type: "sphere",
			image: "img/panoramic.jpg",
			hotSpots: [
				{
					pitch: 0,
					yaw: 0,
					sceneId: "main",
				}
			],
		}
	},
});