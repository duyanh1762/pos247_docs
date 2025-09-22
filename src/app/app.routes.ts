import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
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
import { MonitorComponent } from './layout/in-app/monitor/monitor.component';
import { PaymentsComponent } from './layout/in-app/payments/payments.component';
import { GoodInvoicesComponent } from './layout/in-app/good-invoices/good-invoices.component';
import { ReportActivityComponent } from './layout/in-app/report-activity/report-activity.component';
import { ReportFinanceComponent } from './layout/in-app/report-finance/report-finance.component';
import { ReportGoodsComponent } from './layout/in-app/report-goods/report-goods.component';
import { StaffInAppComponent } from './layout/in-app/staff-in-app/staff-in-app.component';
import { MenuItemsComponent } from './layout/in-app/menu-items/menu-items.component';
import { AreaInAppComponent } from './layout/in-app/area-in-app/area-in-app.component';
import { ProcessorsComponent } from './layout/in-app/processors/processors.component';
import { IncomesInAppComponent } from './layout/in-app/incomes-in-app/incomes-in-app.component';
import { GoodsInAppComponent } from './layout/in-app/goods-in-app/goods-in-app.component';
import { PartnerInAppComponent } from './layout/in-app/partner-in-app/partner-in-app.component';
import { SettingInAppComponent } from './layout/in-app/setting-in-app/setting-in-app.component';
import { DocsNotfoundComponent } from './layout/docs-notfound/docs-notfound.component';
import { CollectionsComponent } from './layout/in-app/collections/collections.component';
import { ReconciliationsComponent } from './layout/in-app/reconciliations/reconciliations.component';
import { QrScannerComponent } from './layout/in-app/qr-scanner/qr-scanner.component';
import { AccountComponent } from './layout/in-app/account/account.component';
import { QrOperateComponent } from './layout/operate/qr-operate/qr-operate.component';
import { DebtsComponent } from './layout/operate/debts/debts.component';
import { GoodOrdersComponent } from './layout/in-app/good-orders/good-orders.component';
import { DebtsInAppComponent } from './layout/in-app/debts-in-app/debts-in-app.component';
import { GoodChecksComponent } from './layout/in-app/good-checks/good-checks.component';
import { MenuPoliciesComponent } from './layout/create/menu-policies/menu-policies.component';
import { MenuPoliciesInAppComponent } from './layout/in-app/menu-policies-in-app/menu-policies-in-app.component';
import { ExportPoliciesInAppComponent } from './layout/in-app/export-policies-in-app/export-policies-in-app.component';
import { ExportPoliciesComponent } from './layout/create/export-policies/export-policies.component';
import { FeeInAppComponent } from './layout/in-app/fee-in-app/fee-in-app.component';

export interface Point extends Routes {
  readonly name: string;
  readonly description: string;
  readonly iconUrl:string;
}

