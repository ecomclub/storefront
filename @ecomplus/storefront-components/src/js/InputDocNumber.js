import { i19docNumber } from '@ecomplus/i18n'
import { $ecomConfig, i18n } from '@ecomplus/utils'
import CleaveInput from 'vue-cleave-component'

const countryCode = $ecomConfig.get('country_code')

export default {
  name: 'InputDocNumber',

  components: {
    CleaveInput
  },

  props: {
    value: {
      type: [String, Number],
      required: true
    },
    isCompany: {
      type: Boolean
    }
  },

  computed: {
    placeholder () {
      return countryCode === 'BR'
        ? this.isCompany
          ? 'CNPJ'
          : 'CPF'
        : i18n(i19docNumber)
    },

    pattern () {
      if (countryCode === 'BR') {
        if (this.isCompany) {
          return '[\\d]{2}\\..{15}'
        } else {
          return '[\\d]{3}\\..{10}'
        }
      }
      return '[\\d]+{9,19}'
    },

    localValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit('input', value)
      }
    },

    cleaveOptions () {
      return countryCode === 'BR'
        ? this.isCompany
          ? { blocks: [2, 3, 3, 4, 2], delimiters: ['.', '.', '/', '-'] }
          : { blocks: [3, 3, 3, 2], delimiters: ['.', '.', '-'] }
        : { blocks: [30] }
    }
  }
}
