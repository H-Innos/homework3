<template>
    <footer>
      <p>Copyright &copy; {{ currentYear }}</p>
    </footer>
</template>
  
<script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
  };
</script>
  
<style scoped>
  footer {
    height: 50px;
    padding: 10px;
    background-color: #000000;
    color: white;
    margin-top: auto;
    text-align: center;
    bottom: 0;
    width: 100%;
    }
</style>