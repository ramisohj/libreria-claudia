import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductRegisterComponent } from './product-register/product-register.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductListAllComponent } from './product-list-all/product-list-all.component';

const routes: Routes = [
{   path:'product',
    children:[
        {    
            path: 'register', 
            component: ProductRegisterComponent
        },
        {    
            path: 'list', 
            component: ProductListComponent
        },{
            path: 'delete',
            component: ProductListAllComponent
        }
    ]
}
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProductRoutingModule { }