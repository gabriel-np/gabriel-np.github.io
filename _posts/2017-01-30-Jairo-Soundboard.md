---
title: Jairo Soundboard
layout: post
summary: A good looking soundboard.
---

<img src="/assets/jairo.png" style="max-width:100%;height:auto" />

Jairo is a character from [Bob's Burger](http://www.imdb.com/title/tt1561755/), the animated sitcom on [Fox](http://www.fox.com/bobs-burgers/). He is a healer and capoeira teacher. He is voiced by comedian [Jon Glaser](http://bobs-burgers.wikia.com/wiki/Jon_Glaser).

See the [Official Jairo Wiki](http://bobs-burgers.wikia.com/wiki/Jairo).

<ul>
	<li>
		<button id="b01" onclick="">Play</button> Excess Sandalwood Oil
	</li>
	<li>
		<button id="b02" onclick="">Play</button> Fell Down Go Boom
	</li>
	<li>
		<button id="b03" onclick="">Play</button> If It Was Broken
	</li>
	<li>
		<button id="b04" onclick="">Play</button> I am liable for no ones labrum
	</li>
	<li>
		<button id="b05" onclick="">Play</button> Pesshush Shush
	</li>
	<li>
		<button id="b06" onclick="">Play</button> <em>Pesshush Shush</em> you don't know what that means? 
	</li>
	<li>
		<button id="b07" onclick="">Play</button> I am not doing it weird at all 
	</li>
	<li>
		<button id="b08" onclick="">Play</button> Pesshush Shush 2
	</li>
	<li>
		<button id="b09" onclick="">Play</button> Just give me some keywords
	</li>
	<li>
		<button id="b17" onclick="">Play</button> Take off your clothes
	</li>
	<li>
		<button id="b19" onclick="">Play</button> You have underwear face
	</li>
	<li>
		<button id="b11" onclick="">Play</button> Before we walked upright our buttocks were our shoulders
	</li>
	<li>
		<button id="b12" onclick="">Play</button> Double knot
	</li>
	<li>
		<button id="b15" onclick="">Play</button> You silly moneygoose
	</li>
	<li>
		<button id="b10" onclick="">Play</button> Breadcrumb vending-machine
	</li>
	<li>
		<button id="b13" onclick="">Play</button> Good-Smoothie
	</li>
	<li>
		<button id="b18" onclick="">Play</button> There is no such thing as what you just said
	</li>
	<li>
		<button id="b14" onclick="">Play</button> Let's pop that shirt off and dig around
	</li>
	<li>
		<button id="b16" onclick="">Play</button> All stressy in here
	</li>
</ul>

<!-- All JS -->
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="/assets/scripts/ion.sound.js"></script>

<script>
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
</script>
