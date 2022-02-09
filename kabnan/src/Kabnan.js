import classes from './kabnan.module.css';
import {useState} from 'react';

const KabnabBoard = () => {
    let [backLog, setBackLog] = useState([]);
    let [todo, setTodo] = useState([]);
    let [onGoing, setOnGoing] = useState([]);
    let [done, setDone] = useState([]);

   
    const addTask = () => {
        const input = document.querySelector('#task');
        if(input.value === '') return;
        setBackLog(backLog.concat(input.value));
        input.value = '';    
    }

    const enterClicked = (e) => {
        if(e.keyCode === 13) {
        const input = document.querySelector('#task');
            if(input.value === '') return;
            setBackLog(backLog.concat(input.value));
            input.value = '';  
        }
    }

    const goBack = (e, index, t) => {
        let target = e.target.parentElement;
        
        if(target.id === 'todo') {
            setBackLog(backLog.concat(t));
            todo.splice(index, 1);
        }else if(target.id === 'ongoing') {
            setTodo(todo.concat(t));
            onGoing.splice(index, 1);
        }else if(target.id === 'done') {
            setOnGoing(onGoing.concat(t));
            done.splice(index, 1);
        }else{
            return;
        }
    }
    const goForward = (e, index, t) => {
        let target = e.target.parentElement;
        if(target.id === 'backlog') {
            setTodo(todo.concat(t));
            backLog.splice(index, 1);
        }else if(target.id === 'todo') {
            setOnGoing(onGoing.concat(t));
            todo.splice(index, 1);
        }else if(target.id === 'ongoing') {
            setDone(done.concat(t));
            onGoing.splice(index, 1);
        }else{
            return;
        }

    }
    const goTogitHub = () => {
        const url = 'https://github.com/u31999';
        window.open(url, '_blank');
    }
    
    
    return(
        <div className = {classes.kabnanPage}>
            <div className={classes.title}>KABNAN BOARD</div>
        <div className={classes.inputContainer}>
            <input name='task' id='task' placeholder='Enter a Task' onKeyUp={enterClicked}></input>
            <button onClick={addTask}>ADD</button>
        </div>
            <div className={classes.kabnanBoard}>
            <div>
            <div className={classes.boardTitle}>Backlog</div>
            <ul>{backLog.map((t, i) => 
            <li key={i} id={i}>
            <div>{t}</div>
            <div id='backlog' className={classes.backLog}>
                <button className={classes.arrow} onClick={(e) =>goBack(e, i,t)}>{'<'}</button>
                <button className={classes.arrow} onClick={(e) => goForward(e, i,t)}>{'>'}</button>
            </div></li>)}</ul>
            </div>
            <div>
                <div className={classes.boardTitle}>Todo</div>
                <ul>{todo.map((t, i)=>
                <li key={i} id={i}>
                <div>{t}</div>
                <div id='todo'>
                <button className={classes.arrow} onClick={(e) => goBack(e, i,t)}>{'<'}</button>
                <button className={classes.arrow} onClick={(e)=>goForward(e, i,t)}>{'>'}</button>
            </div></li>
                )}</ul>
            </div>
            <div>
                <div className={classes.boardTitle}>Ongoing</div>
                <ul>{onGoing.map((t, i) => <li key={i} id={i}>
                <div>{t}</div>
                <div id='ongoing'>
                <button className={classes.arrow} onClick={(e)=>goBack(e, i,t)}>{'<'}</button>
                <button className={classes.arrow} onClick={(e) =>goForward(e, i, t)}>{'>'}</button>
            </div></li>)}</ul>
            </div>
            <div>
                <div className={classes.boardTitle}>Done</div>
                <ul>{done.map((t, i) => <li key={i} id={i}>
                <div>{t}</div>
                <div className={classes.done} id='done'>
                <button className={classes.arrow} onClick={(e) => goBack(e, i, t)}>{'<'}</button>
                <button className={classes.arrow} onClick={(e) =>goForward(e, i, t)}>{'>'}</button>
            </div></li>)}</ul>
            </div>
            </div>
            <div className={classes.copyRight} onClick={goTogitHub}>CopyRight @ by <span className={classes.copyRightName}>Ahmed Hassan</span></div>
        </div>
    )
}
export default KabnabBoard;