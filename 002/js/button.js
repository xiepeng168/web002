Vue.component('g-button',{
    template:
    '<button class="ui red button"> g-button </button>'
    
})

Vue.component("prop-button",{
    template:'<button class="ui red button">{{text}}</button>',
    props:{
        text:{
            type:String,
            default:"propButton11"
        }
    }
})
var uiButton={
    template:'<button class="ui red button"> ui-button </button>'
}

var vm=new Vue({
    el:"#app",
    components:{
        'ui-button':uiButton
    }
});