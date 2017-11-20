import myTabsTransitions from 'test-tabs/transitions'

export function initialize(appInstance) {
  const transitionService = appInstance.lookup('service:liquid-fire-transitions')
  transitionService.map(myTabsTransitions)
}

export default {
  name: 'my-tabs',
  initialize
};
