var Home={
	template:`<h2>首页</h2>`
}
var Event={
	//props:['id'],
	template:`
	
	<h1>活动</h1>
	
	`
}

var Comment ={
	template:`
	<div>
	<h3>评论</h3>
	<router-view>
					
				</router-view>
				</div>

	
	`
}
var Commentaaa ={
	template:`
	<h3>11111</h3>
	`
}
	

var routes=[
{
	path:"/name1",
	component:Home,
	name:'name1',
	alias:'name1'
	
},
{
	path:"/events",
	component:Event,
	props:true,
},
{
//	path:'/events/:id',
	path:'/events/100',
	component:Comment,
	props:true,
	//嵌套
	children:[
	{
		path:'comments',
		component:Commentaaa
	}
	]
}]

var router = new VueRouter({
	routes
})
var vm=new Vue({
	el:"#app",
	router
})
