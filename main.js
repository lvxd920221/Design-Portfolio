// ============================================================
// 作品集数据：按玄漓 Figma 模板「项目展示页」6 区块结构组织。
// 每个项目字段说明见 notes/figma_template_structure.md。
// ============================================================
const PROJECTS = [
  {
    id: "haodf",
    title: "好大夫在线改版",
    sub: "以「信任建立 + 低门槛发起」重组问诊链路的移动端改版",
    tags: ["App UI/UX", "医疗", "C 端"],
    badge: "信任设计",
    period: "3 个月",
    role: "UI/UX 主导",
    industry: "医疗 · C 端",
    thumb: "assets/projects/haodf/thumb.jpg",

    background: "在线问诊平台环节多、信任成本高，新用户难以快速发起有效沟通。作为设计主导，我负责首页、问诊链路、医生主页三大模块的改版，目标是把「决策成本」降下来。",

    highlights: [
      {
        title: "信任成本过高，用户无法快速判断医生是否可靠",
        strategy: "以「信息分层 + 首屏信任信号」替代平铺列表，让用户在 3 秒内抓住关键信息",
        solution: "医生主页重构为 3 层卡片：顶层露出资质认证、接诊量、患者评分；中层展示擅长领域；底层放历史评价。首屏信任信号从 0 提升到 3 条，决策路径缩短 40%。"
      },
      {
        title: "问诊发起链路 5 步，新用户中途放弃率高",
        strategy: "以「合并同类步骤 + 模板化快捷词」压缩发起链路",
        solution: "把「症状选择 → 描述输入 → 医生筛选 → 确认 → 发送」5 步合并为「选症状 → 填描述（快捷词模板）→ 发送」3 步，发起时长从平均 4.2 分钟降到 1.8 分钟，新用户首诊完成率提升 22%。"
      },
      {
        title: "对话与预约状态不透明，用户焦虑等待",
        strategy: "以「可扫描状态条」替代文字提示，让用户始终知道当前进度与下一步",
        solution: "对话模块加入 4 态状态条（已发送 / 医生已读 / 医生回复中 / 预约确认），每态配独立色值与微动效。预约确认页加入倒计时与取消保护，减少误操作。整体用户等待焦虑评分从 6.2 降到 3.8。"
      }
    ],

    keyPages: [
      { src: "assets/projects/haodf/hd-2.jpg", caption: "问诊流程全链路，3 步主流程标注", note: "核心转化路径，用户从进入首页到发出首条问诊消息的完整动线" },
      { src: "assets/projects/haodf/hd-5.jpg", caption: "医生主页信任信息分层", note: "3 层卡片结构，首屏露出 3 条关键信任信号" }
    ],

    metrics: [
      { value: "22%", label: "新用户首诊完成率提升" },
      { value: "5→3", label: "问诊发起步骤" },
      { value: "3.8", label: "等待焦虑评分（↓58%）" }
    ],

    capabilityTags: ["C 端产品设计", "信任设计", "流程简化", "医疗 UX", "状态可视化"],

    images: [
      { src: "assets/projects/haodf/hd-2.jpg", caption: "问诊流程 · 全链路" },
      { src: "assets/projects/haodf/hd-5.jpg", caption: "医生主页 · 信任信息" },
      { src: "assets/projects/haodf/hd-8.jpg", caption: "对话与预约 · 交互" },
      { src: "assets/projects/haodf/hd-11.jpg", caption: "封面 · 改版总览" }
    ]
  },

  {
    id: "cizhen",
    title: "磁振磁电磁治疗仪",
    sub: "用状态矩阵把多模块治疗流程装进一块屏幕",
    tags: ["医疗器械 HMI", "嵌入式", "仁惠医疗"],
    badge: "状态设计",
    period: "4 个月",
    role: "HMI 设计主导",
    industry: "医疗器械",
    thumb: "assets/projects/cizhen/thumb.jpg",

    background: "多模块治疗仪共用一块屏，医生要在治疗、患者管理、参数配置间快速切换，混淆可能带来安全风险。我负责整机的界面状态设计与视觉语言，覆盖 20+ 界面状态。",

    highlights: [
      {
        title: "多模块共用一块屏，医生混淆操作可能带来安全风险",
        strategy: "以「状态矩阵穷举 + 风险等级视觉权重」替代自由切换，让高风险操作始终在视觉顶层",
        solution: "先穷举 6 类主状态（待机 / 登录 / 患者 CRUD / 治疗中 / 禁忌拦截 / 记录汇总），再按风险等级分配 3 级视觉权重：治疗参数（红色强调）> 患者信息（中性）> 系统配置（弱化）。医生在任何界面都能一眼判断当前风险等级，误操作率下降。"
      },
      {
        title: "模块切换认知成本高，医生需要反复定位",
        strategy: "以「模块独立视觉语言 + 统一基础组件」平衡辨识度与一致性",
        solution: "每个模块用独立强调色与层级（治疗 = 红 / 患者 = 蓝 / 配置 = 灰），但共用同一套按钮、表单、表格组件。模块间切换时，色彩与层级提供「方位感」，组件一致性提供「操作确定性」，认知切换时间下降。"
      },
      {
        title: "禁忌拦截界面信息密度高，医生判断慢",
        strategy: "以「三层结构」把拦截原因、处置建议、确认动作分层呈现",
        solution: "禁忌拦截界面拆为 3 层：顶层红色横幅显示拦截原因（1 句话）；中层列出 3 条处置建议（按优先级排序）；底层放「继续 / 取消」双按钮，继续按钮需二次确认。医生从看到拦截到做出判断的时间压缩到 5 秒以内。"
      }
    ],

    keyPages: [
      { src: "assets/projects/cizhen/cz-4.jpg", caption: "待机界面 · 主状态入口", note: "6 类主状态的统一入口，视觉权重最低，操作路径最短" },
      { src: "assets/projects/cizhen/cz-13.jpg", caption: "治疗界面 · 已选患者", note: "状态矩阵应用示例，治疗参数在视觉顶层，患者信息在中层" }
    ],

    metrics: [
      { value: "20+", label: "交付界面状态" },
      { value: "6→3", label: "主状态矩阵（穷举后收敛）" },
      { value: "5s", label: "禁忌拦截判断时间" }
    ],

    capabilityTags: ["医疗器械 HMI", "嵌入式 UI", "状态设计", "安全交互", "视觉权重分配"],

    images: [
      { src: "assets/projects/cizhen/cz-1.jpg", caption: "产品介绍" },
      { src: "assets/projects/cizhen/cz-4.jpg", caption: "待机界面" },
      { src: "assets/projects/cizhen/cz-13.jpg", caption: "治疗界面 · 已选患者" },
      { src: "assets/projects/cizhen/cz-15.jpg", caption: "治疗界面 · 禁忌拦截" },
      { src: "assets/projects/cizhen/cz-17.jpg", caption: "治疗记录 · 汇总" }
    ]
  },

  {
    id: "yilifang",
    title: "医立方",
    sub: "用「业务流驱动」把医生、患者、智能排班装进一个后台",
    tags: ["医疗信息化", "HIS / EMR", "B 端"],
    badge: "设计系统",
    period: "5 个月",
    role: "B 端 UI 设计主导",
    industry: "医疗信息化",
    thumb: "assets/projects/yilifang/thumb.jpg",

    background: "医院信息系统模块多、数据密度高，医生管理、患者管理、智能排班要在一个后台里高效完成，信息错位可能直接影响诊疗。我负责全套界面与深色模式。",

    highlights: [
      {
        title: "按功能点组织信息架构，跨模块切换路径混乱",
        strategy: "以「业务流驱动」替代「功能点驱动」，按 3 条业务线重新组织信息架构",
        solution: "把原来按「用户管理 / 权限 / 排班 / 档案」4 个功能模块划分，重构为「医生流 / 患者流 / 智能排班流」3 条业务线。每条业务线内部按流程顺序排列，跨业务线切换通过顶部导航 + 面包屑双路径。跨模块平均切换步骤从 4 步降到 2 步。"
      },
      {
        title: "数据密度高但无统一呈现规范，各模块视觉风格不一致",
        strategy: "以「组件化 + 统一数据呈现规范」建立设计系统，复用率 80%+",
        solution: "自建 5 套核心组件（数据看板 / 高密度表格 / 动态表单 / 排班日历 / 状态标签），每套组件含 3 种密度等级。医生管理、患者管理共享同一套表格与表单规范，跨模块视觉一致性达标，设计工时节省约 50%。"
      },
      {
        title: "夜间值班与大屏展示场景下浅色界面刺眼、可读性差",
        strategy: "以「WCAG 对比度 + 场景化色板」建立完整深色模式",
        solution: "深色模式独立色板（非简单反色），所有文本对比度 ≥ 4.5:1，数据图表用高亮色替代灰色系。深色模式覆盖登录、看板、医生/患者管理、排班日历全部模块，夜间值班场景下视觉疲劳评分下降 35%。"
      }
    ],

    keyPages: [
      { src: "assets/projects/yilifang/yif-1.jpg", caption: "首页数据总览 · 关键指标看板", note: "3 条业务线的决策入口，关键指标一屏扫读" },
      { src: "assets/projects/yilifang/yif-4.jpg", caption: "医生管理 · 智能排班日历", note: "业务流驱动的核心页面，排班日历与医生详情联动" }
    ],

    metrics: [
      { value: "4→2", label: "跨模块切换步骤" },
      { value: "80%+", label: "组件复用率" },
      { value: "35%", label: "夜间视觉疲劳下降" }
    ],

    capabilityTags: ["B 端复杂系统", "设计系统", "信息架构", "深色模式", "医疗信息化"],

    images: [
      { src: "assets/projects/yilifang/yif-1.jpg", caption: "首页数据总览 · 关键指标看板" },
      { src: "assets/projects/yilifang/yif-4.jpg", caption: "医生管理流程 · 排班与详情" },
      { src: "assets/projects/yilifang/yif-5.jpg", caption: "患者管理流程 · 档案与表单" },
      { src: "assets/projects/yilifang/yif-7.jpg", caption: "深色模式 · 全局视觉适配" }
    ],

    analysis: {
      positioning: "面向中小型医院与连锁诊所的一体化 HIS/EMR 管理平台，把原本分散在多个系统的医生管理、患者档案、智能排班整合到一个 B 端后台，用数据看板做决策入口。",
      product: "桌面 Web 应用，强交互、高密度信息；已成型模块包括登录、首页数据总览、医生管理流程（含智能排班日历）、患者管理流程（含档案表单）、深色模式全局适配。",
      users: "医院信息科管理员、门诊/住院医生、护理排班负责人；决策链为院办主导、信息科落地、临床科室使用。",
      model: "B 端项目制交付（设计 + 前端），可延伸为 SaaS 订阅；价值点在于降低医院自研系统的 UI 成本与沟通成本。",
      differentiators: [
        "业务流驱动的信息架构，跨模块切换步骤 4→2",
        "完整深色模式，WCAG 对比度 ≥ 4.5:1，夜间值班与大屏场景均可用",
        "5 套核心组件复用率 80%+，设计工时节省约 50%",
        "组件化交付可直接进前端，减少沟通与返工成本"
      ],
      stage: "设计交付阶段，界面与视觉系统已成型，进入前端实现与医院试点落地期。",
      risks: [
        "医疗数据合规与等保要求高，落地前需通过安全评审",
        "HIS 市场存在卫宁、东软等成熟厂商，差异化需聚焦体验与轻量部署",
        "医院决策周期长、回款慢，需匹配项目制现金流节奏"
      ],
      opportunities: [
        "医疗信息化持续渗透，DRG/DIP 支付改革催生对精细化管理平台的需求",
        "AI 排班 / 智能诊间辅助是下一步自然延伸",
        "面向连锁诊所的轻量化 SaaS 版本可快速复制，边际成本递减"
      ]
    }
  },

  {
    id: "xiaomeng",
    title: "校园小茗小程序",
    sub: "一站式校园入口，用轻量卡片降低查找成本",
    tags: ["小程序 UI/UX", "校园", "复盘"],
    badge: "信息架构",
    period: "2 个月",
    role: "UI/UX 设计 + 复盘",
    industry: "校园 · C 端",
    thumb: "assets/projects/xiaomeng/thumb.jpg",

    background: "校园生活服务分散，学生查找信息入口不统一。我负责小程序全套界面，并输出一份完整的设计复盘文档。",

    highlights: [
      {
        title: "校园生活服务入口分散，学生查找信息成本高",
        strategy: "以「三大场景一站式入口」替代多入口分散模式",
        solution: "按「学习 / 生活 / 社交」三大场景组织首页，每个场景下用轻量卡片 + 分类导航。学生从「打开 N 个入口找信息」变为「打开 1 个入口按场景浏览」，信息查找路径统一，查找时间下降 40%。"
      },
      {
        title: "信息密度高但无层级，用户无法快速扫读",
        strategy: "以「可扫读卡片 + 固定动作位」建立信息层级",
        solution: "每条信息做成独立卡片，标题 + 摘要 + 时间 3 行固定结构；关键动作（报名 / 查看 / 分享）固定在卡片右下角，位置不变。用户无需学习每类信息的操作方式，扫读效率提升。"
      },
      {
        title: "项目结束后缺少经验沉淀，同类问题反复踩坑",
        strategy: "以「设计复盘文档」把判断逻辑结构化，可复用给后续项目",
        solution: "输出完整复盘文档，覆盖 3 个维度：模块拆解（为什么这样分场景）、交互决策（为什么选卡片而非列表）、视觉降噪（为什么用轻量风格）。文档已作为团队新人 onboarding 材料使用。"
      }
    ],

    keyPages: [
      { src: "assets/projects/xiaomeng/xm-1.jpg", caption: "项目总览 · 三大场景首页", note: "一站式入口的首页结构，学习 / 生活 / 社交三大场景并排" },
      { src: "assets/projects/xiaomeng/xm-2.jpg", caption: "界面细节 · 卡片结构", note: "可扫读卡片的 3 行固定结构 + 右下角固定动作位" }
    ],

    metrics: [
      { value: "40%", label: "信息查找时间下降" },
      { value: "3", label: "复盘维度" },
      { value: "100%", label: "界面模块覆盖" }
    ],

    capabilityTags: ["小程序 UI/UX", "C 端信息架构", "卡片化设计", "复盘方法"],

    images: [
      { src: "assets/projects/xiaomeng/xm-1.jpg", caption: "复盘 · 项目总览" },
      { src: "assets/projects/xiaomeng/xm-2.jpg", caption: "复盘 · 界面细节" },
      { src: "assets/projects/xiaomeng/xm-3.jpg", caption: "复盘 · 模块拆解" }
    ]
  },

  {
    id: "yibin",
    title: "宜宾市大数据可视化",
    sub: "一屏内让决策者抓住城市运行全局态势",
    tags: ["数据大屏", "智慧城市", "HMI"],
    badge: "数据可视化",
    period: "3 个月",
    role: "数据大屏设计主导",
    industry: "智慧城市",
    thumb: "assets/projects/yibin/thumb.jpg",

    background: "城市运行数据维度多、更新快，决策者需要在一屏内快速抓住全局态势。我负责综合大屏与城管、环卫、污水、执法四个专题的视觉方案。",

    highlights: [
      {
        title: "城市运行数据维度多，决策者无法一屏内抓住全局",
        strategy: "以「总览 → 下钻」两级信息架构组织大屏",
        solution: "综合大屏只放 6 个核心指标（一屏扫读），每个指标可下钻到对应专题页（城管 / 环卫 / 污水 / 执法）。决策者先看全局，再按需下钻，信息获取路径从「平铺 20+ 指标」变为「6 → 下钻」两级结构。"
      },
      {
        title: "四个专题各自为战，视觉风格不一致，切换成本高",
        strategy: "以「统一数据视觉语言」建立 4 个专题的共同底座",
        solution: "所有图表共用一套颜色（4 色主色系 + 灰阶）、字号（3 级）、动效节奏（2s 循环）。每个专题只换主色与图表组合，底座不变。专题间切换无视觉跳变，扫读连贯性提升。"
      },
      {
        title: "不同专题的数据特征差异大，通用图表无法适配",
        strategy: "以「场景化图表组合」让每个专题用最适合的可视化形式",
        solution: "城管用地图 + 实时事件流；环卫用热力图 + 趋势线；污水用仪表盘 + 阈值告警；执法用时间轴 + 案件卡片。4 种图表组合各自适配场景，但共用同一套底座组件，开发维护成本可控。"
      }
    ],

    keyPages: [
      { src: "assets/projects/yibin/yb-1.jpg", caption: "综合展示 · 6 核心指标一屏扫读", note: "总览层，决策者入口，下钻路径标注" },
      { src: "assets/projects/yibin/yb-2.jpg", caption: "城管运行 · 地图 + 实时事件流", note: "下钻层，场景化图表组合示例" }
    ],

    metrics: [
      { value: "6→4", label: "总览指标 → 专题下钻" },
      { value: "4", label: "场景化图表组合" },
      { value: "1", label: "统一视觉底座" }
    ],

    capabilityTags: ["数据可视化", "智慧城市", "大屏设计", "信息层级", "场景化图表"],

    images: [
      { src: "assets/projects/yibin/yb-1.jpg", caption: "综合展示" },
      { src: "assets/projects/yibin/yb-2.jpg", caption: "城管运行" },
      { src: "assets/projects/yibin/yb-4.jpg", caption: "环卫专题" },
      { src: "assets/projects/yibin/yb-5.jpg", caption: "污水专题" },
      { src: "assets/projects/yibin/yb-6.jpg", caption: "执法专题" }
    ]
  },

  {
    id: "aigc",
    title: "AIGC 辅助设计工作流",
    sub: "把 AI 用在情绪板与概念探索，人工聚焦落地细节",
    tags: ["AIGC 设计", "Midjourney", "Stable Diffusion"],
    badge: "设计方法论",
    period: "持续",
    role: "AIGC 设计实践",
    industry: "设计方法论",
    thumb: "assets/projects/aigc/thumb.jpg",

    background: "设计探索阶段需要快速产出大量视觉方向，传统流程成本高、周期长。我搭建了一套可复用的 AI 辅助设计工作流，已在团队内推广。",

    highlights: [
      {
        title: "设计探索阶段需要快速产出大量视觉方向，传统流程成本高、周期长",
        strategy: "以「MJ × SD 双引擎分工」把 AI 用在概念探索阶段",
        solution: "Midjourney 负责出 5–8 个概念方向（情绪板级别），Stable Diffusion 负责在选中方向上做细节微调（配色 / 构图 / 元素替换）。两个工具分工明确，探索周期从 1–2 周压到 1–2 天。"
      },
      {
        title: "AI 生成结果细节粗糙，直接落地会拉低产品视觉质量",
        strategy: "以「人工聚焦落地细节」把 AI 产出限制在概念层",
        solution: "AI 出方向后，人工负责 4 项精细化打磨：字号层级、颜色校准、间距节奏、图标统一。AI 不碰这 4 项，保证落地质量。探索阶段速度提升，落地阶段质量不降级。"
      },
      {
        title: "个人经验无法复制，团队其他人仍走旧流程",
        strategy: "以「SOP 文档 + 模板库」把工作流沉淀为团队资产",
        solution: "输出 3 份 SOP（MJ 提示词模板 / SD 微调 checklist / 人工打磨 4 项标准）+ 1 套 Figma 模板库。团队其他设计师可直接套用，AI 辅助设计从「个人能力」变成「团队能力」。"
      }
    ],

    keyPages: [
      { src: "assets/projects/aigc/ai-1.jpg", caption: "Midjourney · 概念方向 A", note: "情绪板级别，5–8 个方向中的一个" },
      { src: "assets/projects/aigc/ai-2.jpg", caption: "Stable Diffusion · 概念方向 B", note: "细节微调后，配色与构图已收敛" }
    ],

    metrics: [
      { value: "周→天", label: "探索周期（1–2 周 → 1–2 天）" },
      { value: "3", label: "SOP 文档" },
      { value: "4", label: "人工打磨项" }
    ],

    capabilityTags: ["AIGC 设计", "设计方法论", "工作流 SOP", "AI 工具链"],

    images: [
      { src: "assets/projects/aigc/ai-1.jpg", caption: "Midjourney · 概念 A" },
      { src: "assets/projects/aigc/ai-2.jpg", caption: "Stable Diffusion · 概念 B" },
      { src: "assets/projects/aigc/ai-3.jpg", caption: "Midjourney · 概念 C" },
      { src: "assets/projects/aigc/ai-4.jpg", caption: "工作流 · 组合输出" }
    ]
  }
];

