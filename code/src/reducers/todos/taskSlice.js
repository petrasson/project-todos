/* eslint-disable max-len */
import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   tasksArray: []
// };

const taskSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasksArray: [
      // { id: 0,
      //   text: 'Sova',
      //   isCompleted: false,
      //   color: 'purple' }
    ]
  },
  reducers: {

    toggleItem: (store, action) => {
      console.log(store);
      console.log(action);
      // store.items.find((item) => item.id === action.payload).isCaught = !store.items.find((item) => item.id === action.payload).isCaught;
      store.tasksArray.forEach((task) => {
        if (task.id === action.payload) {
          task.isCompleted = !task.isCompleted
        }
      })
    },
    removeTask: (store, action) => {
      store.tasksArray = [...store.tasksArray.filter((task) => task.id !== action.payload)];
    },
    addTask: (store, action) => {
      store.tasksArray = [action.payload, ...store.tasksArray];
    },
    removeAllTasks: (store, action) => {
      store.tasksArray = [...store.tasksArray.filter((task) => task.id === action.payload)];
    },
    countTasksLeft: (store, action) => {
      store.tasksArray.forEach((task) => {
        if (task.id === action.payload) {
          task.isCompleted = !task.isCompleted
        }
      })
    }
  }
});

export default taskSlice;

/* setAllTasksDone: (store, action) => {
    //   store.tasksArray.forEach((task) => {
    //     if (task.id === action.payload) {
    //     !task.isCompleted = task.isCompleted
    //     }
    //   })
    // },
  //   }
  // },
  //   store.tasksArray.forEach((task) => {
  //     if (task.id === action.payload) {
  //       task.isCompleted =
  //     }
  //   })
  // },
  */