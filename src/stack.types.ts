// TODO: Implement `StackOptions` interface
// export interface StackOptions {}

export interface StackLike<T> {
  push(value: T): void;
  pop(): T | undefined;
  length: number;
}

export interface IStack<T> extends StackLike<T> {
  peek(): T | undefined;
  applyFromStack(items?: StackLike<T>): void;
  // applyOptions(options?: StackOptions): void;
}
