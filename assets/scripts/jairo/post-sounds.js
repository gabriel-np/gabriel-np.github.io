$(document).ready(function(){
    ion.sound({
        sounds: [
		            {name: "excess-sandalwood-oil"},
		            {name: "fell-down-go-boom"},
		            {name: "if-it-was-broken"},
		            {name: "liable-for-no-ones-labrum"},
		            {name: "pesshushs-shush"},
		            {name: "what-that-means"},
		            {name: "not-doing-it-weird"},
		            {name: "pesshushs-shush-2"},
								{name: "bowel-movements"},
								{name: "breadcrumb-vending-machine"},
								{name: "buttocks-shoulders"},
								{name: "double-knot"},
								{name: "good-smoothie"},
								{name: "pop-that-shirt-off"},
								{name: "silly-moneygoose"},
								{name: "stressy-in-here"},
								{name: "take-off-your-clothes"},
								{name: "there-is-no-such-thing"},
								{name: "underwear-face"},
        ],
        path: "/assets/sounds/",
        preload: true,
        volume: 1.0
    });
		$("#b01").on("click", function(){
		    ion.sound.play("excess-sandalwood-oil");
		});
		$("#b02").on("click", function(){
		    ion.sound.play("fell-down-go-boom");
		});
		$("#b03").on("click", function(){
		    ion.sound.play("if-it-was-broken");
		});
		$("#b04").on("click", function(){
		    ion.sound.play("liable-for-no-ones-labrum");
		});
		$("#b05").on("click", function(){
		    ion.sound.play("pesshushs-shush");
		});
		$("#b06").on("click", function(){
		    ion.sound.play("what-that-means");
		});
		$("#b07").on("click", function(){
		    ion.sound.play("not-doing-it-weird");
		});
		$("#b08").on("click", function(){
		    ion.sound.play("pesshushs-shush-2");
		});
		$("#b09").on("click", function(){
		    ion.sound.play("bowel-movements");
		});
		$("#b10").on("click", function(){
		    ion.sound.play("breadcrumb-vending-machine");
		});
		$("#b11").on("click", function(){
		    ion.sound.play("buttocks-shoulders");
		});
		$("#b12").on("click", function(){
		    ion.sound.play("double-knot");
		});
		$("#b13").on("click", function(){
		    ion.sound.play("good-smoothie");
		});
		$("#b14").on("click", function(){
		    ion.sound.play("pop-that-shirt-off");
		});
		$("#b15").on("click", function(){
		    ion.sound.play("silly-moneygoose");
		});
		$("#b16").on("click", function(){
		    ion.sound.play("stressy-in-here");
		});
		$("#b17").on("click", function(){
		    ion.sound.play("take-off-your-clothes");
		});
		$("#b18").on("click", function(){
		    ion.sound.play("there-is-no-such-thing");
		});
		$("#b19").on("click", function(){
		    ion.sound.play("underwear-face");
		});
});
