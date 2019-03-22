<template>
  <div>
    <b-alert show class="heading">Default Alert</b-alert>

    <b-alert class="heading2" variant="primary" show>Success Alert</b-alert>

    <b-alert variant="danger" dismissible v-model="showDismissibleAlert">
      Dismissible Alert!
    </b-alert>

    <b-alert
      :show="dismissCountDown"
      dismissible
      variant="warning"
      @dismissed="dismissCountDown=0"
      @dismiss-count-down="countDownChanged"
    >
      <p>This alert will dismiss after {{ dismissCountDown }} seconds...</p>
      <b-progress variant="warning" :max="dismissSecs" :value="dismissCountDown" height="4px" />
    </b-alert>

    <b-button @click="showAlert" variant="info" class="m-1">
      Show alert with count-down timer
    </b-button>
    <b-button @click="showDismissibleAlert=true" variant="info" class="m-1">
      Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})
    </b-button>
    <div>
  <b-button class="my-5 text-danger"  variant="primary">Block Level Button</b-button>
</div>


<b-container class="bv-example-row">
  <b-row variant="primary">
    <b-col class="one" variant="info">col</b-col>
    <b-col class="two" variant="primary">col</b-col>
    <b-col class="three">col</b-col>
    <b-col class="four p-0 "><b-list-group-item variant="success">Success list group item</b-list-group-item></b-col>
  </b-row>

  <b-row>
    <b-col variant="dark" cols="8" class="five">col-8</b-col>
    <b-col cols="4" class="six">col-4</b-col>
  </b-row>
</b-container>



  </div>
 
</template>


<script>
  export default {
    data() {
      return {
        dismissSecs: 10,
        dismissCountDown: 0,
        showDismissibleAlert: false
      }
    },
    methods: {
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      }
    }
  }
</script>
<style scoped>
div.heading{
    font-size:100px;
color:green;
}
div.heading2{
    font-size:50px;
}
.one{
    background-color:red;
}
.two{
    background-color:blue;
}
.three{
    background-color:orange;
}
.five{
    back
}

</style>