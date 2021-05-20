import ClockedLimit from '@/utils/ClockedLimit.js'

const state = {
    name: '',
    entranceLoggedIn: false,
    onBreak: false,
    breakCounter: 0,
    onLunch: false,
    LunchCounter: 0,
    log: []
  };
const getters = {
    getName: state => {
      return state.name
    },
    getBreakCounter: state => {
      return state.breakCounter
    },
    isOnBreak: state => {
      return state.onBreak
    },
    isOnLunch: state => {
      return state.onLunch
    },
    getLunchCounter: state => {
      return state.LunchCounter
    },
    isentranceLoggedIn: (state) => {
      return !!state.entranceLoggedIn;
    },
    getLog: state => {
      return state.log
    }
  };
  const actions = {
      breakAction: ({commit, state}) => {
        if(state.breakCounter === ClockedLimit.Breaks){
            alert('No tiene breaks disponibles')
        }else{
            commit('BreakAdd')
        }
      },
      lunchAction: ({commit, state}) =>{
        if(state.LunchCounter === ClockedLimit.Lunches){
            alert('No tiene almuerzos disponibles')
        }else{
            commit('LunchAdd')
        }
      }
  }
 const mutations = {
    EntranceFalse: (state) => {
      state.entranceLoggedIn = true;
    },
    ChangeName: (state, name) => {
      state.name = name
    },
    BreakAdd: state => {
      state.breakCounter++
      state.onBreak = true
      state.onLunch = false
    },
    LunchAdd: state => {
      state.LunchCounter++
      state.onLunch = true
      state.onBreak = false
    },
    EndBreakLunch: state => {
      state.onLunch = false
      state.onBreak = false
    },
    Exit: state => {
      state.name = ''
      state.entranceLoggedIn = false
      state.breakCounter = 0
      state.LunchCounter = 0
    },
    UpdateLog: (state, payload) => {
      state.log.push({
        name: state.name,
        date: payload.date,
        time: payload.time,
        type: payload.type
      });
    }
  };

  export default {
      state,
      getters,
      mutations,
      actions
  }