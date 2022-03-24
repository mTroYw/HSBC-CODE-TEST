<!--
 * @FileDescription: HSBC-INTERVIEW PROJECT
 * @Author: TroY
 * @Date: 2022/03/24
 * @LastEditors: TroY
 * @LastEditTime: 2022/03/24
 -->
<template>
  <el-container>
    <el-header>HSBC CODE TEST</el-header>
    <el-main>
      <div class="currencyForm">
        <el-form ref="form" :model="form">
          <!-- <el-row :gutter="20">
          <el-col :span="12">-->
          <el-form-item label="Currency Pair" label-width="120px">
            <el-row :gutter="20">
              <el-col :span="6">
                <el-input v-model="form.curr1" placeholder="enter"></el-input>
              </el-col>
              <el-col class="line" :span="1">-</el-col>
              <el-col :span="6">
                <el-input v-model="form.curr2" placeholder="enter"></el-input>
              </el-col>
            </el-row>
          </el-form-item>
          <!-- </el-col> -->
          <!-- </el-row> -->

          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item>
                <el-input placeholder="please enter" v-model="form.curr1Value">
                  <template slot="prepend">{{currency1}}</template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item>
                <el-input placeholder="please enter" v-model="form.clientRate">
                  <template slot="prepend">Client Rate</template>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item>
                <el-input placeholder="waiting..." v-model="currency2Value" :disabled="true">
                  <template slot="prepend">{{currency2}}</template>
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-divider></el-divider>
          <el-form-item>
            <el-button type="primary" :disabled="isable" @click="onSubmit">submit</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "HSBC-codeTest",
  props: [""],
  components: {},
  data() {
    return {
      form: {
        currency: "EURUSD",
        curr1: "",
        curr2: "",
        curr1Value: "",
        clientRate: ""
      },
      isable: true
    };
  },

  methods: {
    // submit
    onSubmit() {
      console.log("submit!");

      if (
        this.currency2Value < 1000000000 &&
        this.form.curr1Value < 1000000000
      ) {
        this.$router.push({ path: "/successfulPage" });
      } else {
        this.$router.push({ path: "/failedPage" });
      }
    }
  },
  watch: {
    // watch擅长处理的场景：一个数据影响多个数据
  },
  computed: {
    // computed擅长处理的场景：一个数据受多个数据影响
    currency2Value() {
      var price = "";
      if (this.form.curr1Value && this.form.clientRate) {
        price = this.form.curr1Value * this.form.clientRate;
      }
      if (price != "") {
        console.log("not null");
        this.isable = false;
        return price;
      }
    },

    currency1() {
      return this.form.curr1;
    },

    currency2() {
      return this.form.curr2;
    }
  },
  beforeCreate: function() {
    // 在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。
  },
  created: function() {
    // 实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
  },
  beforeMount: function() {
    // 在挂载开始之前被调用：相关的 render 函数首次被调用。
  },
  mounted: function() {
    // 编译好的HTML挂载到页面完成后执行的事件钩子
    // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
    // 此钩子函数中一般会做一些ajax请求获取数据进行数据初始化
    console.log("demo done");
  },
  beforeUpdate: function() {
    // 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
  },
  updated: function() {
    // 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
    // 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。
    // 该钩子在服务器端渲染期间不被调用。
  },
  beforeDestroy: function() {
    // 实例销毁之前调用。在这一步，实例仍然完全可用。
  },
  destroyed: function() {
    // Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。
  }
};
</script>

<style >
.el-header {
  text-align: center;
  line-height: 60px;
}

.el-main {
  text-align: center;
  line-height: 160px;
  /* width: 60% */
}
.currencyForm {
  width: 70%;
  margin: 0 auto;
}
</style> 