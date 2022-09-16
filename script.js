const form = document.querySelector('form')

let todos = []

const createTask = () =>{
    const message = document.querySelector('#message')
    if(message.value){
        let task = {
            id:todos.length===0?1:todos[todos.length-1].id+1,
            message:message.value,
            status:false,
            date:new Date()
        }
        todos.push(task)
        renderTodos()
        console.log(todos)
    }else alert('Field is empty')
    
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    createTask()
})


const renderTodos = () =>{
    const output = document.querySelector('#output')
    output.innerHTML=''

   
    todos.forEach(el=>{
        const block = document.createElement('div')
        const message = document.createElement('h2')
        const dateDom = document.createElement('p')
        const doneMessage = document.createElement('p')

        let date = el.date
        let currentDate = `Todo is created: ${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()} ${date.getHours()}:${+date.getMinutes()<10
       ?'0'+date.getMinutes()
       :date.getMinutes()}:${+date.getSeconds()<10
           ?'0'+date.getSeconds()
           :date.getSeconds()}`
    
     
        
        message.textContent=el.message
        dateDom.textContent=currentDate
        doneMessage.el

        block.style.background = el.status?'lightblue':'darkviolet'

        const done = document.createElement('button')
        done.textContent='DONE'


        const del= document.createElement('button')
        del.textContent='Delete'


        const edit = document.createElement('button')
        edit.textContent='Edit'




        done.addEventListener('click',()=>{
            doneTodo(el.id)
        })
        del.addEventListener('click',()=>{
            deleteTodo(el.id)
            el.status?deleteTodo(el.id):alert('Todo is not done')
        })

        edit.addEventListener('click',()=>{
            !el.status?editTodo(el.id):alert('Todo is done')
        })


        block.append(message,dateDom,done,del,edit)
        output.append(block)
    })

}


const editTodo = () =>{
        let messageForEdit = prompt('EDIT TODO');
        if(!messageForEdit){
            alert('Try Again')
        } else { 
          todos.forEach(el=>{
            if(id===el.id)
            el.message = result
          })
        }
      }


const doneTodo = (id) =>{
    todos.forEach(el=>{
        if (el.id===id){
        el.status=true
      }

    })
    renderTodos()

}


const deleteTodo = (id) =>{
    todos = todos.filter(el=>{
        return el.id!==id
})
renderTodos()
}

function saveLocalTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }
   
  function getTodos(arr, callback = () => {}) {
    let todos;
    if (localStorage.getItem('todos') === null) {
      todos = arr;
    } else {
      todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(callback);
    return todos;
  }







