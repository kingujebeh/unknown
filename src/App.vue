<template>
  <h1>African Kingdom! Hello</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink> &nbsp;
    <RouterLink to="/market">Go to Market</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
