<script setup lang="ts">
import { computed } from "vue"
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/vue/20/solid"

export interface Stat {
  name: string
  type: "integer" | "percent"
  current: number
  previous: number
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

const props = withDefaults(defineProps<{ stats: Array<Stat>; title?: string }>(), { title: "" })

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
  <div class="@container size-full">
    <div class="m-1">
      <h3 v-if="props.title" class="text-base font-semibold leading-6 text-gray-900">
        {{ props.title }}
      </h3>
      <dl
        class="mt-5 grid grid-cols-1 divide-y divide-gray-200 overflow-hidden rounded-lg bg-white shadow-sm @lg:grid-cols-3 @lg:divide-x @lg:divide-y-0"
      >
        <div v-for="item in displayStats" :key="item.name" class="px-4 py-5 @sm:p-6">
          <dt class="text-base font-normal text-gray-900">{{ item.name }}</dt>
          <dd class="mt-1 flex items-baseline justify-between @lg:block @xl:flex">
            <div class="flex items-baseline text-2xl font-semibold text-indigo-600">
              {{ item.current }}
              <span class="ml-2 text-sm font-medium text-gray-500">from {{ item.previous }}</span>
            </div>

            <div
              class="inline-flex items-baseline rounded-full px-2.5 py-0.5 text-sm font-medium @md:mt-2 @lg:mt-0"
              :class="{
                'bg-green-100': item.changeType === ChangeType.Increase,
                'text-green-800': item.changeType === ChangeType.Increase,
                'bg-red-100': item.changeType === ChangeType.Decrease,
                'text-red-800': item.changeType === ChangeType.Decrease
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
          </dd>
        </div>
      </dl>
    </div>
  </div>
</template>
