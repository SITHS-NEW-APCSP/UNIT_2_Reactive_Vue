<template>
  <div>
    <div >
      <h1>This is the Index Component of HomeC</h1>
      <ul>
        <li><router-link :to="{ name: 'cowabunga', params: { c: 2 }}">cowabunga</router-link></li>  <!-- c is our dynamic parameter, watch the top tab when navigating through the site-->
        <li><router-link to="/HomeC/child1">child1</router-link></li>
        <li><router-link to="/HomeC/child2">child2</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>