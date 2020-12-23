import BasePreview from '../base-preview'
import virtualDoc from '../virtual-doc'
import fetchPage from '../fetch-page'

const themesUrl = 'https://cdn.jsdelivr.net/gh/ecomplus/storefront@themes-dist'

const fetchCssTheme = (theme) => {
  if (theme === '_') {
    return Promise.resolve('')
  }
  return window.fetch(`${themesUrl}/${theme}.css`)
}

export default class CodePreview extends BasePreview {
  constructor() {
    super()
    this._ = {
      ...this._,
      state: {
        title: 'Geral',
      },
      route: {
        path: '/'
      }
    }

    this.bg_color = ''
    this.primary_color = ''
    this.secondary_color = ''
    this.logo = ''
    this.bootswatch = '_'
    this.custom = '_'
  }

  fetchPage() {
    return fetchPage('/index.html').then(html => {
      const vDoc = virtualDoc(html)
      this.setState({ html, vDoc })
    }).catch(err => {
      console.log('Failed to fetch page home', err)
    })
  }

  componentDidUpdate(_, prevState) {
    setTimeout(async () => {
      const { vDoc } = this.state
      const { entry } = this.props
      const entries = entry.getIn(['data']).toJSON()
      const propsArray = [
        'name',
        'bg_color',
        'primary_color',
        'secondary_color'
      ]

      let change = propsArray.some(prop => (entries[prop] && entries[prop] !== this[prop]))

      if (this.logo !== entries.logo) {
        this.logo = entries.logo
        let $logo = vDoc.getElementById('logo')
        $logo.src = this.logo
        $logo.alt = entries.name
        change = true
      }

      let $styleTag = vDoc.getElementById('override_vars')
      if (!$styleTag) {
        $styleTag = document.createElement('div')
        $styleTag.id = 'override_vars'
        vDoc.body.appendChild($styleTag)
      }

      $styleTag.innerHTML = `<style>
        :root {
          --body-bg: ${entries.bg_color};
          --primary: ${entries.primary_color};
          --secondary: ${entries.secondary_color};
        }

        .btn-primary, .alert-primary, .text-primary, .bg-primary, .btn-outline-primary, .badge-primary {
          background: ${entries.primary_color} !important;
        }
      </style>`

      const { theme } = entries

      if ((this.bootswatch !== theme.bootswatch) || (this.custom !== theme.custom)) {
        const promises = []
        let styles = ''
        for (const name in theme) {
          if (theme[name]) {
            promises.push(fetchCssTheme(theme[name])
              .then(async response => {
                styles += await response.text()
                styles += ' '
              })
              .catch(() => {
                console.log('theme not found ignored')
              }))
          }
        }

        await Promise.all(promises).then(() => {
          let $themesTag = vDoc.getElementById('storefront-themes')
          if (!$themesTag) {
            $themesTag = document.createElement('div')
            $themesTag.id = 'storefront-themes'
            vDoc.body.appendChild($themesTag)
          }
          $themesTag.innerHTML = `<style>${styles}</style>`
          this.bootswatch = theme.bootswatch
          this.custom = theme.custom
          change = true
        })
      }
  
      if (change) {
        propsArray.forEach(prop => (this[prop] = entries[prop]))
        let parseHtml
        if (vDoc.childNodes && vDoc.childNodes.length) {
          parseHtml = vDoc.childNodes[1].innerHTML
        }
    
        this.setState({ parseHtml, vDoc })
      }
    }, 500)
  }
}
