// console.log('hello world');


// var num1 = 9;

// if(num1 => 9){
//     console.log("if chal raha hai");
    
// } else{
//     console.log("else chal raha hai ");
    
// }




//  var bankBalance = +prompt(`enter your bank balance`)

//  if(bankBalance > 1500000){
//     console.log(`ristha mubarak ho `);
//  }else{
//     console.log(`ammi ne zehar khaliya ! || istekhare main mana gaya hia`);
    
//  }





// var percentage = +prompt(`Enter your percentage`);

// if(percentage >= 85 && percentage <= 100){
//     console.log(`Treat Pakki! jab khali kar beta `);
// }else if(percentage < 50){
//     console.log(`malick rickshow chalo!`);
// }else if (percentage >= 50 && percentage <= 70){
//     console.log(`C grade aya hai maalik`);
// }else if (percentage >= 70 && percentage <= 80){
//     console.log(`B Grade agaya jaani`);
// }else{
//     console.log(percentage);
// }


// var num1 = +prompt(`Enter Your Age`);

// if(num1 > 0 && num1 <= 8 ){
// document.writeln(`pappo ki gari taiz hai`);
// }else if (num1 > 9 &&  num1 <= 15){
// document.writeln(`pappo kuriyon  ka craz hai`);
// } else if (num1 > 15 && num1 <= 25 ){
// document.writeln(`poppo ki ankha hain light blue pappo dikhta angrez hai`);
// }
// else{
// document.writeln(`but pappo can't dance saaala `);
// }

// let num  = 2;
//  if (num > 8){
// console.log('8 bara hai');
//  }else if (num > 6){
// console.log("6 bara hai");
//  }else if (num > 2 ){
// console.log('2 bara hai abhi bhi');
//  }
//  else{
// console.log('2 se chota hia ');
//  }


// let dayOfwk = 'Mon';
// if(dayOfwk === "sat" || dayOfwk === "sun"){
// console.log('Maalik Chotti Mamao');
// }else if (dayOfwk === 'fri'){
// console.log('Maalik akhari din hai kaam ka ');
// }
// else{
// console.log('Zindagi jhand hai yawr');    
// }


// let grade = "C";
// if(grade === "A"){
//     console.log('basha Maze agaye yeh ');
// }else if (grade === "B"){
//     console.log('pappo pass ho gaya');
// }
// else{
//     console.log('chal bhai hum to chale dukan per');
    
// }



 function runQuiz() {
      const age = +document.getElementById("age").value;
      const percentage = +document.getElementById("percentage").value;
      const day = document.getElementById("day").value;
      const grade = document.getElementById("grade").value;
      const resultBox = document.getElementById("resultBox");

      let messages = [];

      // Age Logic
      if (age > 0 && age <= 8) {
        messages.push("🧒 Abhi Bache ho ! Pogo dekho");
      } else if (age > 9 && age <= 15) {
        messages.push("😎 Nahi beta cycle chalao");
      } else if (age > 15 && age <= 25) {
        messages.push("👀 Chal beta tera to rishta pakka !");
      } else {
        messages.push("💃 Shadi karne ka koi faida nai ab");
      }

      // Percentage Logic
      if (percentage >= 85 && percentage <= 100) {
        messages.push("🎉 A+ :  Treat pakki! Jab khali kar beta.");
      } else if (percentage < 50) {
        messages.push("🛺 Malick Rickshaw chalao!");
      } else if (percentage >= 50 && percentage <= 60) {
        messages.push("📘 C :  Grade aaya hai Maalik");
      } else if (percentage >= 70 && percentage <= 84) {
        messages.push("📗 B : Grade agaya Jaani");
      } else {
        messages.push("❓ Invalid Percentage!");
      }

      // Day Logic
      if (day === "sat" || day === "sun") {
        messages.push("📆 Maalik chhutti mamoo!");
      } else if (day === "fri") {
        messages.push("🕌 Maalik aakhri din hai kaam ka");
      } else if (day) {
        messages.push("💼 bht kaam hai yawr nahi asakta !");
      }

      // Grade Logic
      if (grade === "A") {
        messages.push("👏 A+ : Basha maza agaya! Chal Beta Treat to Banti hai");
      } else if (grade === "B") {
        messages.push("✅ B+ : Pappo pass hogaya!");
      } else if (grade === "C") {
        messages.push("🛒 C : Abbu Nahi Mane Ge!");
      }else{
         messages.push("🛒Faild :  Chal bhai dukan pe chalte hain!");
      }

      resultBox.innerHTML = messages.map(msg => `<p>${msg}</p>`).join('');
      resultBox.style.display = "block";
    }
