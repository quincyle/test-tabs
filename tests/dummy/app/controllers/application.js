import Ember from 'ember'
const {Controller} = Ember

export default Controller.extend({
  selectedTab: 0,

  options: [
    {
      tabIndex: 1,
      title: 'First Tab',
      content: 'Content for first tab.'
    },
    {
      tabIndex: 2,
      title: 'Second Tab',
      content: 'Content for second tab.'
    },
    {
      tabIndex: 3,
      title: 'Third Tab',
      content: 'Content for third tab.'
    }
  ],

  actions: {
    onChange(selectedTab) {
      this.set('selectedTab', selectedTab)
    }
  }
})
