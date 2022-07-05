<template>
  <v-card
  class="mx-auto overflow-hidden"
  height="400">
    <v-app>
      <v-app-bar
        color="success"
        dark app
    >
        <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

        <v-toolbar-title>Mummy's Library</v-toolbar-title>

        <v-spacer></v-spacer>
        
        <v-list-item-icon >
            <v-container
                  fluid
                  style="height: 300px"
            >
                  <v-row justify="center">
                    <v-menu
                      bottom
                      min-width="200px"
                      rounded
                      offset-y
                    >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            small
            v-on="on"
          >
            <v-avatar
              color="indigo"
              size=40
            >
              <span class="white--text text-h6">{{ user.initials }}</span>
            </v-avatar>
          </v-btn>
        </template>
        <v-card>
          <v-list-item-content class="justify-center">
            <div class="mx-auto text-center">
              <v-avatar
                color="indigo"
              >
                <span class="white--text text-h5">{{ user.initials }}</span>
              </v-avatar>
              <h3>{{ user.fullName }}</h3>
              <p class="text-caption mt-1">
                {{ user.email }}
              </p>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text 
              >
                Edit Account
              </v-btn>
              <v-divider class="my-3"></v-divider>
              <v-btn
                depressed
                rounded
                text
              >
                Log-out
              </v-btn>
            </div>
          </v-list-item-content>
        </v-card>
      </v-menu>
    </v-row>
  </v-container>
        </v-list-item-icon>
      
      </v-app-bar>

      <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
      >
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            <v-list-item v-for="item in links" :key="item" router :to="item.route">
              <v-list-item-icon>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-item-icon>
              <v-list-item-title>{{item.name}}</v-list-item-title>
            </v-list-item>

          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    </v-app>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      
      drawer: false,
      group: null,
      links:[
        {
          name:'Dashboard',
          route:'/',
          icon:'mdi-view-dashboard-outline'
        },
        {
          name:'Account',
          route:'/account',
          icon:'mdi-account'
        }
      ],
      user: {
        initials: 'PB',
        fullName: 'Parth Banker',
        email: 'parthbanker0897545@gmail.com',
      },
    }),
  }
</script>
