import { defineStore } from 'pinia'
import Axios from '../services/index'

export const useNobelPrizeStore = defineStore({
  id: 'NobelPrize',
  state: () => ({
    countries: [],
    nobelPrizes: [],
    countryId:1,
    selectedContinent:''
  }),
  getters: {
    getAllContinent: (state) => {
      let filteredContinent = state.countries.map(x => x.kontinens)
      let continents = [...new Set(filteredContinent)]
      return continents
    },
    getCountryByContinent: (state) => {
      const filteredCountry = state.countries.filter(x=>x.kontinens == state.selectedContinent)
      const firstCountry = {...filteredCountry[0]}
      state.countryId = firstCountry.azon
      return filteredCountry
    }
    // getNobelPrizeByCountry: (state) => {
    //   Axios.get(`/iro?szulhely=${state.countryId}`)
    //   .then(resp => {
    //     // console.log(resp.data)
    //     state.nobelPrizes = resp.data
    //   })
    //   .catch(err => {console.log(err)})
    // }
  },
  actions: {
    getAllCountry(){
      Axios.get('/orszag')
        .then(resp => {
          //console.log(resp.data)
          this.countries = resp.data
          this.selectedContinent = this.countries[0].kontinens
        })
        .catch(err => { console.log(err) })
    },
    getNobelPrizeByCountry() {
      Axios.get(`/iro?szulhely=${this.countryId}`)
      .then(resp => {
        // console.log(resp.data)
        this.nobelPrizes = resp.data
      })
      .catch(err => {console.log(err)})
    }
  } 
})
