let tasks = [
  { task: "Learn JS", done: false },
  { task: "Practice", done: true },
];
for (let i = 0; i < tasks.length; i++) {
  console.log(`Task: ${tasks[i].task}, Done: ${tasks[i].done}`);
}
for (let i = 0; i < tasks.length; i++) {
  if (tasks[i].done === true) {
    console.log(tasks[i].task);
  }
}
