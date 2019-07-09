<template>
    <div class="login-container">
        <!-- 卡片 -->
        <el-card class="login_box">
            <img src="../../assets/images/logo_index.png" alt="">
            <el-form>
                <el-form-item >
                    <el-input placeholder="请输入手机号" ></el-input>
                </el-form-item>
                 <el-form-item >
                    <el-input placeholder="请输入验证码" style="width:280px" ></el-input>
                    <el-button type="primary" style="float:right">发送验证码</el-button>
                </el-form-item>
                <el-checkbox v-model="checked" class="login_checked"></el-checkbox>
                我已阅读并同意 <el-link type="primary">用户协议</el-link> 和 <el-link type="primary">隐私条款</el-link>
                <el-form-item >
                    <el-button class="login_button" type="primary" style="width:100%">登录</el-button>
                </el-form-item >
            </el-form>

        </el-card>
    </div>
</template>

<script>
export default {
  data () {
    return {
      checked: true
    }
  }
}
</script>

<style scoped lang='less'>
.login-container{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: url(../../assets/images/login_bg.jpg) no-repeat center / cover;
    .login_box{
        width: 450px;
        height: 350px;
        position:absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        img{
            display: block;
            margin: 10px auto 30px;
            width: 250px;
        }
    }

}
.login_checked{
    margin-right: 10px;
}
.login_button{
    margin-top: 20px;
}
</style>
