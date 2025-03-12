"use strict";

var index_view = new Vue({
  el: "#app",
  data: {
    "bestList": ["product1", "product32", "product12", "product38", "product45", "product60"]
  },
  methods: {},
  computed: {
    bestProducts: function bestProducts() {
      var _this = this;

      return this.bestList.map(function (id) {
        return _this.productMapping[id] || {};
      });
    }
  },
  mounted: function mounted() {}
});