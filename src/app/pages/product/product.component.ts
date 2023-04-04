import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SingleSpaProps, singleSpaPropsSubject } from 'src/single-spa/single-spa-props';
import { Product } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {
  products: Product[];
  subscription: Subscription
  singleSpaProps: SingleSpaProps;

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.subscription = singleSpaPropsSubject.subscribe(
      props => (this.singleSpaProps = props),
    )
    console.log(this.singleSpaProps);

      // singleSpaPropsSubject.subscribe((props) => {
      //   console.log(props);
      // })
      this.productService.getProductsSmall().then(data => this.products = data);
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}
