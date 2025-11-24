// 💤 3. Ліниве завантаження (Virtual Proxy)
// Завдання:  Створи клас Image з методом display(), який показує зображення.
// Додай ImageProxy, який відкладає завантаження “важкого” файлу до моменту,
// коли користувач реально викликає display().
// Мета: навчитися реалізовувати lazy loading великих ресурсів через проксі.

interface IImage {
  display(): void;
}

class _Image implements IImage {
  display(): void {
    console.log("Image.webp");
  }
}

class ImageProxy implements IImage {
  constructor(private realImage: _Image = new _Image()) {}

  display(): void {
    console.log("Lazy loading image...");

    setTimeout(() => {
      this.realImage.display();
    }, 5000);
  }
}

const img: IImage = new ImageProxy(new _Image());
img.display();
