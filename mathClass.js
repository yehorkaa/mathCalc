class SuperMath {
  prompt1 = +prompt("X value:");
  prompt2 = +prompt("Y value:");
  prompt3 = prompt("Sign:");

  object = { x: this.prompt1, y: this.prompt2, sign: this.prompt3 };
  
  checkObj(obj) {
    if (/^\d+$/.test(this.prompt1) === false) {
      this.prompt1 = +prompt("Wrong symbol, X value:");
    }
    if (/^\d+$/.test(this.prompt2) === false) {
      this.prompt2 = +prompt("Wrong symbol, Y value:");
    }
    if (/^[a-zA-Z]+$/.test(this.prompt3) || /^[?!,.а-яА-ЯёЁ0-9\s]+$/.test(this.prompt3)) {
      this.prompt3 = prompt("Wrong symbol, Sign:");
    }
    switch (obj.sign) {
      case "+":
        return obj.x + obj.y;
      case "-":
        return obj.x - obj.y;
      case "/":
        return obj.x / obj.y;
      case "*":
        return obj.x * obj.y;
      case "%":
        return obj.x % obj.y;
    }
  }

  input() {
    let confirming = confirm("Everything is OK?");
    if (confirming) {
      alert(this.checkObj(this.object));
    } else {
      this.prompt1 = +prompt("X value:");
      this.prompt2 = +prompt("Y value:");
      this.prompt3 = prompt("Sign:");
      confirming = confirm("Everything is OK exactly?");
      alert(this.checkObj({ x: this.prompt1, y: this.prompt2, sign: this.prompt3 }))
    }
  }
}
const answer = new SuperMath({});

answer.input();

// В цілому хід думок правильний, але трохи намудрив з методами.

// Спробуй описати все одним класом (щоб у файлі був лише клас й реалізація його).
// Виклик checkObj поза класом зайвий
// Є виклик answer з класу... де його нема, пішли у window. Помилка, й досить груба.
