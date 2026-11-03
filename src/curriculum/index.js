import { chapters as initialChapters, tasks as initialTasks } from './initial.js';
import { cppBasics, cppAdvanced, gitExtra, foundationSections } from './foundations.js';
import { systemSections } from './systems.js';
import { engineeringSections } from './engineering.js';
import { futureSections } from './future.js';
import { expandTasks } from './details/index.js';
import { reviseTasks, withPlacements } from './revision.js';
import { attachReadings } from './readings.js';

const old = initialTasks.map(t => ({ ...t }));
// Giữ ID của 32 nhiệm vụ cũ để mọi bản sao lưu tiếp tục dùng được.
const oldByChapter = id => old.filter(t => t.chapter === id);
const cpp = oldByChapter('cpp');
cpp.splice(1, 0, ...cppBasics.tasks);
const oop = oldByChapter('oop');
oop.splice(oop.length - 1, 0, ...cppAdvanced.tasks);
const replacements = {
  'oop-resource': { extra: 'Khi lớp tự sở hữu con trỏ cấp phát động, sao chép mặc định có thể không đủ an toàn. Dùng string và vector trước; nhiệm vụ tiếp theo sẽ xét sâu hơn quyền sở hữu và sao chép.' },
  'project-review': { todos: ['Thêm tìm kiếm sách theo một phần tên mà không phá chức năng tìm theo mã.', 'Tự lần theo đường đi từ menu tới dữ liệu trước khi sửa.', 'Chạy lại bảng tình huống kiểm thử và đọc git diff trước khi commit.', 'Ghi lại phần còn yếu để ôn; tiếp tục công cụ, toán rời rạc rồi cấu trúc dữ liệu.'] },
};
for (const task of old) Object.assign(task, replacements[task.id] || {});
const first = initialChapters.map(chapter => ({ chapter, tasks: chapter.id === 'cpp' ? cpp : chapter.id === 'oop' ? oop : chapter.id === 'git' ? [...oldByChapter('git'), ...gitExtra.tasks] : oldByChapter(chapter.id) }));
const byId = new Map([...engineeringSections, ...futureSections].map(s => [s.chapter.id, s]));
// Một chuỗi duy nhất; chương chỉ phục vụ mục lục. Kiến thức nền đứng trước nơi sử dụng.
// Đệ quy cần trước duyệt cây; thao tác bit cần trước lowbit của Fenwick.
const foundationOrdered = foundationSections.map(s => ({ chapter: s.chapter, tasks: s.tasks.map(t => ({ ...t })) }));
const algorithmSection = foundationOrdered.find(s => s.chapter.id === 'algorithms');
const recursion = algorithmSection.tasks.filter(t => t.id.startsWith('algo-recursion'));
algorithmSection.tasks = algorithmSection.tasks.filter(t => !t.id.startsWith('algo-recursion'));
const structures = foundationOrdered.find(s => s.chapter.id === 'structures');
structures.tasks.splice(structures.tasks.findIndex(t => t.id === 'dsa-tree'), 0, ...recursion.map(t => ({ ...t, chapter: 'structures' })));
const advanced = foundationOrdered.find(s => s.chapter.id === 'advanced-algo');
const bitmaskIndex = advanced.tasks.findIndex(t => t.id === 'algo-bitmask');
advanced.tasks.unshift(...advanced.tasks.splice(bitmaskIndex, 1));
const sections = [
  ...first, ...foundationOrdered, ...systemSections,
  byId.get('python'), byId.get('web'), byId.get('software'), byId.get('theory'),
  byId.get('security'), byId.get('hci-graphics'), byId.get('ai'), byId.get('distributed'),
  byId.get('professional'), byId.get('direction'), byId.get('capstone'), byId.get('career'),
];
export const chapters = sections.map(({ chapter }, i) => ({ ...chapter, number: String(i + 1).padStart(2, '0') }));
const expanded = expandTasks(sections.flatMap(s => s.tasks));
export const baselineTaskIds = expanded.map(t => t.id);
export const tasks = attachReadings(withPlacements(reviseTasks(expanded))).map((t, i) => ({ ...t, number: String(i + 1).padStart(3, '0') }));
export const edition = { version: '1.2', title: 'Nền tảng KHMT → project → thực tập', scope: 'Lộ trình tự học bổ trợ cho sinh viên HCMUS; không thay thế chương trình và yêu cầu tốt nghiệp chính thức. Ô vàng là phần nâng cao có thể học sau trong roadmap, không miễn yêu cầu môn học của trường.' };
