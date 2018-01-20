var Home={
	template:`<div >
             <div class="ui divider hidden"></div>
                 <div class="ui segment" style='width:50% ; float: left; height:300px;'>
                    <h1>文章列表</h1>
                 </div>
                  <div class="ui segment" style='width:50% ;float: right;height:300px;'>
                    <h1>视频列表</h1>
                 </div>
             </div>    
             
        </div>`
}
var mon1={
	template:`<div >
             <div class="ui divider hidden"></div>
                 <div class="ui segment" style="height:200px;">
                    <h1>新闻条目</h1>
                 </div>
                 <div class="ui segment"style="height:200px;">
                    <h1>新闻条目</h1>
                 </div>
                 <div class="ui segment"style="height:200px;">
                    <h1>新闻条目</h1>
                 </div>
             </div>    
             
        </div>
	 
	`
}
var mon2={
	template:`<div >
             <div class="ui divider hidden"></div>
             <div class="ui segments ">
                 <div class="ui segment" id="div1" style="height1:00px;">
                    <p class=" ui brown header">广告栏</p>
                 </div>
                 <div class="ui segment" style="height:300px;">
                    <h1>视频内容</h1>
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
]

var router = new VueRouter({
	routes
})
var vm=new Vue({
	el:"#app",
	router,
	 methods: {
            aaa: function(index) {
                this.zhuangtai = index;
                //console.log(this.zhuangtai)

            }
        }
})
