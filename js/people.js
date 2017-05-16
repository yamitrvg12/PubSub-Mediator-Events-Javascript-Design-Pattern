const addPeople = (function () {
  const people = ['Peter', 'Maria', 'Lucas', 'Jose', 'Patrick'];

  // CacheDOM
  const $el = $('#add-people');
  const $input = $el.find('#add-people-form-add');
  const $button = $el.find('#add-people-form-submit');
  const $ul = $el.find('#add-people-list');
  const template = $el.find('#add-people-template').html();

  function render() {
    $ul.html(Mustache.render(template, { people }));
    pubsub.publish('peopleChange', people.length);
  }

  render();

  function addPerson(event) {
    event.preventDefault();

    people.push($input.val());
    render();
    $input.val('');
  }

  function removePerson(event) {
    let i;

    if (typeof event === 'number') {
      i = event;
    } else {
      const $remove = $(event.target).closest('li');
      i = $ul.find('li').index($remove);
    }

    people.splice(i, 1);
    render();
  }

  // BindEvent
  $button.on('click', addPerson);
  $ul.on('click', 'i.del', removePerson);

  return {
    addPerson,
    removePerson,
  };
}());