// ---------- 渲染项目卡片 ----------
const list = document.getElementById("projectList");
list.innerHTML = PROJECTS.map((p, i) => `
  <article class="project-card reveal" data-index="${i}" tabindex="0" role="button" aria-label="打开案例：${p.title}">
    <div class="card-thumb">
      <img src="${p.thumb}" alt="${p.title}" loading="lazy">
      <span class="card-badge">${p.badge}</span>
    </div>
    <div class="card-body">
      <div class="card-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      <h3 class="card-title">${p.title}</h3>
      <p class="card-sub">${p.sub}</p>
      <div class="card-meta">${p.period} · ${p.role}</div>
      <span class="card-more">查看项目详情 <span class="arrow">→</span></span>
    </div>
  </article>`).join("");

// ---------- 案例弹窗（6 区块） ----------
const modal = document.getElementById("caseModal");
const sheet = document.getElementById("modalSheet");
let currentCase = 0;

function openCase(i) {
  currentCase = i;
  const p = PROJECTS[i];

  const metaLine = [p.period, p.role, p.industry].filter(Boolean).join(" · ");

  const highlightsHtml = (p.highlights || []).map((h, hi) => {
    // 模板「小标题胶囊」：手绘括号 + 圆点 + 粗体文字 + 箭头
    const cap = `<div class="hl-caption">
      <img class="paren-l" src="assets/tpl-left-paren.svg" alt="">
      <img class="paren-r" src="assets/tpl-left-paren.svg" alt="">
      <span class="hl-dot"></span>
      <span class="hl-caption-text">设计亮点 ${hi+1} · ${h.title}</span>
      <img class="hl-arrow" src="assets/tpl-arrow.svg" alt="">
    </div>`;
    if (h.strategy) {
      return `
    <div class="highlight">
      ${cap}
      <div class="hl-tri">
        <div class="tri"><b>问题</b><p>${h.title}</p></div>
        <div class="tri"><b>策略</b><p>${h.strategy}</p></div>
        <div class="tri"><b>方案</b><p>${h.solution}</p></div>
      </div>
    </div>`;
    } else {
      return `
    <div class="highlight">
      ${cap}
      <p class="hl-body">${h.body}</p>
    </div>`;
    }
  }).join("");

  const keyPagesHtml = (p.keyPages || []).map(k => `
    <figure class="keypage">
      <img src="${k.src}" alt="${k.caption}" loading="lazy">
      <figcaption>
        <span class="keypage-cap">${k.caption}</span>
        ${k.note ? `<span class="keypage-note">${k.note}</span>` : ""}
      </figcaption>
    </figure>`).join("");

  const metricsHtml = (p.metrics && p.metrics.length) ? `
    <div class="metrics-row">
      ${p.metrics.map(m => `
        <div class="metric-card">
          <span class="metric-value">${m.value}</span>
          <span class="metric-label">${m.label}</span>
        </div>`).join("")}
    </div>` : "";

  const cesareHtml = (p.capabilityTags && p.capabilityTags.length) ? `
    <div class="cesare">
      <span class="cesare-name">核心能力</span>
      <div class="cesare-tags">
        ${p.capabilityTags.map(t => `<span class="cap-pill">${t}</span>`).join("")}
      </div>
    </div>` : "";

  sheet.innerHTML = `
    <button class="modal-close" id="modalClose" aria-label="关闭案例">✕</button>

    <!-- 区块 1：封面（模板「标题-黑」结构：KR 胶囊 + 副标题 + 大标题 + 右上角 badge） -->
    <div class="case-cover">
      ${p.badge ? `<div class="case-badge">
        <span class="paren paren-l"><img src="assets/tpl-left-paren.svg" alt=""></span>
        <span class="badge-text">${p.badge}</span>
        <span class="paren paren-r"><img src="assets/tpl-left-paren.svg" alt=""></span>
      </div>` : ""}
      <div class="case-krow">
        <span class="case-k">${p.industry || "项目"}</span>
        <span class="case-ktext">${p.role || ""} ${p.period ? "· " + p.period : ""}</span>
      </div>
      <h2 class="case-title">${p.title}</h2>
      <p class="case-sub">${p.sub}</p>
      ${metaLine ? `<p class="case-meta">${metaLine}</p>` : ""}
    </div>

    <!-- 区块 2：背景（模板正文规格：28px→18px / 行高 1.8 / #626262） -->
    <div class="case-section">
      <div class="case-section-title">
        <img class="sec-paren-l" src="assets/tpl-left-paren.svg" alt="">
        <img class="sec-paren-r" src="assets/tpl-left-paren.svg" alt="">
        <span class="sec-dot"></span>
        <h3>项目背景</h3>
      </div>
      <p class="case-section-body">${p.background}</p>
    </div>

    <!-- 区块 3：设计亮点 ×3 -->
    <div class="case-section">
      <div class="case-section-title">
        <img class="sec-paren-l" src="assets/tpl-left-paren.svg" alt="">
        <img class="sec-paren-r" src="assets/tpl-left-paren.svg" alt="">
        <span class="sec-dot"></span>
        <h3>设计亮点</h3>
      </div>
      <div class="highlights">${highlightsHtml}</div>
    </div>

    <!-- 区块 4：关键页面 -->
    <div class="case-section">
      <div class="case-section-title">
        <img class="sec-paren-l" src="assets/tpl-left-paren.svg" alt="">
        <img class="sec-paren-r" src="assets/tpl-left-paren.svg" alt="">
        <span class="sec-dot"></span>
        <h3>关键页面</h3>
      </div>
      <div class="keypages">${keyPagesHtml}</div>
    </div>

    <!-- 区块 5：成果指标 -->
    ${metricsHtml ? `<div class="case-section">
      <div class="case-section-title">
        <img class="sec-paren-l" src="assets/tpl-left-paren.svg" alt="">
        <img class="sec-paren-r" src="assets/tpl-left-paren.svg" alt="">
        <span class="sec-dot"></span>
        <h3>成果与数据</h3>
      </div>
      ${metricsHtml}
    </div>` : ""}

    <!-- 区块 6：能力标签 -->
    ${cesareHtml ? `<div class="case-section">
      <div class="case-section-title">
        <img class="sec-paren-l" src="assets/tpl-left-paren.svg" alt="">
        <img class="sec-paren-r" src="assets/tpl-left-paren.svg" alt="">
        <span class="sec-dot"></span>
        <h3>能力标签</h3>
      </div>
      ${cesareHtml}
    </div>` : ""}

    <!-- 可选：8 维分析（医立方） -->
    ${renderAnalysis(p.analysis)}
  `;

  modal.classList.add("open");
  document.body.style.overflow = "hidden";
  sheet.querySelector("#modalClose").addEventListener("click", closeCase);
  // 关键页面可点击开灯箱
  sheet.querySelectorAll(".keypage img").forEach(img => {
    img.addEventListener("click", () => {
      const idx = PROJECTS[currentCase].images.findIndex(im => im.src === img.src);
      openLightbox(PROJECTS[currentCase].images, idx >= 0 ? idx : 0);
    });
  });
}

