import emitter from './emitter'
import widgetUser from '@ecomplus/widget-user'
import widgetProduct from '@ecomplus/widget-product'

const fnWidgets = {
  widgetUser,
  widgetProduct
}

const widgets = window._widgets
if (typeof widgets === 'object' && widgets !== null) {
  for (const widgetPkg in widgets) {
    if (widgets[widgetPkg]) {
      const { active, fn, options } = widgets[widgetPkg]
      if (active && typeof fnWidgets[fn] === 'function') {
        fnWidgets[fn](options)
      }
    }
  }
  emitter.emit('widgets', { widgets })
}
