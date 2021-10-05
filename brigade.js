const { events, Job } = require("brigadier");
events.on("exec", () => {
  var one = new Job("first-job");
  one.image = "alpine:3.4";
  one.tasks = ["echo Hello World"];
  one.run();
});