function closeCase() {
  modal.classList.remove("open");
  document.body.style.overflow = "";
}

// ---------- 8 维分析（可选） ----------
function renderAnalysis(a) {
  if (!a) return "";
  const ul = arr => (arr && arr.length ? `<ul class="analysis-list">${arr.map(x => `<li>${x}</li>`).join("")}</ul>` : "");
  const sec = (label, val) => (val ? `<div class="analysis-item"><h4>${label}</h4><p>${val}</p></div>` : "");
  const items = [
    sec("核心定位", a.positioning),
    sec("产品形态", a.product),
    sec("目标用户", a.users),
    sec("运营模式", a.model),
    (a.differentiators && a.differentiators.length) ? `<div class="analysis-item"><h4>差异化特性</h4>${ul(a.differentiators)}</div>` : "",
    sec("当前阶段", a.stage),
    (a.risks && a.risks.length) ? `<div class="analysis-item"><h4>潜在风险</h4>${ul(a.risks)}</div>` : "",
    (a.opportunities && a.opportunities.length) ? `<div class="analysis-item"><h4>市场机遇</h4>${ul(a.opportunities)}</div>` : ""
  ].filter(Boolean);
  if (!items.length) return "";
  return `<div class="analysis"><h3 class="analysis-title">项目详情分析</h3><div class="analysis-grid">${items.join("")}</div></div>`;
}

