import Vue from 'vue';
console.log('Hello world');
import './styles.scss';


new Vue({
  el: '#vue-app',
  data: {
    message: "hello",
    menuState: {
      staff: {
        show: false
      }, 
      student: {
        show: false
      }
    }
  },
  computed: {
    studentShowC: function() {
      return this.menuItemShow('student');
    },
    staffShowC: function() {
      return this.menuItemShow('staff');
    },
    staffDirIcon: function() {
      console.log('icon')
      return this.menuItemDirIcon('staff')
    }, 
    studentDirIcon: function() {
      return this.menuItemDirIcon('student');
    }
  },
  methods: {
    menuClick: function(menuItem) {
      this.menuState[menuItem].show = !this.menuState[menuItem].show;
    }, 
    menuItemShow: function(menuItem) {
      return this.menuState[menuItem].show === true ? "menu-show":"";
    },
    menuItemDirIcon: function(menuItem) {
      return this.menuState[menuItem].show === true ? "chevron-down-outline":"chevron-forward-outline";
    },
  }
})
