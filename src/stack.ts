// TODO: Implement `applyOptions` in class PREREQUISITE: Implement `StackOptions` interface (./stack.types.ts)

import type { StackLike, IStack /* , StackOptions */ } from "./stack.types";

export class BaseStack<T> implements StackLike<T> {
  // ### Private Implementation ###

  /**
   * rationale: using an Array is probably easier, but it feels like cheating to use an exiting stack to implement a new stack
   */
  protected internalItems: Record<number, T> = {};

  constructor() {}

  // ### StackLike ###

  public length: number = 0;

  /**
   * Pushes a value onto the top of the Stack.
   * @param {T} value - the value to push onto the Stack.
   */
  public push(value: T): void {
    if (value === undefined) throw new Error("Cannot push `undefined` onto Stack");
    this.length++;
    this.internalItems[this.length - 1] = value;
  }

  /**
   * Removes and returns the topmost item from the Stack.
   * @returns {T} The topmost item from the Stack.
   */
  public pop(): T | undefined {
    const out = this.internalItems[this.length - 1];
    if (out !== undefined && this.length !== 0) {
      delete this.internalItems[this.length - 1];
      this.length--;
    }
    return out;
  }
}

export default class Stack<T> extends BaseStack<T> implements IStack<T> {
  // ### Private Implementation ###

  /**
   * Copies and reverses the data from one stack to another, destroying the source stack in the progress.
   * @param {StackLike<T>} source - the source Stack to copy from. Destroyed during the process.
   * @param {StackLike<T>} target - the target Stack to copy to.
   * @returns {StackLike<T>} A reference to the target stack.
   */
  protected copyFromStack(source: StackLike<T>, target: StackLike<T>): StackLike<T> {
    const itemLength = source.length;
    const targetLength = target.length;
    while (target.length < itemLength + targetLength) target.push(source.pop() as T);
    return target;
  }

  constructor(items?: StackLike<T> /* , options?: StackOptions */) {
    super();
    if (items) this.applyFromStack(items);
    // if (options) this.applyOptions(options);
  }

  // ### IStack ###

  /**
   * Returns the topmost item from the Stack.
   * Does not remove the item from the Stack.
   * @returns {T} The topmost item from the Stack.
   */
  public peek(): T | undefined {
    return this.internalItems[this.length - 1];
  }

  /**
   * Applies items to the Stack, destroying the Array or Stack containing those items in the process.
   * @param {Array<T> | Stack<T>} items - the Array or Stack to apply to the current Stack. This is destroyed during the process.
   */
  public applyFromStack(items?: StackLike<T>): void {
    if (!items) return;
    const tempStack = new Stack<T>();
    this.copyFromStack(items, tempStack);
    this.copyFromStack(tempStack, this);
  }

  // public applyOptions(options?: StackOptions): void {
  //   if (!options) return;
  // }
}
