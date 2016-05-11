var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
System.register("MyInterface", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("MyClass", [], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var MyClass;
    return {
        setters:[],
        execute: function() {
            MyClass = (function () {
                function MyClass() {
                }
                Object.defineProperty(MyClass.prototype, "MyProperty", {
                    get: function () {
                        return "MyString";
                    },
                    enumerable: true,
                    configurable: true
                });
                return MyClass;
            }());
            exports_2("MyClass", MyClass);
        }
    }
});
System.register("MyInheritedClass", ["MyClass"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
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
            exports_3("MyInheritedClass", MyInheritedClass);
        }
    }
});
System.register("index", ["MyClass", "MyInheritedClass"], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_4(exports);
    }
    return {
        setters:[
            function (MyClass_2_1) {
                exportStar_1(MyClass_2_1);
            },
            function (MyInheritedClass_1_1) {
                exportStar_1(MyInheritedClass_1_1);
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk15Q2xhc3MudHMiLCJNeUluaGVyaXRlZENsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVJO2dCQUFBO2dCQU1BLENBQUM7Z0JBSkcsc0JBQUksK0JBQVU7eUJBQWQ7d0JBRUksTUFBTSxDQUFDLFVBQVUsQ0FBQztvQkFDdEIsQ0FBQzs7O21CQUFBO2dCQUNMLGNBQUM7WUFBRCxDQU5BLEFBTUMsSUFBQTtZQU5ELDZCQU1DLENBQUE7Ozs7Ozs7Ozs7Ozs7OztZQ05EO2dCQUFzQyxvQ0FBTztnQkFBN0M7b0JBQXNDLDhCQUFPO2dCQU03QyxDQUFDO2dCQUpVLG1DQUFRLEdBQWY7b0JBRUksTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDYixDQUFDO2dCQUNMLHVCQUFDO1lBQUQsQ0FOQSxBQU1DLENBTnFDLGlCQUFPLEdBTTVDO1lBTkQsK0NBTUMsQ0FBQSIsImZpbGUiOiJ0eXBpbmdzLXBhY2thZ2Vqc29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIGltcG9ydCB7TXlJbnRlcmZhY2V9IGZyb20gJy4vTXlJbnRlcmZhY2UnO1xuXG4gICAgZXhwb3J0IGNsYXNzIE15Q2xhc3MgaW1wbGVtZW50cyBNeUludGVyZmFjZVxuICAgIHtcbiAgICAgICAgZ2V0IE15UHJvcGVydHkoKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBcIk15U3RyaW5nXCI7XG4gICAgICAgIH1cbiAgICB9IiwiICAgIGltcG9ydCB7TXlDbGFzc30gZnJvbSAnLi9NeUNsYXNzJztcblxuICAgIGV4cG9ydCBjbGFzcyBNeUluaGVyaXRlZENsYXNzIGV4dGVuZHMgTXlDbGFzc1xuICAgIHtcbiAgICAgICAgcHVibGljIE15TWV0aG9kKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgIH0iXX0=
