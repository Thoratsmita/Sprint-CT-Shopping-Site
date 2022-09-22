import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data:any[]=[];
  public totalItem : number=0;


  constructor(
    private dataService: DataService,
    private cartService : CartService
  ) { 
    
  }

  ngOnInit() {
    this.dataService.getJSON().subscribe(data => {
      console.log(data);
      this.data = data.productList;


      this.data.forEach((a:any)=>{
        Object.assign(a, {quantity:1, total:a.price});
      })
      this.addItemIntoCart();
    });
  }

  

  addToCart(productList:any){
    this.cartService.addtocart(productList)
  }
  addItemIntoCart(){
      this.cartService.getProducts().subscribe(res=>{
        this.totalItem = res.length;
      })
  }

}
