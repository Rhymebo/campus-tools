/*
 * 示例校区数据
 * 楼栋、教室号和地图坐标都是演示数据，替换成真实校区时保持字段结构即可。
 * 教室号规则：3-4 位数字，前 1-2 位是楼层，后 2 位是房间序号（302 = 3 楼 02 室）。
 */
window.CAMPUS_DATA = {
  name: "示例校区",
  note: "示例校区只用于演示找教室流程。真实数据请替换本文件中的楼栋、入口坐标和教室数量。",
  map: { width: 640, height: 420 },
  roads: [
    { x1: 24, y1: 210, x2: 616, y2: 210 },
    { x1: 330, y1: 24, x2: 330, y2: 396 },
    { x1: 154, y1: 140, x2: 154, y2: 210 },
    { x1: 486, y1: 140, x2: 486, y2: 210 },
    { x1: 154, y1: 210, x2: 154, y2: 360 },
    { x1: 486, y1: 210, x2: 486, y2: 372 }
  ],
  plaza: { x: 330, y: 210, r: 26, label: "中心广场" },
  buildings: [
    {
      id: "mingde",
      name: "明德楼",
      aliases: ["明德楼", "明德", "A栋", "A楼", "A座", "教学楼A"],
      floors: 4,
      roomsPerFloor: 8,
      roomLabel: "教室",
      description: "公共课和通识课主要教学楼，南门靠近食堂。",
      map: { x: 64, y: 48, w: 180, h: 92 },
      entrance: { x: 154, y: 140, label: "南门入口" }
    },
    {
      id: "gewu",
      name: "格物楼",
      aliases: ["格物楼", "格物", "B栋", "B楼", "B座", "教学楼B"],
      floors: 5,
      roomsPerFloor: 6,
      roomLabel: "教室",
      description: "专业课教室和教师办公室，正门朝北。",
      map: { x: 396, y: 48, w: 180, h: 92 },
      entrance: { x: 486, y: 140, label: "北门入口" }
    },
    {
      id: "zhiyuan",
      name: "致远楼",
      aliases: ["致远楼", "致远", "C栋", "C楼", "C座", "教学楼C"],
      floors: 3,
      roomsPerFloor: 10,
      roomLabel: "教室",
      description: "阶梯教室和小班研讨室，靠近东侧操场。",
      map: { x: 64, y: 268, w: 180, h: 92 },
      entrance: { x: 154, y: 360, label: "南门入口" }
    },
    {
      id: "library",
      name: "图书馆",
      aliases: ["图书馆", "图书楼", "自习楼"],
      floors: 5,
      roomsPerFloor: 6,
      roomLabel: "自习室",
      description: "自习室和阅览区，正门面向中心广场。",
      map: { x: 396, y: 268, w: 180, h: 104 },
      entrance: { x: 486, y: 372, label: "正门入口" }
    }
  ]
};
