import type { IStack } from "./stack.types";
export default class Stack<T> implements IStack<T> {
  public applyFromStack(items?: Array<T> | Stack<T>): void {
    throw new Error("Method not implemented.");
  }
  public push(value: T): void {
    throw new Error("Method not implemented.");
  }
  public peek(): T {
    throw new Error("Method not implemented.");
  }
  public pop(): T {
    throw new Error("Method not implemented.");
  }
  // @ts-ignore
  public length: number;
  public static mock: boolean = true;
}
