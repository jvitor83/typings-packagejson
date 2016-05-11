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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIk15Q2xhc3MudHMiLCJNeUluaGVyaXRlZENsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUVJO2dCQUFBO2dCQU1BLENBQUM7Z0JBSkcsc0JBQUksK0JBQVU7eUJBQWQ7d0JBRUksTUFBTSxDQUFDLFVBQVUsQ0FBQztvQkFDdEIsQ0FBQzs7O21CQUFBO2dCQUNMLGNBQUM7WUFBRCxDQU5BLEFBTUMsSUFBQTtZQU5ELDZCQU1DLENBQUE7Ozs7Ozs7Ozs7Ozs7OztZQ05EO2dCQUFzQyxvQ0FBTztnQkFBN0M7b0JBQXNDLDhCQUFPO2dCQU03QyxDQUFDO2dCQUpVLG1DQUFRLEdBQWY7b0JBRUksTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDYixDQUFDO2dCQUNMLHVCQUFDO1lBQUQsQ0FOQSxBQU1DLENBTnFDLGlCQUFPLEdBTTVDO1lBTkQsK0NBTUMsQ0FBQSIsImZpbGUiOiJ0eXBpbmdzLXBhY2thZ2Vqc29uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiICAgIGltcG9ydCB7TXlJbnRlcmZhY2V9IGZyb20gJy4vTXlJbnRlcmZhY2UnO1xyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBNeUNsYXNzIGltcGxlbWVudHMgTXlJbnRlcmZhY2VcclxuICAgIHtcclxuICAgICAgICBnZXQgTXlQcm9wZXJ0eSgpOiBzdHJpbmdcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIk15U3RyaW5nXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSIsIiAgICBpbXBvcnQge015Q2xhc3N9IGZyb20gJy4vTXlDbGFzcyc7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIE15SW5oZXJpdGVkQ2xhc3MgZXh0ZW5kcyBNeUNsYXNzXHJcbiAgICB7XHJcbiAgICAgICAgcHVibGljIE15TWV0aG9kKCk6IG51bWJlclxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgfSJdfQ==
