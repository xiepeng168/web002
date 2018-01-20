var cButton={
    data:function(){
        return {
            counter:0
        }
    },
    template:'<button class="ui red button" v-on:click=increment>{{counter}}</button>',
    methods:{
        //increment(){}函数的简写
        increment:function(){
            this.counter++
            this.$emit('total')
        }
    }
}

//var datasource={
//    total :0 
//}
var vm =new Vue({
    el:"#app",
    data:{
        total:0
    },
    components:{
        "c-button":cButton
    },
    methods:{
        pincrement:function(){
            this.total ++
            }
    }
});