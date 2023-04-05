function countingValleys(Hiker) {
    var count = 0;
    var level = 0;
    for (var i = 0; i < Hiker.steps; i++) {
        if (Hiker.path[i] == "U") {
            level += 1;
        }
        else
            level -= 1;
        if (level === 0 && Hiker.path[i] == "U")
            count++;
    }
    return count;
}
console.log(countingValleys({
    steps: 8,
    path: "DDDUUU"
}));
