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

export interface Point extends Routes {
  readonly name: string;
  readonly description: string;
  readonly iconUrl:string;
}

export const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"home/create",component:LayoutComponent,data:{title:"Hướng dẫn khởi tạo"},children:[
    {path:"store",data:{title:"Khởi tạo cửa hàng(chưa có video)"},component:CreateStoreComponent},
    {path:"setting",data:{title:"Các cài đặt chính"},component:CreateSettingComponent},
    {path:"menu",data:{title:"Khởi tạo menu(chưa có video)"},component:CreateMenuComponent},
    {path:"staff",data:{title:"Khởi tạo nhân sự"},component:CreateStaffComponent},
    {path:"area",data:{title:"Khởi tạo sơ đồ bàn(chưa có video)"},component:CreateAreaComponent},
    {path:"bar",data:{title:"Khởi tạo Bar & Bếp(chưa có video)"},component:CreateKitchenComponent},
    {path:"good",data:{title:"Khởi tạo hàng hóa(chưa có video)"},component:CreateGoodsComponent},
    {path:"partner",data:{title:"Khởi tạo đối tác(chưa có video) "},component:CreatePartnerComponent},
    {path:"fee",data:{title:"Khởi tạo thuế & phí(chưa có video và chưa hoàn thiện)"},component:CreateFeeComponent},
    {path:"income",data:{title:"Khởi tạo nguồn thu(chưa có video)"},component:CreateIncomeComponent},
  ]},
  {path:"home/operate",component:LayoutComponent,data:{title:"Hướng dẫn vận hành"},children:[
    {path:"login",data:{title:"Đăng nhập hệ thống(chưa có video)"},component:LoginComponent},
    {path:"order",data:{title:"Quy trình order(chưa có video)"},component:OrderComponent},
    {path:"cooking",data:{title:"Quy trình pha chế(chưa có video)"},component:BartendingComponent},
    {path:"payment",data:{title:"Quy trình thanh toán(chưa có video)"},component:PaymentComponent},
    {path:"voucher",data:{title:"Thêm phụ phí và giảm giá(chưa có video)"},component:VoucherComponent},
    {path:"accounting",data:{title:"Quy trinh thu chi(chưa có video)"},component:AccountingComponent},
    {path:"clock-out",data:{title:"Quy trình chốt ca(chưa có video)"},component:ClockOutComponent},
    {path:"order-goods",data:{title:"Quy trinh đặt hàng từ đối tác(chưa có video)"},component:OrderGoodsComponent},
    {path:"settlement",data:{title:"Quy trình quyết toán(chưa có video)"},component:SettlementComponent},
    {path:"export-bill",data:{title:"Quy trình xuất hoá đơn điện tử(chưa có video)"},component:ExportBillsComponent},
    {path:"ie-activity",data:{title:"Quy trình xuất/nhập hàng (chưa có video)"},component:IeActivityComponent},
    {path:"check-invetory",data:{title:"Quy trình kiểm kê(chưa có video)"},component:CheckInventoryComponent}
  ]},
  {path:"home/report",component:LayoutComponent,data:{title:"Hướng dẫn báo cáo"},children:[
    {path:"activity",data:{title:"Báo cáo hoạt động"},component:ActivityComponent},
    {path:"goods",data:{title:"Báo cáo hàng hoá"},component:GoodsIEComponent},
    {path:"finance",data:{title:"Báo cáo tài chính"},component:FinanceComponent}
  ]},
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"**",redirectTo:"",pathMatch:"full"}
];
