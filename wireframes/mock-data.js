/* ============================================================
 * 游戏文化联动情报库 · Demo Mock 数据
 * ============================================================
 * 数据来源（全部为项目内真实调研文档）：
 *   1. 游戏公司2025-2026文化联动完整版.md
 *   2. monitored_games_list.md (v9, 共 68 款监测游戏)
 *   3. 游戏x文化联动名录.md (29 款产品 / 154 条联动)
 *
 * 数据原则：
 *   - 所有节点/关系/次数均来自上述文档真实记录，不编造
 *   - 舆情/流水/ROI 等暂未采集的指标统一为 null，前端不渲染相关图表
 *   - 字段命名对齐 monitored_games_list.md 的 g{n} 编号体系
 *
 * 最后更新：2026-06-17
 * ============================================================ */

window.MOCK_DATA = {

  /* ------------------------------------------------------------
   *  元数据 - 用于页面底部水印 / 数据来源说明
   * ------------------------------------------------------------ */
  metadata: {
    lastUpdated: "2026-06-17",
    sources: [
      "游戏公司2025-2026文化联动完整版.md",
      "monitored_games_list.md (v9)",
      "游戏x文化联动名录.md"
    ],
    disclaimer: "本数据来自项目内 3 份调研文档；舆情评分、流水估算、ROI 评级等指标尚未采集，相关维度图表暂不渲染。"
  },

  /* ------------------------------------------------------------
   *  1. 厂商节点（12 家头部厂商，按联动密度排序）
   *  来源：游戏x文化联动名录.md · 6.1 厂商汇总
   * ------------------------------------------------------------ */
  companies: [
    { id: "netease",      name: "网易",          productCount: 25, collabCount: 53 },
    { id: "mihoyo",       name: "米哈游",        productCount: 4,  collabCount: 40 },
    { id: "dieye",        name: "叠纸",          productCount: 4,  collabCount: 18 },
    { id: "yostar",       name: "鹰角网络",      productCount: 2,  collabCount: 7  },
    { id: "giant",        name: "巨人网络",      productCount: 3,  collabCount: 7  },
    { id: "youka",        name: "游卡桌游",      productCount: 1,  collabCount: 7  },
    { id: "lingxi",       name: "灵犀互娱",      productCount: 2,  collabCount: 5  },
    { id: "kuro",         name: "库洛游戏",      productCount: 2,  collabCount: 4  },
    { id: "jibit",        name: "吉比特/雷霆",   productCount: 2,  collabCount: 5  },
    { id: "37",           name: "三七互娱",      productCount: 1,  collabCount: 3  },
    { id: "lilith",       name: "莉莉丝",        productCount: 1,  collabCount: 3  },
    { id: "gamescience",  name: "游戏科学",      productCount: 1,  collabCount: 2  }
  ],

  /* ------------------------------------------------------------
   *  2. 游戏节点（25 款核心产品）
   *  来源：monitored_games_list.md（保留原始 g{n} 编号）
   * ------------------------------------------------------------ */
  games: [
    { id: "g12", name: "原神",              company: "mihoyo",      category: "开放世界 RPG" },
    { id: "g30", name: "崩坏：星穹铁道",     company: "mihoyo",      category: "回合制 RPG"   },
    { id: "g41", name: "绝区零",            company: "mihoyo",      category: "动作 RPG"     },
    { id: "g55", name: "崩坏3",             company: "mihoyo",      category: "动作 RPG"     },

    { id: "g9",  name: "燕云十六声",         company: "netease",     category: "开放世界 RPG" },
    { id: "g14", name: "逆水寒手游",         company: "netease",     category: "武侠 MMO"     },
    { id: "g15", name: "永劫无间手游",       company: "netease",     category: "动作竞技"     },
    { id: "g2",  name: "梦幻西游手游",       company: "netease",     category: "回合制 MMO"   },
    { id: "g4",  name: "阴阳师",            company: "netease",     category: "卡牌 RPG"     },
    { id: "g10", name: "第五人格",          company: "netease",     category: "非对称竞技"   },
    { id: "g18", name: "率土之滨",          company: "netease",     category: "SLG 策略"     },
    { id: "g19", name: "蛋仔派对",          company: "netease",     category: "派对竞技"     },
    { id: "g43", name: "天谕手游",          company: "netease",     category: "MMORPG"       },
    { id: "g49", name: "我的世界（中国版）", company: "netease",     category: "沙盒建造"     },

    { id: "g31", name: "恋与深空",          company: "dieye",       category: "恋爱换装"     },
    { id: "g42", name: "恋与制作人",        company: "dieye",       category: "恋爱换装"     },
    { id: "g8",  name: "闪耀暖暖",          company: "dieye",       category: "音舞换装"     },

    { id: "g6",  name: "明日方舟",          company: "yostar",      category: "卡牌 RPG"     },
    { id: "g52", name: "明日方舟：终末地",   company: "yostar",      category: "策略 RPG"     },

    { id: "g11", name: "超自然行动组",      company: "giant",       category: "恐怖冒险"     },
    { id: "g34", name: "征途系列",          company: "giant",       category: "MMORPG"       },

    { id: "g44", name: "三国杀",            company: "youka",       category: "卡牌策略"     },
    { id: "g17", name: "三国志·战略版",      company: "lingxi",      category: "SLG 策略"     },

    { id: "g35", name: "鸣潮",              company: "kuro",        category: "开放世界 RPG" },
    { id: "g36", name: "战双帕弥什",        company: "kuro",        category: "动作 RPG"     },

    { id: "g45", name: "问道手游",          company: "jibit",       category: "回合制 MMO"   },
    { id: "g46", name: "一念逍遥",          company: "jibit",       category: "回合制修仙"   },

    { id: "g47", name: "寻道大千",          company: "37",          category: "回合制修仙"   },
    { id: "g37", name: "万国觉醒",          company: "lilith",      category: "SLG 策略"     },

    { id: "g13", name: "黑神话：悟空",      company: "gamescience", category: "动作冒险 3A"  }
  ],

  /* ------------------------------------------------------------
   *  3. 文化主题节点（18 个，含被联动次数）
   *  来源：游戏x文化联动名录.md · 6.3 跨批次洞察 + 全量统计
   *  字段:
   *    linkCount     = 该主题被多少款不同游戏联动过（真实统计）
   *    avgSentiment  = 平均舆情评分（null = 暂未采集）
   *    totalVoice    = 累计声量（null = 暂未采集）
   *    relatedGames  = 关联的游戏 ID 列表（用于跳转/筛选）
   * ------------------------------------------------------------ */
  themes: [
    {
      id: "jingju",  name: "京剧/戏曲",
      category: "戏曲传统艺术", linkCount: 5,
      avgSentiment: null, totalVoice: null,
      relatedGames: ["g12", "g8", "g9", "g2", "g14"],
      note: "原神《神女劈观》/ 闪耀暖暖国家京剧院 / 燕云河南曲剧 / 梦幻西游晋剧 / 逆水寒戏曲"
    },
    {
      id: "dunhuang",  name: "敦煌",
      category: "博物馆/景区", linkCount: 4,
      avgSentiment: null, totalVoice: null,
      relatedGames: ["g46", "g11", "g14", "g42"],
      note: "一念逍遥 / 超自然行动组 / 逆水寒（预告）/ 恋与制作人"
    },
    {
      id: "gugong",  name: "故宫（含故宫观唐）",
      category: "博物馆/文物", linkCount: 3,
      avgSentiment: null, totalVoice: null,
      relatedGames: ["g42", "g10", "g18"],
      note: "恋与制作人金阙霓裳 / 第五人格故宫观唐 / 率土之滨故宫观唐"
    },
    {
      id: "sanxingdui",  name: "三星堆",
      category: "博物馆/文物", linkCount: 2,
      avgSentiment: null, totalVoice: null,
      relatedGames: ["g12", "g49"],
      note: "原神文物赋活计划 / 我的世界三星堆 MOD"
    },
    {
      id: "nanyue",  name: "南越王博物院",
      category: "博物馆/文物", linkCount: 2,
      avgSentiment: null, totalVoice: null,
      relatedGames: ["g6", "g17"],
      note: "明日方舟南境余音 / 三国志·战略版"
    },
    {
      id: "gansubo",  name: "甘肃省博物馆",
      category: "博物馆/文物", linkCount: 2,
      avgSentiment: null, totalVoice: null,
      relatedGames: ["g9", "g14"],
      note: "燕云十六声凉州遗韵 / 逆水寒铜奔马复刻"
    },
    {
      id: "longquan",  name: "龙泉宝剑/龙泉镇",
      category: "非遗工艺", linkCount: 2,
      avgSentiment: null, totalVoice: null,
      relatedGames: ["g18", "g43"],
      note: "率土之滨锻宝练习生 / 天谕古法铸剑"
    },
    {
      id: "piying",  name: "华县皮影戏",
      category: "非遗工艺", linkCount: 2,
      avgSentiment: null, totalVoice: null,
      relatedGames: ["g45", "g11"],
      note: "问道《一事一生》纪录片 / 超自然行动组皮影联动"
    },
    {
      id: "post",  name: "中国邮政（书信文化）",
      category: "官方文化机构", linkCount: 2,
      avgSentiment: null, totalVoice: null,
      relatedGames: ["g30", "g55"],
      note: "崩坏：星穹铁道 / 崩坏3 执笔成思快闪邮局"
    },
    {
      id: "feiyi100",  name: "100+ 国家级非遗矩阵",
      category: "非遗工艺", linkCount: 1,
      avgSentiment: null, totalVoice: null,
      relatedGames: ["g14"],
      note: "逆水寒手游 · 行业首个百项级框架"
    },
    {
      id: "shanxi",  name: "山西文博（含云冈/晋祠/晋剧）",
      category: "博物馆/景区", linkCount: 3,
      avgSentiment: null, totalVoice: null,
      relatedGames: ["g2", "g13", "g49"],
      note: "梦幻西游筑梦山西 / 黑神话 27 处山西取景 / 我的世界国风建筑"
    },
    {
      id: "haisi",  name: "海丝/闽南（泉州/南音）",
      category: "区域文化", linkCount: 2,
      avgSentiment: null, totalVoice: null,
      relatedGames: ["g14", "g15"],
      note: "逆水寒泉州刺桐港 / 永劫无间海丝地图"
    },
    {
      id: "huafu",  name: "簪花围/汉服/服饰非遗",
      category: "非遗工艺", linkCount: 3,
      avgSentiment: null, totalVoice: null,
      relatedGames: ["g31", "g8", "g42"],
      note: "恋与深空簪花围 / 闪耀暖暖蟳埔/桃花坞 / 恋与制作人故宫宫廷"
    },
    {
      id: "shichuang",  name: "刺绣/云锦/苏绣",
      category: "非遗工艺", linkCount: 4,
      avgSentiment: null, totalVoice: null,
      relatedGames: ["g4", "g14", "g8", "g30"],
      note: "阴阳师南京云锦 / 逆水寒苏绣 / 闪耀暖暖云锦 / 星铁苏绣造物大赛"
    },
    {
      id: "shanhai",  name: "山海经/中国神话",
      category: "神话与象征", linkCount: 3,
      avgSentiment: null, totalVoice: null,
      relatedGames: ["g43", "g12", "g35"],
      note: "天谕东方幻想 / 原神璃月 / 鸣潮舞狮"
    },
    {
      id: "wuxia",  name: "武术/武侠",
      category: "区域文化", linkCount: 3,
      avgSentiment: null, totalVoice: null,
      relatedGames: ["g15", "g14", "g30"],
      note: "永劫无间李小龙 / 逆水寒 / 星铁双剑共创"
    },
    {
      id: "kunqu",  name: "傩戏/傩面具",
      category: "戏曲传统艺术", linkCount: 3,
      avgSentiment: null, totalVoice: null,
      relatedGames: ["g11", "g9", "g12"],
      note: "超自然行动组沿河土家族傩面 / 燕云傩舞 / 原神贵州傩戏"
    },
    {
      id: "overseas",  name: "海外文化（埃及/维京/欧洲等）",
      category: "海外文化主题", linkCount: 5,
      avgSentiment: null, totalVoice: null,
      relatedGames: ["g12", "g6", "g37", "g4", "g10"],
      note: "原神须弥/枫丹/蒙德 / 明日方舟泰拉势力矩阵 / 万国觉醒全球文明 / 阴阳师日本平安京 / 第五人格维多利亚"
    }
  ],

  /* ------------------------------------------------------------
   *  4. 联动关系（用于力导向图边数据，约 60 条真实联动）
   *  来源：三份 md 文档真实记录，已去重
   *  字段:
   *    game    = 游戏 ID（对应 games.id）
   *    theme   = 主题 ID（对应 themes.id）
   *    year    = 联动年份（数值，用于时间筛选）
   *    partner = 真实合作机构 / 传承人
   *    forms   = 联动形式标签
   * ------------------------------------------------------------ */
  collaborations: [
    // —— 米哈游 ——
    { game: "g12", theme: "sanxingdui",  year: 2023, partner: "三星堆博物馆/四川文投",        forms: ["博物馆合作","原创音乐","纪录片/视频"] },
    { game: "g12", theme: "jingju",      year: 2022, partner: "上海京剧院",                   forms: ["游戏内容植入","原创音乐"] },
    { game: "g12", theme: "shichuang",   year: 2023, partner: "苏州缂丝传承人",               forms: ["纪录片/视频","传承人共创"] },
    { game: "g12", theme: "piying",      year: 2022, partner: "中国皮影戏传承人",             forms: ["游戏内容植入","纪录片/视频"] },
    { game: "g12", theme: "kunqu",       year: 2025, partner: "贵州省文旅",                   forms: ["场景还原","线下文旅"] },
    { game: "g12", theme: "overseas",    year: 2024, partner: "须弥/枫丹/蒙德/稻妻区域世界观", forms: ["游戏内容植入","场景还原"] },
    { game: "g12", theme: "shanhai",     year: 2023, partner: "璃月区域世界观",               forms: ["游戏内容植入"] },

    { game: "g30", theme: "post",        year: 2023, partner: "中国邮政",                     forms: ["品牌联名","实物产出"] },
    { game: "g30", theme: "shichuang",   year: 2024, partner: "苏绣/造物大赛传承人",          forms: ["传承人共创","游戏活动"] },
    { game: "g30", theme: "wuxia",       year: 2024, partner: "武术世家张含亮",               forms: ["传承人共创"] },
    { game: "g30", theme: "gugong",      year: 2025, partner: "中国音数协游戏博物馆",         forms: ["博物馆合作","实物产出"] },

    { game: "g41", theme: "overseas",    year: 2024, partner: "上海/纽约/伦敦多地巡展",       forms: ["线下文旅","品牌联名"] },

    { game: "g55", theme: "post",        year: 2023, partner: "中国邮政（上海/保定）",        forms: ["品牌联名","实物产出"] },

    // —— 网易 · 燕云十六声 ——
    { game: "g9",  theme: "shanxi",      year: 2025, partner: "开封文旅",                     forms: ["场景还原","线下文旅","游戏活动"] },
    { game: "g9",  theme: "gansubo",     year: 2025, partner: "甘肃省博物馆",                 forms: ["博物馆合作","场景还原"] },
    { game: "g9",  theme: "jingju",      year: 2026, partner: "河南省曲剧艺术保护传承中心",   forms: ["传承人共创","原创音乐"] },
    { game: "g9",  theme: "kunqu",       year: 2025, partner: "傩舞非遗传承人",               forms: ["传承人共创","外观/时装"] },

    // —— 网易 · 逆水寒手游 ——
    { game: "g14", theme: "feiyi100",    year: 2025, partner: "多家非遗机构与传承人",         forms: ["传承人共创","外观/时装","实物复刻","游戏活动","文化科普"] },
    { game: "g14", theme: "gansubo",     year: 2025, partner: "甘肃省博物馆",                 forms: ["博物馆合作","实物复刻"] },
    { game: "g14", theme: "haisi",      year: 2025, partner: "泉州文旅/海交馆/南音传承人",   forms: ["场景还原","线下文旅","博物馆合作"] },
    { game: "g14", theme: "piying",      year: 2025, partner: "闽南皮影戏传承人",             forms: ["游戏内容植入","传承人共创"] },
    { game: "g14", theme: "jingju",      year: 2025, partner: "戏曲艺术家",                   forms: ["游戏内容植入"] },
    { game: "g14", theme: "dunhuang",    year: 2026, partner: "敦煌（预告）",                 forms: ["场景还原"] },
    { game: "g14", theme: "shichuang",   year: 2025, partner: "苏绣传承人",                   forms: ["传承人共创","外观/时装"] },

    // —— 网易 · 永劫无间 ——
    { game: "g15", theme: "haisi",       year: 2025, partner: "永劫海丝柯桐湾地图",           forms: ["场景还原","游戏活动"] },
    { game: "g15", theme: "wuxia",       year: 2023, partner: "李小龙基金会",                 forms: ["品牌联名"] },
    { game: "g15", theme: "feiyi100",    year: 2025, partner: "31 项非遗联动",                forms: ["传承人共创","外观/时装"] },

    // —— 网易 · 梦幻西游 ——
    { game: "g2",  theme: "shanxi",      year: 2024, partner: "山西七大文博单位",             forms: ["博物馆合作","场景还原"] },
    { game: "g2",  theme: "jingju",      year: 2024, partner: "晋剧非遗传承人孙红丽",         forms: ["传承人共创","原创音乐"] },

    // —— 网易 · 阴阳师 ——
    { game: "g4",  theme: "shichuang",   year: 2024, partner: "南京云锦传承人金文",           forms: ["传承人共创","外观/时装"] },
    { game: "g4",  theme: "overseas",    year: 2018, partner: "日本平安京/百鬼夜行图",         forms: ["游戏内容植入"] },

    // —— 网易 · 第五人格 ——
    { game: "g10", theme: "gugong",      year: 2025, partner: "故宫观唐",                     forms: ["博物馆合作","实物复刻"] },
    { game: "g10", theme: "piying",      year: 2025, partner: "北京皮影剧团",                 forms: ["传承人共创","纪录片/视频"] },
    { game: "g10", theme: "overseas",    year: 2018, partner: "维多利亚哥特/欧洲悬疑世界观",  forms: ["游戏内容植入"] },

    // —— 网易 · 率土之滨 ——
    { game: "g18", theme: "gugong",      year: 2025, partner: "故宫观唐（十周年）",           forms: ["博物馆合作"] },
    { game: "g18", theme: "longquan",    year: 2024, partner: "龙泉非遗铸剑传承人",           forms: ["传承人共创","实物复刻"] },
    { game: "g18", theme: "shanxi",      year: 2025, partner: "汉魏洛阳故城遗址博物馆",       forms: ["博物馆合作"] },

    // —— 网易 · 蛋仔派对 ——
    { game: "g19", theme: "kunqu",       year: 2024, partner: "苗族傩戏/川剧",                forms: ["游戏内容植入","外观/时装"] },

    // —— 网易 · 天谕 ——
    { game: "g43", theme: "longquan",    year: 2024, partner: "龙泉市政府+国家非遗铸剑大师",  forms: ["传承人共创","实物复刻"] },
    { game: "g43", theme: "shanhai",     year: 2023, partner: "天谕东方幻想世界观",           forms: ["游戏内容植入"] },

    // —— 网易 · 我的世界 ——
    { game: "g49", theme: "sanxingdui",  year: 2020, partner: "三星堆博物馆",                 forms: ["实物复刻","游戏活动"] },
    { game: "g49", theme: "shanxi",      year: 2023, partner: "国风建筑大赛玩家社群",         forms: ["游戏活动","文化科普"] },

    // —— 叠纸 · 恋与深空 ——
    { game: "g31", theme: "huafu",       year: 2024, partner: "靖西壮族博物馆+绣球传承人",    forms: ["传承人共创","博物馆合作","文化科普"] },

    // —— 叠纸 · 恋与制作人 ——
    { game: "g42", theme: "gugong",      year: 2025, partner: "故宫博物院",                   forms: ["博物馆合作","实物产出"] },
    { game: "g42", theme: "dunhuang",    year: 2025, partner: "敦煌（8 周年综合）",           forms: ["博物馆合作","品牌联名"] },
    { game: "g42", theme: "huafu",       year: 2019, partner: "故宫宫廷文化（早期奠基）",     forms: ["博物馆合作"] },

    // —— 叠纸 · 闪耀暖暖 ——
    { game: "g8",  theme: "shichuang",   year: 2024, partner: "桃花坞木版年画/南京云锦",      forms: ["传承人共创","外观/时装","纪录片/视频"] },
    { game: "g8",  theme: "huafu",       year: 2024, partner: "蟳埔女习俗传承人",             forms: ["传承人共创","外观/时装"] },
    { game: "g8",  theme: "jingju",      year: 2024, partner: "国家京剧院/苏州评弹",          forms: ["传承人共创","外观/时装"] },

    // —— 鹰角 · 明日方舟 ——
    { game: "g6",  theme: "nanyue",      year: 2024, partner: "南越王博物院",                 forms: ["博物馆合作","线下文旅","游戏活动"] },
    { game: "g6",  theme: "overseas",    year: 2019, partner: "维多利亚/雷姆必拓/萨卡兹等",   forms: ["游戏内容植入"] },

    // —— 鹰角 · 终末地 ——
    { game: "g52", theme: "overseas",    year: 2025, partner: "泰拉大陆文化矩阵（延续）",     forms: ["游戏内容植入"] },

    // —— 巨人 · 超自然行动组 ——
    { game: "g11", theme: "dunhuang",    year: 2025, partner: "敦煌艺术馆",                   forms: ["博物馆合作","外观/时装"] },
    { game: "g11", theme: "kunqu",       year: 2025, partner: "沿河土家族傩面具传人杨云霞",   forms: ["传承人共创","外观/时装"] },
    { game: "g11", theme: "piying",      year: 2026, partner: "华县皮影传承人（杜彩红/汪天稳）", forms: ["传承人共创","外观/时装"] },

    // —— 灵犀 · 三国志·战略版 ——
    { game: "g17", theme: "nanyue",      year: 2026, partner: "南越王博物院",                 forms: ["博物馆合作","实物复刻"] },
    { game: "g17", theme: "gugong",      year: 2025, partner: "中国音数协游戏博物馆",         forms: ["博物馆合作","品牌联名","文化科普"] },

    // —— 库洛 · 鸣潮 ——
    { game: "g35", theme: "shanhai",     year: 2024, partner: "中国国家地理 + 舞狮/狻猊元素", forms: ["品牌联名","游戏内容植入"] },

    // —— 库洛 · 战双 ——
    { game: "g36", theme: "feiyi100",    year: 2023, partner: "北京民艺非物质文化遗产研究院", forms: ["品牌联名","外观/时装"] },

    // —— 吉比特 · 问道 ——
    { game: "g45", theme: "piying",      year: 2022, partner: "国家级皮影大师汪天稳",         forms: ["传承人共创","纪录片/视频"] },

    // —— 吉比特 · 一念逍遥 ——
    { game: "g46", theme: "dunhuang",    year: 2021, partner: "敦煌博物馆官方授权·鲜活万物",  forms: ["博物馆合作","场景还原"] },

    // —— 三七 · 寻道大千 ——
    { game: "g47", theme: "shanhai",     year: 2024, partner: "黄山+武夷山（双世界遗产）",    forms: ["场景还原","线下文旅"] },

    // —— 莉莉丝 · 万国觉醒 ——
    { game: "g37", theme: "overseas",    year: 2017, partner: "古埃及/古罗马/北欧/玛雅等 11 文明", forms: ["游戏内容植入","场景还原"] },

    // —— 游戏科学 · 黑神话 ——
    { game: "g13", theme: "shanxi",      year: 2024, partner: "山西文旅（27 处取景地）",      forms: ["场景还原","线下文旅","纪录片/视频"] },

    // —— 游卡 · 三国杀 ——
    { game: "g44", theme: "gugong",      year: 2022, partner: "成都武侯祠博物馆",             forms: ["博物馆合作","外观/时装"] },
    { game: "g44", theme: "feiyi100",    year: 2022, partner: "东阳木雕传承人蒋武进",         forms: ["传承人共创"] }
  ]

};

/* ============================================================
 * 数据统计（供页面顶部 KPI 自动计算）
 * ============================================================
 * 真实可计算的指标：
 *   - 累计案例总数 = collaborations.length
 *   - 覆盖厂商数  = companies.length
 *   - 覆盖游戏数  = games.length
 *   - 覆盖主题数  = themes.length
 *   - 最热主题   = themes 中 linkCount 最高的
 *
 * 不可计算的指标（暂未采集）：
 *   - 平均舆情评分
 *   - 总声量
 *   - 流水估算
 *   - ROI 评级
 *   - 翻车数
 *
 * 渲染逻辑：未采集字段在 UI 上不显示对应卡片，避免编数字。
 * ============================================================ */
