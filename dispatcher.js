// insider application by nikdeveloper, gorilla web 2022
// ----------------------------------------
// оглавление: перечисление всех методов приложения
// для перехода к нужному методу воспользоваться поиском по названию
// ----------------------------------------
// #01 requestCreator ( frontend )
// #02 stateController
// #03 stateInit
// #04 getStoreValue
// #05 setStoreValue
// #06 createMenuList
// #07 select
// #08 elementSelector
// #09 removeElementSelector
// #10 newTag
// #11 removeTag
// #12 removeAllWindows
// #13 SelectTable
// #14 Aside
// #15 YandexGoalsBoard
// #16 AuthBoard
// #17 ModalWindow
// #18 render
// #19 requestCreator ( backend )

class DispatcherFrontend {

  #menu = []
  #apiPathPost = 'https://metoo-app.ru/insider'
  #testTail = '?apiFork=GET_USER&user=admin&password=qwerty12345'
  
  // ----------------------------------------
  // метод формирования запросов к серверу
  // ----------------------------------------

  async requestCreator(props) {

    let returnData = null
    
    const { type = null, user = null, pass = null, goal = null } = props

    switch(type) {

      case 'getUser':
        
        fetch(`https://metoo-app.ru/insider/index.php?apiFork=GET_USER&user=${user}&password=${pass}`)
        .then(data => data.json())
        .then(result => {
          
          console.log(result)
          
          if ( result.result === 'success' ) {
            
            this.setStoreValue('auth', true)
            this.setStoreValue('userData', result)
            this.removeTag([ document.getElementsByClassName('copyright__cabinet')[0] ])
            
            this.setStoreValue('modalData', {
              background: 'success', 
              message: 'успешная авторизация, добро пожаловать в инсайдер', 
              position: 'undefined', 
              action: 'undefined'
            })
            this.setStoreValue('modalActive', true) 
            
            setTimeout(() => { 
              this.setStoreValue('authWindow', false)
              this.setStoreValue('modalActive', false)  
            }, 1600)
            
          } else {
            
            this.setStoreValue('modalData', {
              background: 'error', 
              message: 'учетные данные неверные, попробуйте снова', 
              position: 'undefined', 
              action: 'undefined'
            })
            this.setStoreValue('modalActive', true) 
            setTimeout(() => this.setStoreValue('modalActive', false), 1600)
            
          }
          
        })
        
        break
        
      case 'setUser':
        
        fetch(`https://metoo-app.ru/insider/index.php?apiFork=CHECK_USER&user=${user}&password=${pass}`)
        .then(data => data.json())
        .then(result => {
          
          console.log(result)
          
          if ( result.result !== 'success' ) {
            
            fetch(`https://metoo-app.ru/insider/?apiFork=SET_USER&user=${user}&password=${pass}`)
            console.log('пользователь добавлен')
            
            this.setStoreValue('modalData', {
              background: 'success', 
              message: 'пользователь успешно добавлен', 
              position: 'undefined', 
              action: 'undefined'
            })
            this.setStoreValue('modalActive', true) 
            setTimeout(() => this.setStoreValue('modalActive', false), 1600)
            
            fetch(`https://metoo-app.ru/insider/index.php?apiFork=GET_USER&user=${user}&password=${pass}`)
            .then(data => data.json())
            .then(result => {
              
              console.log(result)
              
              if ( result.result === 'success' ) {
                
                this.setStoreValue('auth', true)
                this.setStoreValue('userData', result)
                this.removeTag([ document.getElementsByClassName('copyright__cabinet')[0] ])
                
                setTimeout(() => this.setStoreValue('authWindow', false), 1600)
                
              } else { }
              
            })
            
          } else {
            
            this.setStoreValue('modalData', {
              background: 'error', 
              message: 'такой пользователь уже существует, попробуйте снова', 
              position: 'undefined', 
              action: 'undefined'
            })
            this.setStoreValue('modalActive', true) 
            setTimeout(() => this.setStoreValue('modalActive', false), 1600)
            
          }
          
        })
        
        break
        
      case 'addGoal':
        
        let file = window.location.host.split('.').join('-')
        fetch(`https://metoo-app.ru/insider/dataController.php?key=ADD_GOAL&file=${file}&data=${goal}`)
        
        break
        
      case 'readGoals':
        
        let file2 = window.location.host.split('.').join('-')
        returnData = await fetch(`https://metoo-app.ru/insider/dataController.php?key=READ_GOALS&file=${file2}`)
        
        break
        
      case 'deleteGoal':
        
        // https://metoo-app.ru/insider/dataController.php?key=DELETE_GOAL&file=metoo-app-ru&data=makeOrderCall
        
        let file3 = window.location.host.split('.').join('-')
        fetch(`https://metoo-app.ru/insider/dataController.php?key=DELETE_GOAL&file=${file3}&data=${goal}`)
        
        break
        
      default:
        break

    }
    
    return returnData

  }

