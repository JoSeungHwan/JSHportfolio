import { Component } from '../core/jo';

interface State {
  [key: string]: unknown;
  menus: {
    name: string;
    href: string;
  }[];
}

export default class TheHeader extends Component {
  public state!: State;
  constructor() {
    super({
      tagName: 'header',
      state: {
        menus: [
          {
            name: 'git',
            href: 'https://github.com/JoSeungHwan',
          },
          {
            name: 'Notion',
            href: 'https://www.notion.so/IOS-Developer-e65fa672d22e45d3885e09503206a495?pvs=4',
          },
          {
            name: 'About',
            href: '#/about',
          },
        ],
      },
    });
    window.addEventListener('popstate', () => {
      this.render();
    });
  }
  render() {
    this.el.innerHTML = /* html */ `
      <a
        href="#/"
        class="logo">
        <span>JSH</span>
      </a>
      <nav>
        <ul>
          ${this.state.menus
            .map((menu) => {
              const href = menu.href.split('?')[0];
              const hash = location.hash.split('?')[0];
              const isActive = href === hash;
              return /* html */ `
              <li>
                <a
                  class="${isActive ? 'active' : ''}"
                  href="${menu.href}">
                  ${menu.name}
                </a>
              </li>`;
            })
            .join('')}
        </ul>
      </nav>
      <a href="#/about" class="user">
        <img src="https://avatars.githubusercontent.com/u/111415219?u=aff17905a0f1263d4f21cc37af3b3dece7e6c2ba&v=4" alt="User">
      </a>
    `;
  }
}
