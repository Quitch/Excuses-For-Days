var excusesForDaysLoaded;

if (!excusesForDaysLoaded) {
  excusesForDaysLoaded = true;

  try {
    var perfectlyValidReasonsForLosing = [
      "my mouse stopped working",
      "a bird flew into my room and distracted me",
      "my kybord nt wrking",
      "laaaaaaaaaaaaaaag",
      "I was playing with my feet",
      "my dad had me take out the trash",
      "i was trying a new strat",
      "I was using pole lock that's why I lost",
      "i forgot to turn my screen on",
      "i'd have won if i tried",
      "The CSGs were too big and distracting",
      "Someone started launching fireworks outside my window",
      "PA Academy told me this was a good strat",
      "My icons didn't load in",
      "Sun too bright",
      "Why was my commander there?",
      "You rushed me",
      "I won that game",
      "I wasn't ready",
      "thanks, I have to go",
      "Ai taught me to play wrong",
      "no metal icons",
      "UI froze",
      "mouse started jumping",
      "mouse ran out of batteries",
      "micro freezes",
      "that one fight won you the game",
      "lucky airfabs",
      "keyboard broke",
      "bad spawn",
      "i'd have won if i hadn't lost",
      "I don't use OP units",
      "I'm still warming up",
      "You're lucky I'm rusty",
      "bad map",
      "wrong keyboard on",
      "i haven't played for weeks",
      "i underestimated you, no offense",
      "this new meta is so low skill anyone can win",
      "hotbuild not working, cant play",
      "i am not playing serious",
      "audio was stuttering, annoying to play only by vision",
      "jittering connection, rip my ISP - gg lol",
      "My faulty self-made mod sabotaged literally every build-queue. forgot to disable",
      "i was eating so had to play with one hand",
      "i shouldn't play GW right before doing 1v1",
      "there was a hair at my mouse sensor stucking",
      "playing with touchpad",
      "mobile internet",
      "did you unpause?",
      "a friend was playing on my computer, thought he was decent",
      "i had a fire in my house... you cant make that up",
      "I guess I need to try now",
      "I beat myself",
      "can't be bothered",
      "too much meme",
      "was not looking",
    ];

    var message = _.sample(perfectlyValidReasonsForLosing);

    model.defeated.subscribe(function () {
      model.send_message("chat_message", { message: message });
    });
  } catch (e) {
    console.error(e);
    console.error(JSON.stringify(e));
  }
}
