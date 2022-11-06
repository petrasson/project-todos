import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import tasks from 'reducers/todos/taskSlice';
import moment from 'moment';
import Check from '../assets/Check.svg';
import Trash from '../assets/Trash.svg';
import Lid from '../assets/Lid.svg';

const Task = ({ taskData }) => {
  const dispatch = useDispatch();
  const onIsCompletedToggle = () => {
    dispatch(tasks.actions.toggleItem(taskData.id));
  };
  const onRemoveTask = () => {
    dispatch(tasks.actions.removeTask(taskData.id));
  };
  return (
    <TaskWrapper>
      <div className="task-row">
        <CheckButton
          role="button"
          onClick={() => onIsCompletedToggle(taskData.id)}
          complete={taskData.isCompleted}
          onKeyDown={(e) => e.key === 'Enter' && onIsCompletedToggle(taskData.id)}
          aria-label={
            taskData.isCompleted
              ? 'task complete. press enter to toggle.'
              : 'task incomplete. press enter to toggle.'
          }>
          {taskData.isCompleted ? '' : <IncompleteCheckIcon src={Check} />}
          {taskData.isCompleted ? <CheckIcon src={Check} /> : ''}
        </CheckButton>

        <p className="task-text">{taskData.text}</p>
        <RemoveButton
          role="button"
          onClick={() => onRemoveTask(taskData.id)}
          aria-label="Remove task">
          <span className="trash">
            <span src={Trash} />
            <i src={Lid} />
          </span>
        </RemoveButton>
      </div>
      <Date>
        Created {moment(taskData.date).format('ddd, MMM Do YYYY @ hh:mm a')}
      </Date>
    </TaskWrapper>
  );
};
export default Task;

const TaskWrapper = styled.div`
  // background-color: #f2f7f8;
  border-bottom: 3px solid #f2f7f8;;

  //var(--main-color)
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  @media (min-width: 667px) and (max-width: 1024px) {
  }
  @media (min-width: 1025px) {
    padding: 0 30px;
    margin: 10px 100px;
    

  }
  .task-row {
    padding: 25px 0 0 10px;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    align-items: center;
  }
  @media (min-width: 667px) and (max-width: 1024px) {
  }
  @media (min-width: 1025px) {
    padding: 0 25px 0 20px;
  }

  .task-text {
    font-size: 14px;
    padding: 0 20px;
  @media (min-width: 667px) and (max-width: 1024px) {
  }
  @media (min-width: 1025px) {
    font-size: 16px;
    padding: 0 20px;
  }

`;
const RemoveButton = styled.button`
  // padding: 0 20px;
  margin-left: auto;
  border: none;
  background-color: transparent;
  @media (min-width: 667px) and (max-width: 1024px) {

    }
    @media (min-width: 1025px) {
    // padding: 0 20px;
    }
    

  .trash {
    background: #005568;
    width: 17px;
    height: 20px;
    display: inline-block;
    margin: 0 auto;
    
    position: relative;
    -webkit-border-bottom-right-radius: 6px;
    -webkit-border-bottom-left-radius: 6px;
    -moz-border-radius-bottomright: 6px;
    -moz-border-radius-bottomleft: 6px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    //body
  }
  .trash:after {
    position: absolute;
    left: -99px;
    right: 0;
    bottom: -50px;
    width: 250px;
    // border: solid 2px blue;
  }
  .trash span {
    position: absolute;
    height: 3px;
    width: 20px;
    background: #005568; //pink color
    top: -4px;
    left: -2px;

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transform: rotate(0deg);
    transition: transform 250ms;
    transform-origin: 19% 100%;
    // border: solid 2px blue;
    //lid
  }
  .trash span:after {
    content: "";
    position: absolute;
    width: 4px;
    //topp
    height: 2px;
    background: #005568;
    top: -2px; //hrä

    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transform: rotate(0deg);
    transition: transform 250ms;
    transform-origin: 19% 100%;
    left: 8px;
    //topp
  }

  .trash i {
    position: relative;
    width: 1px;
    height: 12px;
    background: #fff;
    display: block;
    margin: 14px auto;
    border-radius: 3px;
    bottom: 10px;
  }
  .trash i:after {
    content: "";
    width: 1px;
    height: 12px;
    background: #fff;
    position: absolute;
    left: -4px;
    bottom: 0px;
    border-radius: 3px;
  }
  .trash i:before {
    content: "";
    width: 1px;
    height: 12px;
    background: #fff;
    position: absolute;
    right: -4px;
    bottom: 0px;
    border-radius: 3px;
    // border: solid 2px pink;
  }

  .trash:hover span {
    transform: rotate(-45deg);
    transition: transform 250ms;
  }
`;

const Date = styled.div`
  font-size: 9px;
  align-items: flex-end;
  margin-left: auto;
  padding-right: 5px;
  // font-family:

@media (min-width: 667px) and (max-width: 1024px) {
  font-size: 10px;
 }
`;

const IncompleteCheckIcon = styled.img`
  height: 20px;
  width: 20px;
  transform: scale(0);
  // opacity: 0;
  // filter: invert(96%) sepia(1%) saturate(3393%) hue-rotate(180deg)
  // brightness(78%) contrast(87%);
  // transition: all 2.7s ease-out;
`;

const CheckIcon = styled.img`
  height: 23px;
  width: 23px;
  // filter: invert(11%) sepia(5%) saturate(1643%) hue-rotate(179deg)
  //   brightness(96%) contrast(92%);
  // transition: all 4.3s ease-out;
  transition: all 1.5s ease-in;
  transform: scale(1.4);
  opacity: 1;
  position: absolute;
  top: -40%;
  right: -50%;
`;
const CheckButton = styled.div`
  height: 22px;
  width: 22px;
  background-color: #fff;
  position: relative;

  border: 2px solid
    ${(props) => (props.complete === true ? 'var(--text-color-light)' : '#00BBBC')};
  //'var(--accent-color:)'
  // border-radius: 4px;
  //'#adb5bd' : '#212529'

  cursor: pointer;
  // @media (hover: hover) {
  // &:hover ${IncompleteCheckIcon} {
  // transition: all 0.5s ease-in;
  // transform: scale(1);
  // opacity: 1;
  // }
  // &:hover ${CheckIcon} {
  // transition: all 0.5s ease-in;
  // transform: scale(0);
  // opacity: 0;
  // }
  // }
`;

/*  <input
          type="checkbox"
          id={taskData.id}
          name="todo"
          checked={taskData.isCompleted}
          onChange={() => onIsCompletedToggle(taskData.id)} /> */
