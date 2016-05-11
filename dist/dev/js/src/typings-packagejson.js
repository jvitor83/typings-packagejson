System.register(["./MyClass", "./MyInheritedClass"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (MyClass_1_1) {
                exportStar_1(MyClass_1_1);
            },
            function (MyInheritedClass_1_1) {
                exportStar_1(MyInheritedClass_1_1);
            }],
        execute: function() {
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvdHlwaW5ncy1wYWNrYWdlanNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbXX0=
