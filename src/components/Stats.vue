<script setup lang="ts">
import { computed } from "vue"
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/vue/20/solid"

export interface Stat {
  name: string
  type: "integer" | "percent"
  current: number
  previous: number
}

export interface Stats {
  title?: string
  stats: Stat[]
}

enum ChangeType {
  Unchanged = "no change",
  Decrease = "decrease",
  Increase = "increase"
}

interface DisplayStat {
  name: string
  type: "integer" | "percent"
  current: string
  previous: string
  change: string
  changeType: ChangeType
}

const props = withDefaults(defineProps<Stats>(), {
  title: ""
})

function asInteger(value: number | string) {
  return Number(value).toLocaleString()
}

function asPercent(value: number | string) {
  return Number(value).toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 2
  })
}

function formatStat(item: Stat): DisplayStat {
  let current
  let previous
  let change
  let changeType

  switch (item?.type) {
    case "integer":
      current = asInteger(item.current)
      previous = asInteger(item.previous)
      change = asPercent(1 - item.previous / item.current)
      break

    case "percent":
      current = asPercent(item.current)
      previous = asPercent(item.previous)
      change = asPercent(Math.abs(item.previous - item.current))
      break

    default:
      current = "<Unknown Type>"
      previous = "<Unknown Type>"
      change = "0"
      break
  }

  if (item.previous > item.current) {
    changeType = ChangeType.Decrease
  } else if (item.current > item.previous) {
    changeType = ChangeType.Increase
  } else {
    changeType = ChangeType.Unchanged
  }

  return {
    name: item.name,
    type: item.type,
    current,
    previous,
    change,
    changeType
  }
}

const displayStats = computed(() => props.stats.map(formatStat))
</script>
<template>
  <div class="@container w-full overflow-y-scroll">
    <div class="m-1">
      <h3 v-if="props.title" class="text-center font-semibold text-primary">
        {{ props.title }}
      </h3>
      <div class="stats stats-vertical flex flex-wrap @md:flex-nowrap @md:stats-horizontal">
        <div v-for="item in displayStats" :key="item.name" class="stat flex flex-col">
          <div class="stat-figure text-info">
            <span>{{ item.current }}</span>
            <span class="ml-2 text-xs text-neutral/50">from {{ item.previous }}</span>
          </div>
          <div class="stat-description text-center mt-2">
            <div
              class="ml-2 inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium @md:mt-2 @lg:mt-0"
              :class="{
                'bg-success/10': item.changeType === ChangeType.Increase,
                'text-success': item.changeType === ChangeType.Increase,
                'bg-error/10': item.changeType === ChangeType.Decrease,
                'text-error': item.changeType === ChangeType.Decrease
              }"
            >
              <ArrowUpIcon
                v-if="item.changeType === ChangeType.Increase"
                class="-ml-1 mr-0.5 h-5 w-5 shrink-0 self-center text-green-500"
                aria-hidden="true"
              />
              <ArrowDownIcon
                v-else-if="item.changeType === ChangeType.Decrease"
                class="-ml-1 mr-0.5 h-5 w-5 shrink-0 self-center text-red-500"
                aria-hidden="true"
              />
              <span v-if="item.changeType === ChangeType.Increase" class="sr-only">
                Increase by
              </span>
              <span v-else-if="item.changeType === ChangeType.Decrease" class="sr-only">
                Decrease by
              </span>
              {{ item.change }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
