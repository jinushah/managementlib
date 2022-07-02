 <template>
    <div>
       <v-container fluid  class="d-flex">
              <span class="grey--text display-1">Total Books List</span><v-spacer/>
          <v-btn class="white--text" color="primary">+Add</v-btn>
      </v-container>
      <v-breadcrumbs :items="items"></v-breadcrumbs>
      <hr/>
        <v-data-table
        :headers="rented_table"
        :items="books"
        :page.sync="page"
        :items-per-page="itemsPerPage"
        hide-default-footer
        class="elevation-1"
        @page-count="pageCount = $event"
        ></v-data-table>
        <div class="text-center pt-2">
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
    </div>
</template>


<script>
  export default {
    data () {
      return {
        page: 1,
        pageCount: 0,
        itemsPerPage: 5,
        rented_table: [
          {
            text: 'Books Id',
            align: 'start',
            sortable: false,
            value: 'Id',
          },
          { text: 'Books Name', value: 'Name' },
          { text: 'Author Name', value: 'Author' },
          { text: 'Published In', value: 'Publish' },
          
        ],
        books: [
          {
            Id:1,
            Name:"The Merchant Of Venice",
            Author:"William Shakespeare",
            Publish:'1600'
          },
          {
            Id:2,
            Name:"Gitanjalli",
            Author:"Rabindranath Tagore",
            Publish:'1910'
          },
          {
            Id:3,
            Name:"The Invisible Man",
            Author:"H.G.Wells",
            Publish:'1897'
          },
          {
            Id:4,
            Name:"To Kill a Mockingbird",
            Author:"Harper Lee",
            Publish:'1960'
          },
          {
            Id:5,
            Name:"Your House Will Pay",
            Author:"Steph Cha",
            Publish:'2019'
          },
          {
            Id:6,
            Name:"Black Water Rising",
            Author:"Attica Locke",
            Publish:'2009'
          },
          {
            Id:7,
            Name:"Misery",
            Author:"Stephen King",
            Publish:'1987'
          },
        ],
        items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: '/',
        },
        {
          text: 'Total',
          disabled: false,
          href: '#',
        },
        ],
      }
    },
  }
</script>