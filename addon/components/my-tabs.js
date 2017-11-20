import Ember from 'ember';
const {guidFor} = Ember
import layout from '../templates/components/my-tabs';

export default Ember.Component.extend({
  layout,

  classNames: ['my-tabs'],

  selectedTab: null,
  targetOutlet: `tab-content-${guidFor({})}`,
});
