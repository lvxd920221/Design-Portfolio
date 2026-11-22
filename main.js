// ============================================================
// 作品集数据：按玄漓 Figma 模板「项目展示页」6 区块结构组织。
// 每个项目字段说明见 notes/figma_template_structure.md。
// ============================================================
const PROJECTS = [
  {
    id: "cizhen",
    title: "磁振磁电磁治疗仪",
    sub: "从 0 到 1 建立 18 屏触控交互，把安全前置和双通道并行落成界面里能反复沿用的做法",
    tags: ["医疗器械 HMI", "嵌入式", "仁惠医疗"],
    badge: "状态设计",
    period: "4 个月",
    role: "HMI 设计主导",
    industry: "医疗器械",
    thumb: "assets/projects/cizhen/thumb.jpg",

    background: "一台多模块治疗仪，治疗、患者管理和参数配置都在同一块屏上切换，切错可能带来安全风险。我负责整机的界面状态设计与视觉语言，前后覆盖 20+ 界面状态。",

    highlights: [
      {
        title: "多模块共用一块屏，医生混淆操作可能带来安全风险",
        strategy: "没有放任模块间自由切换。先做状态矩阵穷举，再用风险等级视觉权重安排各状态的层级，让高风险操作始终留在视觉顶层。",
        solution: "先穷举 6 类主状态（待机 / 登录 / 患者 CRUD / 治疗中 / 禁忌拦截 / 记录汇总），再按风险等级分配 3 级视觉权重：治疗参数用红色强调，患者信息保持中性，系统配置弱化。医生进到任一界面，能先判断当前处在哪个风险层级。误操作率下降是设计预期，这部分没有做实测。"
      },
      {
        title: "模块切换认知成本高，医生需要反复定位",
        strategy: "模块要容易区分，基础操作又不能跟着变，所以让每个模块有独立的视觉语言，按钮、表单、表格仍然共用一套。",
        solution: "治疗、患者和配置模块分别用红、蓝、灰作强调色（治疗 = 红 / 患者 = 蓝 / 配置 = 灰），但按钮、表单、表格共用同一套组件。切换模块时，颜色和层级给医生一个方位感，组件不变则保证操作不用重新学。认知切换时间下降也是设计预期，没有做实测。"
      },
      {
        title: "禁忌拦截界面信息密度高，医生判断慢",
        strategy: "禁忌拦截的信息太密，医生判断慢。所以把拦截原因、处置建议、确认动作分三层摆，而不是挤在一屏里。",
        solution: "禁忌拦截界面拆成 3 层：顶层红色横幅写明拦截原因（1 句话），中层列 3 条按优先级排序的处置建议，底层放「继续 / 取消」双按钮，继续需要二次确认。「判断时间压缩到 5 秒以内」是设计目标，没有做过实测。"
      }
    ],

    keyPages: [
      { src: "assets/projects/cizhen/cz-4_hd.jpg", caption: "待机界面 · 主状态入口", note: "6 类主状态的统一入口，视觉权重最低，操作路径最短" },
      { src: "assets/projects/cizhen/cz-13_hd.jpg", caption: "治疗界面 · 已选患者", note: "状态矩阵应用示例，治疗参数在视觉顶层，患者信息在中层" }
    ],

    metrics: [
      { value: "20+", label: "交付界面状态" },
      { value: "6→3", label: "主状态矩阵（穷举后收敛）" },
      { value: "5s", label: "禁忌拦截判断时间" }
    ],

    capabilityTags: ["医疗器械 HMI", "嵌入式 UI", "状态设计", "安全交互", "视觉权重分配"],

    images: [
      { src: "assets/projects/cizhen/cz-1_hd.jpg", caption: "产品介绍" },
      { src: "assets/projects/cizhen/cz-4_hd.jpg", caption: "待机界面" },
      { src: "assets/projects/cizhen/cz-13_hd.jpg", caption: "治疗界面 · 已选患者" },
      { src: "assets/projects/cizhen/cz-15_hd.jpg", caption: "治疗界面 · 禁忌拦截" },
      { src: "assets/projects/cizhen/cz-17_hd.jpg", caption: "治疗记录 · 汇总" }
    ]
  },

  {
    id: "ruihe",
    title: "瑞合祥互联网医院 APP",
    sub: "患者填的、医生看的得是同一份，所以问诊单做了双端同构；资质前置、开方结构化、履约状态可溯都围着这件事走",
    tags: ["App UI/UX", "互联网医疗", "双端协同"],
    badge: "流程设计",
    period: "【待补充】",
    role: "UI/UX 设计主导",
    industry: "互联网医疗 · 双端",
    thumb: "assets/projects/ruihe/thumb.jpg",

    background: "面向中医复诊场景的双端 APP：患者端完成问诊与购药，医生端完成接诊与开方。我从两端 96 张界面稿中归纳设计命题，把「资质核验—问诊—开方—履约」四段流程串成可确认、可追溯的路径。",

    highlights: [
      {
        title: "线上复诊须先确认实体机构诊断，入口若不设卡会被当作首诊平台",
        strategy: "复诊资格不能只靠一份免责声明带过。我在查看处方之前放了阻断式确认，把资质判断做成不能跳过的动作。",
        solution: "在查看处方之前设置诊断确认弹窗，与《互联网诊疗风险告知及同意书》同屏勾选；病历上传页拆成「材料归属」与「医生可用范围」两项授权。代价是每位患者多一次确认，换来责任边界在界面上可见、可留痕。"
      },
      {
        title: "患者自述与医生所见若字段不同，会出现信息断层与判断偏差",
        strategy: "患者填什么、医生就得看到什么，所以两端用同构字段集，只按角色调整信息呈现的密度，不各自裁剪。",
        solution: "身高体重、过敏史、既往病史、自述、实体病历与四个问诊问题，患者端与医生端逐字段一致（两端各一张同名问诊单稿可核对）。代价是患者端表单比极简方案长，用预填示例与分组降低填写负担。"
      },
      {
        title: "视频问诊需按顺序叫号，空白等待态让无法判断还要等多久",
        strategy: "空白的加载动画让人不知道还要等多久，所以视频诊室改成可解释的排队卡，把等待变成可预期的状态。",
        solution: "视频诊室展示预约时间、就诊排序、预计排到时间与「退出诊室」；代价是多一层排队状态开发，换来等待从焦虑变为可预期。"
      }
    ],

    keyPages: [
      { src: "assets/projects/ruihe/card-3.jpg", caption: "诊疗方案 · 诊断确认", note: "阻断式确认弹窗与同意书勾选，把资质判断前置到查看处方之前" },
      { src: "assets/projects/ruihe/card-2.jpg", caption: "在线开方 · 结构化录入", note: "辨病 / 辨证 / 药材 / 用法四段拆分，配模板复用与药房换算说明" }
    ],

    metrics: [
      { value: "96", label: "界面稿总数" },
      { value: "47+49", label: "患者端 / 医生端分布" },
      { value: "5", label: "订单状态枚举" }
    ],

    capabilityTags: ["双端协同", "复诊流程设计", "信息架构", "状态设计", "医疗 UX"],

    images: [
      { src: "assets/projects/ruihe/card-1.jpg", caption: "患者端 · 首页" },
      { src: "assets/projects/ruihe/card-2.jpg", caption: "医生端 · 在线开方" },
      { src: "assets/projects/ruihe/card-3.jpg", caption: "诊疗方案 · 诊断确认" },
      { src: "ruihe-screens/u-intake.jpg", caption: "问诊单 · 双端同构" },
      { src: "ruihe-screens/d-assistant.jpg", caption: "助理账号 · 两级权限" }
    ]
  },

  {
    id: "gov",
    title: "数字企业大数据监管平台",
    sub: "六个并列主题共用一套监管语言：框架恒定、主视觉按主题换语义、图表编码跨屏复用",
    tags: ["大屏可视化", "国资监管", "六主题并列"],
    badge: "数据可视化",
    period: "【待补充】",
    role: "UI/UX 设计（职责范围待补充）",
    industry: "国资监管 · 大屏可视化",
    thumb: "assets/projects/gov/thumb.jpg",

    background: "一套国资监管场景的大屏可视化：国资监管、投资管理、经济运行、三重一大、党建管理、风控分析六个主题并列成屏。我在 1920×720 的画布里，把总量、结构、趋势与分布译成一套可跨屏复用的图表与视觉语言。画面业务数字均为界面示意数据，非经核实业务指标。",

    highlights: [
      {
        title: "六个业务域差异大，多级菜单会把监看信息藏深",
        strategy: "以顶栏平铺替代多级下钻，一屏一主题、切换即换屏",
        solution: "六个模块同排固定在顶栏，标题条与底部落款跨屏恒定。代价是顶栏占高、单屏信息密度高；换来的是主题位置稳定，观众不需要学习目录结构。依据：六张画面顶栏模块名称与位置一致。"
      },
      {
        title: "统一地球模板省资产但丢辨识，完全自由又散成六套风格",
        strategy: "按主题语义更换中央载体，但沿用同一外框与光效体系",
        solution: "地球（总览/投资）、数据光柱（经济运行）、四立方体（三重一大）、党旗五角星（党建）、盾牌（风控）各司其职。代价是多套主视觉资产、一致性维护成本上升；换来的是主题一眼可辨。依据：六屏中央载体各异但外框与描边统一。"
      },
      {
        title: "六种主视觉差异越大越容易各自成套，缺恒定元素就不像一个平台",
        strategy: "用恒定框架承载差异化内容，而非各主题独立设计",
        solution: "固定顶栏、标题条、底部署款、霓虹青蓝描边与金色点缀，只替换主视觉与数据区。代价是单主题个性受限；换来的是平台感与跨屏一致辨识。依据：六屏均为深蓝底、青蓝描边、金色点缀，底部统一落款。"
      }
    ],

    keyPages: [
      { src: "assets/projects/gov/card-2.jpg", caption: "三重一大 · 议事与事项", note: "中央四立方体对应四类重大事项，两侧承载会议、事项与议事统计" },
      { src: "assets/projects/gov/card-3.jpg", caption: "风控分析 · 预警与债务", note: "七维预警用雷达看差距，债务到期用列表看确切值" }
    ],

    metrics: [
      { value: "6", label: "主题屏（截图清点）" },
      { value: "6", label: "顶栏模块（六屏比对）" },
      { value: "5", label: "主视觉载体类型（画面取样）" }
    ],

    capabilityTags: ["大屏可视化", "信息架构", "图表编码", "视觉规范", "多主题一致性"],

    images: [
      { src: "assets/projects/gov/card-1.jpg", caption: "国资监管 · 总览" },
      { src: "assets/projects/gov/card-2.jpg", caption: "三重一大" },
      { src: "assets/projects/gov/card-3.jpg", caption: "风控分析" },
      { src: "gov-screens/gov-economy.jpg", caption: "经济运行" },
      { src: "gov-screens/gov-party.jpg", caption: "党建管理" }
    ]
  },

  {
    id: "pujin",
    title: "普今招聘 · 三端招聘平台",
    sub: "把找工作、招人、平台运营接成一条可核对的链：身份先分流、对象同语义、端点各收敛",
    tags: ["Web 平台", "三端协同", "商业化设计"],
    badge: "平台设计",
    period: "【待补充】",
    role: "UI/UX 设计（职责范围待补充）",
    industry: "招聘 · 三端平台",
    thumb: "assets/projects/pujin/thumb.jpg",

    background: "一套覆盖求职者、企业 HR 与平台运营的招聘平台。前台按城市与职位分发流量，HR 工作台把职位、简历与沟通收在一处，运营后台管理企业、审核与付费道具。设计依据来自需求汇总、接口文档与 686 张界面稿，运营成效无来源处标注待补充。",

    highlights: [
      {
        title: "求职者与企业 HR 的注册字段、权限与付费能力都不同",
        strategy: "以身份入口分流替代统一注册后再选角色",
        solution: "登录注册按个人/企业分轨：个人填教育经历与求职意向，企业填账号信息并进入会员认证。代价是多套表单维护；换来身份语义从第一步就清晰，后续权限判断有据。依据：接口 /api/proving 先判注册态再分流。"
      },
      {
        title: "11 项筛选 + 31KB 职位分类 + 31 省市城市库压在同一场景",
        strategy: "按语义分组而非平铺全部条件，跨端指向同一字段",
        solution: "条件按时间/薪资/学历/经验/企业成组，行业职位与城市用层级选择；同名筛选项在三端指向一致字段。代价是多一层组件交互；换来高密度筛选仍可扫读。依据：《11项选择内容》《行业职位分类表》《城市选择》。"
      },
      {
        title: "急聘、置顶、简历下载都是付费动作，临门告知会让用户产生误导感",
        strategy: "在触发入口前置显示价格、时长与权限差异",
        solution: "权限不足时在发布入口直接提示，急聘/置顶按钮旁写明价格与周期，支付走微信/支付宝扫码。代价是入口文案更重；换来规则可见、付费决策发生在知情之后。依据：HR 需求文档明确免费额度与急聘/置顶定价。"
      }
    ],

    keyPages: [
      { src: "assets/projects/pujin/card-2.jpg", caption: "HR 工作台 · 三行功能矩阵", note: "职位/简历/人才按对象分块，下方四组待办卡给出该先做什么" },
      { src: "assets/projects/pujin/card-3.jpg", caption: "找人才 · 简历筛选", note: "筛选与结果同屏，付费道具在动作入口就地露出" }
    ],

    metrics: [
      { value: "686", label: "界面稿（元数据清点）" },
      { value: "11", label: "搜索筛选项（需求文档）" },
      { value: "9", label: "接口端点（接口文档）" }
    ],

    capabilityTags: ["三端协同", "信息架构", "商业化设计", "SEO 架构", "Web 平台"],

    images: [
      { src: "assets/projects/pujin/card-1.jpg", caption: "前台 · 未登录首页" },
      { src: "assets/projects/pujin/card-2.jpg", caption: "HR 工作台" },
      { src: "assets/projects/pujin/card-3.jpg", caption: "找人才" },
      { src: "pujin-screens/p-login.jpg", caption: "登录与注册" },
      { src: "pujin-screens/b-company.jpg", caption: "运营后台 · 企业列表" }
    ]
  },

  {
    id: "xiaomeng",
    title: "校园小茗小程序",
    sub: "把分散的校园服务收进一个入口，首页按学习、生活、社交分场景，卡片统一结构",
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
        strategy: "原来一项服务一个入口，学生得先记住去哪找。我把首页按学习、生活、社交三个场景重排，先按要做的事选区域。",
        solution: "首页围绕「学习 / 生活 / 社交」三大场景，每个场景下用轻量卡片 + 分类导航。学生不用记每项服务在哪个入口，进来先按场景看。信息查找路径统一，查找时间下降 40%（设计侧估算，还没做过统一统计）。"
      },
      {
        title: "信息密度高但无层级，用户无法快速扫读",
        strategy: "信息一多就没了层级。我给每条信息固定成标题、摘要、时间三行，用可扫读卡片加固定动作位，让人不必逐条重新学。",
        solution: "每条信息做成独立卡片，标题 + 摘要 + 时间 3 行固定结构；报名 / 查看 / 分享固定在卡片右下角，位置不变。换一类信息也不用重新学怎么操作。「扫读效率提升」是设计预期，没有做实测。"
      },
      {
        title: "项目结束后缺少经验沉淀，同类问题反复踩坑",
        strategy: "项目收尾时把当时的判断和取舍整理成设计复盘文档，方便后续同类项目参考，而不只是留一堆界面稿。",
        solution: "输出完整复盘文档，覆盖 3 个维度：模块拆解（为什么这样分场景）、交互决策（为什么选卡片而非列表）、视觉降噪（为什么用轻量风格）。文档已作为团队新人 onboarding 材料使用。"
      }
    ],

    keyPages: [
      { src: "assets/projects/xiaomeng/xm-2_hd.jpg", caption: "项目总览 · 三大场景首页", note: "一站式入口的首页结构，学习 / 生活 / 社交三大场景并排" },
      { src: "assets/projects/xiaomeng/xm-3.jpg", caption: "界面细节 · 卡片结构", note: "可扫读卡片的 3 行固定结构 + 右下角固定动作位" }
    ],

    metrics: [
      { value: "40%", label: "信息查找时间下降" },
      { value: "3", label: "复盘维度" },
      { value: "100%", label: "界面模块覆盖" }
    ],

    capabilityTags: ["小程序 UI/UX", "C 端信息架构", "卡片化设计", "复盘方法"],

    images: [
      { src: "assets/projects/xiaomeng/xm-2_hd.jpg", caption: "复盘 · 项目总览" },
      { src: "assets/projects/xiaomeng/xm-3.jpg", caption: "复盘 · 界面细节" },
      { src: "assets/projects/xiaomeng/xm-1.jpg", caption: "复盘 · 模块拆解" }
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
      { src: "assets/projects/yibin/yb-1_hd.jpg", caption: "综合展示 · 6 核心指标一屏扫读", note: "总览层，决策者入口，下钻路径标注" },
      { src: "assets/projects/yibin/yb-2_hd.jpg", caption: "城管运行 · 地图 + 实时事件流", note: "下钻层，场景化图表组合示例" }
    ],

    metrics: [
      { value: "6→4", label: "总览指标 → 专题下钻" },
      { value: "4", label: "场景化图表组合" },
      { value: "1", label: "统一视觉底座" }
    ],

    capabilityTags: ["数据可视化", "智慧城市", "大屏设计", "信息层级", "场景化图表"],

    images: [
      { src: "assets/projects/yibin/yb-1_hd.jpg", caption: "综合展示" },
      { src: "assets/projects/yibin/yb-2_hd.jpg", caption: "城管运行" },
      { src: "assets/projects/yibin/yb-4_hd.jpg", caption: "环卫专题" },
      { src: "assets/projects/yibin/yb-5_hd.jpg", caption: "污水专题" },
      { src: "assets/projects/yibin/yb-6_hd.jpg", caption: "执法专题" }
    ]
  },

  {
    id: "aigc",
    title: "AIGC 辅助设计工作流",
    sub: "把 AI 用在情绪板和概念探索，Midjourney 出方向、Stable Diffusion 做微调，落地仍由人工打磨",
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
        strategy: "探索阶段要试的方向多，全靠手做太慢。所以让 Midjourney 和 Stable Diffusion 各管一段，AI 只参与前期概念。",
        solution: "Midjourney 负责出 5–8 个概念方向（情绪板级别），Stable Diffusion 负责在选中方向上做细节微调（配色 / 构图 / 元素替换）。两个工具分工明确，探索周期从 1–2 周压到 1–2 天（设计侧估算，还没做过统一统计）。"
      },
      {
        title: "AI 生成结果细节粗糙，直接落地会拉低产品视觉质量",
        strategy: "AI 出的图细节糙，直接进产品会拉低质量。我把 AI 的产出限制在概念层，落地那几项留给自己。",
        solution: "AI 出方向后，人工负责 4 项精细化打磨：字号层级、颜色校准、间距节奏、图标统一。AI 不碰这 4 项，保证落地质量。探索阶段速度提升、落地阶段质量不降级，是这套分工的设计预期，没有做实测。"
      },
      {
        title: "个人经验无法复制，团队其他人仍走旧流程",
        strategy: "一个人会用不算数，得让别的设计师也能照着做，所以把流程写成 SOP 文档和模板库。",
        solution: "输出 3 份 SOP（MJ 提示词模板 / SD 微调 checklist / 人工打磨 4 项标准）+ 1 套 Figma 模板库，团队其他设计师可直接套用。AI 辅助设计从「个人能力」变成「团队能力」。"
      }
    ],

    keyPages: [
      { src: "assets/projects/aigc/ai-1_hd.jpg", caption: "Midjourney · 概念方向 A", note: "情绪板级别，5–8 个方向中的一个" },
      { src: "assets/projects/aigc/ai-2_hd.jpg", caption: "Stable Diffusion · 概念方向 B", note: "细节微调后，配色与构图已收敛" }
    ],

    metrics: [
      { value: "周→天", label: "探索周期（1–2 周 → 1–2 天）" },
      { value: "3", label: "SOP 文档" },
      { value: "4", label: "人工打磨项" }
    ],

    capabilityTags: ["AIGC 设计", "设计方法论", "工作流 SOP", "AI 工具链"],

    images: [
      { src: "assets/projects/aigc/ai-1_hd.jpg", caption: "Midjourney · 概念 A" },
      { src: "assets/projects/aigc/ai-2_hd.jpg", caption: "Stable Diffusion · 概念 B" },
      { src: "assets/projects/aigc/ai-3_hd.jpg", caption: "Midjourney · 概念 C" },
      { src: "assets/projects/aigc/ai-4_hd.jpg", caption: "工作流 · 组合输出" }
    ]
  }
];


