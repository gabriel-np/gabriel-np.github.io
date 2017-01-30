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
		<button id="b04" onclick="">Play</button> Pesshush Shush
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
                {name: "pesshushs-shush"}
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
            ion.sound.play("pesshushs-shush");
        });


    });
</script>
