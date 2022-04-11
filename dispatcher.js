class DispatcherFrontend {

  #menu = []
  #apiPathPost = 'https://metoo-app.ru/insider'
  #testTail = '?apiFork=GET_USER&user=admin&password=qwerty12345'

  async requestCreator(props) {

    const { 
      type, 
      fork, 
      headers = { 
        'Content-Type': 'application/json;charset=utf-8' 
      }, body: { user, password }
    } = props

    let RESULT = ''

    switch(type) {

      case 'POST':
        let response = await fetch(`${this.#apiPathPost}`, {
          method: 'POST',
          headers,
          body: JSON.stringify({
            apiFork: fork,
            user,
            password
          })
        });
        
        let answ = await response.json();
        let auth = ''

        answ ? auth = result : auth = false
        RESULT = auth

    }

    return RESULT

  }

  // ----------------------------------------
  // ----------------------------------------

  stateController() {

    const stateControl = setInterval(() => {

      if ( this.getStoreValue('authDataLogin') && this.getStoreValue('authDataPassword') ) {

        document.getElementsByClassName('dispatcher__authBoard__inpsGroup__submit')[0]
        ? document.getElementsByClassName('dispatcher__authBoard__inpsGroup__submit')[0].style.opacity = 1 : null

      } else {

        document.getElementsByClassName('dispatcher__authBoard__inpsGroup__submit')[0]
        ? document.getElementsByClassName('dispatcher__authBoard__inpsGroup__submit')[0].style.opacity = 0.4 : null

      }

      // ---------------------------
      // ---------------------------

      if ( this.getStoreValue('selectionElement') ) {

        if ( document.getElementsByClassName('dispatcher__workspace')[0] ) {

          if ( !document.getElementById('secon') ) {

            const elem = this.getStoreValue('selectionElement')

            this.newTag({
              attributes: [
                [ 'class', 'selectElementContainer' ],
                [ 'id', 'secon' ],
              ],
              parent: document.getElementsByClassName('dispatcher__workspace')[0],
              children: $$ => {

                this.newTag({
                  tag: 'h5',
                  inner: !elem.inner ? `< ${elem.tag} >` : `< ${elem.tag} > ${elem.inner} < ${elem.tag} >`,
                  attributes: [
                    [ 'class', 'selectElementContainer__title' ],
                    [ 'style', 'display: block; margin-bottom: 14px; font-size: 16px;' ]
                  ],
                  parent: document.getElementsByClassName('selectElementContainer')[0]
                })
                this.newTag({
                  attributes: [
                    [ 'class', 'selectElementContainer__counterInputWrapper' ]
                  ],
                  parent: document.getElementsByClassName('selectElementContainer')[0],
                  children: $$ => {
                    this.newTag({
                      tag: 'input',
                      attributes: [
                        [ 'type', 'text' ],
                        [ 'placeholder', 'номер счетчика метрики' ],
                        [ 'maxlength', '10' ],
                        [ 'class', 'selectElementContainer__counterInput' ],
                        [ 'id', 'secon-counter' ]
                      ],
                      parent: document.getElementsByClassName('selectElementContainer__counterInputWrapper')[0]
                    })
                    this.newTag({
                      tag: 'span',
                      inner: '1',
                      attributes: [
                        [ 'class', 'selectElementContainer__step' ]
                      ],
                      parent: document.getElementsByClassName('selectElementContainer__counterInputWrapper')[0]
                    })
                  }
                })
                this.newTag({
                  attributes: [
                    [ 'class', 'selectElementContainer__goalInputWrapper' ]
                  ],
                  parent: document.getElementsByClassName('selectElementContainer')[0],
                  children: $$ => {
                    this.newTag({
                      tag: 'input',
                      attributes: [
                        [ 'type', 'text' ],
                        [ 'placeholder', 'идентификатор цели' ],
                        [ 'maxlength', '30' ],
                        [ 'class', 'selectElementContainer__goalInput' ],
                        [ 'id', 'secon-goal' ]
                      ],
                      parent: document.getElementsByClassName('selectElementContainer__goalInputWrapper')[0]
                    })
                    this.newTag({
                      tag: 'span',
                      inner: '2',
                      attributes: [
                        [ 'class', 'selectElementContainer__step' ]
                      ],
                      parent: document.getElementsByClassName('selectElementContainer__goalInputWrapper')[0]
                    })
                  }
                })
                this.newTag({
                  attributes: [
                    [ 'class', 'selectElementContainer__goalTypeInputWrapper' ]
                  ],
                  parent: document.getElementsByClassName('selectElementContainer')[0],
                  children: $$ => {
                    this.newTag({
                      tag: 'input',
                      attributes: [
                        [ 'type', 'text' ],
                        [ 'placeholder', 'тип события (необязательно)' ],
                        [ 'maxlength', '30' ],
                        [ 'class', 'selectElementContainer__goalTypeInput' ],
                        [ 'id', 'secon-goal' ]
                      ],
                      parent: document.getElementsByClassName('selectElementContainer__goalTypeInputWrapper')[0]
                    })
                    this.newTag({
                      tag: 'span',
                      inner: '3',
                      attributes: [
                        [ 'class', 'selectElementContainer__step' ]
                      ],
                      parent: document.getElementsByClassName('selectElementContainer__goalTypeInputWrapper')[0]
                    })
                  }
                })
                this.newTag({
                  tag: 'span',
                  inner: 'сохранить цель',
                  attributes: [
                    [ 'class', 'selectElementContainer__submit' ]
                  ],
                  parent: document.getElementsByClassName('selectElementContainer')[0]
                })

              }
            })

          }

        }

      }

    }, 200)

  }

  stateInit() {

    if ( localStorage.getItem('store') === null ) {

      let store = {
        auth: false,
        activeDopWindow: 'none',
        selectionElement: null,
        authDataLogin: null,
        authDataPassword: null,
      }

      localStorage.setItem('store', JSON.stringify(store))

    } else { return localStorage.getItem('store')}

  }

  getStoreValue(value) {

    const store = JSON.parse(localStorage.getItem('store'))
    for ( let key in store ) {

      if ( key === value ) { return store[key] }

    }

  }

  setStoreValue(index, value) {

    const store = JSON.parse(localStorage.getItem('store'))
    for ( let key in store ) {

      if ( key === index ) { store[key] = value }
      localStorage.setItem('store', JSON.stringify(store))

    }

  }

  // ----------------------------------------
  // ----------------------------------------

  createMenuList() {
    this.#menu = [
      [ '1', 'установка целей метрики' ],
      [ '2', 'установка collibri' ],
      [ '3', 'установка целей analytics' ],
      [ '4', 'установка производного кода' ],
      [ '5', 'подмена контента текста' ],
      [ '6', 'система eccom для магазинов' ],
      [ '7', 'обучающий модуль' ]
    ]
  }

  // ----------------------------------------
  // ----------------------------------------

  select = event => {

    if ( 
      event.target.tagName === 'A'
      || event.target.tagName === 'SPAN'
      || event.target.tagName === 'BUTTON'
      || event.target.tagName === 'INPUT'
      || event.target.tagName === 'IMG' ) {

      let elemTag = ''
      let elemInner = ''
      let elemAttrs = []

      this.SelectTable([ 
        event.target.offsetWidth, 
        event.target.offsetHeight,
        event.target.getBoundingClientRect().top,
        event.target.getBoundingClientRect().left,
        event.target.tagName,
        event.target.attributes,
        event.target.innerText, 
      ])

      elemTag = event.target.tagName
      elemInner = event.target.innerText

      for ( let key = 0; key < event.target.attributes.length; key++ ) {

        event.target.attributes[key].name !== 'style' 
        && elemAttrs.push([ event.target.attributes[key].name, event.target.attributes[key].value ])

      }

      const toStore = {
        tag: elemTag,
        inner: elemInner,
        attrs: elemAttrs
      }

      this.setStoreValue('selectionElement', toStore)
      this.removeTag([ document.getElementById('secon') ])

    } else { this.removeTag([document.getElementById('sel-tab')])}
    
  }

  elementSelector() {

    let dom = document.querySelectorAll('*')
    for ( let co = 0; co < dom.length; co++ ) {

      let elem = dom[co]
      elem.addEventListener('contextmenu', this.select)

    }
  }

  removeElementSelector() {

    let dom = document.querySelectorAll('*')
    for ( let co = 0; co < dom.length; co++ ) {

      let elem = dom[co]
      elem.removeEventListener('contextmenu', this.select)
      
    }
  }

  // ----------------------------------------
  // ----------------------------------------

  newTag(props) {

    const { 
      tag = 'div', 
      attributes = false, 
      inner = false,
      eventListener = false,
      listenerType = false,
      parent = document.getElementById('ds-app'),
      children = false
    } = props

    let element = document.createElement(tag)
    attributes && attributes.forEach(attr => element.setAttribute(attr[0], attr[1]))
    inner ? element.innerHTML = inner : false
    listenerType && element.addEventListener(listenerType, eventListener)
    parent.appendChild(element)
    
    children && children()
    return element

  }

  removeTag(props) {

    for ( let i = 0; i < props.length; i++ ) {

      props[i] && props[i].remove()

    }

  }

  removeAllWindows() {

    document.getElementById('disp-ygb') && document.getElementById('disp-ygb').remove()
    document.getElementById('disp-auth') && document.getElementById('disp-auth').remove()

  }

  // ----------------------------------------
  // ----------------------------------------

  SelectTable(props) {

    const [ 
      width = null, 
      height = null,
      top = null,
      left = null,
      tagname = 'undefined',
      attributes = null,
      inner = null,
      actions = []
    ] = props

    document.getElementById('sel-tab') && document.getElementById('sel-tab').remove()
    const SelectTable = this.newTag({
      attributes: [
        [ 'class', 'select-table' ],
        [ 'id', 'sel-tab' ],
        width && [ 
          'style', 
          `width: ${width}px;
           height: ${height}px;
           top: ${top};
           left: ${left};` 
        ]
      ],
      parent: document.body,
      children: $$ => {
        this.newTag({
          attributes: [
            [ 'class', 'select-table__info' ]
          ],
          parent: document.getElementById('sel-tab'),
          children: $$ => {
            this.newTag({
              attributes: [
                [ 'class', 'select-table__info__text' ],
                [ 'id', 'sel-tab-txt' ]
              ],
              parent: document.getElementsByClassName('select-table__info')[0],
              children: $$ => {

                this.newTag({
                  tag: 'p',
                  inner: `элемент ${tagname}`,
                  parent: document.getElementsByClassName('select-table__info__text')[0],
                  attributes: [
                    [ 'style', 
                      `border-left: 3px solid rgb(45, 175, 45);
                       border-top: 1px dashed rgb(206, 206, 206);` ]
                  ]
                })
                this.newTag({
                  tag: 'p',
                  inner: inner ? `содержимое [ ${inner} ]` : 'нет содержимого',
                  parent: document.getElementsByClassName('select-table__info__text')[0],
                  attributes: [
                    [ 'style', 
                      `border-top: 1px dashed rgb(206, 206, 206);
                       border-left: 3px solid grey;
                       border-bottom: 1px dashed rgb(206, 206, 206);` ]
                  ]
                })

                for ( let key = 0; key < attributes.length; key++ ) {

                  attributes[key].name !== 'style' && this.newTag({
                    tag: 'p',
                    inner: `атрибут ${attributes[key].name}`,
                    parent: document.getElementsByClassName('select-table__info__text')[0],
                    attributes: [
                      [ 'style', 
                        `border-top: none;
                         border-left: 3px solid rgb(45, 175, 45);
                         border-bottom: 1px dashed rgb(206, 206, 206);` ]
                    ]
                  })
                  attributes[key].name !== 'style' && this.newTag({
                    tag: 'p',
                    inner: `${attributes[key].value}`,
                    parent: document.getElementsByClassName('select-table__info__text')[0],
                    attributes: [
                      [ 'style', 
                        `border-top: none;
                         border-left: 3px solid grey;
                         border-bottom: 1px dashed rgb(206, 206, 206);` ]
                    ]
                  })

                } 

              }
            })
            this.newTag({
              tag: 'span',
              inner: 'OK',
              attributes: [
                [ 'id', 'sel-tab-accept' ],
                [ 'class', 'select-table__info__accept' ]
              ],
              parent: document.getElementsByClassName('select-table__info')[0],
            })
          }
        })
      }
    })

    setTimeout(() => document.getElementById('sel-tab').style.opacity = 1, 300)
    return SelectTable

  }

  Aside() {

    let dom = document.querySelectorAll('*')
    for ( let co = 0; co < dom.length; co++ ) {

      let elem = dom[co]
      elem.oncontextmenu = () => { return false }

    }

    const Aside = this.newTag({
      tag: 'section',
      attributes: [
        [ 'class', 'dispatcher' ],
        [ 'id', 'disp' ]
      ],
      children: $$ => {
        this.newTag({ 
          tag: 'div',
          attributes: [
            [ 'class', 'dispatcher__title' ],
          ],
          parent: document.getElementById('disp'),
          children: $$ => {
            this.newTag({
              tag: 'h3',
              inner: 'tgdspch',
              attributes: [
                [ 'class', 'dispatcher__title__headline' ]
              ],
              parent: document.getElementsByClassName('dispatcher__title')[0]
            })
            this.newTag({ 
              attributes: [
                [ 'class', 'dispatcher__title__menu' ]
              ],
              parent: document.getElementsByClassName('dispatcher__title')[0],
              children: $$ => {
                this.newTag({
                  tag: 'span',
                  attributes: [
                    [ 'class', 'dispatcher__title__menu__item' ]
                  ],
                  parent: document.getElementsByClassName('dispatcher__title__menu')[0]
                })
                this.newTag({
                  tag: 'span',
                  attributes: [
                    [ 'class', 'dispatcher__title__menu__item' ]
                  ],
                  parent: document.getElementsByClassName('dispatcher__title__menu')[0]
                })
                this.newTag({
                  tag: 'span',
                  attributes: [
                    [ 'class', 'dispatcher__title__menu__item' ]
                  ],
                  parent: document.getElementsByClassName('dispatcher__title__menu')[0]
                })
              }
            })
          }
        })

        this.newTag({
          attributes: [
            [ 'class', 'dispatcher__menu' ]
          ],
          parent: document.getElementById('disp'),
          children: $$ => {
            this.#menu.forEach(item => {
              this.newTag({
                tag: 'span',
                parent: document.getElementsByClassName('dispatcher__menu')[0],
                inner: item[1],
                attributes: [
                  item[0] !== '1' && item[0] !== '7' && [
                    'style', 'text-decoration: line-through;'
                  ]
                ],
                listenerType: 'click',
                eventListener: $$ => {

                  let checkAuth = this.getStoreValue('auth')
                  if ( checkAuth === false ) {

                    this.removeAllWindows()
                    this.AuthBoard({
                      position: {
                        left: document.documentElement.clientWidth / 2,
                        top: document.documentElement.clientHeight / 2
                      }
                    })

                  } else {

                    let id = item[0]
                    switch(id) {

                      case '1':
                        !document.getElementById('disp-ygb') && this.YandexGoalsBoard()
                        break

                      default:
                        break

                    }

                  }

                }
              })
            })
          }
        })

        this.newTag({
          tag: 'span',
          inner: 'tagdispatcher 2022',
          attributes: [
            [ 'class', 'copyright' ]
          ],
          parent: document.getElementById('disp')
        })
      }
    })

    return Aside

  }

  YandexGoalsBoard() {

    this.elementSelector()
    const YandexGoalsBoard = this.newTag({
      tag: 'section',
      attributes: [
        [ 'class', 'dispatcher__workspace dispatcher__yandexGoalsBoard' ],
        [ 'id', 'disp-ygb' ]
      ],
      parent: document.getElementById('disp'),
      children: $$ => {
        
        this.newTag({
          attributes: [
            [ 'class', 'dispatcher__yandexGoalsBoard__title' ]
          ],
          parent: document.getElementById('disp-ygb'),
          children: $$ => {

            this.newTag({
              tag: 'h3',
              inner: 'установка целей метрики',
              attributes: [
                [ 'class', 'dispatcher__title__headline dispatcher__title__headlineYG' ]
              ],
              parent: document.getElementsByClassName('dispatcher__yandexGoalsBoard__title')[0],
            })
            this.newTag({ 
              attributes: [
                [ 'class', 'dispatcher__title__menu dispatcher__title__menuYG' ]
              ],
              parent: document.getElementsByClassName('dispatcher__yandexGoalsBoard__title')[0],
              children: $$ => {
                this.newTag({
                  tag: 'span',
                  attributes: [
                    [ 'class', 'dispatcher__title__menu__item' ]
                  ],
                  parent: document.getElementsByClassName('dispatcher__title__menuYG')[0]
                })
                this.newTag({
                  tag: 'span',
                  attributes: [
                    [ 'class', 'dispatcher__title__menu__item' ]
                  ],
                  parent: document.getElementsByClassName('dispatcher__title__menuYG')[0]
                })
                this.newTag({
                  tag: 'span',
                  attributes: [
                    [ 'class', 'dispatcher__title__menu__item' ]
                  ],
                  parent: document.getElementsByClassName('dispatcher__title__menuYG')[0],
                  listenerType: 'click',
                  eventListener: $$ => {
                    this.removeTag([document.getElementById('disp-ygb')])
                    this.removeTag([document.getElementById('sel-tab')])
                    this.removeElementSelector()
                  }
                })
              }
            })

          }
        })

        this.newTag({
          tag: 'p',
          attributes: [
            [ 'class', 'dispatcher__yandexGoalsBoard__message' ]
          ],
          inner: 'выберите элемент, на который хотите поставить цель. для этого кликните по нему левой кнопкой мыши, после этого он отобразиться в окне ниже, а вы следуйте простым инструкциям',
          parent: document.getElementById('disp-ygb'),
        })

      }
    })

    return YandexGoalsBoard

  }

  AuthBoard(props) {

    const { position: { left, top }} = props

    const AuthBoard = this.newTag({
      attributes: [
        [ 'class', 'dispatcher__authBoard' ],
        [ 'id', 'disp-auth' ],
        left && [
          'style',
          `left: ${left}; top: ${top}`
        ]
      ],
      parent: document.getElementById('disp'),
      children: $$ => {
        this.newTag({
          attributes: [
            [ 'class', 'dispatcher__authBoard__inpsGroup' ]
          ],
          parent: document.getElementById('disp-auth'),
          children: $$ => {
            this.newTag({
              tag: 'input',
              attributes: [
                [ 'type', 'text' ],
                [ 'maxlength', 30 ],
                [ 'class', 'dispatcher__authBoard__inpsGroup__input' ],
                [ 'id', 'inputLogin' ],
                [ 'placeholder', 'введите или придумайте логин' ]
              ],
              parent: document.getElementsByClassName('dispatcher__authBoard__inpsGroup')[0],
              listenerType: 'keyup',
              eventListener: event => this.setStoreValue('authDataLogin', event.target.value)
            })
            this.newTag({
              tag: 'input',
              attributes: [
                [ 'type', 'text' ],
                [ 'maxlength', 30 ],
                [ 'class', 'dispatcher__authBoard__inpsGroup__input' ],
                [ 'id', 'inputPassword' ],
                [ 'placeholder', 'введите или придумайте пароль' ]
              ],
              parent: document.getElementsByClassName('dispatcher__authBoard__inpsGroup')[0],
              listenerType: 'keyup',
              eventListener: event => this.setStoreValue('authDataPassword', event.target.value)
            }),
            this.newTag({
              tag: 'span',
              attributes: [
                [ 'class', 'dispatcher__authBoard__inpsGroup__submit' ],
              ],
              parent: document.getElementsByClassName('dispatcher__authBoard__inpsGroup')[0],
              listenerType: 'click',
              eventListener: $$ => {

                let login = this.getStoreValue('authDataLogin')
                let password = this.getStoreValue('authDataPassword')

                if ( login && password ) {

                  false && this.requestCreator({
                    type: 'POST',
                    fork: 'GET_USER',
                    body: {
                      user: login,
                      password: password
                    }
                  })

                  // пока не настроена авторизация будет заглушка
                  // потом удалить псевдоавторизацию

                  this.setStoreValue('auth', true)
                  this.removeAllWindows()

                }

              },
              children: $$ => {
                this.newTag({
                  tag: 'p',
                  inner: 'continue',
                  parent: document.getElementsByClassName('dispatcher__authBoard__inpsGroup__submit')[0]
                })
              }
            })
          }
        })
      }
    })

    return AuthBoard

  }

  // ----------------------------------------
  // ----------------------------------------

  render() {
    
    this.stateInit()
    this.stateController()
    this.createMenuList()
    this.Aside()

  }

}

const Dispatcher = new DispatcherFrontend()
Dispatcher.render()