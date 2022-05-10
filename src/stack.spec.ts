// TODO: implement `StackOptions` tests PREREQUISITE: Implement `applyOptions` in class (./stack.ts)
import "mocha";
import i from "chai";
import Stack from "./stack";

describe("Stack", () => {
  // @ts-ignore
  if (Stack?.mock) return;
  describe("Baseline stack functionality", () => {
    it("Should have `length` property         ~~~~~~~~ (property) Stack<T>.length: T", () => {
      const myStack = new Stack<number>();
      i.expect(myStack?.length).to.be.a("number");
      i.expect(myStack.length).to.equal(0);
    });
    it("Should have `push()` method           ~~~~~~~~   (method) Stack<T>.push(value: T): void", () => {
      const myStack = new Stack<number>();
      i.expect(myStack?.push).to.be.a("function");
      myStack.push(1);
      i.expect(myStack.length).to.equal(1);
    });
    it("Should have `peek()` method           ~~~~~~~~   (method) Stack<T>.peek(): T", () => {
      const myStack = new Stack<number>();
      myStack.push(1);
      i.expect(myStack?.peek).to.be.a("function");
      i.expect(myStack.peek()).to.equal(1);
    });
    it("Should have `pop()` method            ~~~~~~~~   (method) Stack<T>.pop(): T", () => {
      const myStack = new Stack<number>();
      myStack.push(1);
      i.expect(myStack?.pop).to.be.a("function");
      i.expect(myStack.pop()).to.equal(1);
    });
  });
  describe("Additional stack functionality", () => {
    it("Should have `applyFromStack()` method ~~~~~~~~   (method) Stack<T>.applyFromStack(items: Stack<T> | Array<T>): void", () => {
      const myStack = new Stack();
      i.expect(myStack?.applyFromStack).to.be.a("function");
      myStack.applyFromStack([1, 2, 3]);
      i.expect(myStack.length).to.equal(3);
      i.expect(myStack.pop()).to.equal(3);
      i.expect(myStack.pop()).to.equal(2);
      i.expect(myStack.pop()).to.equal(1);
    });
    // it("Should have `applyOptions()` method ~~~~~~~~   (method) Stack<T>.applyOptions(options: IStackOptions): void", () => {
    //   i.expect(myStack?.applyOptions).to.be.a("function");
    // });
  });
  describe("Performing in use cases", () => {
    it("Should pass a simple palindrome test ('racecar')", () => {
      const myStack = new Stack();
      // `expected` should be reversed as acquisition order for `actual` is from last to first via `myStack.pop()`
      // in this instace, the input is `"racecar"`, which is a palindrome
      // if `expected` and `actual` are not equal it is due to the stack failing
      const expected = [..."racecar"];
      myStack.applyFromStack([...expected]);
      const actual = [];
      while (myStack.length > 0) actual.push(myStack.pop());
      i.expect(actual).to.deep.equal(expected);
    });
  });
  describe("Performing edge cases", () => {
    it("Should have a length of zero after running `Stack.pop()` on an empty stack", () => {
      const myStack = new Stack();
      myStack.pop();
      i.expect(myStack.length).to.equal(0);
    });
  });
});
