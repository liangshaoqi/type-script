declare enum Choose {
    Sister = 1,
    Brother = 2
}
declare function question(Choose: Choose): void;
declare type Address = string;
declare type Tel = number;
declare class Person {
    name: string;
    age: number;
    labels: Array<string>;
    sisters: string[];
    contact: [Address, Tel];
    other: any;
    saveBrother: boolean;
    constructor();
    answer(): Choose;
    hello(): void;
    empty(): void;
    down(): never;
}
declare let zhangsan: Person;
declare let len: number;
