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
];

var message = _.sample(perfectlyValidReasonsForLosing);

model.defeated.subscribe(function () {
  model.send_message("chat_message", { message: message });
});
