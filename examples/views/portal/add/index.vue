<template>
  <div>
    <PortalAdd :gard-list="gardList" :gard-components="gardComponents"></PortalAdd>
  </div>
</template>

<script setup>
import { PortalAdd } from 'portal-packages'
import { gardList, gardComponents } from '../../../config/protal'
</script>

<style lang="scss" scoped></style>
