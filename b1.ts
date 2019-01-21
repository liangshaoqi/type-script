interface DB {
    host: string;
    port: number;
    connect(): void
}
class MySQL implements DB{
    host: any
    port: number
    constructor(argument) {

    }
    connect(): void{
        
    }
}