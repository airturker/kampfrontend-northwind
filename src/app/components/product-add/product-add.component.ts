import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms'
import { ToastrService } from 'ngx-toastr';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm: FormGroup;

  constructor(
    private formbuilder:FormBuilder,
    private productService: ProductService,
    private toastreService: ToastrService) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm(){
    this.productAddForm=this.formbuilder.group({
      productName: ["",Validators.required],
      unitPrice: ["", Validators.required],
      unitsInStock: ["",Validators.required],
      categoryId: ["",Validators.required]
    })
  }

  add(){
    if(this.productAddForm.valid){
      let productModel = Object.assign({}, this.productAddForm.value)
      this.productService.add(productModel).subscribe(response=>{
        console.log(response)
        this.toastreService.success(response.message, "Başarılı")
      },responseError=>{
        console.log(responseError.error)
        this.toastreService.error(responseError.error)
      }) 
    }else{
      this.toastreService.error("Formunuz eksik", "Dikkat")
    }
    
  }

}
