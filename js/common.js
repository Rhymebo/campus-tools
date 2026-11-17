/*
 * 公共脚本
 * 只做三件事：存取跨页面数据、格式化文本、维护导航状态。
 * 不依赖任何第三方库，可以直接用 file:// 打开。
 */
(function () {
  "use strict";

  var CH = (window.CH = window.CH || {});

  CH.KEYS = {
    laundry: "campus-helper:laundry-result",
    place: "campus-helper:place-result"
  };

  var memory = {};

  CH.store = {
    set: function (key, value) {
      memory[key] = value;
      try {
        window.sessionStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        // file:// 或隐私模式下 sessionStorage 可能不可用，退回 window.name。
        try {
          var all = JSON.parse(window.name || "{}");
          all[key] = value;
          window.name = JSON.stringify(all);
        } catch (ignored) {
          // 内存兜底已经在上面写入。
        }
      }
    },
    get: function (key, fallback) {
      if (Object.prototype.hasOwnProperty.call(memory, key)) {
        return memory[key];
      }
      try {
        var raw = window.sessionStorage.getItem(key);
        if (raw) {
          return JSON.parse(raw);
        }
      } catch (error) {
        // 继续尝试 window.name。
      }
      try {
        var all = JSON.parse(window.name || "{}");
        if (Object.prototype.hasOwnProperty.call(all, key)) {
          return all[key];
        }
      } catch (ignored) {
        // 没有可用数据。
      }
      return typeof fallback === "undefined" ? null : fallback;
    },
    remove: function (key) {
      delete memory[key];
      try {
        window.sessionStorage.removeItem(key);
      } catch (error) {
        // 忽略。
      }
      try {
        var all = JSON.parse(window.name || "{}");
        delete all[key];
        window.name = JSON.stringify(all);
      } catch (ignored) {
        // 忽略。
      }
    }
  };

  CH.escapeHtml = function (value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  };

  CH.formatNumber = function (value, digits) {
    var number = Number(value);
    if (!isFinite(number)) {
      return "0";
    }
    return number.toFixed(typeof digits === "number" ? digits : 2);
  };

  CH.formatMoney = function (value) {
    return CH.formatNumber(value, 2);
  };

  CH.formatKwh = function (value) {
    var number = Number(value);
    if (!isFinite(number) || number === 0) {
      return "0";
    }
    return number < 1 ? CH.formatNumber(number, 3) : CH.formatNumber(number, 2);
  };

  CH.parseNumber = function (value) {
    var number = Number(String(value == null ? "" : value).replace(/[^\d.-]/g, ""));
    return isFinite(number) ? number : NaN;
  };

  CH.getParam = function (name) {
    var params = new URLSearchParams(window.location.search);
    return params.get(name);
  };

  CH.toHalfWidthDigits = function (value) {
    return String(value == null ? "" : value).replace(/[０-９]/g, function (char) {
      return String.fromCharCode(char.charCodeAt(0) - 65248);
    });
  };

  CH.ready = function (fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn);
    } else {
      fn();
    }
  };

  CH.setActiveNav = function () {
    var file = window.location.pathname.split("/").pop() || "index.html";
    var map = {
      laundry: file.indexOf("laundry") === 0,
      power: file.indexOf("power") === 0,
      findplace: file.indexOf("findplace") === 0
    };

    document.querySelectorAll("[data-nav]").forEach(function (link) {
      var key = link.getAttribute("data-nav");
      if (map[key]) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  CH.ready(function () {
    CH.setActiveNav();
    document.querySelectorAll("[data-year]").forEach(function (node) {
      node.textContent = String(new Date().getFullYear());
    });
  });
})();
