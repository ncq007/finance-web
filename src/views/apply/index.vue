<template>
  <div>发起申请</div>
</template>

<script>
import { approvalRequestListMixin } from '@/components/mixins/approvalMixins.js'
import { projectInitMixin } from '@/components/mixins/commonMixins.js'

export default {
  name: 'apply',
  mixins: [
    approvalRequestListMixin,
    projectInitMixin
  ],
  data () {
    return {}
  },
  created () {
    this.getList()
    this.getProjectList()
  },
  methods: {
    getList () {
      this.getApprovalRequestList().then(res => {
        if (res) {
        } else {
          this.$message.error('This is a message of error')
        }
      })
    },
    getProjectList () {
      this.getProjectInit().then(res => {
        if (res) {
        } else {
          this.$message.error('This is a message of error1')
        }
      })
    }
  }
}
</script>