declare module "MyInterface" {
    export interface MyInterface {
        MyProperty: string;
    }
}
declare module "MyClass" {
    import { MyInterface } from "MyInterface";
    export class MyClass implements MyInterface {
        MyProperty: string;
    }
}
declare module "MyInheritedClass" {
    import { MyClass } from "MyClass";
    export class MyInheritedClass extends MyClass {
        MyMethod(): number;
    }
}
