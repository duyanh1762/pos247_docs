import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { title } from 'process';
import { CreateStoreComponent } from './layout/create/create-store/create-store.component';
import { CreateSettingComponent } from './layout/create/create-setting/create-setting.component';
import { CreateMenuComponent } from './layout/create/create-menu/create-menu.component';
import { CreateStaffComponent } from './layout/create/create-staff/create-staff.component';
import { CreateKitchenComponent } from './layout/create/create-kitchen/create-kitchen.component';
import { CreateGoodsComponent } from './layout/create/create-goods/create-goods.component';
import { CreatePartnerComponent } from './layout/create/create-partner/create-partner.component';
import { CreateFeeComponent } from './layout/create/create-fee/create-fee.component';
import { CreateAreaComponent } from './layout/create/create-area/create-area.component';
import { LoginComponent } from './layout/operate/login/login.component';
import { OrderComponent } from './layout/operate/order/order.component';
import { BartendingComponent } from './layout/operate/bartending/bartending.component';
import { PaymentComponent } from './layout/operate/payment/payment.component';
import { VoucherComponent } from './layout/operate/voucher/voucher.component';
import { AccountingComponent } from './layout/operate/accounting/accounting.component';
import { OrderGoodsComponent } from './layout/operate/order-goods/order-goods.component';
import { SettlementComponent } from './layout/operate/settlement/settlement.component';
import { ExportBillsComponent } from './layout/operate/export-bills/export-bills.component';
import { ActivityComponent } from './layout/report/activity/activity.component';
import { GoodsIEComponent } from './layout/report/goods-ie/goods-ie.component';
import { FinanceComponent } from './layout/report/finance/finance.component';
import { ClockOutComponent } from './layout/operate/clock-out/clock-out.component';
import { CreateIncomeComponent } from './layout/create/create-income/create-income.component';
import { IeActivityComponent } from './layout/operate/ie-activity/ie-activity.component';
import { CheckInventoryComponent } from './layout/operate/check-inventory/check-inventory.component';
import { OutletsComponent } from './layout/in-app/outlets/outlets.component';
import { WorkspaceComponent } from './layout/in-app/workspace/workspace.component';

export interface Point extends Routes {
  readonly name: string;
  readonly description: string;
  readonly iconUrl:string;
}

export const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"home/create",component:LayoutComponent,data:{title:"Hướng dẫn khởi tạo"},children:[
    {path:"outlets",data:{title:"Khởi tạo cửa hàng"},component:CreateStoreComponent},
    {path:"settings",data:{title:"Các cài đặt chính"},component:CreateSettingComponent},
    {path:"menu-items",data:{title:"Khởi tạo menu"},component:CreateMenuComponent},
    {path:"staffs",data:{title:"Khởi tạo nhân sự"},component:CreateStaffComponent},
    {path:"areas",data:{title:"Khởi tạo sơ đồ bàn"},component:CreateAreaComponent},
    {path:"processors",data:{title:"Khởi tạo Bar & Bếp"},component:CreateKitchenComponent},
    {path:"goods",data:{title:"Khởi tạo hàng hóa"},component:CreateGoodsComponent},
    {path:"partners",data:{title:"Khởi tạo đối tác"},component:CreatePartnerComponent},
    {path:"fee",data:{title:"Khởi tạo thuế & phí(chưa xong)"},component:CreateFeeComponent},
    {path:"incomes",data:{title:"Khởi tạo nguồn thu"},component:CreateIncomeComponent},
  ]},
  {path:"home/operate",component:LayoutComponent,data:{title:"Hướng dẫn vận hành"},children:[
    {path:"login",data:{title:"Đăng nhập hệ thống"},component:LoginComponent},
    {path:"workspace",data:{title:"Quy trình order"},component:OrderComponent},
    {path:"monitor",data:{title:"Quy trình chế biến"},component:BartendingComponent},
    {path:"payment",data:{title:"Quy trình thanh toán"},component:PaymentComponent},
    {path:"voucher",data:{title:"Thêm phụ phí và giảm giá"},component:VoucherComponent},
    {path:"payments",data:{title:"Quy trinh thu chi"},component:AccountingComponent},
    {path:"clock-out",data:{title:"Quy trình chốt ca"},component:ClockOutComponent},
    {path:"order-goods",data:{title:"Quy trinh đặt hàng từ đối tác(chưa xong)"},component:OrderGoodsComponent},
    {path:"settlement",data:{title:"Quy trình quyết toán(chưa xong)"},component:SettlementComponent},
    {path:"export-bill",data:{title:"Quy trình xuất hoá đơn điện tử"},component:ExportBillsComponent},
    {path:"good-invoices",data:{title:"Quy trình xuất/nhập hàng"},component:IeActivityComponent},
    {path:"check-invetory",data:{title:"Quy trình kiểm kê(chưa xong)"},component:CheckInventoryComponent}
  ]},
  {path:"home/report",component:LayoutComponent,data:{title:"Hướng dẫn báo cáo"},children:[
    {path:"operation",data:{title:"Báo cáo hoạt động"},component:ActivityComponent},
    {path:"goods",data:{title:"Báo cáo hàng hoá"},component:GoodsIEComponent},
    {path:"finance",data:{title:"Báo cáo tài chính"},component:FinanceComponent}
  ]},
  {path:"in-app/outlets",component:OutletsComponent,data:{title:"Hướng dẫn khởi tạo cửa hàng"}},
  {path:"in-app/workspace",component:WorkspaceComponent,data:{title:"Hướng dẫn bán hàng"}},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"**",redirectTo:"",pathMatch:"full"},
];
