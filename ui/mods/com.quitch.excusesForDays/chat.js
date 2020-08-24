var perfectlyValidReasonsForLosing = [
  "my mouse stopped working",
  "a bird flew into my room and distracted me",
  "my kybord nt wrking",
  "laaaaaaaaaaaaaaag",
  "I was playing with my feet",
  "my dad had me take out the trash",
  "i was trying a new strat",
  "I was using poll lock that's why I lost",
  "i forgot to turn my screen on",
  "i'd have won if i tried",
  "The CSGs were too big and distracting",
  "Someone started launching fireworks outsie my window",
  "PA Academy told me this was a good strat",
  "My icons didn't load in",
  "Sun too bright",
  "Why was my commander there?",
  "You rushed me",
  "I won that game",
];

var message = _.sample(perfectlyValidReasonsForLosing);

model.defeated.subscribe(function () {
  model.send_message("chat_message", { message: message });
});
