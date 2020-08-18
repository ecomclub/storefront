import { name } from './package.json'

export default () => ({
  label: 'Trustvox',
  fields: [
    {
      name: 'pkg',
      widget: 'hidden',
      default: name
    },
    {
      label: 'Ativar',
      hint: 'Instalar avaliações de produtos via Trustvox',
      name: 'active',
      widget: 'boolean'
    },
    {
      name: 'desktopOnly',
      widget: 'hidden',
      default: false
    },
    {
      name: 'enableCheckout',
      widget: 'hidden',
      default: false
    },
    {
      name: 'disablePages',
      widget: 'hidden',
      default: true
    },
    {
      label: 'Opções',
      name: 'options',
      widget: 'object',
      hint: 'Personalizações do widget',
      fields: [
        {
          label: 'ID da loja na Trustvox',
          name: 'trustvoxStoreId',
          widget: 'number'
        },
        {
          label: 'Link do script do widget',
          name: 'widgetSrc',
          widget: 'string',
          required: false,
          default: 'https://static.trustvox.com.br/assets/widget.js'
        }
      ]
    },
    {
      name: 'bodyAppend',
      widget: 'hidden',
      default: 'src/append/body'
    },
    {
      name: 'productDescriptionAppend',
      widget: 'hidden',
      default: 'src/append/product-block'
    },
    {
      name: 'productCardSlots',
      widget: 'hidden',
      default: 'src/append/product-card-slots'
    },
    {
      name: 'productSlots',
      widget: 'hidden',
      default: 'src/append/product-slots'
    },
    {
      name: 'stampsAppend',
      widget: 'hidden',
      default: 'src/append/stamps'
    }
  ]
})
