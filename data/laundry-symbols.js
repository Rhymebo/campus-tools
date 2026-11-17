/*
 * 水洗标数据
 * 图标为国际水洗标常见样式的简化示意，不对应任何品牌的实物标签。
 * 每个选项的 advice 会直接出现在结果页，修改文案只需要改这里。
 */
window.LAUNDRY_SYMBOLS = {
  note: "图标是常见国际水洗标的简化示意，实际洗涤请以衣物标签和厂家说明为准。",
  groups: [
    {
      id: "wash",
      title: "洗涤方式",
      hint: "看水盆形状，以及水盆里有没有手或叉号",
      options: [
        {
          id: "wash-normal",
          label: "常规水洗",
          icon: "wash-normal",
          advice: "可以常规水洗：按面料选择温和程序，洗前拉好拉链、扣好纽扣，翻面更护色。"
        },
        {
          id: "wash-hand",
          label: "手洗",
          icon: "wash-hand",
          advice: "只能手洗：30°C 以下清水轻揉，不要拧绞，洗后用干毛巾按压吸水。"
        },
        {
          id: "no-wash",
          label: "不可水洗",
          icon: "no-wash",
          advice: "不可水洗：请送专业干洗，不要机洗、浸泡或自行脱水。",
          risk: "标签明确标注不可水洗，自行水洗可能造成缩水、变形或面料损伤。"
        }
      ]
    },
    {
      id: "temperature",
      title: "水温",
      hint: "水盆里的数字是最高洗涤温度",
      options: [
        {
          id: "temp-30",
          label: "最高 30°C",
          icon: "temp-30",
          advice: "最高 30°C：用冷水或低温程序，适合真丝、羊毛和易掉色衣物。"
        },
        {
          id: "temp-40",
          label: "最高 40°C",
          icon: "temp-40",
          advice: "最高 40°C：温水常规程序，适合棉麻和多数日常衣物。"
        },
        {
          id: "temp-60",
          label: "最高 60°C",
          icon: "temp-60",
          advice: "最高 60°C：可高温洗涤，适合白色棉织物、毛巾和床品。"
        },
        {
          id: "temp-95",
          label: "最高 95°C",
          icon: "temp-95",
          advice: "最高 95°C：只适合可耐高温的棉麻，日常衣物不建议使用这个温度。",
          risk: "95°C 接近沸水，普通印花、化纤和混纺衣物容易缩水或变形。"
        }
      ]
    },
    {
      id: "bleach",
      title: "漂白",
      hint: "看三角形里是空的、有斜线，还是有叉号",
      options: [
        {
          id: "bleach-any",
          label: "可以漂白",
          icon: "bleach-any",
          advice: "可以使用含氯漂白剂：先按说明稀释，避免直接倒在衣物上，漂后充分漂洗。"
        },
        {
          id: "bleach-oxygen",
          label: "仅氧漂",
          icon: "bleach-oxygen",
          advice: "仅可使用氧漂（非氯漂）：不要使用 84 等含氯漂白剂。"
        },
        {
          id: "no-bleach",
          label: "不可漂白",
          icon: "no-bleach",
          advice: "不可漂白：避免含氯和氧漂产品，污渍优先用中性洗涤剂局部处理。",
          risk: "不可漂白的衣物接触含氯漂白剂后，可能出现褪色或纤维损伤。"
        }
      ]
    },
    {
      id: "dry",
      title: "干燥",
      hint: "正方形代表晾干，正方形里加圆代表可以烘干",
      options: [
        {
          id: "tumble-any",
          label: "可以烘干",
          icon: "tumble-any",
          advice: "可以使用滚筒烘干：按面料选择程序，针织和易缩水衣物建议降低温度。"
        },
        {
          id: "tumble-low",
          label: "仅低温烘干",
          icon: "tumble-low",
          advice: "仅可低温烘干：避免高温导致缩水、起皱或变形。"
        },
        {
          id: "no-tumble",
          label: "不可烘干",
          icon: "no-tumble",
          advice: "不可烘干：自然晾干，针织类平摊，避免长时间暴晒。",
          risk: "不可烘干的衣物用高温滚筒烘干，容易缩水或变形。"
        },
        {
          id: "line-dry",
          label: "悬挂晾干",
          icon: "line-dry",
          advice: "悬挂晾干：用衣架撑起，在通风处阴干，深色衣物反面晾晒。"
        },
        {
          id: "flat-dry",
          label: "平摊晾干",
          icon: "flat-dry",
          advice: "平摊晾干：针织、羊毛和易变形衣物平铺阴干，不要悬挂。"
        }
      ]
    },
    {
      id: "iron",
      title: "熨烫",
      hint: "熨斗里的圆点越多，允许的温度越高",
      options: [
        {
          id: "iron-low",
          label: "低温熨烫",
          icon: "iron-low",
          advice: "低温熨烫（约 110°C）：隔布熨烫，适合化纤和带印花衣物。"
        },
        {
          id: "iron-mid",
          label: "中温熨烫",
          icon: "iron-mid",
          advice: "中温熨烫（约 150°C）：适合棉混纺，先在不显眼处试烫。"
        },
        {
          id: "iron-high",
          label: "高温熨烫",
          icon: "iron-high",
          advice: "高温熨烫（约 200°C）：适合棉麻，蒸汽熨烫时注意垫布。"
        },
        {
          id: "no-iron",
          label: "不可熨烫",
          icon: "no-iron",
          advice: "不可熨烫：不要用熨斗直接接触，可用蒸汽挂烫远距离处理。",
          risk: "不可熨烫的面料或装饰遇到高温熨斗，可能留下亮斑或烫伤。"
        }
      ]
    },
    {
      id: "dryclean",
      title: "干洗",
      hint: "圆形代表干洗，里面的字母表示可用的干洗溶剂",
      options: [
        {
          id: "dry-clean",
          label: "可以干洗",
          icon: "dry-clean",
          advice: "可以干洗：交给专业干洗店，并说明污渍位置和面料成分。"
        },
        {
          id: "no-dryclean",
          label: "不可干洗",
          icon: "no-dryclean",
          advice: "不可干洗：不要送干洗，按水洗建议处理。",
          risk: "标签标注不可干洗，送洗前请先和店家确认，避免溶剂损伤。"
        }
      ]
    }
  ]
};
