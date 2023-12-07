import { useEffect, useState }   from 'react'
import style                     from './relevant.module.css'
import { FaTrashCan }            from "react-icons/fa6";
import { FaEdit }                from "react-icons/fa";


export const Relevant = ()=>{

    const [input, setInput] = useState("")
    //tasks
    const [tasks, setTasks] = useState<string[]>([
        'Tarefa exemplo 1',
        'Tarefa exemplo 2'
    ])

    const [editTask, setEditTask] = useState({
        enabled: false,
        task: ''
    })

    //functions
    const handleAddTask = ()=>{
        if(input.length <=0){

            let msg = 'Você não digitou nada'

            alert(msg)
            return
        }

        if(editTask.enabled){
            handleSaveEdit()
            return
        }

        setTasks(
            task => [...task, input]
        )
        
        setInput('')
        
        localStorage.setItem(

            "@Mustache-Task", JSON.stringify(

                [...tasks, input]
            )

        )
        
    }


    const handleSaveEdit = ()=>{

        let findIndexTask = tasks.findIndex(
            task => task === editTask.task
        )

        let alltasks = [...tasks]

        alltasks[findIndexTask] = input
        
        setTasks(alltasks)

        setEditTask({
            enabled: false,
            task:''
        })

        setInput('')

        localStorage.setItem(

            "@Mustache-Task", JSON.stringify(
                alltasks
            )
        )
    }


    const handleDelete = (item: string)=>{

        const removeTask = tasks.filter(
            task => task !== item
        )

        console.log(removeTask)
        setTasks(removeTask)

        localStorage.setItem(
            "@Mustache-Task", JSON.stringify(
                removeTask
            )
        )

    }


    const handleEdit = (item: string)=>{

        setInput(item)

        setEditTask({
            enabled: true,
            task: item
        })

    }

    //effect
    useEffect(() => {
        const storedTasks = localStorage.getItem("@Mustache-Task");
        if (storedTasks) {
          setTasks(JSON.parse(storedTasks));
        }
    }, []);



    return(

        <main className={style.container}>

            <section className={style.sectionTitle}>
                
                <div>
                    <strong className={style.title}>Digite sua tarefa</strong>
                </div>


                <div className={style.divInput}>

                    <input 
                        type="text"
                        placeholder='digite aqui...'
                        className={style.input}
                        value={input}
                        onChange={(e)=> setInput(e.target.value)}
                    />

                    <button className={style.buttonInput} onClick={handleAddTask}>

                        {
                            editTask.enabled ?
                            "Atualizar tarefa" : "Adicionar tarefa"
                        }

                    </button>

                    
            
                </div>
                
            </section>

            
            <section className={style.containerTask}>

                <div className={style.divList}>
                    
                    {
                        tasks && tasks.length ?
                        (
                            <h3 className={style.textList}>Lista de tarefas:</h3>
                        ):
                        (
                            <></>
                        )
                    }
                    
                
                </div>


                <div className={style.showTask}>

                    {
                        tasks.map((item, _index)=>(

                            <section key={item} className={style.sectionTask}>

                                <div className={style.divTask}>

                                     <span className={style.tasks}>{item}</span> 

                                </div>

                                

                                <div className={style.divButtons}>

                                    <abbr title="Delete">

                                        <p onClick={()=>handleDelete(item)} className={style.trash}>
                                            <FaTrashCan/>
                                        </p>
                                    </abbr>

                                    <abbr title="Edit">
                                
                                        <p onClick={()=>handleEdit(item)} className={style.edit}>
                                            <FaEdit/>
                                        </p>
                                    </abbr>

                                </div>
                                
                            </section>

                        ))
                    }

                </div>
                

            </section>
        </main>

    )
}