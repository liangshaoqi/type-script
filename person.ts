enum Choose {
    Sister = 1,
    Brother = 2
}//选择兄弟还是姐妹

function question(Choose: Choose): void {
    console.log()
    console.log('你姐妹和你兄弟同时掉进水里你先救谁?')
    console.log('你的选择是:' + Choose)
}
// question(Choose.Brother)
type Address = string
type Tel = number
class Person {
    name: string //名字
    age: number //年龄
    labels: Array<string> //标签组
    sisters: string[] //姐姐们
    contact: [Address, Tel] //元组 联系[联系地址, 联系电话]
    other: any //备注
    saveBrother: boolean = true //是否救落水的兄弟
    constructor() { }
    answer(): Choose {
        if(this.saveBrother === true) {
            return Choose.Brother
        }
        return Choose.Sister
    }
    hello(): void{
        console.log('hello' + this.name)
    }
    empty() { }
    down(): never {
        // throw new Error('error')
        while(true) { }
    }
}
let zhangsan = new Person()
zhangsan.name = '张三'
zhangsan.age = 28
zhangsan.labels = ['颜值逆天', '年轻多金']
zhangsan.sisters = ['一号', '二号', '三号']
zhangsan.contact = ['成都xxx别墅', 666]
zhangsan.other = '不错不错'
zhangsan.saveBrother = true

let len = (<string>zhangsan.other).length
console.log(len)

question(zhangsan.answer())

zhangsan.hello()

console.log(zhangsan.empty())