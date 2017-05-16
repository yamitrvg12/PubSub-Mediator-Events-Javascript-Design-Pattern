const totalPeople = (function () {
  let totalUsers = '0';

  // Cache DOM
  const $stats = $('#total-people-module');
  const $statsCound = $stats.find('#total-people-module-count');
  const $unSubscribeBtn = $stats.find('#total-people-module-unsubscribe');
  const template = $stats.find('#total-people-module-template').html();

  function render() {
    $statsCound.html(Mustache.render(template, { people: totalUsers }));
  }

  function setUsers(newUsers) {
    totalUsers = newUsers;
    render();
  }

  function unSubscribe() {
      pubsub.unsubscribe('peopleChange', setUsers);
  }

  // Bind events
  pubsub.subscribe('peopleChange', setUsers);
  $unSubscribeBtn.on('click', unSubscribe);

  render();
}());
