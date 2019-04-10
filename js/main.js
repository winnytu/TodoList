var vm = new Vue({
	el: "#app",
	data: {
		NewTodo:"",
		TodoList:[]
	},
	methods: {
		AddTodo: function(todo){
			this.TodoList.push({content:todo,completed:false})
			this.NewTodo=[]
		},
		RemoveTodo: function(todo){
			this.TodoList.splice(this.TodoList.indexOf(todo),1)
		},
		CompleteAll: function(){
			this.TodoList.forEach(todo=>{
				todo.completed = true
			})
		},
		RemoveAll: function(){
			return this.TodoList=[]
		}
}
})