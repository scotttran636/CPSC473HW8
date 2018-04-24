import Route from '@ember/routing/route';

export default Route.extend({
  //specify a model, and return whatever data you want to make availible to the template
  model() {
    return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
  }
});
