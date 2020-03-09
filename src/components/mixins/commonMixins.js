import {
  PROJECT_INIT
} from '@/api/common'

export const projectInitMixin = {
  data () {
    return {
      projectInit: []
    }
  },

  methods: {
    getProjectInit () {
      let _that = this
      this.axios.defaults.headers.post['action'] = PROJECT_INIT
      return this.axios.post('/', {
        query: {}
      }).then(response => {
        if (response.data.ret_code) {
          _that.projectInit = response.data.ret_data
        }
        return response.data.ret_code
      }).catch(error => {
        _that.notice({
          show: true,
          message: error.message
        })
        return false
      })
    }
  }
}