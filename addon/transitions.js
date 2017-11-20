export default function(){
  this.transition(
    this.childOf('.liquid-tab-content'),
    this.toValue((toValue, fromValue) => {
      return toValue > fromValue
    }),
    this.use('toRight'),
    this.reverse('toLeft')
  );
}
