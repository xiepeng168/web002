var liComponent={
    template:'<li>{{text}}</li>',
    props:['text']
}
//定义一个Vue 局部组件
var olComponent= {
    data:function(){
        return {
            fruid:["苹果","香蕉","橘子"]
        }
    },
    template:`
        <ol>
            <li-component v-for="item in fruid" :text="item"></li-component>
        </ol>`,
    components:{
        "li-component":liComponent
    }
}
//创建一个Vue实例
var vm =new Vue({
    el:"#app",
    components:{
        "ol-component":olComponent
    }
})   