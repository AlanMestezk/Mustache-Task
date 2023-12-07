import { useState } from 'react'
import style        from './relevant.module.css'



export const Relevant = ()=>{

    const [input, setInput] = useState("")
    //tasks
    const [tasks, setTasks] = useState([
        'Estudar',
        'Comprar pão',
        'Ir a academia'
        
    ])

    //functions
    const handleAddTask = ()=>{
        if(input.length <=0){

            let msg = 'Você não digitou nada'

            alert(msg)
            return
        }

        setTasks(
            task => [...task, input]
        )
        
        setInput('')
    }

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

                    <button className={style.buttonInput} onClick={handleAddTask}>Adicionar tarefa</button>

                    
            
                </div>
                
            </section>

            
            <section className={style.containerTask}>

                <div className={style.divList}>

                    <h3 className={style.textList}>Lista de tarefas:</h3>
                
                </div>


                <div className={style.showTask}>

                    {
                        tasks.map((item, index)=>(

                            <section key={item} className={style.sectionTask}>

                                <span className={style.tasks}>{item}</span>
                                <button>Excluir</button>

                            </section>

                        ))
                    }

                </div>
                

            </section>
        </main>

    )
}