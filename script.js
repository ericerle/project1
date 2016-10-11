console.log("JavaScript running")
var score = 0

//set an object for each person (corresponds to div/picture)
  //properties for physical appearance
  //number for

var bill = {
  facialhair: "yes",
  blondhair: "no",
  glasses: "no",
  hat: "no",
  brownhair: "no",
  male: "yes",
};

var charles = {
  facialhair: "yes",
  blondhair: "yes",
  glasses: "no",
  hat: "no",
  brownhair: "no",
  male: "yes",
};

var max = {
  facialhair: "yes",
  blondhair: "no",
  glasses: "no",
  hat: "no",
  brownhair: "yes",
  male: "yes",
};

var anita = {
  facialhair: "no",
  blondhair: "yes",
  glasses: "no",
  hat: "no",
  brownhair: "no",
  male: "no",
};

var joe = {
  facialhair: "no",
  blondhair: "yes",
  glasses: "yes",
  hat: "no",
  brownhair: "no",
  male: "yes",
};

var paul = {
  facialhair: "no",
  blondhair: "no",
  glasses: "yes",
  hat: "no",
  brownhair: "no",
  male: "yes",
};

var eric = {
  facialhair: "no",
  blondhair: "yes",
  glasses: "no",
  hat: "yes",
  brownhair: "no",
  male: "yes",
};

var claire = {
  facialhair: "no",
  blondhair: "yes",
  glasses: "yes",
  hat: "yes",
  brownhair: "no",
  male: "no",
};

var maria = {
  facialhair: "no",
  blondhair: "no",
  glasses: "no",
  hat: "yes",
  brownhair: "yes",
  male: "no",
};



//random number generator, assign that value to variable "targetNumber"
//assign variable "target" to name of the person

var targetRandom = Math.floor(Math.random()*9);
var target = undefined

if (targetRandom == 0) {
  target = "bill"
} else if (targetRandom == 1) {
  target = "charles"
} else if (targetRandom == 2) {
  target = "max"
} else if (targetRandom == 3) {
  target = "anita"
} else if (targetRandom == 4) {
  target = "joe"
} else if (targetRandom == 5) {
  target = "paul"
} else if (targetRandom == 6) {
  target = "eric"
} else if (targetRandom == 7) {
  target = "claire"
} else if (targetRandom == 8) {
  target = "maria"
}

console.log("Target is " + target);

//click "Start Game", replace that text with score counter

$("#startButton").on("click", function() {
  $("#startButton").html("Score:");
  console.log("clicked");
});

//allow user to click characteristic tests
  //facial hair
$("#facialhair").on("click",function() {
  if (target == "bill") {
    $("#facialhair").html("Facial Hair: Yes");
  } else if (target == "charles") {
    $("#facialhair").html("Facial Hair: Yes");
  } else if (target == "max") {
    $("#facialhair").html("Facial Hair: Yes");
  } else {
    $("#facialhair").html("Facial Hair: No");
  }
  score++;
  $("#scoreboard").html(score);
})

  //blond hair
$("#blondhair").on("click",function() {
  if (target == "charles") {
    $("#blondhair").html("Bond Hair: Yes");
  } else if (target == "anita") {
    $("#blondhair").html("Blond Hair: Yes");
  } else if (target == "joe") {
    $("#blondhair").html("Blond Hair: Yes");
  } else if (target == "eric") {
    $("#blondhair").html("Blond Hair: Yes");
  } else {
    $("#blondhair").html("Blond Hair: No");
  }
  score++;
  $("#scoreboard").html(score);
})

  //glasses
$("#glasses").on("click",function() {
  if (target == "joe") {
    $("#glasses").html("Glasses: Yes");
  } else if (target == "paul") {
    $("#glasses").html("Glasses: Yes");
  } else if (target == "claire") {
    $("#glasses").html("Glasses: Yes");
  } else {
    $("#glasses").html("Glasses: No");
  }
  score++;
  $("#scoreboard").html(score);
})

  //hat
$("#hat").on("click",function() {
  if (target == "eric") {
    $("#hat").html("Hat: Yes");
  } else if (target == "maria") {
    $("#hat").html("Hat: Yes");
  } else if (target == "claire") {
    $("#hat").html("Hat: Yes");
  } else {
    $("#hat").html("Hat: No");
  }
  score++;
  $("#scoreboard").html(score);
})

  //brown hair
$("#brownhair").on("click",function() {
  if (target == "max") {
    $("#brownhair").html("Brown Hair: Yes");
  } else if (target == "maria") {
    $("#brownhair").html("Brown Hair: Yes");
  } else {
    $("#brownhair").html("Brown Hair: No");
  }
  score++;
  $("#scoreboard").html(score);
})

  //male
$("#male").on("click",function() {
  if (target == "bill") {
    $("#male").html("Male: Yes");
  } else if (target == "charles") {
    $("#male").html("Male: Yes");
  } else if (target == "max") {
    $("#male").html("Male: Yes");
  } else if (target == "joe") {
    $("#male").html("Male: Yes");
  } else if (target == "paul") {
    $("#male").html("Male: Yes");
  } else if (target == "eric") {
    $("#male").html("Male: Yes");
  } else {
    $("#male").html("Male: No");
  }
  score++;
  $("#scoreboard").html(score);
})



