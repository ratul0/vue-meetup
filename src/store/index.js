import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'http://www.visitsylhet.com/images/slides/home/bichnakandi.jpg',
        id: 'dasfadsfdfdas',
        title: 'Meetup in Sylhet',
        date: '2017-07-17'
      },
      {
        imageUrl: 'https://i.ytimg.com/vi/-BuT8yw7ujA/maxresdefault.jpg',
        id: 'njknjsdfnl',
        title: 'Meetup in Dhaka',
        date: '2017-07-19'
      }
    ],
    user: {
      id: 'sdfafwedf',
      registeredMeetups: ['dasfadsfdfdas']
    }
  },
  mutations: {},
  actions: {},
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
