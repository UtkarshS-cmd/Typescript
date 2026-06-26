// abstract class -> a class that cannot be instantiated directly and is meant to be subclassed
abstract class Shape {
  public constructor(protected readonly width: number, protected readonly height: number) {}

  public abstract getArea(): number;
}

class Rectangle extends Shape {
  public getArea(): number {
    return this.width * this.height;
  }
}