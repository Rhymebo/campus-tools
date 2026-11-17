/*
 * 洗衣问卷与建议规则
 * 题目、选项和建议文案集中在这里；风险规则用 when 描述组合条件。
 */
window.LAUNDRY_RULES = {
  quizTitle: "5 个问题，判断怎么洗",
  quizNote: "没有标签时，按你了解的信息选择最接近的一项。不确定的项选“不清楚”，结果会偏保守。",
  questions: [
    {
      id: "material",
      index: "01",
      title: "衣服的主要面料是什么？",
      hint: "看衣物内侧的成分标签；没有标签就按手感判断。",
      options: [
        {
          id: "cotton",
          label: "棉 / 麻",
          advice: [
            "棉麻耐洗，建议 40°C 常规程序，深浅色分开。",
            "白色棉织物可适当提高温度，彩色棉建议反面洗。"
          ]
        },
        {
          id: "wool",
          label: "羊毛 / 羊绒",
          advice: [
            "建议 30°C 羊毛程序或手洗，使用中性洗涤剂。",
            "不要拧绞和悬挂晾干，平铺整形后阴干。"
          ]
        },
        {
          id: "silk",
          label: "真丝 / 缎面",
          advice: [
            "建议 30°C 以下手洗，轻揉快洗，不要长时间浸泡。",
            "使用中性洗涤剂，避免暴晒和高温熨烫。"
          ]
        },
        {
          id: "synthetic",
          label: "化纤 / 涤纶",
          advice: [
            "建议 30-40°C 温和程序，避免高温熨烫。",
            "容易起球，翻面洗并减少与粗糙衣物混洗。"
          ]
        },
        {
          id: "denim",
          label: "牛仔",
          advice: [
            "建议 30°C 反面洗，减少洗涤次数。",
            "不要高温烘干，避免褪色和缩水。"
          ]
        },
        {
          id: "down",
          label: "羽绒",
          advice: [
            "建议 30°C 羽绒程序，使用中性洗涤剂。",
            "彻底漂洗后低温烘干，放几只烘干球帮助恢复蓬松。"
          ]
        },
        {
          id: "blend",
          label: "混纺 / 不清楚",
          advice: [
            "按最娇贵的成分选择程序，建议 30°C 温和洗。",
            "不确定成分时优先冷水、短程序、自然晾干。"
          ]
        }
      ]
    },
    {
      id: "decoration",
      index: "02",
      title: "有没有特殊装饰？",
      hint: "装饰越立体，越需要减少摩擦和高温。",
      options: [
        {
          id: "none",
          label: "没有特殊装饰",
          advice: ["常规洗涤即可，洗前检查口袋，拉好拉链。"]
        },
        {
          id: "print",
          label: "刺绣 / 印花",
          advice: ["印花和刺绣衣物翻面洗，避免高温熨烫图案。"]
        },
        {
          id: "sequin",
          label: "亮片 / 珠片",
          advice: ["建议手洗或装洗衣袋，反面轻洗，不要用力搓揉装饰。"]
        },
        {
          id: "lace",
          label: "蕾丝 / 薄纱",
          advice: ["装洗衣袋，选择轻柔程序，避免与金属配件混洗。"]
        },
        {
          id: "metal",
          label: "金属配件 / 拉链",
          advice: ["洗前拉好拉链，翻面洗，避免刮伤其他衣物。"]
        },
        {
          id: "leather",
          label: "皮革拼接",
          advice: ["皮革拼接部位避免浸泡和机洗，建议局部擦拭或专业护理。"]
        }
      ]
    },
    {
      id: "color",
      index: "03",
      title: "颜色深浅？",
      hint: "第一次洗的深色衣物最容易掉色。",
      options: [
        {
          id: "light",
          label: "浅色",
          advice: ["浅色衣物与同色系同洗，避免与深色混洗。"]
        },
        {
          id: "medium",
          label: "中色",
          advice: ["按深浅分开洗，首次洗涤建议单独洗。"]
        },
        {
          id: "dark",
          label: "深色",
          advice: ["深色衣物反面洗，30°C 以下，减少褪色。", "不要长时间浸泡，避免与浅色混洗。"]
        },
        {
          id: "fade",
          label: "容易掉色",
          advice: ["单独洗，冷水短程序，不要浸泡。"]
        }
      ]
    },
    {
      id: "fit",
      index: "04",
      title: "版型？",
      hint: "贴身和有结构的版型，对洗涤和晾晒更敏感。",
      options: [
        {
          id: "loose",
          label: "宽松",
          advice: ["宽松版型常规洗即可，注意不要过度烘干。"]
        },
        {
          id: "regular",
          label: "常规",
          advice: ["按面料对应的程序洗即可。"]
        },
        {
          id: "slim",
          label: "贴身",
          advice: ["建议 40°C 洗涤并充分漂洗，减少洗涤剂残留。"]
        },
        {
          id: "structured",
          label: "有版型 / 易变形",
          advice: ["建议手洗或装洗衣袋，脱水后立即整形，平摊晾干。"]
        }
      ]
    },
    {
      id: "washMode",
      index: "05",
      title: "你打算怎么洗？",
      hint: "这一题决定程序、脱水和烘干建议。",
      options: [
        {
          id: "hand",
          label: "手洗",
          advice: ["按手洗准备：30°C 以下清水，轻揉，不要拧绞。"]
        },
        {
          id: "machine",
          label: "洗衣机",
          advice: ["机洗选择温和程序，脱水转速不要过高。"]
        },
        {
          id: "machine-dry",
          label: "机洗 + 烘干",
          advice: ["如需烘干选择低温，程序结束后立即取出整形。"]
        }
      ]
    }
  ],
  riskRules: [
    {
      when: { material: ["wool", "silk"], washMode: ["machine", "machine-dry"] },
      text: "羊毛和真丝不建议机洗：摩擦和脱水容易导致缩水、起球或变形。"
    },
    {
      when: { material: ["silk"], washMode: ["machine-dry"] },
      text: "真丝不建议烘干：高温会让纤维变脆、失去光泽。"
    },
    {
      when: { decoration: ["sequin", "lace", "leather"], washMode: ["machine", "machine-dry"] },
      text: "亮片、蕾丝和皮革拼接部位不耐机洗摩擦，建议手洗或装袋轻柔洗。"
    },
    {
      when: { fit: ["structured"], washMode: ["machine", "machine-dry"] },
      text: "有版型的衣物机洗后容易走形，建议装洗衣袋并降低脱水转速。"
    },
    {
      when: { color: ["fade"], washMode: ["machine", "machine-dry"] },
      text: "易掉色衣物不要和其他衣物同洗，首次洗涤请单独处理。"
    }
  ],
  generalTips: [
    "新买的深色衣物先单独洗一次，确认不掉色再混洗。",
    "洗涤剂按说明用量，残留比污渍更伤皮肤。",
    "不确定时优先冷水、短程序、自然晾干。"
  ]
};
