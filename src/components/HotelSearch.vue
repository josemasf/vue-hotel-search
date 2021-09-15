<template>
  <section>
      <b-field grouped group-multiline>
            <b-field label="Max">
                <b-numberinput v-model="stars" min="1" controls-position="compact"></b-numberinput>
            </b-field>
            <b-field label="Max. Price">
                <b-numberinput v-model="maxPrice" min="100" controls-position="compact"></b-numberinput>
            </b-field>  
            <b-field label=" ">
                <b-button type="is-info is-light" size="is-large" icon-left="find" pack="fas" @click="search">Search</b-button>
            </b-field>            
        </b-field>
        
  </section>
</template>

<script>
import { MessageBus } from "@podium/browser";
const messageBus = new MessageBus();

export default {
  name: 'HotelSearch',
  props: {
    msg: String
  },
  data:()=> ({    
    stars: 2,
    maxPrice: 500,
    hotels: null,
  }),  
  methods:{
    search(){
    fetch(`http://fake-hotel-api.herokuapp.com/api/hotels?min_stars${this.stars}&maxPrice${this.maxPrice}`)
        .then(res=>res.json())
        .then(json=>{
            this.hotels = json;
           this.sendResult()
            })
    },
    sendResult(){
       messageBus.publish('internalchannel', 'hotels', {message: `new-search-hotels`, from: 'vue hotel search', hotels: this.hotels});
      this.$emit('hotels','new-search-hotels')
      console.log('emit event: new-search-hotels', this.hotels)    
    },
    signUp(){
      messageBus.publish('internalchannel', 'login', {message: 'open-login', from: 'vue header', tab: 1});
      this.$emit('login','open-signUp')
      console.log('emit event: open-signUp', 'login')
    }
  }
}
</script>


