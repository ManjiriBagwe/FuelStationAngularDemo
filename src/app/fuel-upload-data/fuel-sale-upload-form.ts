export class FuelSaleForm {
    //id:number = 0;
    grade:string ="";
    volume:number = 0;
    sale:number = 0;
    profit:number = 0;
    margin:number = 0;
    saledate:Date=new Date();
    strsaledate:string ="";
    
    constructor(
        grade:string,
        volume:number,
        sale: number,
        profit:number,
        margin:number,
        saledate: Date,
        strsaledate:string
    ) {

    }
}