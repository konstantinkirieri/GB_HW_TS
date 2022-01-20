// Реализовать...

// ...абстрактный класс MyGraphicsPrimitive2D у которого есть следующие свойства:
//   прямоугольная область, описывающая примитив;
//  метод - переместить примитив на заданное смещение;.

// От него дожен наследоваться...

// ...абстрактный класс MyAreaPrimitive2D, у которого есть свойство:
//  площадь.

// От него должны наследоваться...

// ... класс MyCircle, у него есть свойства:
// центр окружности и
// ее радиус,

// а также должен наследоваться ...

// ...класс MyRectangle с свойствами:
//   ширина и
//   высота,
//   левая верхняя граница,
//   правая нижняя граница

abstract class MyGraphicsPrimitive2D {
  constructor(
    protected description: string
  ) {}
  movePrimitiveTo() {
    console.log('Move the primitive')
  }
}

abstract class MyAreaPrimitive2D extends MyGraphicsPrimitive2D {
  constructor(
    protected description: string,
    protected square: number
  ) { super(description) }
}

export class MyCircle extends MyAreaPrimitive2D {
  constructor(
    protected description: string,
    protected square: number,

    private radius: number,
    private circleСenter: { x: number, y: number },
  ) { super(description, square) }
}

export class MyRectangle extends MyAreaPrimitive2D {
  constructor(
    protected description: string,
    protected square: number,

    private height: number,
    private width: number,
    private topLeftBorder: number,
    private bottomRightBorder: number,
  ) { super(description, square) }
}