// ============================================================
// 新首页渲染 + 原生动效引擎（FadeIn / Magnet / Marquee / AnimatedText / Stack）
// 人设与全部项目数据沿用原站，仅迁移提示词的视觉语言与交互
// ============================================================

/* ---------- SERVICES 清单（沿用真实能力内容） ---------- */
const SERVICES = [
  { n: "01", name: "Complex Systems", desc: "复杂系统架构：业务里常有不同角色、不同权限和大量信息，还受小屏限制。我习惯先梳理流程和信息关系，再定页面结构与操作路径，让人打开界面就知道当前在哪、能做什么、下一步怎么走。" },
  { n: "02", name: "Design Systems", desc: "设计系统与组件化：自建 5 套企业级组件库，覆盖表格、图表、表单、日历这些高频模块。做的时候更在意组件在不同业务场景里能不能复用，不只是把外观统一。复用率 80%+、节省约 50% 重复设计工时是设计侧估算，还没做过统一统计。" },
  { n: "03", name: "Data Visualization", desc: "数据可视化：面向数据大屏和管理后台，把总量、趋势、结构与异常信息放到合适的位置。不同数据用不同图表表达，让人更快找到需要关注的内容。" },
  { n: "04", name: "Growth UX", desc: "用户增长与业务闭环：关注用户从进入产品到完成关键操作的整个过程，包括入口、信息呈现和转化路径。方案要贴着具体业务场景做，而不是单纯增加视觉刺激。电商项目页面转化率提升 15%，当时没有留下可核对的统计口径。" },
  { n: "05", name: "Web & Branding", desc: "Web 设计与品牌视觉：从页面结构、字体和色彩，到组件状态和交互细节，做下来尽量保持整体体验一致。" }
];
const servicesList = document.getElementById("servicesList");
if (servicesList) {
  servicesList.innerHTML = SERVICES.map(s => `
    <article class="service-item fade-el" data-fade>
      <div class="service-num">${s.n}</div>
      <div class="service-body">
        <h3 class="service-name">${s.name}</h3>
        <p class="service-desc">${s.desc}</p>
      </div>
    </article>`).join("");
}