export const routes: Routes = [
  {path:"home",component:HomeComponent},

  //Cây thư mục
  {path:"home/create",component:LayoutComponent,data:{title:"Hướng dẫn khởi tạo"},children:[
    {path:"outlets",data:{title:"Khởi tạo cửa hàng"},component:CreateStoreComponent},
    {path:"settings",data:{title:"Các cài đặt chính"},component:CreateSettingComponent},
    {path:"menu-items",data:{title:"Khởi tạo menu"},component:CreateMenuComponent},
    {path:"staffs",data:{title:"Khởi tạo nhân sự"},component:CreateStaffComponent},
    {path:"areas",data:{title:"Khởi tạo sơ đồ bàn"},component:CreateAreaComponent},
    {path:"processors",data:{title:"Khởi tạo Bar & Bếp"},component:CreateKitchenComponent},
    {path:"goods",data:{title:"Khởi tạo hàng hóa"},component:CreateGoodsComponent},
    {path:"partners",data:{title:"Khởi tạo đối tác"},component:CreatePartnerComponent},
    {path:"fee-policies",data:{title:"Khởi tạo thuế & phí"},component:CreateFeeComponent},
    {path:"incomes",data:{title:"Khởi tạo nguồn thu"},component:CreateIncomeComponent},
    {path:"menu-policies",data:{title:"Khởi tạo chính sách giá"},component:MenuPoliciesComponent},
    {path:"export-policies",data:{title:"Khởi tạo chính sách xuất hàng"},component:ExportPoliciesComponent},
  ]},
  {path:"home/operate",component:LayoutComponent,data:{title:"Hướng dẫn vận hành"},children:[
    {path:"login",data:{title:"Đăng nhập hệ thống"},component:LoginComponent},
    {path:"qr",data:{title:"Quy trình Quét Qr"},component:QrOperateComponent},
    {path:"workspace",data:{title:"Quy trình order"},component:OrderComponent},
    {path:"monitor",data:{title:"Quy trình chế biến"},component:BartendingComponent},
    {path:"payment",data:{title:"Quy trình thanh toán"},component:PaymentComponent},
    {path:"voucher",data:{title:"Thêm phụ phí và giảm giá"},component:VoucherComponent},
    {path:"payments",data:{title:"Quy trinh thu chi"},component:AccountingComponent},
    {path:"clock-out",data:{title:"Quy trình chốt ca"},component:ClockOutComponent},
    {path:"order-goods",data:{title:"Quy trinh đặt hàng từ đối tác"},component:OrderGoodsComponent},
    {path:"settlement",data:{title:"Quy trình quyết toán"},component:SettlementComponent},
    {path:"export-bill",data:{title:"Quy trình xuất hoá đơn điện tử"},component:ExportBillsComponent},
    {path:"good-invoices",data:{title:"Quy trình xuất/nhập hàng"},component:IeActivityComponent},
    {path:"debts",data:{title:"Quy trình theo dõi công nợ"},component:DebtsComponent},
    {path:"check-invetory",data:{title:"Quy trình kiểm kê"},component:CheckInventoryComponent}
  ]},
  {path:"home/report",component:LayoutComponent,data:{title:"Hướng dẫn báo cáo"},children:[
    {path:"operation",data:{title:"Báo cáo hoạt động"},component:ActivityComponent},
    {path:"goods",data:{title:"Báo cáo hàng hoá"},component:GoodsIEComponent},
    {path:"finance",data:{title:"Báo cáo tài chính"},component:FinanceComponent}
  ]},

  //Hướng dẫn trong app
  //in-app cho cửa hàng
  {path:"in-app/outlet/workspace",component:WorkspaceComponent,data:{title:"Hướng dẫn bán hàng"}},
  {path:"in-app/outlet/monitor",component:MonitorComponent,data:{title:"Hướng dẫn chế biến"}},
  {path:"in-app/outlet/payments",component:PaymentsComponent,data:{title:"Hướng dẫn thu chi"}},
  {path:"in-app/outlet/good-invoices",component:GoodInvoicesComponent,data:{title:"Hướng dẫn xuất nhập hàng"}},
  {path:"in-app/outlet/reports/operation",component:ReportActivityComponent,data:{title:"Hướng dẫn báo cáo hoạt động"}},
  {path:"in-app/outlet/reports/finance",component:ReportFinanceComponent,data:{title:"Hướng dẫn báo cáo tài chính"}},
  {path:"in-app/outlet/reports/goods",component:ReportGoodsComponent,data:{title:"Hướng dẫn báo cáo hàng hoá"}},
  {path:"in-app/outlet/staffs",component:StaffInAppComponent,data:{title:"Hướng dẫn quản lý nhân sự"}},
  {path:"in-app/outlet/menu-items",component:MenuItemsComponent,data:{title:"Hướng dẫn quản lý thực đơn"}},
  {path:"in-app/outlet/areas",component:AreaInAppComponent,data:{title:"Hướng dẫn quản lý sơ đồ bàn"}},
  {path:"in-app/outlet/processors",component:ProcessorsComponent,data:{title:"Hướng dẫn quản lý Bar bếp"}},
  {path:"in-app/outlet/incomes",component:IncomesInAppComponent,data:{title:"Hướng dẫn quản lý nguồn thu"}},
  {path:"in-app/outlet/goods",component:GoodsInAppComponent,data:{title:"Hướng dẫn quản lý hàng hoá"}},
  {path:"in-app/outlet/partners",component:PartnerInAppComponent,data:{title:"Hướng dẫn quản lý đối tác"}},
  {path:"in-app/outlet/settings",component:SettingInAppComponent,data:{title:"Hướng dẫn cấu hình"}},
  {path:"in-app/outlet/collections",component:CollectionsComponent,data:{title:"Hướng dẫn chốt ca"}},
  {path:"in-app/outlet/reconciliations",component:ReconciliationsComponent,data:{title:"Hướng dẫn quyết toán"}},
  {path:"in-app/outlet/good-orders",component:GoodOrdersComponent,data:{title:"Hướng dẫn đặt hàng"}},
  {path:"in-app/outlet/debts",component:DebtsInAppComponent,data:{title:"Hướng dẫn công nợ"}},
  {path:"in-app/outlet/good-checks",component:GoodChecksComponent,data:{title:"Hướng dẫn kiểm kê"}},
  {path:"in-app/outlet/menu-policies",component:MenuPoliciesInAppComponent,data:{title:"Hướng dẫn chính sách giá"}},
  {path:"in-app/outlet/export-policies",component:ExportPoliciesInAppComponent,data:{title:"Hướng dẫn chính sách xuất hàng"}},
  {path:"in-app/outlet/fee-policies",component:FeeInAppComponent,data:{title:"Hướng dẫn thuế & phí"}},

  //in-app cho chuỗi cửa hàng
  {path:"in-app/outlets",component:OutletsComponent,data:{title:"Hướng dẫn khởi tạo cửa hàng"}},
  {path:"in-app/utils/qr-scanner",component:QrScannerComponent,data:{title:"Hướng dẫn quét QR"}},
  {path:"in-app/account",component:AccountComponent,data:{title:"Hướng dẫn tài khoản"}},
  {path:"in-app/menu-items",component:MenuItemsComponent,data:{title:"Hướng dẫn quản lý thực đơn"}},
  {path:"in-app/incomes",component:IncomesInAppComponent,data:{title:"Hướng dẫn quản lý nguồn thu"}},
  {path:"in-app/partners",component:PartnerInAppComponent,data:{title:"Hướng dẫn quản lý đối tác"}},
  {path:"in-app/menu-policies",component:MenuPoliciesInAppComponent,data:{title:"Hướng dẫn chính sách giá"}},
  {path:"in-app/goods",component:GoodsInAppComponent,data:{title:"Hướng dẫn quản lý hàng hoá"}},



  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"**",component:DocsNotfoundComponent},
];
