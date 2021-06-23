<template>
  <div class="m-container">
  <el-row>
    <el-col :span="8"  v-for="item in cname" :value="item" :key="item.id">
      <el-card :body-style="{ padding: '0px' }">
        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
        <div style="padding: 14px;">
          <span>{{item}}</span>
          <div class="bottom clearfix">
            <el-button type="text" class="button">操作按钮</el-button>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
  </div>
</template>

<script>
export default {
  name: "TeacherCourse",
  data() {
    return {
      cname:[]
    }
  },
  created() {
    const _this = this
    const sno = this.$store.getters.getUser.sno
    if(sno) {
      this.$axios.get('/course/getCourse/' + sno).then((res) => {
        console.log(res)
        this.cname = res.data.data
      });
    }
  },
}

</script>

<style scoped>
.m-container{
  margin-top: 50px;
}
</style>