//guess
$("#image1").on("click",function() {
  if (target == "bill") {
    $("#main").html("Winner!");
    $("#main").css({
        "align-self": "center",
        "margin": "auto",
        "text-align": "center",
        "font-size": "24px",
        "background": "white",
        "border": "2px solid navy",
        "border-radius": "10px",
        "width": "200px",
        "height": "auto",
        "padding": "10px",
    })
    $("#startButton").html("Final Score:")
    $("main").rotate({
      angle: 0,
      animateTo: 360,
    })
  } else {
    score++;
    score++;
    score++;
    $("#scoreboard").html(score);
  }
})

$("#image2").on("click",function() {
  if (target == "charles") {
    $("#main").html("Winner!");
    $("#main").css({
        "align-self": "center",
        "margin": "auto",
        "text-align": "center",
        "font-size": "24px",
        "background": "white",
        "border": "2px solid navy",
        "border-radius": "10px",
        "width": "200px",
        "height": "auto",
        "padding": "10px",
    })
    $("#startButton").html("Final Score:")
        $("main").rotate({
      angle: 0,
      animateTo: 360,
    })
  } else {
    score++;
    score++;
    score++;
    $("#scoreboard").html(score);
  }
})

$("#image3").on("click",function() {
  if (target == "max") {
    $("#main").html("Winner!");
    $("#main").css({
        "align-self": "center",
        "margin": "auto",
        "text-align": "center",
        "font-size": "24px",
        "background": "white",
        "border": "2px solid navy",
        "border-radius": "10px",
        "width": "200px",
        "height": "auto",
        "padding": "10px",
    })
    $("#startButton").html("Final Score:")
        $("main").rotate({
      angle: 0,
      animateTo: 360,
    })
  } else {
    score++;
    score++;
    score++;
    $("#scoreboard").html(score);
  }
})

$("#image4").on("click",function() {
  if (target == "anita") {
    $("#main").html("Winner!");
    $("#main").css({
        "align-self": "center",
        "margin": "auto",
        "text-align": "center",
        "font-size": "24px",
        "background": "white",
        "border": "2px solid navy",
        "border-radius": "10px",
        "width": "200px",
        "height": "auto",
        "padding": "10px",
    })
    $("#startButton").html("Final Score:")
        $("main").rotate({
      angle: 0,
      animateTo: 360,
    })
  } else {
    score++;
    score++;
    score++;
    $("#scoreboard").html(score);
  }
})

$("#image5").on("click",function() {
  if (target == "joe") {
    $("#main").html("Winner!");
    $("#main").css({
        "align-self": "center",
        "margin": "auto",
        "text-align": "center",
        "font-size": "24px",
        "background": "white",
        "border": "2px solid navy",
        "border-radius": "10px",
        "width": "200px",
        "height": "auto",
        "padding": "10px",
    })
    $("#startButton").html("Final Score:")
        $("main").rotate({
      angle: 0,
      animateTo: 360,
    })
  } else {
    score++;
    score++;
    score++;
    $("#scoreboard").html(score);
  }
})

$("#image6").on("click",function() {
  if (target == "paul") {
    $("#main").html("Winner!");
    $("#main").css({
        "align-self": "center",
        "margin": "auto",
        "text-align": "center",
        "font-size": "24px",
        "background": "white",
        "border": "2px solid navy",
        "border-radius": "10px",
        "width": "200px",
        "height": "auto",
        "padding": "10px",
    })
    $("#startButton").html("Final Score:")
        $("main").rotate({
      angle: 0,
      animateTo: 360,
    })
  } else {
    score++;
    score++;
    score++;
    $("#scoreboard").html(score);
  }
})

$("#image7").on("click",function() {
  if (target == "eric") {
    $("#main").html("Winner!");
    $("#main").css({
        "align-self": "center",
        "margin": "auto",
        "text-align": "center",
        "font-size": "24px",
        "background": "white",
        "border": "2px solid navy",
        "border-radius": "10px",
        "width": "200px",
        "height": "auto",
        "padding": "10px",
    })
    $("#startButton").html("Final Score:")
        $("main").rotate({
      angle: 0,
      animateTo: 360,
    })
  } else {
    score++;
    score++;
    score++;
    $("#scoreboard").html(score);
  }
})

$("#image8").on("click",function() {
  if (target == "claire") {
    $("#main").html("Winner!");
    $("#main").css({
        "align-self": "center",
        "margin": "auto",
        "text-align": "center",
        "font-size": "24px",
        "background": "white",
        "border": "2px solid navy",
        "border-radius": "10px",
        "width": "200px",
        "height": "auto",
        "padding": "10px",
    })
    $("#startButton").html("Final Score:")
        $("main").rotate({
      angle: 0,
      animateTo: 360,
    })
  } else {
    score++;
    score++;
    score++;
    $("#scoreboard").html(score);
  }
})

$("#image9").on("click",function() {
  if (target == "maria") {
    $("#main").html("Winner!");
    $("#main").css({
        "align-self": "center",
        "margin": "auto",
        "text-align": "center",
        "font-size": "24px",
        "background": "white",
        "border": "2px solid navy",
        "border-radius": "10px",
        "width": "200px",
        "height": "auto",
        "padding": "10px",
    })
    $("#startButton").html("Final Score:")
        $("main").rotate({
      angle: 0,
      animateTo: 360,
    })
  } else {
    score++;
    score++;
    score++;
    $("#scoreboard").html(score);
  }
})
