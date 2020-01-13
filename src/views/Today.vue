<template>
  <v-container
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <h1>{{ weekLabel }}</h1>
    </v-row>
    <v-row
      align="center"
      justify="center"
    >
      <v-col>
        <v-expansion-panels>
          <v-expansion-panel
            v-for="({ day, label, verse }) in planThisWeek.sort((a, b) => b.week - a.week)"
            :key="day"
          >
            <v-expansion-panel-header>{{ verse }}</v-expansion-panel-header>
            <v-expansion-panel-content>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Today',
  components: {
  },
  computed: {
    ...mapGetters({
      planThisWeek: 'planThisWeek',
      weekLabel: 'weekLabel'
    })
  }
}
</script>
