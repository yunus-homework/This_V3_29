const ladder = {
  step: 0,
  up: function () {
    this.step++;
    return this;
  },
  down: function () {
    this.step--;
    return this;
  },
  showStep: function () {
    // показывает текущую ступеньку
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep();

// Это ladder (лестница) – объект, который позволяет подниматься
// вверх и спускаться:
// Теперь, если нам нужно сделать несколько последовательных вызовов,
// мы можем выполнить это так:

// ladder.up();
// ladder.up();
// ladder.down();
// ladder.up();
// ladder.showStep(); // 1

// Измените код методов up, down и showStep таким образом, чтобы их вызов можно
// было сделать по цепочке, например так:

// ladder.up().up().down().showStep(); // 1

// Такой подход широко используется в библиотеках JavaScript.
