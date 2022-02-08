const KabnabBoard = () => {
    let tasks = {
         backlog: [],
        todo: [],
        onGoing: [],
        done: [],
    }
    const addTask = () => {
        const input = document.querySelector('#task');
        if(input.value !== '') return;
        tasks.backlog.push(input.value);
       
    }
    const goBack = (e, i, t) => {
            if(e.target.parentElement.id === 'backlog') {
            return;
        }else if(e.target.parentElement.id === 'todo') {
            tasks.backlog.push(t);
            tasks.todo.splice(i, 1);
        }else if(e.target.parentElement.id === 'ongoing') {
            tasks.todo.push(t);
            tasks.onGoing.splice(i, 1);
        }else if(e.target.parentElement.id === 'done') {
            tasks.onGoing.push(t);
            tasks.done.splice(i, 1);
        };

    }
    const goForward = (e, i, t) => {
        if(e.target.parentElement.id === 'backlog') {
            tasks.todo.push(t);
            tasks.backlog.splice(i, 1);
        }else if(e.target.parentElement.id === 'todo') {
            tasks.onGoing.push(t);
            tasks.todo.splice(i, 1);
        }else if(e.target.parentElement.id === 'ongoing') {
            tasks.done.push(t);
            tasks.todo.splice(i, 1);
        }else if(e.target.parentElement.id === 'done') {
            return;
        }

    }
    return(
        <div>
            <div style='display: flex, align-items: center'>KABNAN BOARD</div>
        <div>
            <input name='task' id='task' palceholder='Enter a task'></input>
            <button onClick={addTask}>ADD</button>
        </div>
            <div>
            <div>Backlog</div>
            <ul>{tasks.backlog.map((t, i) => 
            <li key={i}>{t}
            <div id='backlog'>
                <button onClick={(e) =>goBack(e, i,t)}>Back</button>
                <button onClick={(e) => goForward(e, i,t)}>forward</button>
            </div></li>)}</ul>
            </div>
            <div>
                <div>Todo</div>
                <ul>{tasks.todo.map((t, i)=> <li key={i}>{t}
                <div id='todo'>
                <button onClick={(e) => goBack(e, i,t)}>Back</button>
                <button onClick={(e)=>goForward(e, i,t)}>forward</button>
            </div></li>
                )}</ul>
            </div>
            <div>
                <div>Ongoing</div>
                <ul>{tasks.onGoing.map((t, i) => <li key={i}>{t}
                <div id='ongoing'>
                <button onClick={(e)=>goBack(e, i,t)}>Back</button>
                <button onClick={(e) =>goForward(e, i, t)}>forward</button>
            </div></li>)}</ul>
            </div>
            <div>
                <div>Done</div>
                <ul>{tasks.done.map((t, i) => <li key={i}>{t}
                <div id='done'>
                <button onClick={(e) => goBack(e, i, t)}>Back</button>
                <button onClick={(e) =>goForward(e, i, t)}>forward</button>
            </div></li>)}</ul>
            </div>
        </div>
    )
}
export default KabnabBoard;