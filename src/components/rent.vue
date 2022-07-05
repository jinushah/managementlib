<template>
  <v-data-table
    :headers="rented_books"
    :items="books"
    :page.sync="page"
    :items-per-page="itemsPerPage"
    hide-default-footer
    class="elevation-1"
    @page-count="pageCount = $event"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <span class="grey--text display-1">Rented  Books List</span><v-spacer/>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="success"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              Add Book
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h6">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.id"
                      label="Book id"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Book Name"
                    ></v-text-field>
                  </v-col>
                
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.authname"
                      label="Author Name"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.publish"
                      label="Published In"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Add
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
      <v-breadcrumbs :items="items"></v-breadcrumbs>
      <div class="text-center pt-2 ">
        <v-pagination
            v-model="page"
            :length="pageCount"
        ></v-pagination>
        <v-text-field
            :value="itemsPerPage"
            label="Items per page"
            type="number"
            min="-1"
            max="15"
            @input="itemsPerPage = parseInt($event, 10)"
        ></v-text-field>
        </div>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="success"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
  
</template>
<script>
// import xyz from '../../src/firebasedata'
  export default {
    data: () => ({
        page: 1,
        pageCount: 0,
        itemsPerPage: 5,
      dialog: false,
      dialogDelete: false,
      rented_books: [
        {
          text: 'Books Id',
          align: 'start',
          sortable: false,
          value: 'id',
        },
        { text: 'Book Name', value: 'name' },
        { text: 'Author Name', value: 'authname' },
        { text: 'Published In', value: 'publish' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      books: [],
      editedIndex: -1,
      editedItem: {
        id:"",
        name:"",
        authname:"",
        publish:""

      },
      defaultItem: {
        id:"",
        name:"",
        authname:"",
        publish:""
      },
        items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: '/',
        },
        {
          text: 'rent',
          disabled: false,
          href: '#',
        },
        ],
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Add Book' : 'Edit Book'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.books = [
          {
            id:1,
            name:'The Merchant of Venice',
            authname:'William Shakespeare',
            publish:1600
          },
          {
            id:2,
            name:"Gitanjalli",
            authname:"Rabindranath Tagore",
            publish:'1910'
          },
          {
            id:3,
            name:"The Invisible Man",
            authname:"H.G.Wells",
            publish:'1897'
          },
          {
            id:4,
            name:"To Kill a Mockingbird",
            authname:"Harper Lee",
            publish:'1960'
          },
          {
            id:5,
            name:"Your House Will Pay",
            authname:"Steph Cha",
            publish:'2019'
          },
          {
            id:6,
            name:"Black Water Rising",
            authname:"Attica Locke",
            publish:'2009'
          },
          {
            id:7,
            name:"Misery",
            authname:"Stephen King",
            publish:'1987'
          }
        ]
      },

      editItem (item) {
        this.editedIndex = this.books.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.books.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.books.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.books[this.editedIndex], this.editedItem)
        } else {
          this.books.push(this.editedItem)
        }
        
        this.close()
      }
    },
  }
</script>