/* ---------- MARQUEE（11 张真实项目图，两行反向循环；与项目卡/详情页共用素材） ---------- */
const MARQUEE_IMGS = [
  "assets/projects/cizhen/cz-4_hd.jpg",
  "assets/projects/cizhen/cz-1_hd.jpg",
  "assets/projects/ruihe/card-1.jpg",
  "assets/projects/yibin/yb-2_hd.jpg",
  "assets/projects/gov/card-1.jpg",
  "pujin-screens/p-login.jpg",
  "pujin-screens/p-hr.jpg",
  "assets/projects/yibin/yb-1_hd.jpg",
  "assets/projects/aigc/ai-2_hd.jpg",
  "assets/projects/ruihe/card-2.jpg",
  "pujin-screens/p-chat.jpg"
];
function buildRow(el, arr) {
  if (!el) return;
  // 每行 tripled，保证横向滚动无缝
  el.innerHTML = [...arr, ...arr, ...arr].map(src =>
    `<div class="marquee-tile"><img src="${src}" alt="" loading="lazy"></div>`).join("");
}
buildRow(document.getElementById("marqueeRow1"), MARQUEE_IMGS);
buildRow(document.getElementById("marqueeRow2"), [...MARQUEE_IMGS].reverse());

/* ---------- STICKY 项目卡片（前 6 个真实项目，滚动缩放堆叠） ---------- */
const stack = document.getElementById("projectStack");
const CARD_PROJECTS = PROJECTS.slice(0, 7);
if (stack) {
  stack.innerHTML = CARD_PROJECTS.map((p, i) => {
    const imgs = (p.images || []).map(x => x.src);
    const src = k => imgs[k] || p.thumb;
    return `
    <div class="stack-item" data-index="${i}" style="top:${96 + i * 28}px">
      <button type="button" class="stack-card project-card" data-index="${i}" aria-label="打开案例：${p.title}">
        <div class="stack-top">
          <span class="stack-num">${String(i + 1).padStart(2, "0")}</span>
          <div class="stack-meta">
            <span class="stack-cat">${(p.tags && p.tags[0]) || "UI/UX"}</span>
            <span class="stack-name">${p.title}</span>
          </div>
          <div class="stack-cta"><span class="ghost-pill">Live Project</span></div>
        </div>
        <div class="stack-grid">
          <div class="stack-col1">
            <img src="${src(0)}" alt="${p.title} 预览 1" loading="lazy">
            <img src="${src(1)}" alt="${p.title} 预览 2" loading="lazy">
          </div>
          <div class="stack-col2"><img src="${src(2) || src(0)}" alt="${p.title} 主图" loading="lazy"></div>
        </div>
      </button>
    </div>`;
  }).join("");
}

