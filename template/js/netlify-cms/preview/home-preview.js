import React from 'react'
import virtualDoc from './virtual-doc'
import displayWidget from './display-widget'
import fetchPage from './fetch-page'
import previewCarousel from './preview-carousel'

export default class HomePreview extends window.React.Component {
  constructor () {
    super()
    this.state = {
      vDoc: '',
      html: ''
    }
  }

  componentDidMount () {
    this.fetchPage()
  }

  async fetchPage () {
    const html = await fetchPage('/index.html')
    const vDoc = virtualDoc(html)
    this.setState({ html, vDoc })
  }

  render () {
    const { vDoc } = this.state
    let newDoc = vDoc
    let html
    if (vDoc) {
      const { entry } = this.props
      const data = JSON.parse(entry.getIn(['raw']))

      // set slider
      this.props.widgetsFor('slider')
        .getIn(['data', 'slides'])
        .map(function (slider, index) {
          // set last img has preview for slider
          const img = slider.getIn(['img'])
          const $slider = vDoc.querySelectorAll('.glide')
          if (img) {
            $slider[0].classList.add(...['glide--ltr', 'glide--slider', 'glide--swipeable'])
            const $imgs = vDoc.querySelectorAll('.banner-slider img')
            for (let i = 0; i < $imgs.length; i++) {
              const $img = $imgs[i]
              $img.classList.remove()
              $img.classList.add(...['lozad', 'fade', 'img-fluid', 'show'])
              $img.setAttribute('src', img)
              $img.setAttribute('data-loaded', true)
            }
            $slider[0].style.display = 'block'
          } else {
            $slider[0].style.display = 'none'
          }
        })
      
      // fix carousel
      previewCarousel(vDoc)

      for (const key in data) {
        const objCurr = entry.getIn(['data', key])
        newDoc = displayWidget('home', key, objCurr, vDoc)
      }
    }

    if (newDoc.childNodes && newDoc.childNodes.length) {
      html = newDoc.childNodes[1].innerHTML
    }
    return h('div', { dangerouslySetInnerHTML: { __html: html } })
  }
}
