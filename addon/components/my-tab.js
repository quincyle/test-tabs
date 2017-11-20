import Ember from 'ember'
import layout from '../templates/components/my-tab'

const {computed} = Ember

export default Ember.Component.extend({
  layout,

  classNames: ['my-tab'],
  classNameBindings: ['isSelected:active'],

  isSelected: computed('id', 'selectedTab', function () {
    return this.id === this.selectedTab
  }),

  contentClass: computed('tabIndex', function () {
    return `tab-${this.get('tabIndex')}`
  }),

  actions: {
    onChange () {
      if (this.onChange) {
        this.onChange(this.id)
      }
    }
  }
})
