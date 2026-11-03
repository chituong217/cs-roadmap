export const resources = {
  cpp: ['LearnCpp — tra đúng bài theo tên chủ đề', 'https://www.learncpp.com/'],
  git: ['Pro Git — sách và ví dụ thực hành', 'https://git-scm.com/book/en/v2'],
  tools: ['MIT Missing Semester — công cụ lập trình', 'https://missing.csail.mit.edu/'],
  discrete: ['MIT 6.042J — giáo trình và bài tập toán rời rạc', 'https://ocw.mit.edu/courses/6-042j-mathematics-for-computer-science-spring-2015/'],
  cses: ['CSES Problem Set — tìm bài theo tên ghi trong nhiệm vụ', 'https://cses.fi/problemset/'],
  algo: ['MIT 6.006 — bài giảng và bài tập thuật toán', 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/'],
  linear: ['MIT 18.06 — đại số tuyến tính', 'https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/'],
  calculus: ['MIT 18.01SC — giải tích một biến', 'https://ocw.mit.edu/courses/18-01sc-single-variable-calculus-fall-2010/'],
  multi: ['MIT 18.02SC — giải tích nhiều biến', 'https://ocw.mit.edu/courses/18-02sc-multivariable-calculus-fall-2010/'],
  stats: ['MIT 18.05 — xác suất thống kê', 'https://ocw.mit.edu/courses/18-05-introduction-to-probability-and-statistics-spring-2022/'],
  architecture: ['Nand to Tetris — công cụ và project máy tính', 'https://www.nand2tetris.org/'],
  os: ['OSTEP — sách và project hệ điều hành', 'https://pages.cs.wisc.edu/~remzi/OSTEP/'],
  network: ['Computer Networking: A Top-Down Approach — tài nguyên tác giả', 'https://gaia.cs.umass.edu/kurose_ross/'],
  sql: ['PostgreSQL — tutorial chính thức', 'https://www.postgresql.org/docs/current/tutorial.html'],
  postgres: ['PostgreSQL — tài liệu chi tiết', 'https://www.postgresql.org/docs/current/'],
  python: ['Python — tutorial chính thức', 'https://docs.python.org/3/tutorial/'],
  numpy: ['NumPy — tài liệu người mới', 'https://numpy.org/doc/stable/user/absolute_beginners.html'],
  pandas: ['pandas — hướng dẫn nhập môn', 'https://pandas.pydata.org/docs/getting_started/intro_tutorials/'],
  web: ['MDN — học phát triển web', 'https://developer.mozilla.org/en-US/docs/Learn_web_development'],
  fastapi: ['FastAPI — tutorial chính thức', 'https://fastapi.tiangolo.com/tutorial/'],
  pytest: ['pytest — hướng dẫn bắt đầu', 'https://docs.pytest.org/en/stable/getting-started.html'],
  actions: ['GitHub Actions — tài liệu chính thức', 'https://docs.github.com/en/actions'],
  docker: ['Docker — hướng dẫn bắt đầu', 'https://docs.docker.com/get-started/'],
  security: ['OWASP — tài liệu kiểm thử bảo mật web', 'https://owasp.org/www-project-web-security-testing-guide/'],
  theory: ['MIT 6.045J — tính toán và độ phức tạp', 'https://ocw.mit.edu/courses/6-045j-automata-computability-and-complexity-spring-2011/'],
  interpreter: ['Crafting Interpreters — chương Scanning (bản gốc dùng Java; có thể vận dụng ý tưởng bằng Python)', 'https://craftinginterpreters.com/scanning.html'],
  graphics: ['LearnOpenGL — nền tảng đồ họa', 'https://learnopengl.com/'],
  accessibility: ['W3C WAI — nền tảng khả năng tiếp cận', 'https://www.w3.org/WAI/fundamentals/'],
  ml: ['Google Machine Learning Crash Course', 'https://developers.google.com/machine-learning/crash-course'],
  sklearn: ['scikit-learn — hướng dẫn học máy', 'https://scikit-learn.org/stable/user_guide.html'],
  torch: ['PyTorch — tutorial chính thức', 'https://docs.pytorch.org/tutorials/'],
  distributed: ['MIT 6.5840 — hệ phân tán', 'https://pdos.csail.mit.edu/6.824/'],
  ethics: ['ACM — Code of Ethics (PDF)', 'https://www.acm.org/binaries/content/assets/about/acm-code-of-ethics-and-professional-conduct.pdf'],
  paper: ['S. Keshav — How to Read a Paper', 'https://svr-sk818-web.cl.cam.ac.uk/keshav/publications/htrap.html'],
  cs2023: ['CS2023 — các lĩnh vực kiến thức KHMT', 'https://csed.acm.org/knowledge-areas/'],
};
// id | loại | tên | các việc phân tách bằng ~ | ghi chú tùy chọn | khóa tài nguyên tùy chọn
export function section(id, title, lines) {
  const tasks = lines.trim().split('\n').filter(Boolean).map(line => {
    const [taskId, kind, taskTitle, todoText, extra, sourceKeys] = line.split('|').map(s => s.trim());
    if (!taskId || !todoText) throw new Error(`Nhiệm vụ thiếu nội dung: ${line}`);
    return { id: taskId, chapter: id, kind, title: taskTitle, todos: todoText.split('~').map(s => s.trim()), extra: extra || undefined, sources: sourceKeys ? sourceKeys.split(',').map(key => { if (!resources[key]) throw new Error(`Nguồn chưa khai báo: ${key}`); return resources[key]; }) : undefined };
  });
  return { chapter: { id, title }, tasks };
}
