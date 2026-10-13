export class Irctc{
    constructor(page){
        this.page=page
    }
    async visitUrl(){
        await this.page.goto('https://www.irctc.co.in/')
    }
}