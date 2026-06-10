// app/tutorial/page.tsx
'use client';

import Link from 'next/link';

type TutorialSection = {
  id: string;
  title: string;
  content: string;
};

const tutorialSections: TutorialSection[] = [
  {
    id: 'intro',
    title: 'Giới thiệu Webots Tutorial 1',
    content:
      'Mô tả ngắn gọn về mục tiêu của bài hướng dẫn: làm quen với Webots, mở world mẫu, chạy mô phỏng và quan sát robot...',
  },
  {
    id: 'goals',
    title: 'Mục tiêu học được',
    content:
      '- Hiểu giao diện chính của Webots\n- Biết cách mở file world (.wbt)\n- Biết cách chạy / dừng / reset mô phỏng\n- Biết cách dùng chuột để quay / pan / zoom camera',
  },
  {
    id: 'steps',
    title: 'Các bước thực hiện',
    content:
      '1. Mở Webots và chọn world mẫu\n2. Nhấn nút Play để bắt đầu mô phỏng\n3. Dùng chuột để xoay, pan, zoom quan sát robot\n4. Thay đổi một tham số đơn giản (ví dụ tốc độ) và chạy lại\n5. Ghi nhận kết quả quan sát được',
  },
  {
    id: 'notes',
    title: 'Ghi chú & mẹo',
    content:
      '- Nếu mô phỏng bị đứng, dùng nút Reset\n- Dùng chế độ x3d streaming để quan sát trên web\n- Ghi lại các tham số quan trọng trong báo cáo/bài tập',
  },
];

export default function TutorialPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Tutorial</h1>
          <p className="text-gray-600 mt-2">
            Hướng dẫn từng bước sử dụng Webots và hệ thống mô phỏng để làm bài tập.
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            href="/simulation"
            className="px-4 py-2 border rounded-lg text-sm text-gray-700 hover:bg-gray-50"
          >
            Quay lại Simulations
          </Link>
          <Link
            href="/run"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600"
          >
            Mở trang Run Simulation
          </Link>
        </div>
      </div>

      {/* Tabs (chỉ 1 tab Tutorial, dễ mở rộng sau này) */}
      <div className="border-b mb-6">
        <button className="px-4 py-2 font-medium border-b-2 border-blue-500 text-blue-600">
          Tutorial
        </button>
      </div>

      {/* Nội dung tutorial chia block */}
      <div className="grid grid-cols-1 lg:grid-cols-[260px,1fr] gap-8">
        {/* Sidebar: mục lục */}
        <aside className="space-y-4">
          <div className="bg-gray-50 border rounded-lg p-4">
            <h2 className="text-sm font-semibold text-gray-700 mb-2">Mục lục</h2>
            <nav className="space-y-1 text-sm">
              {tutorialSections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block px-2 py-1 rounded hover:bg-gray-100 text-gray-700"
                >
                  {section.title}
                </a>
              ))}
            </nav>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-900">
            <p className="font-semibold mb-1">Gợi ý cho sinh viên</p>
            <p>Đọc lần lượt từng bước, sau đó mở trang Run và thực hành ngay với một world cụ thể.</p>
          </div>
        </aside>

        {/* Main content */}
        <main className="space-y-6">
          {tutorialSections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="bg-white border rounded-lg shadow-sm p-6"
            >
              <h2 className="text-xl font-semibold mb-3">{section.title}</h2>
              <p className="whitespace-pre-line text-gray-700 text-sm leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}

          {/* Call-to-action cuối trang */}
          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm text-gray-600">
              Khi đã nắm được các bước cơ bản, hãy mở một world từ GitHub và thử chạy mô phỏng thực tế.
            </p>
            <Link
              href="/simulation"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600"
            >
              Đi tới My Simulations
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}