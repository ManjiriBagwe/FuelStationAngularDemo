export class DepartmentSaleForm {
    //id:number = 0;
    name:string ="";
    quantity:number = 0;
    sale:number = 0;
    profit:number = 0;
    margin:number = 0;
    saledate:Date=new Date();
    strsaledate:string ="";
    
    constructor(
        name:string,
        quantity:number,
        sale: number,
        profit:number,
        margin:number,
        saledate: Date,
        strsaledate:string
    ) {

    }
}