// 让原案例弹窗的事件绑定（list.addEventListener）继续工作：把 list 指向新容器
const list = stack || document.createElement("div");

/* ---------- AnimatedText：About 逐字滚动显现 ---------- */
(function initAnimatedText() {
  const el = document.getElementById("aboutText");
  if (!el) return;
  const text = el.textContent.trim();
  el.innerHTML = [...text].map(ch => {
    const safe = ch === " " ? "&nbsp;" : ch.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return `<span class="animated-char"><span class="ch-ph">${safe}</span><span class="ch-fx">${safe}</span></span>`;
  }).join("");
  const chars = el.querySelectorAll(".ch-fx");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) { chars.forEach(c => c.style.opacity = 1); return; }
  const onScroll = () => {
    const r = el.getBoundingClientRect();
    // progress：元素从视口 80% 进入，到视口 20% 离开
    const p = 1 - (r.top - innerHeight * 0.2) / (innerHeight * 0.6);
    const prog = Math.max(0, Math.min(1, p));
    chars.forEach((c, i) => {
      const t = prog * chars.length - i;
      c.style.opacity = String(Math.max(0.2, Math.min(1, 0.2 + t * 0.8)));
    });
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();

/* ---------- Magnet：Hero 人像磁吸 ---------- */
(function initMagnet() {
  const el = document.getElementById("heroMagnet");
  if (!el || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const padding = 150, strength = 3;
  const activeTrans = "transform 0.3s ease-out", inactiveTrans = "transform 0.6s ease-in-out";
  const inRange = r => mouse.x > r.left - padding && mouse.x < r.right + padding &&
                       mouse.y > r.top - padding && mouse.y < r.bottom + padding;
  const mouse = { x: -9999, y: -9999 };
  addEventListener("mousemove", e => {
    mouse.x = e.clientX; mouse.y = e.clientY;
    // 3D 画布内不位移，避免与拖拽旋转互相干扰
    if (e.target && e.target.closest && e.target.closest("#portraitStage")) {
      el.style.transition = inactiveTrans;
      el.style.transform = "translate3d(0,0,0)";
      return;
    }
    const r = el.getBoundingClientRect();
    if (inRange(r)) {
      el.style.transition = activeTrans;
      const dx = (mouse.x - (r.left + r.width / 2)) / strength;
      const dy = (mouse.y - (r.top + r.height / 2)) / strength;
      el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    } else {
      el.style.transition = inactiveTrans;
      el.style.transform = "translate3d(0,0,0)";
    }
  }, { passive: true });
})();

/* ---------- FadeIn：进场动画（对齐提示词 delay/duration/easing） ---------- */
(function initFadeIn() {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const targets = [
    ["#nav", 0, 0.7, 0, -20], ["#heroTitle", 0.15, 0.7, 0, 40],
    ["#heroSub", 0.35, 0.7, 0, 20], ["#heroContact", 0.5, 0.7, 0, 20],
    ["#heroPortrait", 0.6, 0.7, 0, 30], ["#decoTL", 0.1, 0.9, -80, 0],
    ["#decoTR", 0.15, 0.9, 80, 0], ["#decoBL", 0.25, 0.9, -80, 0],
    ["#decoBR", 0.3, 0.9, 80, 0], ["#aboutTitle", 0, 0.7, 0, 40]
  ];
  targets.forEach(([sel, delay, dur, x, y]) => {
    const el = document.querySelector(sel);
    if (!el) return;
    if (reduce) { el.style.opacity = 1; return; }
    el.classList.add("fade-el");
    el.style.transform = `translate(${x}px, ${y}px)`;
    el.style.transition = `opacity ${dur}s cubic-bezier(.25,.1,.25,1) ${delay}s, transform ${dur}s cubic-bezier(.25,.1,.25,1) ${delay}s`;
    requestAnimationFrame(() => requestAnimationFrame(() => {
      el.style.opacity = 1; el.style.transform = "translate(0,0)";
    }));
  });
  // [data-fade]（Services 项）走 whileInView 语义
  const io2 = new IntersectionObserver((entries) => {
    entries.forEach((en, i) => {
      if (en.isIntersecting) {
        const el = en.target;
        const delay = (+(el.dataset.fadeIndex || 0)) * 0.1;
        el.style.transition = `opacity .7s cubic-bezier(.25,.1,.25,1) ${delay}s, transform .7s cubic-bezier(.25,.1,.25,1) ${delay}s`;
        el.style.opacity = 1; el.style.transform = "none";
        io2.unobserve(el);
      }
    });
  }, { threshold: 0.05, rootMargin: "50px" });
  document.querySelectorAll("[data-fade]").forEach((el, i) => {
    el.dataset.fadeIndex = i;
    if (reduce) { el.style.opacity = 1; el.style.transform = "none"; return; }
    el.style.transform = "translateY(30px)";
    io2.observe(el);
  });
})();

/* ---------- 滚动：Marquee 位移 + Sticky 卡片缩放 + 进度条 ---------- */
const nav = document.getElementById("nav");
const bar = document.getElementById("progress");
const marqueeSec = document.getElementById("marquee");
const row1 = document.getElementById("marqueeRow1");
const row2 = document.getElementById("marqueeRow2");
const stackItems = [...document.querySelectorAll(".stack-item")];
let ticking = false;

function onScrollFrame() {
  const h = document.documentElement;
  bar.style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + "%";
  nav.classList.toggle("scrolled", scrollY > 40);

  if (marqueeSec && row1 && row2) {
    const top = marqueeSec.offsetTop;
    const offset = (scrollY - top + innerHeight) * 0.3;
    row1.style.transform = `translate3d(${offset - 200}px,0,0)`;
    row2.style.transform = `translate3d(${-(offset - 200)}px,0,0)`;
  }

  const total = stackItems.length;
  stackItems.forEach((item, i) => {
    const targetScale = 1 - (total - 1 - i) * 0.03;
    item.style.transform = `scale(${targetScale})`;
    item.style.zIndex = String(10 + i);
  });
  ticking = false;
}
addEventListener("scroll", () => {
  if (!ticking) { requestAnimationFrame(onScrollFrame); ticking = true; }
}, { passive: true });
onScrollFrame();

/* ---------- reveal（contact 区沿用） ---------- */
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


// ---------- 案例弹窗（6 区块） ----------
const modal = document.getElementById("caseModal");
const sheet = document.getElementById("modalSheet");
let currentCase = 0;

function openCase(i) {
  if (!Number.isInteger(i) || !PROJECTS[i]) return;
  // 完整案例独立页：磁振磁电磁治疗仪 / 瑞合祥 / 国资大屏 / 普今招聘
  if (PROJECTS[i] && PROJECTS[i].id === "cizhen") {
    window.location.href = "cizhen-case-study.html";
    return;
  }
  if (PROJECTS[i] && PROJECTS[i].id === "ruihe") {
    window.location.href = "ruihe-case-study.html";
    return;
  }
  if (PROJECTS[i] && PROJECTS[i].id === "gov") {
    window.location.href = "gov-dashboard-case-study.html";
    return;
  }
  if (PROJECTS[i] && PROJECTS[i].id === "pujin") {
    window.location.href = "pujin-case-study.html";
    return;
  }
  if (PROJECTS[i] && PROJECTS[i].id === "xiaomeng") {
    window.location.href = "xiaomeng-case-study.html";
    return;
  }
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
      <h2 class="case-title" id="caseTitle">${p.title}</h2>
      <p class="case-sub" id="caseSub">${p.sub}</p>
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

  // 图片加载失败统一降级：隐藏坏图，保留版式
  sheet.querySelectorAll("img").forEach(img => {
    img.addEventListener("error", () => img.classList.add("img-failed"), { once: true });
  });
  if (typeof openOverlay === "function") openOverlay(modal, document.getElementById("modalClose"), document.querySelector('.stack-card[data-index="'+i+'"]'));
  else { modal.classList.add("open"); document.body.style.overflow = "hidden"; }
  // 关键页面可点击开灯箱
  sheet.querySelectorAll(".keypage img").forEach(img => {
    img.addEventListener("click", () => {
      const idx = PROJECTS[currentCase].images.findIndex(im => im.src === img.src);
      openLightbox(PROJECTS[currentCase].images, idx >= 0 ? idx : 0);
    });
  });
}

function closeCase() {
  if (typeof closeOverlay === "function") closeOverlay(modal);
  else { modal.classList.remove("open"); document.body.style.overflow = ""; }
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
// 卡片已改为原生 <button>，Enter/Space 由浏览器触发 click，无需额外键盘监听
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
  if (!Array.isArray(srcs) || !srcs.length || !srcs[i]) return;
  lbSrcs = srcs; lbI = i;
  lbImg.src = srcs[i].src; lbCap.textContent = srcs[i].caption;
  if (typeof openOverlay === "function") openOverlay(lb, document.getElementById("lightboxClose"), document.activeElement);
  else { lb.classList.add("open"); document.body.style.overflow = "hidden"; }
}
function closeLightbox() { if (typeof closeOverlay === "function") closeOverlay(lb); else lb.classList.remove("open"); }
document.getElementById("lightboxClose").addEventListener("click", closeLightbox);
document.getElementById("lightboxPrev").addEventListener("click", () => openLightbox(lbSrcs, (lbI - 1 + lbSrcs.length) % lbSrcs.length));
document.getElementById("lightboxNext").addEventListener("click", () => openLightbox(lbSrcs, (lbI + 1) % lbSrcs.length));
lb.addEventListener("click", (e) => { if (e.target === lb) closeLightbox(); });


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



/* ---------- 统一弹层管理：滚动锁 + 焦点陷阱 + 焦点恢复（追加，不改既有逻辑） ---------- */
(function initOverlayManager() {
  const losers = [document.getElementById("caseModal"), document.getElementById("lightbox")].filter(Boolean);
  if (!losers.length) return;
  let lockCount = 0;
  let lastFocused = null;

  function lock() {
    lockCount++;
    if (lockCount === 1) document.body.style.overflow = "hidden";
  }
  function unlock() {
    lockCount = Math.max(0, lockCount - 1);
    if (lockCount === 0) document.body.style.overflow = "";
  }
  function focusables(root) {
    return [...root.querySelectorAll('a[href],button:not([disabled]),input:not([disabled]),select:not([disabled]),textarea:not([disabled]),[tabindex]:not([tabindex="-1"])')]
      .filter(el => el.offsetParent !== null);
  }
  window.openOverlay = function (el, firstFocus, opener) {
    if (!el) return;
    if (!el.classList.contains("open")) { el.classList.add("open"); lock(); }
    el.setAttribute("aria-hidden", "false");
    lastFocused = (opener && document.contains(opener)) ? opener : document.activeElement;
    const target = firstFocus || focusables(el)[0];
    if (target) setTimeout(() => target.focus(), 0);
  };
  window.closeOverlay = function (el) {
    if (!el || !el.classList.contains("open")) return;
    el.classList.remove("open");
    el.setAttribute("aria-hidden", "true");
    unlock();
    var restoreTo = lastFocused;
    if (restoreTo && document.contains(restoreTo) && !losers.some(x => x.contains(restoreTo))) {
      setTimeout(function () { try { restoreTo.focus(); } catch (err) {} }, 30);
    }
    lastFocused = null;
  };
  // 关闭按钮只绑定一次（修复原 openCase 内重复 addEventListener）
  const mc = document.getElementById("modalClose");
  if (mc) mc.addEventListener("click", closeCase);
  // 焦点陷阱：Tab 限制在当前打开的弹层内
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Tab") return;
    const open = losers.find(x => x.classList.contains("open"));
    if (!open) return;
    const f = focusables(open);
    if (!f.length) return;
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
  // Escape 关闭最上层弹层（原全局 Escape 逻辑保留，这里只补焦点恢复）
  losers.forEach(el => el.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { e.stopPropagation(); (el.id === "caseModal" ? closeCase : closeLightbox)(); }
  }));
})();

/* ---------- 全局图片加载失败兜底（含动态插入前的静态图） ---------- */
document.addEventListener("error", (e) => {
  const t = e.target;
  if (t && t.tagName === "IMG" && !t.classList.contains("img-failed")) t.classList.add("img-failed");
}, true);
