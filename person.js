var Choose;
(function (Choose) {
    Choose[Choose["Sister"] = 1] = "Sister";
    Choose[Choose["Brother"] = 2] = "Brother";
})(Choose || (Choose = {})); //选择兄弟还是姐妹
function question(Choose) {
    console.log();
    console.log('你姐妹和你兄弟同时掉进水里你先救谁?');
    console.log('你的选择是:' + Choose);
}
var Person = /** @class */ (function () {
    function Person() {
        this.saveBrother = true; //是否救落水的兄弟
    }
    Person.prototype.answer = function () {
        if (this.saveBrother === true) {
            return Choose.Brother;
        }
        return Choose.Sister;
    };
    Person.prototype.hello = function () {
        console.log('hello' + this.name);
    };
    Person.prototype.empty = function () { };
    Person.prototype.down = function () {
        // throw new Error('error')
        while (true) { }
    };
    return Person;
}());
var zhangsan = new Person();
zhangsan.name = '张三';
zhangsan.age = 28;
zhangsan.labels = ['颜值逆天', '年轻多金'];
zhangsan.sisters = ['一号', '二号', '三号'];
zhangsan.contact = ['成都xxx别墅', 666];
zhangsan.other = '不错不错';
zhangsan.saveBrother = true;
var len = zhangsan.other.length;
console.log(len);
question(zhangsan.answer());
zhangsan.hello();
console.log(zhangsan.empty());
