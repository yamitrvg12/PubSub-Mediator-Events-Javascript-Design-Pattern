const stats = (function () {
  let totalPeople = '0';

  // Cache DOM
  const $stats = $('#stats-module');
  const $statsCound = $stats.find('#stats-module-count');
  const template = $stats.find('#stats-template').html();

  function render() {
    $statsCound.html(Mustache.render(template, { people: totalPeople }));
  }

  function setPeople(newPeople) {
    totalPeople = newPeople;
    render();
  }

  // Bind events
  pubsub.subscribe('peopleChange', setPeople);

  render();
}());
