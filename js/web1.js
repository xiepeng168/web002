var Home={
	template:`<div >
             <div class="ui divider hidden"></div>
             <h3 class="ui block header"><font color="cornflowerblue">Vue路由</font> / <font color="cornflowerblue">首页</font> </h3>
             <div class="ui segments ">
                 <div class="ui segment" id="div1">
                    <p class=" ui brown header">首页</p>
                 </div>
                 <div class="ui segment">
                    <h1>我是首页的内容</h1>
                 </div>
             </div>    
             
        </div>`
}
var mon1={
	template:`<div >
             <div class="ui divider hidden"></div>
             <h3 class="ui block header"><font color="cornflowerblue">Vue路由</font> / <font color="cornflowerblue">菜单一</font> </h3>
             <div class="ui segments ">
                 <div class="ui segment" id="div1">
                    <p class=" ui brown header">菜单一</p>
                 </div>
                 <div class="ui segment">
                    <h1>我是菜单一的内容</h1>
                 </div>
             </div>    
             
        </div>
	 
	`
}
var mon2={
	template:`<div >
             <div class="ui divider hidden"></div>
             <h3 class="ui block header"><font color="cornflowerblue">Vue路由</font> / <font color="cornflowerblue">菜单二</font> </h3>
             <div class="ui segments ">
                 <div class="ui segment" id="div1">
                    <p class=" ui brown header">菜单二</p>
                 </div>
                 <div class="ui segment">
                    <h1>我是菜单二的内容</h1>
                 </div>
             </div>    
             
        </div>`
}
var mon3={
	template:`<div >
             <div class="ui divider hidden"></div>
             <h3 class="ui block header"><font color="cornflowerblue">Vue路由</font> / <font color="cornflowerblue">菜单三</font> </h3>
             <div class="ui segments ">
                 <div class="ui segment" id="div1">
                    <p class=" ui brown header">菜单三</p>
                 </div>
                 <div class="ui segment">
                    <h1>我是菜单三的内容</h1>
                 </div>
             </div>    
             
        </div>`
}
var mon4={
	template:`<div >
             <div class="ui divider hidden"></div>
             <h3 class="ui block header"><font color="cornflowerblue">Vue路由</font> / <font color="cornflowerblue">菜单四</font> </h3>
             <div class="ui segments ">
                 <div class="ui segment" id="div1">
                    <p class=" ui brown header">菜单四</p>
                 </div>
                 <div class="ui segment">
                    <h1>我是菜单四的内容</h1>
                 </div>
             </div>    
             
        </div>`
}
var mon5={
	template:`<div >
             <div class="ui divider hidden"></div>
             <h3 class="ui block header"><font color="cornflowerblue">Vue路由</font> / <font color="cornflowerblue">菜单五</font> </h3>
             <div class="ui segments ">
                 <div class="ui segment" id="div1">
                    <p class=" ui brown header">菜单五</p>
                 </div>
                 <div class="ui segment">
                    <h1>我是菜单五的内容</h1>
                 </div>
             </div>    
             
        </div>`
}


var routes=[
{
	path:"/name1",
	component:Home,
	name:'name1',
	alias:'name1'
	
},
{
	path:"/events1",
	component:mon1,
	props:true,
},
{
	path:"/events2",
	component:mon2,
	props:true,
},
{
	path:"/events3",
	component:mon3,
	props:true,
},
{
	path:"/events4",
	component:mon4,
	props:true,
},
{
	path:"/events5",
	component:mon5,
	props:true,
},
]

var router = new VueRouter({
	routes
})
var vm=new Vue({
	el:"#app",
	router,
	data:{
		info:[
		"首頁","菜单一","菜单二","菜单三","菜单四","菜单五"
		],
		zhuangtai: 0,
	},
	 methods: {
            aaa: function(index) {
                this.zhuangtai = index;
                //console.log(this.zhuangtai)

            }
        }
})
