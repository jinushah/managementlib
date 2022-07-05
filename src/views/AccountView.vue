<template>
      <div class="element py-2">
        <br/><h1 class="grey--text">Account</h1><hr/>
        <v-container fluid>
          <v-row class="">
            <v-col
              v-for="n in 1"
              :key="n"
              cols="4"
            >
              <v-card height="150" style="background-image:linear-gradient(90deg,#6a85a1,#037eff)" router to="/premium">
                <h2 class="white--text">&emsp;Premium Members</h2><br />
                <h2 class="white--text">&emsp;{{count}}</h2>
              </v-card>
            </v-col>
            <v-col
              v-for="n in 1"
              :key="n"
              cols="4"
            >
              <v-card height="150" style="background-image:linear-gradient(90deg,#6ec285,#00ff44)" router to="/premium">
                <h2 class="">&emsp;Members</h2><br/>
                <h2 classs="">&emsp;{{counter}}</h2>
              </v-card>
            </v-col>
            <v-col
              v-for="n in 1"
              :key="n"
              cols="4"
            >
              <v-card height="150" style="background-image:linear-gradient(90deg,#bfa05e,#ffae00)" router to="/premium">
                <h2 class="white--text">&emsp;Expired Premium Mem</h2><br/>
                <h2 class="white--text">&emsp;{{count}}</h2>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
</template>

<script>
export default {
    data(){ 
      return {
        count:0,
        counter:1000
      }
    },
    methods:{
      func(str){
        console.log(str); 
      }
    }
}
</script>

