import {
  APPROVE_REQUEST_LIST
} from '@/api/approval'

export const approvalRequestListMixin = {
  data () {
    return {
      approvalRequestList: []
    }
  },

  methods: {
    getApprovalRequestList () {
      let _that = this
      this.axios.defaults.headers.post['action'] = APPROVE_REQUEST_LIST
      return this.axios.post(this.approvalUrl, {
        query: {}
      }).then(response => {
        if (response.data.ret_code) {
          _that.approvalRequestList = response.data.ret_data
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
