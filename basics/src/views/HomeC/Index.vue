<template>
  <div>
    <div >
      <h1>This is the Index Component of HomeC</h1>
      <ul>
        <li><router-link to="/HomeC/cow">cowabunga</router-link></li>
        <li><router-link to="/HomeC/child1">child1</router-link></li>
        <li><router-link to="/HomeC/child2">child2</router-link></li>
      </ul>
      <router-view></router-view>
    </div>
  </div>
</template>