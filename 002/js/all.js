
// 按钮
//var cButton={
//    template:`
//    <button class="ui red button">u-button</button>
//`
//}
//
//
//Vue.component("g-button",{
//    template:`
//        <button class="ui red button">g-buuton</button>
//`
//})
//
//Vue.component("prop-button",{
//    template:`
//        <button class="ui red button">{{text}}</button>
//`,
//    props:{
//        text:{
//            type:String,
//            default:'props-button'
//        }
//    }
//    
//})
//
//var vm = new Vue({
//    el:"#app",
//    components:{
//        "c-button":cButton
//    }
//});
//var licom={
//    template:`<li>{{text}}</li>`,
//    props:["text"]
//}
//



//列表

//var olcom={
//    data:function(){
//        return {
//            frite:["飞机","坦克","反器材武器"]
//        }
//    },
//    template:`
//      <ol>
//        <li-com v-for="zhao in frite" :text="zhao"></li-com>
//        <li-com text="d"> dgdg</li-com>
//      </ol>
//      
//        
//`,
//    components:{
//        "li-com":licom
//    },
//    
//}
//
//var vm = new Vue({
//    el:"#app",
//    components:{
//        "ol-com":olcom
//    }
//    
//});




// 另一种列表
//var olcom={
//    
//    template:`
//      <ol>
//        <li v-for="zhao in list">{{zhao}}</li-com>
//      </ol>
//`,
//    props:["list"]
//    
//}
//
//
//var vm = new Vue({
//    el:"#app",
//    data:{
//            frite:["飞机","坦克","反器材武器"]
//    },
//    components:{
//        "ol-com":olcom
//    }
//    
//});



//按钮的点击事件


//var bButton={
//    template:`
//        <button class="ui red button" @click=add>{{counter}}</button>
//`,
//    data:function(){
//        return {
//            counter:0
//        }
//    },
//    methods:{
//        add:function(){
//            this.counter++;
//            this.$emit("total");
//        }
//    }
//}
//var vm = new Vue({
//    el:"#app",
//    data:{
//        total:0
//    },
//    components:{
//        "b-button":bButton
//    },
//    methods:{
//        Add:function(){
//            this.total++;
//        }
//    }
//})


// slot 的用法

//    Vue.component("segment",{
//        template:`
//            <div class="ui stacked segment">
//                <slot>0.0</slot>
//            </div >
//    `
//    })
//
//    var vm =  new Vue({
//        el:"#app",
//    })
Vue.component("segment",{
    template:`
        <div class="ui card">
            <div class="image">
                <slot name="image">image</slot>
            </div>
            <div class="content">
                <div class="header">
                    <slot name="header">header</slot>
                </div>
                <div class="meta">
                    <slot name="meta">meta</slot>
                </div>
            </div>
        </div >
`
})

var vm =  new Vue({
    el:"#app",
})