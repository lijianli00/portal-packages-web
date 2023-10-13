import VueGridLayout, { GridLayout, GridItem } from "vue-grid-layout";
import { cloneDeep } from "lodash";
import { ref, getCurrentInstance, onMounted } from "vue";
const bbxAdminFacade = {
  add: "/bbxAdminFacade/addFacadeAssembly",
  getFaceByCode: "/bbxAdminFacade/getFaceByCode",
  update: "/bbxAdminFacade/updateFace",
  list: "/bbxAdminFacade/listFacePage",
  delete: "/bbxAdminFacade/deleteFaceById"
};
const bbxAppClient = {
  list: "/bbxAppClient/list"
};
var layoutConfig = {
  colNum: 24,
  rowHeight: 20,
  margin: [20, 20]
};
var LayoutContent_vue_vue_type_style_index_0_scoped_db4a9d38_lang = "";
function normalizeComponent(scriptExports, render11, staticRenderFns, functionalTemplate, injectStyles, scopeId, moduleIdentifier, shadowMode) {
  var options = typeof scriptExports === "function" ? scriptExports.options : scriptExports;
  if (render11) {
    options.render = render11;
    options.staticRenderFns = staticRenderFns;
    options._compiled = true;
  }
  if (functionalTemplate) {
    options.functional = true;
  }
  if (scopeId) {
    options._scopeId = "data-v-" + scopeId;
  }
  var hook;
  if (moduleIdentifier) {
    hook = function(context) {
      context = context || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext;
      if (!context && typeof __VUE_SSR_CONTEXT__ !== "undefined") {
        context = __VUE_SSR_CONTEXT__;
      }
      if (injectStyles) {
        injectStyles.call(this, context);
      }
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    options._ssrRegister = hook;
  } else if (injectStyles) {
    hook = shadowMode ? function() {
      injectStyles.call(
        this,
        (options.functional ? this.parent : this).$root.$options.shadowRoot
      );
    } : injectStyles;
  }
  if (hook) {
    if (options.functional) {
      options._injectStyles = hook;
      var originalRender = options.render;
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }
  return {
    exports: scriptExports,
    options
  };
}
const _sfc_main$9 = {
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },
  props: {
    layout: {
      type: Array,
      default: () => []
    },
    gardComponents: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      layoutConfig,
      isDraggable: false,
      imgId: "",
      previewSrcList: [],
      loadItemCount: 0
    };
  },
  methods: {
    loaded() {
      this.loadItemCount += 1;
      if (this.loadItemCount === this.layout.length) {
        this.$emit("update:loading", false);
      }
    },
    previewImg(id) {
      this.imgId = id;
      this.$nextTick(() => {
        this.$refs.previewImg.getImg(id);
      });
    },
    openImgArrView(arr) {
      this.previewSrcList = arr;
      this.$nextTick((item) => {
        this.$refs.img.clickHandler();
      });
    }
  }
};
var _sfc_render$9 = function render() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", [_c("grid-layout", { attrs: { "layout": _vm.layout, "col-num": _vm.layoutConfig.colNum, "row-height": _vm.layoutConfig.rowHeight, "is-draggable": _vm.isDraggable, "is-resizable": _vm.isDraggable, "is-mirrored": false, "vertical-compact": true, "margin": _vm.layoutConfig.margin, "use-css-transforms": true }, on: { "update:layout": function($event) {
    _vm.layout = $event;
  } } }, _vm._l(_vm.layout, function(item) {
    return _c("grid-item", { key: item.i, attrs: { "x": item.x, "y": item.y, "w": item.w, "h": item.h, "i": item.i } }, [_c(_vm.gardComponents[item.type] || item.type, _vm._b({ tag: "component", attrs: { "is-draggable": _vm.isDraggable }, on: { "update:isDraggable": function($event) {
      _vm.isDraggable = $event;
    }, "update:is-draggable": function($event) {
      _vm.isDraggable = $event;
    }, "preview-img": _vm.previewImg, "openImgArrView": _vm.openImgArrView, "loaded": _vm.loaded } }, "component", item.attrs, false))], 1);
  }), 1)], 1);
};
var _sfc_staticRenderFns$9 = [];
var __component__$9 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$9,
  _sfc_render$9,
  _sfc_staticRenderFns$9,
  false,
  null,
  "db4a9d38",
  null,
  null
);
var LayoutContent$1 = __component__$9.exports;
var LayoutView_vue_vue_type_style_index_0_scoped_78d5b383_lang = "";
const _sfc_main$8 = {
  components: {
    LayoutContent: LayoutContent$1
  },
  props: {
    layout: {
      type: Array,
      default: () => []
    },
    gardComponents: {
      type: Object,
      default: () => {
      }
    }
  },
  methods: {
    back() {
      this.$emit("back");
    }
  }
};
var _sfc_render$8 = function render2() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "layout" }, [_vm._m(0), _c("div", { staticClass: "main" }, [_c("LayoutContent", { attrs: { "layout": _vm.layout, "gard-components": _vm.gardComponents } })], 1), _c("div", { staticClass: "shade", on: { "click": _vm.back } })]);
};
var _sfc_staticRenderFns$8 = [function() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "header" }, [_c("div", { staticClass: "header-left" }, [_vm._v("\u95E8\u6237\u8BBE\u8BA1\u9884\u89C8")])]);
}];
var __component__$8 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$8,
  _sfc_render$8,
  _sfc_staticRenderFns$8,
  false,
  null,
  "78d5b383",
  null,
  null
);
var layoutView = __component__$8.exports;
var Index_vue_vue_type_style_index_0_scoped_0856a552_lang = "";
const dropdownList = [
  { label: "\u95E8\u6237\u540D\u79F0", key: "facadeName" },
  { label: "\u5E94\u7528\u540D\u79F0", key: "appName" }
];
const _sfc_main$7 = {
  components: { layoutView },
  data() {
    return {
      dropdownList,
      tableApi: bbxAdminFacade.list,
      form: {
        facadeName: "",
        appName: "",
        type: 1
      },
      tableData: [],
      loading: false,
      isView: false,
      layout: []
    };
  },
  methods: {
    onCreate() {
      this.$router.push({ path: "/bbx/portal/add" });
    },
    onUpdate(row) {
      this.$router.push({ path: "/bbx/portal/add", query: { id: row.facadeCode } });
    },
    onViews(row) {
      this.layout = JSON.parse(row.content);
      this.isView = true;
    },
    onDelete(row) {
      this.$delete(
        bbxAdminFacade.delete,
        {
          id: row.id
        },
        this.loadList,
        `\u786E\u5B9A\u5220\u9664\u3010${row.appName}\u3011\u5E94\u7528\uFF1F\u5220\u9664\u540E\u4E0D\u80FD\u6062\u590D\uFF01`
      );
    },
    loadList() {
      this.$refs.tableRef.loadList();
    }
  }
};
var _sfc_render$7 = function render3() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", [_c("sh-search-area", { attrs: { "form": _vm.form, "dropdown-list": _vm.dropdownList }, on: { "loadList": _vm.loadList }, scopedSlots: _vm._u([{ key: "btn", fn: function() {
    return [_c("el-button", { attrs: { "type": "primary" }, on: { "click": _vm.onCreate } }, [_vm._v("\u65B0\u589E")])];
  }, proxy: true }]) }, [_c("sh-form-item", { attrs: { "span": 12, "label": "\u95E8\u6237\u540D\u79F0", "path": "facadeName" } }, [_c("sh-input", { model: { value: _vm.form.facadeName, callback: function($$v) {
    _vm.$set(_vm.form, "facadeName", $$v);
  }, expression: "form.facadeName" } })], 1), _c("sh-form-item", { attrs: { "span": 12, "label": "\u5E94\u7528\u540D\u79F0", "path": "appName" } }, [_c("sh-input", { model: { value: _vm.form.appName, callback: function($$v) {
    _vm.$set(_vm.form, "appName", $$v);
  }, expression: "form.appName" } })], 1)], 1), _c("sh-table", { ref: "tableRef", attrs: { "class-name": "xy-table", "api": _vm.tableApi, "param": _vm.form } }, [_c("sh-table-column", { attrs: { "type": "index", "label": "\u5E8F\u53F7", "width": "60" } }), _c("sh-table-column", { attrs: { "prop": "facadeName", "label": "\u95E8\u6237\u540D", "min-width": "120", "align": "left" } }), _c("sh-table-column", { attrs: { "prop": "appName", "label": "\u5E94\u7528\u540D\u79F0", "min-width": "120", "align": "left" } }), _c("sh-table-column", { attrs: { "prop": "facadeCode", "label": "\u95E8\u6237\u7F16\u7801", "min-width": "120", "align": "left" } }), _c("sh-table-column", { attrs: { "prop": "sort", "label": "\u6392\u5E8F", "min-width": "80", "align": "left" } }), _c("sh-table-column", { attrs: { "prop": "status", "label": "\u95E8\u6237\u72B6\u6001", "min-width": "80", "align": "center" }, scopedSlots: _vm._u([{ key: "default", fn: function(scope) {
    return [scope.row.status ? _c("span", { staticClass: "color-st2" }, [_vm._v("\u6B63\u5E38")]) : _c("span", { staticClass: "color-st" }, [_vm._v("\u505C\u7528")])];
  } }]) }), _c("sh-table-column", { attrs: { "label": "\u64CD\u4F5C", "width": "180" }, scopedSlots: _vm._u([{ key: "default", fn: function(scope) {
    return [_c("div", { staticClass: "table-btn" }, [_c("el-button", { attrs: { "type": "text" }, on: { "click": function($event) {
      return _vm.onUpdate(scope.row);
    } } }, [_vm._v("\u7F16\u8F91")]), _c("el-button", { staticClass: "del-btn", attrs: { "type": "text" }, on: { "click": function($event) {
      return _vm.onDelete(scope.row);
    } } }, [_vm._v("\u5220\u9664")])], 1)];
  } }]) })], 1), _vm.isView ? _c("layoutView", { attrs: { "layout": _vm.layout }, on: { "back": function($event) {
    _vm.isView = false;
  } } }) : _vm._e()], 1);
};
var _sfc_staticRenderFns$7 = [];
var __component__$7 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$7,
  _sfc_render$7,
  _sfc_staticRenderFns$7,
  false,
  null,
  "0856a552",
  null,
  null
);
var Index$3 = __component__$7.exports;
var CreateUpdate_vue_vue_type_style_index_0_scoped_f59e4e49_lang = "";
const _sfc_main$6 = {
  props: {
    form: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      getData: []
    };
  },
  created() {
    this.getData = [];
    this.$post(bbxAppClient.list, { appId: "", appName: "", limit: 99, page: 1 }, (res) => {
      this.getData = res.data;
    });
  },
  methods: {
    validate(callback) {
      this.$refs.form.validate((valid) => {
        if (valid) {
          callback();
        }
      });
    }
  }
};
var _sfc_render$6 = function render4() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", [_c("sh-form", { ref: "form", attrs: { "model": _vm.form, "label-width": "120px", "class-name": "xy-form" } }, [_c("sh-form-item", { attrs: { "label": "\u6240\u5C5E\u5E94\u7528", "prop": "appId", "rules": "required" } }, [_c("el-select", { attrs: { "placeholder": "\u8BF7\u9009\u62E9" }, model: { value: _vm.form.appId, callback: function($$v) {
    _vm.$set(_vm.form, "appId", $$v);
  }, expression: "form.appId" } }, _vm._l(_vm.getData, function(item) {
    return _c("el-option", { key: item.id, attrs: { "label": item.appName, "value": item.appId } });
  }), 1)], 1), _c("sh-form-item", { attrs: { "label": "\u95E8\u6237\u540D\u79F0", "prop": "facadeName", "rules": "required" } }, [_c("el-input", { attrs: { "placeholder": "\u8BF7\u8F93\u5165\u95E8\u6237\u540D\u79F0" }, model: { value: _vm.form.facadeName, callback: function($$v) {
    _vm.$set(_vm.form, "facadeName", $$v);
  }, expression: "form.facadeName" } })], 1), _c("sh-form-item", { attrs: { "label": "\u95E8\u6237\u7F16\u7801", "prop": "facadeCode", "rules": [
    "required",
    { pattern: /^[a-zA-Z][a-zA-Z-]*[a-zA-Z]$/, message: "\u4EE5\u5B57\u6BCD\u5F00\u5934\u7ED3\u5C3E\u4E14\u53EA\u5305\u542B\u5B57\u6BCD\u6216\u8005\u4E2D\u5212\u7EBF", trigger: "blur" }
  ] } }, [_c("el-input", { attrs: { "placeholder": "\u8BF7\u8F93\u5165\u95E8\u6237\u7F16\u7801" }, model: { value: _vm.form.facadeCode, callback: function($$v) {
    _vm.$set(_vm.form, "facadeCode", $$v);
  }, expression: "form.facadeCode" } })], 1), _c("sh-form-item", { attrs: { "label": "\u6392\u5E8F", "prop": "sort", "rules": "required" } }, [_c("el-input-number", { attrs: { "controls-position": "right", "min": 0 }, model: { value: _vm.form.sort, callback: function($$v) {
    _vm.$set(_vm.form, "sort", $$v);
  }, expression: "form.sort" } })], 1), _c("sh-form-item", { attrs: { "label": "\u662F\u5426\u542F\u7528", "prop": "status", "rules": "required" } }, [_c("el-switch", { attrs: { "active-value": 1, "inactive-value": 0 }, model: { value: _vm.form.status, callback: function($$v) {
    _vm.$set(_vm.form, "status", $$v);
  }, expression: "form.status" } })], 1), _c("sh-form-item", { attrs: { "label": "\u5907\u6CE8", "prop": "appName", "rules": "remarks", "type": "textarea" } }, [_c("el-input", { attrs: { "type": "textarea", "placeholder": "\u8BF7\u8F93\u5165\u5907\u6CE8" }, model: { value: _vm.form.remarks, callback: function($$v) {
    _vm.$set(_vm.form, "remarks", $$v);
  }, expression: "form.remarks" } })], 1)], 1)], 1);
};
var _sfc_staticRenderFns$6 = [];
var __component__$6 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$6,
  _sfc_render$6,
  _sfc_staticRenderFns$6,
  false,
  null,
  "f59e4e49",
  null,
  null
);
var CreateUpdate = __component__$6.exports;
var Index_vue_vue_type_style_index_0_scoped_4c3a05e1_lang = "";
let mouseXY = { x: null, y: null };
let DragPos = { x: null, y: null, w: 1, h: 1, i: null };
const _sfc_main$5 = {
  components: {
    GridLayout,
    GridItem,
    CreateUpdate,
    layoutView
  },
  props: {
    gardList: {
      type: Array,
      default: () => []
    },
    gardComponents: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      isView: false,
      active: 1,
      isDraggable: true,
      itemKey: "",
      layout: [],
      layoutConfig,
      form: {
        id: "",
        systemCode: "",
        appName: "",
        facadeName: "",
        facadeCode: "",
        facadeType: "",
        sort: 0,
        status: 1,
        remarks: "",
        jsonObject: [],
        content: ""
      },
      modelType: []
    };
  },
  mounted() {
    document.addEventListener(
      "dragover",
      function(e) {
        mouseXY.x = e.clientX;
        mouseXY.y = e.clientY;
      },
      false
    );
    const id = this.$route.query.id;
    if (id) {
      this.getDetail(id);
    }
  },
  beforeDestroy() {
  },
  methods: {
    getDetail(facadeCode) {
      this.$post(
        bbxAdminFacade.getFaceByCode,
        {
          facadeCode
        },
        (data) => {
          this.form = { ...data.data };
          this.layout = data.data.jsonObject || [];
        }
      );
    },
    onSubmit() {
      this.form.jsonObject = this.layout;
      this.$post(
        this.form.id ? bbxAdminFacade.update : bbxAdminFacade.add,
        this.form,
        (data) => {
          this.$notify.success(data.msg);
          this.$router.push("/bbx/portal");
        },
        (error) => {
          this.$notify.error(error.msg);
        }
      );
    },
    next() {
      this.$refs.form.validate(() => {
        this.active = 2;
      });
    },
    back() {
      this.$router.go(-1);
    },
    removeItem(val) {
      const index = this.layout.map((item) => item.i).indexOf(val);
      if (this.layout[index].attrs && this.layout[index].attrs.selectList && this.layout[index].attrs.selectList.length) {
        this.layout[index].attrs.selectList = [];
      }
      this.layout.splice(index, 1);
    },
    mousedown() {
      this.itemKey = this.$dayjs().valueOf();
    },
    calcXY(top, left, el, item) {
      const colWidth = el.calcColWidth();
      let x = Math.round((left - el.margin[0]) / (colWidth + el.margin[0]));
      let y = Math.round((top - el.margin[1]) / (el.rowHeight + el.margin[1]));
      x = Math.max(Math.min(x, el.cols - item.w), 0);
      y = Math.max(Math.min(y, el.maxRows - item.h), 0);
      return { x, y };
    },
    drag(item) {
      let parentRect = document.getElementById("content").getBoundingClientRect();
      let mouseInGrid = false;
      if (mouseXY.x > parentRect.left && mouseXY.x < parentRect.right && mouseXY.y > parentRect.top && mouseXY.y < parentRect.bottom) {
        mouseInGrid = true;
      }
      if (mouseInGrid === true && this.layout.findIndex((item2) => item2.i === this.itemKey) === -1) {
        this.layout.push({
          x: this.layout.length * 2 % this.layoutConfig.colNum,
          y: this.layout.length + this.layoutConfig.colNum,
          i: this.itemKey,
          ...cloneDeep(item)
        });
      }
      let index = this.layout.findIndex((item2) => item2.i === this.itemKey);
      if (index !== -1) {
        try {
          this.$refs.gridlayout.$children[this.layout.length].$refs.item.style.display = "none";
        } catch {
        }
        let el = this.$refs.gridlayout.$children[index];
        el.dragging = { top: mouseXY.y - parentRect.top, left: mouseXY.x - parentRect.left };
        let new_pos = this.calcXY(mouseXY.y - parentRect.top, mouseXY.x - parentRect.left, el, item);
        if (mouseInGrid === true) {
          this.$refs.gridlayout.dragEvent("dragstart", this.itemKey, new_pos.x, new_pos.y, item.h, item.w);
          DragPos.i = String(index);
          DragPos.x = this.layout[index].x;
          DragPos.y = this.layout[index].y;
        }
        if (mouseInGrid === false) {
          this.$refs.gridlayout.dragEvent("dragend", this.itemKey, new_pos.x, new_pos.y, 1, 1);
          this.layout = this.layout.filter((obj) => obj.i !== this.itemKey);
        }
      }
    },
    dragend: function(item) {
      let parentRect = document.getElementById("content").getBoundingClientRect();
      let mouseInGrid = false;
      if (mouseXY.x > parentRect.left && mouseXY.x < parentRect.right && mouseXY.y > parentRect.top && mouseXY.y < parentRect.bottom) {
        mouseInGrid = true;
      }
      if (mouseInGrid === true) {
        this.$refs.gridlayout.dragEvent("dragend", this.itemKey, DragPos.x, DragPos.y, 1, 1);
        try {
          this.$refs.gridlayout.$children[this.layout.length].$refs.item.style.display = "block";
        } catch {
        }
      }
    }
  }
};
var _sfc_render$5 = function render5() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "draggable" }, [_vm.isView ? _c("layoutView", { attrs: { "layout": _vm.layout, "gard-components": _vm.gardComponents }, on: { "back": function($event) {
    _vm.isView = false;
  } } }) : _vm._e(), _c("div", { staticClass: "header" }, [_c("div", { staticClass: "header-left" }, [_vm._v("\u95E8\u6237\u8BBE\u8BA1")]), _c("div", { staticClass: "header-right" }, [_c("el-button", { attrs: { "disabled": _vm.active === 1 }, on: { "click": function($event) {
    _vm.active = 1;
  } } }, [_vm._v("\u4E0A\u4E00\u6B65")]), _c("el-button", { attrs: { "disabled": _vm.active === 2 }, on: { "click": _vm.next } }, [_vm._v("\u4E0B\u4E00\u6B65")]), _c("el-button", { attrs: { "disabled": _vm.active === 1, "type": "success" }, on: { "click": function($event) {
    _vm.isView = true;
  } } }, [_vm._v("\u9884\u89C8")]), _c("el-button", { attrs: { "disabled": _vm.active === 1, "type": "primary" }, on: { "click": _vm.onSubmit } }, [_vm._v("\u786E\u5B9A")]), _c("el-button", { on: { "click": _vm.back } }, [_vm._v("\u53D6\u6D88")])], 1), _c("div", { staticClass: "header-center" }, [_c("el-steps", { attrs: { "active": _vm.active, "simple": "" } }, [_c("el-step", { attrs: { "title": "\u57FA\u7840\u8BBE\u8BA1", "icon": "el-icon-edit" } }), _c("el-step", { attrs: { "title": "\u95E8\u6237\u8BBE\u8BA1", "icon": "el-icon-setting" } })], 1)], 1)]), _c("div", { directives: [{ name: "show", rawName: "v-show", value: _vm.active === 1, expression: "active === 1" }], staticClass: "add" }, [_c("CreateUpdate", { ref: "form", attrs: { "form": _vm.form } })], 1), _c("div", { directives: [{ name: "show", rawName: "v-show", value: _vm.active === 2, expression: "active === 2" }] }, [_c("div", { staticClass: "left" }, [_c("el-scrollbar", { staticClass: "scrollbar" }, [_c("div", { staticClass: "left-container" }, _vm._l(_vm.gardList, function(items, index) {
    return _c("ul", { key: index }, [_c("li", { staticClass: "left-title" }, [_vm._v(_vm._s(items.name))]), _vm._l(items.children, function(item) {
      return _c("li", { key: item.i, staticClass: "left-item components-item", attrs: { "draggable": true, "unselectable": "on" }, on: { "drag": function($event) {
        return _vm.drag(item);
      }, "dragend": function($event) {
        return _vm.dragend(item);
      }, "mousedown": _vm.mousedown } }, [_vm._v(" " + _vm._s(item.name) + " ")]);
    })], 2);
  }), 0)])], 1), _c("div", { staticClass: "center" }, [_c("div", { staticClass: "center-container", attrs: { "id": "content" } }, [_c("grid-layout", { ref: "gridlayout", attrs: { "layout": _vm.layout, "col-num": _vm.layoutConfig.colNum, "row-height": _vm.layoutConfig.rowHeight, "is-draggable": _vm.isDraggable, "is-resizable": _vm.isDraggable, "is-mirrored": false, "vertical-compact": true, "margin": _vm.layoutConfig.margin, "use-css-transforms": true }, on: { "update:layout": function($event) {
    _vm.layout = $event;
  } } }, _vm._l(_vm.layout, function(item) {
    return _c("grid-item", { key: item.i, attrs: { "x": item.x, "y": item.y, "w": item.w, "h": item.h, "i": item.i } }, [_c(_vm.gardComponents[item.type] || item.type, _vm._b({ tag: "component", attrs: { "is-draggable": _vm.isDraggable, "model-type": _vm.modelType, "setting": item.setting }, on: { "update:isDraggable": function($event) {
      _vm.isDraggable = $event;
    }, "update:is-draggable": function($event) {
      _vm.isDraggable = $event;
    } } }, "component", item.attrs, false)), item.setting ? _c("i", { staticClass: "el-icon-setting settting", on: { "click": function($event) {
      return _vm.setItem(item);
    } } }) : _vm._e(), _c("i", { staticClass: "el-icon-close remove", on: { "click": function($event) {
      return _vm.removeItem(item.i);
    } } })], 1);
  }), 1), _c("div", { directives: [{ name: "show", rawName: "v-show", value: !_vm.layout.length, expression: "!layout.length" }], staticClass: "empty-info" }, [_vm._v("\u4ECE\u5DE6\u4FA7\u62D6\u5165\u7EC4\u4EF6\u8FDB\u884C\u95E8\u6237\u8BBE\u8BA1")])], 1)])])], 1);
};
var _sfc_staticRenderFns$5 = [];
var __component__$5 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$5,
  _sfc_render$5,
  _sfc_staticRenderFns$5,
  false,
  null,
  "4c3a05e1",
  null,
  null
);
var Index$2 = __component__$5.exports;
var __$_require_fa8b30ae__ = "data:image/png;base64,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";
var NoData_vue_vue_type_style_index_0_scoped_829d6676_lang = "";
const _sfc_main$4 = {
  data() {
    return {};
  },
  methods: {}
};
var _sfc_render$4 = function render6() {
  var _vm = this;
  _vm._self._c;
  return _vm._m(0);
};
var _sfc_staticRenderFns$4 = [function() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "bg" }, [_c("img", { staticClass: "img", attrs: { "src": __$_require_fa8b30ae__, "alt": "" } }), _c("p", [_vm._v("\u9996\u9875\u6682\u672A\u914D\u7F6E\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458")])]);
}];
var __component__$4 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$4,
  _sfc_render$4,
  _sfc_staticRenderFns$4,
  false,
  null,
  "829d6676",
  null,
  null
);
var NoData = __component__$4.exports;
var __$_require_316b171f__ = "data:image/gif;base64,R0lGODlhZAAyAIABAMPY8wAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkVGN0M5Qzg1RkQ5ODExRUM5NjMyRUNCRkFERUZCMjBCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkVGN0M5Qzg2RkQ5ODExRUM5NjMyRUNCRkFERUZCMjBCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RUY3QzlDODNGRDk4MTFFQzk2MzJFQ0JGQURFRkIyMEIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RUY3QzlDODRGRDk4MTFFQzk2MzJFQ0JGQURFRkIyMEIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4B//79/Pv6+fj39vX08/Lx8O/u7ezr6uno5+bl5OPi4eDf3t3c29rZ2NfW1dTT0tHQz87NzMvKycjHxsXEw8LB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";
var Loading_vue_vue_type_style_index_0_scoped_42271bb1_lang = "";
const _sfc_main$3 = {
  data() {
    return {};
  },
  methods: {}
};
var _sfc_render$3 = function render7() {
  var _vm = this;
  _vm._self._c;
  return _vm._m(0);
};
var _sfc_staticRenderFns$3 = [function() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", [_c("img", { staticClass: "img", attrs: { "src": __$_require_316b171f__, "alt": "" } })]);
}];
var __component__$3 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$3,
  _sfc_render$3,
  _sfc_staticRenderFns$3,
  false,
  null,
  "42271bb1",
  null,
  null
);
var Loading = __component__$3.exports;
var layoutcontent_vue_vue_type_style_index_0_scoped_65a315f7_lang = "";
const _sfc_main$2 = {
  components: {
    GridLayout: VueGridLayout.GridLayout,
    GridItem: VueGridLayout.GridItem
  },
  props: {
    layout: {
      type: Array,
      default: () => []
    },
    gardComponents: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      layoutConfig,
      isDraggable: false,
      imgId: "",
      previewSrcList: [],
      loadItemCount: 0
    };
  },
  methods: {
    loaded() {
      this.loadItemCount += 1;
      if (this.loadItemCount === this.layout.length) {
        this.$emit("update:loading", false);
      }
    },
    previewImg(id) {
      this.imgId = id;
      this.$nextTick(() => {
        this.$refs.previewImg.getImg(id);
      });
    },
    openImgArrView(arr) {
      this.previewSrcList = arr;
      this.$nextTick((item) => {
        this.$refs.img.clickHandler();
      });
    }
  }
};
var _sfc_render$2 = function render8() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", [_c("grid-layout", { attrs: { "layout": _vm.layout, "col-num": _vm.layoutConfig.colNum, "row-height": _vm.layoutConfig.rowHeight, "is-draggable": _vm.isDraggable, "is-resizable": _vm.isDraggable, "is-mirrored": false, "vertical-compact": true, "margin": _vm.layoutConfig.margin, "use-css-transforms": true }, on: { "update:layout": function($event) {
    _vm.layout = $event;
  } } }, _vm._l(_vm.layout, function(item) {
    return _c("grid-item", { key: item.i, attrs: { "x": item.x, "y": item.y, "w": item.w, "h": item.h, "i": item.i } }, [_c(_vm.gardComponents[item.type] || item.type, _vm._b({ tag: "component", attrs: { "is-draggable": _vm.isDraggable }, on: { "update:isDraggable": function($event) {
      _vm.isDraggable = $event;
    }, "update:is-draggable": function($event) {
      _vm.isDraggable = $event;
    }, "preview-img": _vm.previewImg, "openImgArrView": _vm.openImgArrView, "loaded": _vm.loaded } }, "component", item.attrs, false))], 1);
  }), 1)], 1);
};
var _sfc_staticRenderFns$2 = [];
var __component__$2 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$2,
  _sfc_render$2,
  _sfc_staticRenderFns$2,
  false,
  null,
  "65a315f7",
  null,
  null
);
var LayoutContent = __component__$2.exports;
var Index_vue_vue_type_style_index_0_scoped_8751ea96_lang = "";
const _sfc_main$1 = {
  __name: "Index",
  props: {
    gardComponents: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  setup(__props) {
    const props = __props;
    const layout = ref([]);
    const isNoData = ref(false);
    const loading = ref(false);
    const { proxy } = getCurrentInstance();
    const id = proxy.$route.params.id;
    const portalCode = [`first`, `second`, `third`, `fourth`, `fifth`, `seventh`, `eighth`, `ninth`, `tenth`];
    const getPortal = async (id2) => {
      const res = await $post(bbxAdminFacade.getFaceByCode, { facadeCode: id2 });
      layout.value = res.data.jsonObject;
      console.log(res.data.jsonObject);
    };
    const key = portalCode.find((item) => {
      return $isCode(`bbx-index-${id}-${item}`);
    });
    onMounted(() => {
      if (key) {
        getPortal(`bbx-index-${id}-${key}`);
      } else {
        getPortal(`bbx-index-${id}`);
      }
    });
    return { __sfc: true, props, layout, isNoData, loading, proxy, id, portalCode, getPortal, key, NoData, Loading, LayoutContent };
  }
};
var _sfc_render$1 = function render9() {
  var _vm = this, _c = _vm._self._c, _setup = _vm._self._setupProxy;
  return _c("div", { staticClass: "mt--20 mx--20" }, [_setup.loading ? _c(_setup.Loading, { staticClass: "loading" }) : !_setup.isNoData && _setup.layout ? _c(_setup.LayoutContent, { attrs: { "layout": _setup.layout, "gard-components": _vm.gardComponents } }) : _c(_setup.NoData)], 1);
};
var _sfc_staticRenderFns$1 = [];
var __component__$1 = /* @__PURE__ */ normalizeComponent(
  _sfc_main$1,
  _sfc_render$1,
  _sfc_staticRenderFns$1,
  false,
  null,
  "8751ea96",
  null,
  null
);
var Index$1 = __component__$1.exports;
var imgs = "data:image/png;base64,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";
var Index_vue_vue_type_style_index_0_scoped_1c4c1b9a_lang = "";
const typeIcon = {
  \u5927\u98CE: "dafeng",
  \u66B4\u96E8: "baoyu",
  \u51B0\u96F9: "bingbao",
  \u5927\u96E8: "dayu",
  \u98CE: "feng",
  \u51BB\u96E8: "dongyu",
  \u5927\u96EA: "daxue",
  \u591A\u4E91: "duoyun",
  \u6C99\u5C18\u66B4: "shachenbao",
  \u96F7\u9635\u96E8: "leizhenyu",
  \u53F0\u98CE: "taifeng",
  \u96FE: "wu",
  \u6674\u5929: "qingtian",
  \u9F99\u5377\u98CE: "longjuanfeng",
  \u5C0F\u96EA: "xiaoxue",
  \u5C0F\u96E8: "xiaoyu",
  \u9635\u96E8: "zhenyu",
  \u96E8\u5939\u96EA: "yujiaxue",
  \u4E2D\u96E8: "zhongyu",
  \u9634\u5929: "yintian"
};
const _sfc_main = {
  data() {
    return {
      imgs,
      weather: { yesterday: {} },
      aqi: {},
      year: this.$dayjs().format("YYYY"),
      date: this.$dayjs().format("MM / DD")
    };
  },
  computed: {
    high() {
      let high = this.weather.yesterday.high;
      return high && high.replace("\u9AD8\u6E29 ", "").replace("\u2103", "\xB0");
    },
    low() {
      let low = this.weather.yesterday.low;
      return low && low.replace("\u4F4E\u6E29 ", "").replace("\u2103", "\xB0");
    },
    icon() {
      let type = this.weather.yesterday.type;
      return `sh-icon-${typeIcon[type] || "yintian"}`;
    }
  },
  methods: {
    getWeater() {
      const instance = axios.create({});
      instance.get("http://wthrcdn.etouch.cn/weather_mini", { params: { city: "\u5E7F\u5DDE\u5E02", _: this.$dayjs().valueOf() } }).then(({ data }) => {
        if (data && data.data) {
          this.weather = data.data;
        }
        this.$emit("loaded");
      }).catch();
    },
    getAqi(name) {
      this.$get(
        "http://wthrcdn.etouch.cn",
        { id: name },
        (data) => {
        },
        (error) => {
          if (error && error.data) {
            this.aqi = error.data;
          }
        }
      );
    }
  }
};
var _sfc_render = function render10() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "weather", style: { "background-image": `url(${_vm.imgs})` } }, [_c("div", { staticClass: "content" }, [_vm._m(0), _c("div", { staticClass: "date" }, [_c("p", { staticClass: "year" }, [_vm._v(_vm._s(_vm.year))]), _vm._v(" " + _vm._s(_vm.date) + " ")]), _c("div", { staticClass: "icon" }, [_c("i", { class: _vm.icon })]), _c("div", { staticClass: "type" }, [_c("p", [_vm._v(" " + _vm._s(_vm.weather.yesterday.type || "\u9634\u5929") + " "), _c("el-divider", { attrs: { "direction": "vertical" } }), _vm._v(" " + _vm._s(_vm.weather.yesterday.fx || "\u5357\u98CE") + " ")], 1), _c("p", { staticClass: "temp" }, [_vm._v(_vm._s(_vm.high || "31\xB0") + "/" + _vm._s(_vm.low || "10\xB0"))])])])]);
};
var _sfc_staticRenderFns = [function() {
  var _vm = this, _c = _vm._self._c;
  return _c("div", { staticClass: "gl" }, [_vm._v("\u516C"), _c("br"), _vm._v("\u5386")]);
}];
var __component__ = /* @__PURE__ */ normalizeComponent(
  _sfc_main,
  _sfc_render,
  _sfc_staticRenderFns,
  false,
  null,
  "1c4c1b9a",
  null,
  null
);
var Index = __component__.exports;
export { Index$2 as PortalAdd, Index$1 as PortalIndex, Index$3 as PortalList, Index as WeatherBox };
