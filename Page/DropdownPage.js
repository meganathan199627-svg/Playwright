export class DropdownPage {
    constructor(page){
        this.page=page
        this.location=page.locator('//select[@id="location"]')
        this.hotels=page.locator('//select[@id="hotels"]')
        this.rooms=page.locator('//select[@id="room_type"]')
        this.numbers=page.locator('//select[@id="room_nos"]')
        this.cidate=page.locator('//input[@id="datepick_in"]')
        this.codate=page.locator('//input[@id="datepick_out"]')
        this.persons=page.locator('//select[@id="adult_room"]')
        this.child=page.locator('//select[@id="child_room"]')
    }
    async selectLocation(lname){
        await this.location.selectOption(lname)
    }
    async selectHotel(hname){
        await this.hotels.selectOption(hname)
    }
    async selectRoom(rname){
        await this.rooms.selectOption(rname)
    }
    async roomName(){
        return await this.rooms.inputValue()
    }
    async noOfRooms(rnumber){
        await this.numbers.selectOption(rnumber)
    }
    async selectDate(indate){
        await this.cidate.fill(indate)
    }
    async dropDate(outdate){
        await this.codate.fill(outdate)
    }
    async noOfPersons(pnumber){
        await this.persons.selectOption(pnumber)
    }
    async noOfChild(cnumber){
        await this.child.selectOption(cnumber)
    }
}