import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

interface StepContent {
  title: string;
  content: Array<string>;
}

@Component({
  selector: 'app-instruction',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './instruction.component.html',
  styleUrl: './instruction.component.css',
})
export class InstructionComponent {
  steps: Array<StepContent> = [
    {
      title: 'Giới thiệu chung',
      content: [
        '<b><i class="fa-solid fa-plus"></i></b> : Thêm mới dữ liệu',
        '<b><i class="fa-solid fa-bars"></i></b> : Menu chức năng',
        '<b><i class="fa-solid fa-circle-question"></i></b> : Hướng dẫn chi tiết cho từng trang',
        '<b><i class="fa-solid fa-grid"></i></b> : Chức năng khác',
        'Chọn <b><i class="fa-solid fa-arrow-right"></i></b> và làm theo các bước để sử dụng phần mềm',
      ],
    },
    {
      title: 'Khởi tạo cửa hàng',
      content: [
        '1. Chọn <b><i class="fa-solid fa-plus"></i></b> ở màn hình Danh sách cửa hàng và chọn Tạo cửa hàng mới',
        '2. Nhập thông tin cửa hàng và chọn mô hình sẵn có phù hợp',
        '3. Xác nhận tạo cửa hàng',
        '<i class="fa-solid fa-triangle-exclamation warning"></i> Nếu đã có kinh nghiệm, bạn có thể chọn Cửa hàng trống để tự thêm dữ liệu',
        '<i class="fa-solid fa-triangle-exclamation warning"></i> Chọn <b><i class="fa-solid fa-circle-question"></i></b> để xem chi tiết hướng dẫn',
      ],
    },
    {
      title: 'Khởi tạo nhân sự',
      content: [
        '1. Ấn vào <b><i class="fa-solid fa-cash-register"></i></b> để truy cập cửa hàng vừa tạo',
        '2. Chọn <b><i class="fa-solid fa-bars"></i></b> để mở Menu chức năng',
        '3. Chọn Quản lý, chọn Nhân sự',
        '4. Chọn <b><i class="fa-solid fa-plus"></i></b> để thêm mới nhân sự',
        '<i class="fa-solid fa-triangle-exclamation warning"></i> Cần tạo tài khoản quản lý đầu tiên',
        '<i class="fa-solid fa-triangle-exclamation warning"></i> Chọn <b><i class="fa-solid fa-circle-question"></i></b> để xem chi tiết hướng dẫn',
      ],
    },
    {
      title: 'Khởi tạo sơ đồ bàn',
      content: [
        '1. Ấn vào <b><i class="fa-solid fa-cash-register"></i></b> để truy cập cửa hàng vừa tạo',
        '2. Chọn <b><i class="fa-solid fa-bars"></i></b> để mở Menu chức năng',
        '3. Chọn Quản lý, chọn Sơ đồ bàn',
        '4. Chọn <b><i class="fa-solid fa-plus"></i></b> để thêm khu vực',
        '5. Chọn khu vực vừa tạo, chọn <b><i class="fa-solid fa-plus"></i></b> để thêm mới bàn',
        '<i class="fa-solid fa-triangle-exclamation warning"></i> Chọn <b><i class="fa-solid fa-circle-question"></i></b> để xem chi tiết hướng dẫn',
      ],
    },
    {
      title: 'Khởi tạo hàng hoá',
      content: [
        '1. Ấn vào <b><i class="fa-solid fa-cash-register"></i></b> để truy cập cửa hàng vừa tạo',
        '2. Chọn <b><i class="fa-solid fa-bars"></i></b> để mở Menu chức năng',
        '3. Chọn Quản lý, chọn Hàng hoá',
        '4. Chọn <b><i class="fa-solid fa-plus"></i></b> để thêm mới Mặt hàng',
        '5. Chọn Mặt hàng vừa tạo, trong Danh mục sản phẩm chọn <b><i class="fa-solid fa-plus"></i></b> để thêm mới sản phẩm',
        '<i class="fa-solid fa-triangle-exclamation warning"></i> Chọn <b><i class="fa-solid fa-circle-question"></i></b> để xem chi tiết hướng dẫn',
      ],
    },
    {
      title: 'Khởi tạo thực đơn',
      content: [
        '1. Ấn vào <b><i class="fa-solid fa-cash-register"></i></b> để truy cập cửa hàng vừa tạo',
        '2. Chọn <b><i class="fa-solid fa-bars"></i></b> để mở Menu chức năng',
        '3. Chọn Quản lý, chọn Thực đơn',
        '4. Chọn <b><i class="fa-solid fa-plus"></i></b> để thêm mới món',
        '<i class="fa-solid fa-triangle-exclamation warning"></i> Chọn <b><i class="fa-solid fa-circle-question"></i></b> để xem chi tiết hướng dẫn',
      ],
    },
    {
      title: 'Khởi tạo đối tác',
      content: [
        '1. Ấn vào <b><i class="fa-solid fa-cash-register"></i></b> để truy cập cửa hàng vừa tạo',
        '2. Chọn <b><i class="fa-solid fa-bars"></i></b> để mở Menu chức năng',
        '3. Chọn Quản lý, chọn Đối tác',
        '4. Chọn <b><i class="fa-solid fa-plus"></i></b> để thêm mới Đối tác',
        '5. Chọn Đối tác vừa tạo và chọn <b><i class="fa-solid fa-boxes-stacked"></i></b> để thêm hàng hoá cho đối tác',
        '<i class="fa-solid fa-triangle-exclamation warning"></i> Chọn <b><i class="fa-solid fa-circle-question"></i></b> để xem chi tiết hướng dẫn',
      ],
    },
  ];

  currentIndex = 0;

  get currentStep() {
    return this.steps[this.currentIndex];
  }

  next() {
    if (this.currentIndex < this.steps.length - 1) {
      this.currentIndex = this.currentIndex + 1;
    }
  }

  back() {
    if (this.currentIndex > 0) {
      this.currentIndex = this.currentIndex - 1;
    }
  }

  close() {
    window.close();
  }
}
