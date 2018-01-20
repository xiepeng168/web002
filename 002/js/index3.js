
//Vue的另一种表达
//const vm=new Vue({
//    el:"#app",
//})
Vue.component("card",{
    template:`
        <div class="ui card">
            <div class="image">
                <slot name="image">image</slot>
            </div>
            <div class=""content>
                <div class="header">
                     <slot name="header">image</slot>    
                </div>
                <div class="meta">
                     <slot name="meta">image</slot>  
                </div>
            </div>
        </div>
`
    
})
Vue.component("segment",{
    template:`
    <div class="ui satcked sement">
        <slot>0.0</slot>
    </div>
`
})
var vm=new Vue({
    el:"#app",
})