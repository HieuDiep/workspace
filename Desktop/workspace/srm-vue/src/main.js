import Vue from 'vue';
console.log('Hello world');
import './styles.scss';


new Vue({
  el: '#vue-app',
  data: {
    message: "hello",
    staffShow: false,
  },
  computed: {
    staffShowC: function() {
      return this.staffShow === true ? "menu-show":"";
    }
  },
  methods: {
    staffClick: function() {
      console.log('StaffClick');
      this.staffShow = !this.staffShow;
    }
  }
})
