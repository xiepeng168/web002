
var Editor={
    props:["entityObject"],
    data:function(){
        return {
            entity:this.entityObject
        }
    },
    methods:{
        update:function(){
            this.$emit("updateEvent")
        }
    },
    template:`
        <div class="ui form">
            <div class="field">
                <textarea  placeholder="请输入..."  cols="30" rows="5" class="textarea" v-model="entity.body" 
                v-on:input="update"></textarea>
            </div>
        </div>
`
}


var Note={
    props:['entityObject'],
  
    data:function(){
        return {
            entity:this.entityObject,
             show: false,
        }
    },
    //字数
    computed:{
    	meta:function(){
    		return moment(this.entity.meta.updated).fromNow()
    	},
    	word:function(){
    		return this.entity.body.trim().length
    	}
    		
    },
    //标题字数为30
    header:function(){
    	return _.truncate(this.entity.body,{length:30})
    },
    methods:{
        save:function(){
            loadCollection("notes")
             .then(collection=>{
                collection.update(this.entity)
                db.saveDatabase()
            })
        },
         save1:function(){   
        },
        del:function(){
        	
				var r=confirm("您确定删除本条信息吗");
				if (r==true)
				  {
				 this.$emit("destroyEvent",this.entity.$loki);
				  }
				
				}   
    },
    template: `
        <div class="item">
                   <div class="meta">{{meta}}</div>
                    <div class="content">
                        <div class="header"   @click="show=!show">{{_.truncate(this.entity.body,{length:30})}}</div>
                        <div class="extra">
                            <editor v-bind:entityObject="entity" @updateEvent="save"  v-show="show"></editor>
                        </div>
                        {{word}}字
                        <i class="trash icon right floated" @click="del"></i>
                   </div>
        </div>
`,
 
    components:{
        "editor":Editor
    }
}
var Notes = {
//	data:{
//		show: false,
//	}
	
	 
    data:function(){
    	
        return {
            entities:[],
            zhuangtai:"暂无待执行的备忘事件！！！"
           
        }
    },
    created:function(){
          
          loadCollection("notes")
          .then(collection=>{
             var _entities= collection.chain().find().simplesort('$loki','isdesc').data()//isdesc倒序输出
             
             this.entities=_entities
               
          })
    },
    template:`  
          <div class="ui container notes">
            <div class="ui horizontal divider header">
               <i class="icon paw"></i>
                Notes App 备忘录
            </div>
            <button class="ui right floated button violet basic" @click="insertEntity">添加笔记</button>
            <div class="ui items divided">
                <note v-for="entity in entities" v-bind:entityObject="entity" v-bind:key="entity.$loki" @destroyEvent="destroyEntity"></note>
            </div>
             <div class="ui items divided">
               <h1 v-if="entities.length<=0" style="margin-left: 40%;">{{zhuangtai}}<h1>
            </div>
        </div>
`,
    methods:{
        insertEntity:function(){
            loadCollection("notes")
            .then(collection =>{
                var _entity=collection.insert({"body":"什么都没写"})
                db.saveDatabase()
                
                this.entities.unshift(_entity)//把_entity插入到entities的第一位            
            })
        },
        
      destroyEntity:function(id){
      var _entities = this.entities.filter( entity => {
        return entity.$loki !== id
      })
      this.entities = _entities
      loadCollection("notes")
        .then( collection => {
          collection.remove({"$loki":id});
          db.saveDatabase();
        })
  	},
    },  
    components:{
        "note":Note
    }
}
var vm= new Vue({
    el:"#app",
   
    components:{
       "notes":Notes
    },
    
})