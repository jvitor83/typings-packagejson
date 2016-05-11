System.register(['./MyClass'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var MyClass_1;
    var MyInheritedClass;
    return {
        setters:[
            function (MyClass_1_1) {
                MyClass_1 = MyClass_1_1;
            }],
        execute: function() {
            MyInheritedClass = (function (_super) {
                __extends(MyInheritedClass, _super);
                function MyInheritedClass() {
                    _super.apply(this, arguments);
                }
                MyInheritedClass.prototype.MyMethod = function () {
                    return 1;
                };
                return MyInheritedClass;
            }(MyClass_1.MyClass));
            exports_1("MyInheritedClass", MyInheritedClass);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9NeUluaGVyaXRlZENsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7WUFFSTtnQkFBc0Msb0NBQU87Z0JBQTdDO29CQUFzQyw4QkFBTztnQkFNN0MsQ0FBQztnQkFKVSxtQ0FBUSxHQUFmO29CQUVJLE1BQU0sQ0FBQyxDQUFDLENBQUM7Z0JBQ2IsQ0FBQztnQkFDTCx1QkFBQztZQUFELENBTkEsQUFNQyxDQU5xQyxpQkFBTyxHQU01QztZQU5ELCtDQU1DLENBQUEiLCJmaWxlIjoic3JjL015SW5oZXJpdGVkQ2xhc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgICAgaW1wb3J0IHtNeUNsYXNzfSBmcm9tICcuL015Q2xhc3MnO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBNeUluaGVyaXRlZENsYXNzIGV4dGVuZHMgTXlDbGFzc1xyXG4gICAge1xyXG4gICAgICAgIHB1YmxpYyBNeU1ldGhvZCgpOiBudW1iZXJcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgIH0iXX0=
