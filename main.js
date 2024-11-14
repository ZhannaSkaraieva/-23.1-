"use strict";


console.log('#6. JavaScript homework example file')
console.log('Завдання #1. ....................................');
/*
 * #1
 * Задача: Калькулятор калорійності продуктів через клас.
 * Завдання: Розробити модуль на JavaScript, який імплементує клас CalorieCalculator. Клас має використовувати Map для управління даними про калорійність продуктів. Необхідно реалізувати наступні функціональності:
 * Додавання продуктів: Метод addProduct приймає назву продукту та його калорійність, додаючи їх до колекції.
 * Отримання калорійності продукту: Метод getProductCalories повертає калорійність продукту за його назвою. Якщо продукт не знайдено, повертає рядок 'Product not found'.
 * Видалення продукту: Метод removeProduct видаляє продукт з колекції за назвою.
 *
 * Критерії перевірки:
 * Клас CalorieCalculator має бути реалізований з використанням ключового слова class.
 * Внутрішнє сховище продуктів має бути реалізоване за допомогою new Map().
 * Наявність методів addProduct, getProductCalories, та removeProduct.
 */

class CalorieCalculator {
  constructor() {
    this.product = new Map(); //// Створення нового Map - сховище продуктів
  }
  addProduct(productName, calories) {  // Метод Додавання продуктів
    this.product.set(productName, calories); //set(key, value): додає пару ключ-значення до Map.
    
  }
  getProductCalories(productName) { //Метод  повертає калорійність 
    if (this.product.has(productName))//has(key): перевіряє, чи існує в Map елемент з вказаним ключем. Повертає true або false.
    {
      return this.product.get(productName) //get(key): повертає значення за вказаним ключем. Якщо ключ відсутній, повертає undefined.
    }
    else { console.log (`Product not found`) }
  }
    removeProduct(productName) { //Метод  видаляє продукт
    if (this.product.has(productName)) {
      this.product.delete(productName) //delete(key): видаляє елемент з Map за вказаним ключем.
    } 
  }
}

// Демонстрація використання
const calorieCalculator = new CalorieCalculator()
calorieCalculator.addProduct('Apple', 52)
calorieCalculator.addProduct('Banana', 89)

//
console.log (calorieCalculator.getProductCalories('Apple')) // 52
console.log(calorieCalculator.getProductCalories('Banana')) // 89
//
calorieCalculator.removeProduct('Apple')
calorieCalculator.getProductCalories('Apple') // Product not found


console.log('Завдання #2. ....................................');
/*
 * #2
 * Задача: Унікальні користувачі.
 * Завдання: Реалізувати модуль на JavaScript у формі класу UniqueUsernames, який використовує Set для збереження унікальних імен користувачів. Клас має надавати можливість:
 * Додавання імен користувачів: Метод addUser дозволяє додати нове ім'я до набору. Якщо ім'я вже існує, воно не буде додано повторно, зберігаючи унікальність імен у наборі.
 * Перевірка наявності імені: Метод exists перевіряє, чи існує задане ім'я серед збережених унікальних імен.
 * Отримання кількості унікальних імен: Метод count повертає кількість унікальних імен, збережених у наборі.
 *
 * Критерії перевірки:
 * Наявність методів addUser, exists, count у класі UniqueUsernames.
 * Використання конструкції class для створення класу UniqueUsernames.
 * Застосування new Set() для внутрішнього сховища імен користувачів у конструкторі класу.
 */

class UniqueUsernames {
  constructor() {
    this.user = new Set(); //сховище продуктів
  }

  addUser(username) {
    this.user.add(username); //Додавання імен користувачів: add(value): додає нове значення до Set, якщо воно ще не існує.
  }                          

  exists(username) {
    return this.user.has(username);//Перевірка наявності імені:has(value): перевіряє, чи містить Set певне значення. Повертає true або false.
  }                                // return выводим значение в консоль

  count() {
    return this.user.size; // Отримання кількості унікальних імен:size: властивість, яка повертає кількість елементів у Set.
  }                         // return выводим значение в консоль
}

// Демонстрація використання
const uniqueUsernames = new UniqueUsernames()
uniqueUsernames.addUser('john_doe')
uniqueUsernames.addUser('jane_doe')
uniqueUsernames.addUser('john_doe') // Ця дія не змінить набір, оскільки 'john_doe' вже існує
//
console.log(`Існує 'john_doe': ${uniqueUsernames.exists('john_doe')}`) // true
console.log(`Кількість унікальних імен: ${uniqueUsernames.count()}`) // 2

// Експорт для використання в тестах
//export { CalorieCalculator, UniqueUsernames }