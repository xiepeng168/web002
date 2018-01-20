var Home={
	template:`<h2>首页</h2>`
}
var Event={
	//props:['id'],
	template:`
	
	<h1>活动</h1>

	`
}

//var Comment ={
//	template:`
//	<h3>评论</h3>
//	`
//}
var routes=[
{
	path:"/",
	component:Home
},
{
	path:"/events",
	component:Event
//	props:true,
//	children:[
//	{
//		path:"comments",
//		component:Comment
//	}
//	]
}
]
var router = new VueRouter({
	routes
})
var vm=new Vue({
	el:"#app",
	router
})
