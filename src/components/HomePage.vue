<template>
  <div class="container p-6">
    <h1 class="text-4xl font-light mb-6 text-center">Inspirational Quotes</h1>


    <div class="flex flex-wrap -mx-2">
      <div class="w-full px-2">
        <div class="flex justify-end">
          <button class="px-3 py-2 rounded inline-block text-sm" @click="getQuotes"><i class="fa fa-refresh"></i> Refresh</button>
        </div>
        <panel-component heading="5 Quotes to inspire you" heading-background="bg-teal-400 text-center">
          <div class="p-4" v-if="quotes.length > 0">
            <div class="px-8 my-4" v-for="(quote, index) in quotes" :key="index">
              <i class="fa fa-star"></i> {{quote}}
            </div>
          </div>
          <div v-else>
            <status-msg :successMessage="status.successMessage" :errorMessage="status.errorMessage" @clearStatus="clearStatus"/>
            <loader-component v-if="loading" />
            <div v-else>There's no quote found.</div>
          </div>
        </panel-component>
      </div>
    </div>
  </div>
</template>

<script>
import api from '@/http'
import StatusMsg from "@/components/StatusMsg";

export default {
  name: 'HomePage',
  components: {
    StatusMsg
  },
  data: function () {
    return {
      loading: false,
      quotes: [],
      status: {
        successMessage: null,
        errorMessage: null
      }
    }
  },
  created: function () {
    this.getQuotes()
  },
  methods: {
    getQuotes () {
      this.loading = true
      this.clearStatus()
      this.quotes = []

      api.get('/quotes').then((response) => {
        this.quotes = response.data
        this.status.successMessage = 'New quotes fetched'
        this.loading = false
      }, () => {
        this.status.errorMessage = "failed to fetch the quotes, please make sure the Laravel backend is setup properly at port 8030"
        this.loading = false
      })
    },
    clearStatus () {
      this.status.errorMessage = null
      this.status.successMessage = null
    }
  }
}
</script>
