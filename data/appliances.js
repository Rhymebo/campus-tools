/*
 * 常用电器功率数据（参考值，实际以电器铭牌为准）
 * forbidden: 宿舍常见违禁或明确超限的电器，计算后强制显示安全提示。
 * highPower: 功率较高，提示注意宿舍限电，但不等同于违禁。
 */
window.POWER_DATA = {
  defaultPrice: 0.6,
  priceNote: "电价按学校实际标准填写，这里默认 0.6 元/度，只用于估算。",
  appliances: [
    {
      id: "lamp",
      name: "台灯",
      group: "小功率",
      watt: 8,
      hours: 4,
      days: 7,
      note: "LED 台灯常见功率 5-15W。"
    },
    {
      id: "charger",
      name: "手机充电器",
      group: "小功率",
      watt: 20,
      hours: 2,
      days: 7,
      note: "按实际充电时长估算，充满后及时拔掉。"
    },
    {
      id: "laptop",
      name: "笔记本电脑",
      group: "小功率",
      watt: 65,
      hours: 6,
      days: 5,
      note: "轻薄本常见 45-90W，游戏本更高。"
    },
    {
      id: "fan",
      name: "电风扇",
      group: "日常电器",
      watt: 45,
      hours: 8,
      days: 5,
      note: "落地扇和台扇的功率差异较大。"
    },
    {
      id: "fridge",
      name: "小冰箱",
      group: "日常电器",
      watt: 100,
      hours: 24,
      days: 7,
      note: "冰箱是间歇运行，按铭牌功率和实际运行时间估算更准确。"
    },
    {
      id: "washer",
      name: "洗衣机",
      group: "日常电器",
      watt: 400,
      hours: 1,
      days: 3,
      note: "洗衣和脱水阶段功率不同，这里取常见平均值。"
    },
    {
      id: "rice-cooker",
      name: "电饭煲",
      group: "日常电器",
      watt: 700,
      hours: 0.7,
      days: 5,
      note: "煮饭和保温阶段功率不同。"
    },
    {
      id: "hairdryer",
      name: "吹风机",
      group: "高功率电器",
      watt: 1200,
      hours: 0.25,
      days: 4,
      highPower: true,
      note: "大功率吹风机可能触发宿舍限电。"
    },
    {
      id: "kettle",
      name: "电热水壶",
      group: "高功率电器",
      watt: 1500,
      hours: 0.2,
      days: 7,
      highPower: true,
      note: "烧水时间短，但瞬时功率高。"
    },
    {
      id: "heater",
      name: "电暖器",
      group: "宿舍违禁",
      watt: 2000,
      hours: 2,
      days: 5,
      highPower: true,
      forbidden: true,
      safety: "电暖器属于宿舍常见违禁电器，长时间使用容易过载发热，请勿在宿舍使用。"
    },
    {
      id: "heater-rod",
      name: "热得快",
      group: "宿舍违禁",
      watt: 1500,
      hours: 0.5,
      days: 5,
      highPower: true,
      forbidden: true,
      safety: "热得快没有自动断电保护，极易引发干烧和触电事故，严禁在宿舍使用。"
    },
    {
      id: "induction",
      name: "电磁炉",
      group: "宿舍违禁",
      watt: 2000,
      hours: 1,
      days: 3,
      highPower: true,
      forbidden: true,
      safety: "电磁炉功率高、发热量大，属于宿舍常见违禁电器，请勿使用。"
    }
  ]
};
