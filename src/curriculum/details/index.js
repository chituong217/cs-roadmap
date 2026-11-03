import { basicsDetails } from './basics.js';
import { workflowDetails } from './workflow.js';
import { discreteStructureDetails } from './discrete-structures.js';
import { algorithmDetails } from './algorithms.js';
import { graphDetails } from './graphs.js';
import { mathAdvancedDetails } from './math-advanced.js';
import { architectureOsDetails } from './architecture-os.js';
import { networkDatabaseDetails } from './network-database.js';
import { pythonWebDetails } from './python-web.js';
import { softwareTheoryDetails } from './software-theory.js';
import { securityGraphicsDetails } from './security-graphics.js';
import { aiDistributedDetails } from './ai-distributed.js';
import { professionalDirectionDetails } from './professional-direction.js';
import { capstoneCareerDetails } from './capstone-career.js';

const additions = new Map();
for (const lines of [basicsDetails, workflowDetails, discreteStructureDetails, algorithmDetails, graphDetails, mathAdvancedDetails, architectureOsDetails, networkDatabaseDetails, pythonWebDetails, softwareTheoryDetails, securityGraphicsDetails, aiDistributedDetails, professionalDirectionDetails, capstoneCareerDetails]) {
  for (const line of lines.trim().split('\n')) {
    if (!line.trim()) continue;
    const separator = line.indexOf('|');
    const id = line.slice(0, separator).trim();
    const todos = line.slice(separator + 1).split('~').map(s => s.trim());
    if (separator < 1 || !todos.length || todos.some(t => !t)) throw new Error(`Phần chi tiết không hợp lệ: ${id}`);
    if (additions.has(id)) throw new Error(`Phần chi tiết bị lặp ID: ${id}`);
    additions.set(id, todos);
  }
}

export function expandTasks(tasks) {
  const ids = new Set(tasks.map(t => t.id));
  for (const id of additions.keys()) if (!ids.has(id)) throw new Error(`Chi tiết không có nhiệm vụ gốc: ${id}`);
  return tasks.map(task => {
    const extra = additions.get(task.id);
    if (!extra) throw new Error(`Chưa rà phần việc cần làm: ${task.id}`);
    // Ghép ý khái quát với cách thực hiện ngay trong một gạch, tránh lặp
    // cùng yêu cầu ở hai gạch liên tiếp chỉ để tăng độ dài danh sách.
    const todos = task.todos.map((todo, i) => extra[i] ? `${todo} ${extra[i]}` : todo);
    todos.push(...extra.slice(task.todos.length));
    // Giữ các bước khởi tạo trước cài đặt, rồi mới chứng minh/kiểm tra ở ô Dijkstra.
    const ordered = task.id === 'graph-dijkstra'
      ? ['Xác định bài toán đường đi ngắn nhất từ một nguồn trên đồ thị có trọng số không âm; phân biệt khoảng cách đang biết với khoảng cách đã được chốt tối ưu.', extra[0], extra[1], `Cài danh sách kề. ${extra[2]}`, extra[3], extra[4], ...extra.slice(5)]
      : task.id === 'oop-inheritance'
        ? [extra[0], `${task.todos[0]} ${extra[4]}`, extra[1], extra[2], `${task.todos[3]} ${extra[3]}`, extra[5]]
        : task.id === 'ml-split'
          ? extra.slice(0, 6)
          : task.id === 'db-isolation'
            ? extra
            : task.id === 'career-cv'
              ? [`${extra[0]} ${task.todos[1]}`, extra[1], `${task.todos[2]} ${extra[2]}`, extra[3], extra[4]]
        : todos;
    if (new Set(ordered).size !== ordered.length) throw new Error(`Gạch đầu dòng bị lặp: ${task.id}`);
    return { ...task, todos: ordered };
  });
}