  // ----------------------------------------
  // метод обновления и контроля состояния
  // ----------------------------------------

  stateController() {

    const stateControl = setInterval(() => {

      if ( this.getStoreValue('authDataPassword') ) {

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
                  tag: 'span',
                  attributes: [
                    [ 'class', 'selectElementContainer__sticker' ]
                  ],
                  parent: document.getElementsByClassName('selectElementContainer')[0]
                })
                this.newTag({
                  tag: 'h5',
                  inner: !elem.inner ? `Выбранный элемент: < ${elem.tag} >` : `Выбранный элемент: < ${elem.tag} > ${elem.inner} < ${elem.tag} >`,
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
                        [ 'placeholder', '[ номер счетчика метрики ]' ],
                        [ 'maxlength', '10' ],
                        [ 'class', 'selectElementContainer__counterInput' ],
                        [ 'id', 'secon-counter' ],
                        [ 'autocomplete', 'off' ]
                      ],
                      parent: document.getElementsByClassName('selectElementContainer__counterInputWrapper')[0]
                    })
                    this.newTag({
                      tag: 'span',
                      inner: '',
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
                        [ 'placeholder', '[ идентификатор цели ]' ],
                        [ 'maxlength', '30' ],
                        [ 'class', 'selectElementContainer__goalInput' ],
                        [ 'id', 'secon-goal' ],
                        [ 'autocomplete', 'off' ]
                      ],
                      parent: document.getElementsByClassName('selectElementContainer__goalInputWrapper')[0]
                    })
                    this.newTag({
                      tag: 'span',
                      inner: '',
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
                        [ 'placeholder', '[ событие цели, необязательно ]' ],
                        [ 'maxlength', '30' ],
                        [ 'class', 'selectElementContainer__goalTypeInput' ],
                        [ 'id', 'secon-eventType' ],
                        [ 'autocomplete', 'off' ]
                      ],
                      parent: document.getElementsByClassName('selectElementContainer__goalTypeInputWrapper')[0]
                    })
                    this.newTag({
                      tag: 'span',
                      inner: '',
                      attributes: [
                        [ 'class', 'selectElementContainer__step' ]
                      ],
                      parent: document.getElementsByClassName('selectElementContainer__goalTypeInputWrapper')[0]
                    })
                  }
                })
                this.newTag({
                  tag: 'p',
                  inner: '*первые два поля обязательны для заполнения',
                  attributes: [
                    [ 'style', `
                      display: block;
                      position: relative;
                      width: 100%;
                      margin-top: 20px;
                      margin-bottom: 10px;
                      font-size: 13px;
                    `]  
                  ],
                  parent: document.getElementsByClassName('selectElementContainer')[0],
                })
                this.newTag({
                  tag: 'span',
                  inner: 'сохранить цель',
                  attributes: [
                    [ 'class', 'selectElementContainer__submit' ]
                  ],
                  parent: document.getElementsByClassName('selectElementContainer')[0],
                  listenerType: 'click',
                  eventListener: $$ => {
                    
                    // {"host":"metoo-app-ru","goal":[{"tag":"SPAN","inner":"заказать звонок","attrs":[["class","button"]]},"testClick","12345678","click"]}
                    
                    let elem = this.getStoreValue('selectionElement')
                    let host = window.location.host.split('.').join('-')
                    let counter = document.getElementById('secon-counter').value
                    let goalId = document.getElementById('secon-goal').value
                    let eventType = document.getElementById('secon-eventType').value 
                    ? document.getElementById('secon-eventType').value : 'click'
                    
                    let goalData = {
                      host, 
                      goal: [
                        elem,
                        goalId,
                        counter,
                        eventType
                      ]
                    }
                    
                    if ( counter !== '' && goalId !== '' ) {
                    
                      this.requestCreator({
                        type: 'addGoal', 
                        goal: JSON.stringify(goalData)
                      })
                      
                      document.getElementsByClassName('selectElementContainer__submit')[0].innerText = 'цель успешно добавлена'
                      setTimeout(() => {
                        
                        this.setStoreValue('selectionElement', null)
                        this.removeTag([ document.getElementById('secon') ])
                        this.removeTag([ document.getElementById('disp-ygb') ])
                        this.YandexGoalsBoard()
                        
                        this.setStoreValue('modalData', {
                          background: 'success', 
                          message: 'вам нужно обновить страницу на сайте, чтобы все установленные цели активировались', 
                          position: 'undefined', 
                          action: 'undefined'
                        })
                        this.setStoreValue('modalActive', true)
                        
                        setTimeout(() => this.setStoreValue('modalActive', false), 3400)
                        
                      }, 1400)
                    
                    } else {
                      
                      document.getElementsByClassName('selectElementContainer__submit')[0].innerText = 'заполните поля'
                      setTimeout(() => document.getElementsByClassName('selectElementContainer__submit')[0].innerText = 'сохранить цель', 1400)
                      
                    }
                    
                  }
                })

              }
            })

          }
        }
      }
      
      // ---------------------------
      // ---------------------------
      
      if ( this.getStoreValue('modalActive')) {
        
        const { 
          background = '#BCD9CF', 
          message = 'undefined', 
          position = 'undefined', 
          action = 'undefined' 
        } = this.getStoreValue('modalData')
        
        !document.getElementById('disp-mod') && this.ModalWindow({
          background, 
          message, 
          position, 
          action 
        })
        
      } else {
        
        this.removeTag([ document.getElementById('disp-mod') ])
        
      }
      
      // ---------------------------
      // ---------------------------
      
      if ( this.getStoreValue('authWindow') ) {
        
        !document.getElementById('disp-auth') && this.AuthBoard({
          position: {
            left: document.documentElement.clientWidth / 2,
            top: '50%'
          }
        })
        
      } else {
        
        this.removeTag([ document.getElementById('disp-auth') ])
        
      } 
      
      // ---------------------------
      // ---------------------------
      
      if ( this.getStoreValue('auth') ) {
      
        !document.getElementsByClassName('copyright__cabinet')[0] && this.newTag({
          tag: 'span',
          inner: `${ this.getStoreValue('userData').name } | покинуть учетную запись`,
          attributes: [
            [ 'class', 'copyright copyright__cabinet' ]
          ],
          parent: document.getElementById('disp'),
          listenerType: 'click',
          eventListener: $$ => {
            
            this.setStoreValue('auth', false)
            this.setStoreValue('userData', null)
            this.setStoreValue('authDataLogin', '')
            this.setStoreValue('authDataPassword', '')
            this.removeAllWindows()
            
            this.removeTag([ document.getElementsByClassName('copyright__cabinet')[0] ])
            
          }
        })
      
      } else {
        
        !document.getElementsByClassName('copyright__cabinet')[0] && this.newTag({
          tag: 'span',
          inner: `undefined | вы не авторизованы | авторизоваться`,
          attributes: [
            [ 'class', 'copyright copyright__cabinet' ]
          ],
          parent: document.getElementById('disp'),
          listenerType: 'click',
          eventListener: $$ => this.setStoreValue('authWindow', true)
        })
        
      }

    }, 200)
  }
  
  // ----------------------------------------
  // метод инициации состояния при запуске
  // ----------------------------------------

  stateInit() {

    if ( localStorage.getItem('store') === null ) {

      let store = {
        auth: false,
        userData: null,
        selectionElement: null,
        authDataLogin: null,
        authDataPassword: null,
        modalActive: false,
        modalData: null,
        authWindow: false
      }

      localStorage.setItem('store', JSON.stringify(store))

    } else { 
      
      this.setStoreValue('modalActive', false)
      this.setStoreValue('authWindow', false)
      
    }
    
    if ( this.getStoreValue('auth') === false ) {
      
      this.setStoreValue('authDataLogin', '')
      this.setStoreValue('authDataPassword', '')
      
    }

  }
  
  // ----------------------------------------
  // метод получения значения состояния
  // ----------------------------------------

  getStoreValue(value) {

    const store = JSON.parse(localStorage.getItem('store'))
    for ( let key in store ) {

      if ( key === value ) { return store[key] }

    }

  }
  
  // ----------------------------------------
  // метод изменения значения состояния
  // ----------------------------------------

  setStoreValue(index, value) {

    const store = JSON.parse(localStorage.getItem('store'))
    for ( let key in store ) {

      if ( key === index ) { store[key] = value }
      localStorage.setItem('store', JSON.stringify(store))

    }

  }

  // ----------------------------------------
  // метод формирующий основное меню
  // ----------------------------------------

  createMenuList() {
    this.#menu = [
      [ '1', 'цели яндекс метрики' ],
      [ '2', 'классы номеров collibri' ],
      [ '3', 'цели google analytics' ],
      [ '4', 'производный код на сайте' ],
      [ '5', 'подмена контента на сайте' ],
      [ '6', 'система eccom для магазинов' ],
      [ '7', 'обучающий модуль' ]
    ]
  }

  // ----------------------------------------
  // метод выбора элемента-таргета на сайте
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
      let scroll = document.body.scrollTop + event.target.getBoundingClientRect().top

      this.SelectTable([ 
        event.target.offsetWidth, 
        event.target.offsetHeight,
        scroll,
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
  
  // ----------------------------------------
  // метод активации метода select
  // ----------------------------------------

  elementSelector() {

    let dom = document.querySelectorAll('*')
    for ( let co = 0; co < dom.length; co++ ) {

      let elem = dom[co]
      elem.addEventListener('contextmenu', this.select)

    }
  }
  
  // ----------------------------------------
  // метод деактивации метода select
  // ----------------------------------------

  removeElementSelector() {

    let dom = document.querySelectorAll('*')
    for ( let co = 0; co < dom.length; co++ ) {

      let elem = dom[co]
      elem.removeEventListener('contextmenu', this.select)
      
    }
  }

  // ----------------------------------------
  // метод-конструктор создания dom-узлов
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
  
  // ----------------------------------------
  // метод удаления dom-узлов
  // ----------------------------------------

  removeTag(props) {

    for ( let i = 0; i < props.length; i++ ) {

      props[i] && props[i].remove()

    }

  }
  
  // ----------------------------------------
  // метод закрытия вспомогательных окон
  // ----------------------------------------

  removeAllWindows() {

    document.getElementById('disp-ygb') && document.getElementById('disp-ygb').remove()
    document.getElementById('disp-auth') && document.getElementById('disp-auth').remove()
    document.getElementById('sel-tab') && document.getElementById('sel-tab').remove()
    this.setStoreValue('modalActive', false)

  }

  // ----------------------------------------
  // метод формирования таблицы для элемента
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
                      `border-left: 3px solid #303E59;
                       border-top: 1px dashed #BCD9CF;` ]
                  ]
                })
                this.newTag({
                  tag: 'p',
                  inner: inner ? `содержимое [ ${inner} ]` : 'нет содержимого',
                  parent: document.getElementsByClassName('select-table__info__text')[0],
                  attributes: [
                    [ 'style', 
                      `border-top: 1px dashed #BCD9CF;
                       border-left: 3px solid grey;
                       border-bottom: 1px dashed #BCD9CF;` ]
                  ]
                })

                for ( let key = 0; key < attributes.length; key++ ) {

                  attributes[key].name !== 'style' && attributes[key].name.indexOf('on') < 0 && this.newTag({
                    tag: 'p',
                    inner: `атрибут ${attributes[key].name}`,
                    parent: document.getElementsByClassName('select-table__info__text')[0],
                    attributes: [
                      [ 'style', 
                        `border-top: none;
                         border-left: 3px solid #303E59;
                         border-bottom: 1px dashed #BCD9CF;` ]
                    ]
                  })
                  attributes[key].name !== 'style' && attributes[key].name.indexOf('on') < 0 && this.newTag({
                    tag: 'p',
                    inner: `${attributes[key].value}`,
                    parent: document.getElementsByClassName('select-table__info__text')[0],
                    attributes: [
                      [ 'style', 
                        `border-top: none;
                         border-left: 3px solid grey;
                         border-bottom: 1px dashed #BCD9CF;` ]
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
              listenerType: 'click',
              eventListener: $$ => {
                this.removeTag([document.getElementById('sel-tab')])
              }
            })
          }
        })
      }
    })

    setTimeout(() => document.getElementById('sel-tab').style.opacity = 1, 300)
    return SelectTable

  }
  
  // ----------------------------------------
  // метод формирования основного окна
  // ----------------------------------------

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
              inner: 'INSIDER TM',
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
                  parent: document.getElementsByClassName('dispatcher__title__menu')[0],
                  listenerType: 'click',
                  eventListener: $$ => {
                    
                    localStorage.setItem('insider', 'false')
                    document.location.href = document.location.href
                    
                  }
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
                  item[0] !== '1' && item[0] !== '7' && false && [
                    'style', 'text-decoration: line-through;'
                  ]
                ],
                listenerType: 'click',
                eventListener: $$ => {

                  let checkAuth = this.getStoreValue('auth')
                  if ( checkAuth === false ) {

                    this.removeAllWindows()
                    this.setStoreValue('authWindow', true)

                  } else {

                    let id = item[0]
                    switch(id) {

                      case '1':
                        !document.getElementById('disp-ygb') && this.YandexGoalsBoard()
                        break

                      default:
                        
                        this.setStoreValue('modalData', {
                          background: 'success', 
                          message: 'новые функции очень скоро будут опубликованы', 
                          position: 'undefined', 
                          action: 'undefined'
                        })
                        this.setStoreValue('modalActive', true)
                        setTimeout(() => this.setStoreValue('modalActive', false), 2000)
                        
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
          inner: 'insider tag manager 2022',
          attributes: [
            [ 'class', 'copyright' ]
          ],
          parent: document.getElementById('disp')
        })
      }
    })

    return Aside

  }
  
  // ----------------------------------------
  // метод формирования меню метрики
  // ----------------------------------------

  YandexGoalsBoard() {

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
                  }
                })
              }
            })

          }
        })
        
        this.newTag({
          attributes: [
            [ 'class', 'dispatcher__yandexGoalsBoard__goalsList' ]
          ],
          parent: document.getElementById('disp-ygb'),
          children: $$ => {
            
            this.requestCreator({ type: 'readGoals' })
            .then(answer => answer.json())
            .then(data => {
              
              console.log(data)
              data.data.forEach((item, index) => {
                
                let [ elem, action, count, eventType ] = item.goal
                
                switch(action) {
                  
                  case '-----':
                    break
                    
                  case '-----':
                    break
                    
                  default: 
                  
                    this.newTag({
                      attributes: [
                        [ 'class', 'dispatcher__yandexGoalsBoard__goalsList__goal' ],
                        [ 'style', `
                          display: flex;
                          flex-direction: row;
                          align-items: center;
                          justify-content: flex-start;
                          position: relative;
                          line-height: 22px;
                          text-align: center;
                          font-size: 13px;
                          border-left: 1px solid #7D8E9F;
                          border-right: 1px solid #7D8E9F;
                          margin-top: 8px;
                          margin-bottom: 8px;
                          margin-left: 6px;
                          padding-right: 40px;
                          padding-left: 12px;
                          border-radius: 4px;
                          cursor: pointer;
                        `]
                      ],
                      parent: document.getElementsByClassName('dispatcher__yandexGoalsBoard__goalsList')[0],
                      children: $$ => {
                        
                        this.newTag({
                          tag: 'p',
                          attributes: [
                            [ 'style', `
                              display: block;
                              position: reltive;
                              margin-right: 12px;
                              font-weight: bold;
                            `]],
                          inner: action,
                          parent: document.getElementsByClassName('dispatcher__yandexGoalsBoard__goalsList__goal')[index],
                        })
                        this.newTag({
                          tag: 'p',
                          attributes: [
                            [ 'style', `
                              display: block;
                              position: reltive;
                              line-height: 20px;
                              text-align: left;
                              width: 340px
                            `]],
                          inner: JSON.stringify(elem),
                          parent: document.getElementsByClassName('dispatcher__yandexGoalsBoard__goalsList__goal')[index],
                        })
                        this.newTag({
                          tag: 'span',
                          attributes: [
                            [ 'class', 'dispatcher__yandexGoalsBoard__goalsList__goal__close' ],
                            [ 'style', `
                              display: block;
                              position: absolute;
                              width: 24px;
                              height: 24px;
                              border: 1px solid #7D8E9F;
                              border-radius: 50%;
                              left: 100%;
                              margin-left: -34px;
                              top: 50%;
                              margin-top: -12px;
                              cursor: pointer;
                            `]
                          ],
                          parent: document.getElementsByClassName('dispatcher__yandexGoalsBoard__goalsList__goal')[index],
                          listenerType: 'click',
                          eventListener: $$ => {
                            
                            if ( window.location.host !== 'metoo-app.ru' ) {
                            
                              document.getElementsByClassName('dispatcher__yandexGoalsBoard__goalsList__goal')[index] !== undefined ?
                              document.getElementsByClassName('dispatcher__yandexGoalsBoard__goalsList__goal')[index].remove() :
                              document.getElementsByClassName('dispatcher__yandexGoalsBoard__goalsList__goal')[0].remove()
                              
                              this.requestCreator({
                                type: 'deleteGoal', 
                                goal: action
                              })
                              
                            }
                            
                          }
                        })
                        
                      }
                    })
                    
                    break
                  
                }
                
              })
              
            })
            
          }
        })

      }
    })

    return YandexGoalsBoard

  }
  
  // ----------------------------------------
  // метод формирования окна авторизации
  // ----------------------------------------

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
            
            this.setStoreValue('authDataLogin', window.location.host.split('.').join('-'))
            
            this.newTag({
              tag: 'input',
              attributes: [
                [ 'type', 'text' ],
                [ 'maxlength', 30 ],
                [ 'class', 'dispatcher__authBoard__inpsGroup__input' ],
                [ 'id', 'inputLogin' ],
                [ 'autocomplete', 'off' ],
                [ 'placeholder', 'введите или придумайте логин' ],
                [ 'value', window.location.host.split('.').join('-') ],
                [ 'disabled', '' ]
              ],
              parent: document.getElementsByClassName('dispatcher__authBoard__inpsGroup')[0],
              listenerType: 'keyup',
              eventListener: event => { 
                this.setStoreValue('authDataLogin', event.target.value)
                this.setStoreValue('modalActive', false)
              }
            })
            this.newTag({
              tag: 'input',
              attributes: [
                [ 'type', 'text' ],
                [ 'maxlength', 30 ],
                [ 'class', 'dispatcher__authBoard__inpsGroup__input' ],
                [ 'id', 'inputPassword' ],
                [ 'autocomplete', 'off' ],
                [ 'placeholder', 'введите или придумайте пароль' ]
              ],
              parent: document.getElementsByClassName('dispatcher__authBoard__inpsGroup')[0],
              listenerType: 'keyup',
              eventListener: event => { 
                this.setStoreValue('authDataPassword', event.target.value)
                this.setStoreValue('modalActive', false)
              }
            }),
            this.newTag({
              tag: 'span',
              attributes: [
                [ 'class', 'dispatcher__authBoard__inpsGroup__submit' ],
              ],
              parent: document.getElementsByClassName('dispatcher__authBoard__inpsGroup')[0],
              listenerType: 'click',
              eventListener: e => {

                let login = this.getStoreValue('authDataLogin')
                let password = this.getStoreValue('authDataPassword')

                if ( password ) {
                  
                  if ( e.target.innerText !== 'регистрация') {
                  
                    this.requestCreator({
                      type: 'getUser', 
                      user: login, 
                      pass: password
                    })
                  
                  } else {
                    
                    this.requestCreator({
                      type: 'setUser', 
                      user: login, 
                      pass: password
                    })
                    
                  }
                  
                } else {
                  
                  if ( e.target.innerText !== 'регистрация') {
                  
                    this.setStoreValue('modalData', {
                      background: 'error', 
                      message: 'поле ввода логина или пароля не заполнено, пожалуйста, заполните оба поля и попробуйте снова', 
                      position: 'undefined', 
                      action: 'undefined'
                    })
                    this.setStoreValue('modalActive', true)
                  
                  } else {
                    
                    this.setStoreValue('modalData', {
                      background: 'error', 
                      message: 'придумайте пароль и нажмите кнопку регистрации еще раз', 
                      position: 'undefined', 
                      action: 'undefined'
                    })
                    this.setStoreValue('modalActive', true)
                    
                  }
                  
                }

              },
              children: $$ => {
                
                this.newTag({
                  tag: 'p',
                  inner: 'продолжить',
                  parent: document.getElementsByClassName('dispatcher__authBoard__inpsGroup__submit')[0]
                })
                this.newTag({
                  tag: 'p',
                  inner: 'регистрация',
                  attributes: [
                    [ 'style', `
                      display: block;
                      position: absolute;
                      left: 100%;
                      margin-left: 22px;
                      color: #303E59 !important;
                      opacity: 1 !important;
                    `]  
                  ],
                  parent: document.getElementsByClassName('dispatcher__authBoard__inpsGroup__submit')[0],
                })
              
              }
            })
            this.newTag({
              tag: 'span',
              attributes: [
                [ 'class', 'dispatcher__authBoard__inpsGroup__submit' ],
                [ 'style', `
                  background-color: transparent;
                  height: 30px;
                  margin-top: 16px;
                  opacity: 0.9 !important;
                  margin-left: auto;
                  margin-right: auto;
                `]
              ],
              parent: document.getElementsByClassName('dispatcher__authBoard__inpsGroup')[0],
              listenerType: 'click',
              eventListener: $$ => {

                this.setStoreValue('authWindow', false)
                this.setStoreValue('authDataLogin', '')
                this.setStoreValue('authDataPassword', '')
                this.setStoreValue('modalActive', false)

              },
              children: $$ => {
                this.newTag({
                  tag: 'p',
                  inner: 'закрыть окно',
                  attributes: [
                    [ 'style', 'color: #303E59 !important;' ]
                  ],
                  parent: document.getElementsByClassName('dispatcher__authBoard__inpsGroup__submit')[1]
                })
              }
            })
            
            this.newTag({
              attributes: [
                [ 'class', 'dispatcher__authBoard__inpsGroup__social' ]
              ],
              parent: document.getElementsByClassName('dispatcher__authBoard__inpsGroup')[0],
              children: $$ => {
                
                this.newTag({
                  tag: 'span',
                  parent: document.getElementsByClassName('dispatcher__authBoard__inpsGroup__social')[0]
                })
                this.newTag({
                  tag: 'span',
                  parent: document.getElementsByClassName('dispatcher__authBoard__inpsGroup__social')[0]
                })
                this.newTag({
                  tag: 'span',
                  parent: document.getElementsByClassName('dispatcher__authBoard__inpsGroup__social')[0]
                })
                this.newTag({
                  tag: 'span',
                  parent: document.getElementsByClassName('dispatcher__authBoard__inpsGroup__social')[0]
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
  // метод формирования модального окна
  // ----------------------------------------
  
  ModalWindow(props) {
    
    const { 
      background = 'success', 
      message = 'undefined', 
      position = 'undefined', 
      action = 'undefined' 
    } = props

    const ModalWindow = this.newTag({
      tag: 'section',
      attributes: [
        [ 'class', 'modalWindow' ],
        [ 'id', 'disp-mod' ],
        [ 'style', `
          left: ${ document.documentElement.clientWidth / 2 };
          top: 100%;
          background-color: ${ 
            background === 'success' 
            ? '#7FA663' : '#EB9E5C' 
          };
        `]
      ],
      parent: document.getElementById('disp'),
      children: $$ => {
        
        this.newTag({
          tag: 'p',
          attributes: [
            [ 'style', `
              display: block;
              position: relative;
              width: 100%;
              line-height: 20px;
              font-size: 14px;
              text-align: center;
              color: #303E59;
            `]
          ],
          inner: message!=='undefined' ? message : '---',
          parent: document.getElementById('disp-mod')
        })
        
      }
    })
   
    document.getElementById('disp-mod').style.marginTop = document.getElementById('disp-mod').offsetHeight * (-1) - 24
    
    return ModalWindow
     
  }

  // ----------------------------------------
  // метод рендера основной метод
  // ----------------------------------------

  render() {
    
    this.stateInit()
    this.stateController()
    this.elementSelector()
    this.createMenuList()
    this.Aside()
    
  }

}

class DispatcherBackend {
  
  // ----------------------------------------
  // метод формирования запросов к серверу
  // ----------------------------------------
  
  requestCreator(props) {

    const { type = null } = props

    switch(type) {
        
      case 'readGoals':
        
        let file = window.location.host.split('.').join('-')
        fetch(`https://metoo-app.ru/insider/dataController.php?key=READ_GOALS&file=${file}`)
        .then(answer => answer.json())
        .then(data => {
          
          // ym(XXXXXX, 'reachGoal', 'TARGET_NAME')
          // ym(XXXXXX, 'reachGoal', 'TARGET_NAME')
          
          // {"data":[{"host":"metoo-app-ru","goal":[{"tag":"SPAN","inner":"","attrs":[["class","button"]]},"goalOne","12345678","click"]}]}
          
          let DOM = document.querySelectorAll('*');
          let GOALS = data.data
          
          for ( let i = 0; i < DOM.length; i++ ) {
            
            if ( DOM[i].tagName === 'A'      || 
                 DOM[i].tagName === 'SPAN'   || 
                 DOM[i].tagName === 'BUTTON' || 
                 DOM[i].tagName === 'INPUT'  || 
                 DOM[i].tagName === 'IMG' ) {
                   
                   let clientElem = DOM[i]
                   
                   GOALS.forEach(item => {
                     
                     let goal = item.goal
                     let serverElem = goal[0]
                     let actionType = goal[1]
                     let evType = goal[3]
                     let faceControl = true
                     
                     // ----------------------------------------
                     // проверка на текст внутри элемента
                     // ----------------------------------------
                     
                     if ( serverElem.inner.length > 0 ) {
                       
                       clientElem.innerText !== serverElem.inner ? faceControl = false : null
                       
                     }
                     
                     // ----------------------------------------
                     // проверка на тег элемента
                     // ----------------------------------------
                     
                     clientElem.tagName !== serverElem.tag ? faceControl = false : null
                     
                     // ----------------------------------------
                     // проверка на совпадение атрибутов
                     // ----------------------------------------
                     
                     if ( serverElem.attrs.length > 0 ) {
                       
                       let clientAttrs = clientElem.attributes
                       let serverElemAttrsString = ''
                       
                       serverElem.attrs.forEach(item => {
                         
                         serverElemAttrsString += `${item.join('::')}&&` 
                         
                       })
                       
                       for ( let ii = 0; ii < clientAttrs.length; ii++ ) {
                        
                         if ( clientAttrs[ii].name !== 'style' ) {
                        
                          if ( serverElemAttrsString.indexOf(clientAttrs[ii].name) < 0 ) { faceControl = false }
                          if ( serverElemAttrsString.indexOf(clientAttrs[ii].value) < 0 ) { faceControl = false }
                         
                         }
                         
                       }
                       
                     }
                     
                     if ( faceControl === true ) {
                       
                       switch(actionType) {
                         
                         case '-----': 
                           break
                           
                         case '-----':
                           break
                           
                         default: 
                         
                           let eventType = `on${evType}`
                           clientElem.setAttribute(eventType, `ym(${goal[2]}, 'reachGoal', '${goal[1]}'); return true;`)
                           
                           break
                         
                       }
                       
                     }
                     
                   })
                   
                 }
            
          }
          
        })
        
        break
        
      default:
        break

    }

  }
  
}

const Dispatcher = new DispatcherFrontend()
const GoalsCreator = new DispatcherBackend()

GoalsCreator.requestCreator({ type: 'readGoals' })

localStorage.getItem('insider') === null && localStorage.setItem('insider', 'false')
localStorage.getItem('insider') === 'true' && Dispatcher.render()

document.addEventListener('keyup', e => {
  
  if ( e.code === 'Backquote' ) {
    
    localStorage.getItem('insider') === 'true'  
    ? localStorage.setItem('insider', 'false')
    : localStorage.setItem('insider', 'true')
    
    document.location.href = document.location.href
    
  }
  
})