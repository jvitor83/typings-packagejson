    import {MyInterface} from './MyInterface';

    export class MyClass implements MyInterface
    {
        get MyProperty(): string
        {
            return "MyString";
        }
    }