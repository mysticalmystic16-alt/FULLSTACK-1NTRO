
console.log("=== STEP 1: SYNC ===");
console.log("1A");
console.log("1B"); 
console.log("1C");
console.log("");

console.log("=== STEP 2: setTimeout ===");
console.log("2Start");
setTimeout(() => console.log("2Timeout"), 0);
console.log("2End");
console.log("");

console.log("=== STEP 3: Promise ===");
console.log("3Start");
Promise.resolve().then(() => console.log("3Promise"));
console.log("3End");
console.log("");

console.log("=== STEP 4: Promise vs setTimeout ===");
console.log("4Start");
setTimeout(() => console.log("4Timeout"), 0);
Promise.resolve().then(() => console.log("4Promise"));
console.log("4End");
console.log("");

console.log("=== STEP 5: Async/Await ===");
async function test() {
  console.log("5-1");
  await Promise.resolve();
  console.log("5-2");
}
console.log("5-3");
test();
console.log("5-4");
console.log("");

console.log("=== STEP 6: CHALLENGE ===");
console.log("6A");
setTimeout(() => console.log("6B"), 0);
Promise.resolve().then(() => console.log("6C"));
console.log("6D");
console.log("");
console.log("🎯 Expected: 6A 6D 6C 6B");