list.addEventListener("click", (e) => {
  const card = e.target.closest(".project-card");
  if (card) openCase(+card.dataset.index);
});
list.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    const card = e.target.closest(".project-card");
    if (card) { e.preventDefault(); openCase(+card.dataset.index); }
  }
});
modal.addEventListener("click", (e) => { if (e.target === modal) closeCase(); });
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") { closeCase(); closeLightbox(); }
});

// ---------- 灯箱 ----------
const lb = document.getElementById("lightbox");
const lbImg = document.getElementById("lightboxImg");
const lbCap = document.getElementById("lightboxCaption");
let lbSrcs = [], lbI = 0;

function openLightbox(srcs, i) {
  lbSrcs = srcs; lbI = i;
  lbImg.src = srcs[i].src; lbCap.textContent = srcs[i].caption;
  lb.classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeLightbox() { lb.classList.remove("open"); if (!modal.classList.contains("open")) document.body.style.overflow = ""; }
document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
document.getElementById("lightboxPrev").addEventListener("click", () => openLightbox(lbSrcs, (lbI - 1 + lbSrcs.length) % lbSrcs.length));
document.getElementById("lightboxNext").addEventListener("click", () => openLightbox(lbSrcs, (lbI + 1) % lbSrcs.length));
lb.addEventListener("click", (e) => { if (e.target === lb) closeLightbox(); });

// ---------- 滚动：进度条 / 导航 / 入场动画 ----------
const nav = document.getElementById("nav");
const bar = document.getElementById("progress");
addEventListener("scroll", () => {
  nav.classList.toggle("scrolled", scrollY > 40);
  const h = document.documentElement;
  bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + "%";
}, { passive: true });

const io = new IntersectionObserver((entries) => {
  entries.forEach((en, i) => {
    if (en.isIntersecting) {
      en.target.style.transitionDelay = (i * 80) + "ms";
      en.target.classList.add("visible");
      io.unobserve(en.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// ---------- 详情基准屏渲染（?tpl=1&case=N）----------
(function renderCaseBench() {
  const run = () => {
  const q = new URLSearchParams(location.search);
  if (q.get("tpl") !== "1") return;
  const caseIdx = q.get("case") ? (+q.get("case")) : 0;
  const p = PROJECTS[caseIdx];
  if (!p) return;
  document.body.classList.add("case-bench-only");
  document.body.classList.remove("tpl-bench-only");
  const tpl = "assets/tpl-";
  const parenL = `<img class="pc-l" src="${tpl}left-paren.svg" alt="">`;
  const parenR = `<img class="pc-r" src="${tpl}left-paren.svg" alt="">`;
  const dot = `<span class="dot"></span>`;

  const metaLine = [p.period, p.role, p.industry].filter(Boolean).join(" · ");
  const secTitle = (t) => `<div class="cb-sectitle">${parenL}${parenR}${dot}<h3>${t}</h3></div>`;

  const hl = (p.highlights || []).map((h, i) => `
    <div class="hl-item">
      <div class="cap">${parenL}${parenR}${dot}<span class="txt">设计亮点 ${i+1} · ${h.title}</span><img class="arw" src="${tpl}arrow.svg" alt=""></div>
      ${h.strategy ? `
      <div class="tri">
        <div><b>问题</b><p>${h.title}</p></div>
        <div><b>策略</b><p>${h.strategy}</p></div>
        <div><b>方案</b><p>${h.solution}</p></div>
      </div>` : `<p class="hl-body">${h.body||""}</p>`}
    </div>`).join("");

  const kp = (p.keyPages || []).map(k => `
    <figure>
      <img src="${k.src}" alt="">
      <figcaption><span class="cap-t">${k.caption}</span>${k.note?`<span class="cap-n">${k.note}</span>`:""}</figcaption>
    </figure>`).join("");

  const met = (p.metrics && p.metrics.length)
    ? `<div class="cb-metrics">${p.metrics.map(m=>`<div><span class="v">${m.value}</span><span class="l">${m.label}</span></div>`).join("")}</div>` : "";

  const cap = (p.capabilityTags && p.capabilityTags.length)
    ? `<div class="cb-cap"><span class="name">核心能力</span><div class="tags">${p.capabilityTags.map(t=>`<span>${t}</span>`).join("")}</div></div>` : "";

  const root = document.getElementById("caseBench");
  if (!root) return;
  root.innerHTML = `
    <div class="cb-cover">
      ${p.badge ? `<div class="cb-badge"><span class="pc-l">${parenL}</span><span>${p.badge}</span><span class="pc-r">${parenR}</span></div>` : ""}
      <div class="cb-krow"><span class="cb-k">${p.industry||"项目"}</span><span class="cb-ktext">${p.role||""} ${p.period?"· "+p.period:""}</span></div>
      <h2 class="cb-title">${p.title}</h2>
      <p class="cb-sub">${p.sub}</p>
      ${metaLine?`<p class="cb-meta">${metaLine}</p>`:""}
    </div>
    <div class="cb-sec">${secTitle("项目背景")}<p class="cb-body">${p.background}</p></div>
    <div class="cb-sec">${secTitle("设计亮点")}<div class="cb-hl">${hl}</div></div>
    <div class="cb-sec">${secTitle("关键页面")}<div class="cb-imgs">${kp}</div></div>
    ${met?`<div class="cb-sec">${secTitle("成果与数据")}${met}</div>`:""}
    ${cap?`<div class="cb-sec">${secTitle("能力标签")}${cap}</div>`:""}
  `;
  };
  if (document.readyState === "loading") { document.addEventListener("DOMContentLoaded", run); } else { run(); }
})();

