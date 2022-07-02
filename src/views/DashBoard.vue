<template>
      <div class="element py-2">
        <br/><h1 class="grey--text">Dashboard</h1><hr/>
        <v-container fluid>
          <v-row class="">
            <v-col
              v-for="n in 1"
              :key="n"
              cols="4"
            >
              <v-card height="150" style="background-image:linear-gradient(90deg,#6a85a1,#037eff)" router to="/rent">
                <h2 class="white--text">&emsp;Rented Books</h2><br />
                <h2 class="white--text">&emsp;{{count}}</h2>
              </v-card>
            </v-col>
            <v-col
              v-for="n in 1"
              :key="n"
              cols="4"
            >
              <v-card height="150" style="background-image:linear-gradient(90deg,#6ec285,#00ff44)" router to="/available">
                <h2 class="">&emsp;Available Books</h2><br/>
                <h2 classs="">&emsp;{{counter}}</h2>
              </v-card>
            </v-col>
            <v-col
              v-for="n in 1"
              :key="n"
              cols="4"
            >
              <v-card height="150" style="background-image:linear-gradient(90deg,#bfa05e,#ffae00)" router to="/total">
                <h2 class="white--text">&emsp;Total Books</h2><br/>
                <h2 class="white--text">&emsp;{{counter}}</h2>
              </v-card>
            </v-col>
          </v-row>
          <v-routerview></v-routerview>
        </v-container>
      </div>
     
</template>

<script>
  export default {
    data(){ 
      return {
        count:0,
        counter:7
      }
    },
}
</script>