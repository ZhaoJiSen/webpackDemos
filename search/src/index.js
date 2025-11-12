Promise.all([import('nav/navHeader'), import('home/homeList')])
  .then(([{ default: nav }, { default: homeList }]) => {
    const div = document.createElement('div');

    // nav is a function that returns a DOM node
    div.appendChild(nav());

    const listContainer = document.createElement('div');
    listContainer.innerHTML = homeList(5);
    div.appendChild(listContainer);

    document.body.appendChild(div);
  })
  .catch((err) => {
    console.error('Failed to load remotes:', err);
  });
