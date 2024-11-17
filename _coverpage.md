

<!-- PROJECT LOGO -->
<html>
<body>
<br />
<div align="center">
  <a href="">
    <img class="avatar" src="pics/longtime.jpg" alt="Logo">
  </a>

  <h1 align="center" id="title-name">Hej! This is Fu Zhang✨</h1>
<h3 id="role-subtitle">
  <span class="role-item">
    <span class="icon">🔬</span>
    <span class="text">Researcher</span>
  </span>
  <span class="role-item">
    <span class="icon">⚽</span>
    <span class="text">Football Fun</span>
  </span>
  <span class="role-item">
    <span class="icon">🚃</span>
    <span class="text">Traveler</span>
  </span>
  <span class="role-item">
    <span class="icon">🐈</span>
    <span class="text">Cat Person</span>
  </span>
    <span class="role-item">
    <span class="icon">🌧️</span>
    <span class="text">Rain lover</span>
  </span>
</h3>


<h3 class="start-link">
  <a href="/pages/hello"><strong>click to expore<span class="moving-symbol">🔎</span></strong></a>
</h3>

</div>
</body>
<style>
#title-name{
  font-size: 65px; 
  font-weight: bold;
      color: #001F3F; /* Ensure title has the navy blue color for smaller screens as well */
}
#role-subtitle{
  font-size: 35px; 
      color: gray; /* Ensure subtitle has the gray color for smaller screens as well */
}
.start-link{
  font-size: 2.3em;
  margin-top:3em;
  position: relative;
}
@keyframes move-and-stretch {
  0% {
    transform: translateY(0) ; /* Normal size */
  }
  50% {
    transform: translateY(3px); /* Move right and stretch */
  }
  100% {
    transform: translateY(0); /* Move back to normal */
  }
}
.moving-symbol {
  display: inline-block;
  animation: move-and-stretch  5s ease-in-out infinite alternate; /* Animation settings */
  margin-left: 5px; /* Space between the arrow and the symbol */
}
#role-subtitle {
  font-size: 35px;
  color: gray; 
}
.role-item {
  display: inline-block;
  overflow: hidden; 
  white-space: nowrap; 
  max-width: 50px; /* Increase max-width to fit larger icons */
  transition: max-width 1s ease; /* Smooth transition */
  margin-right: 10px; /* Add margin to separate icons */
}
.role-item:hover {
  max-width: 250px; /* Adjust to reveal full text */
}
.icon {
  display: inline;
}
.text {
  display: inline-block;
  max-width: 0; /* Initially hide the text */
  transition: max-width 1s ease; /* Smooth transition for text */
}
.role-item:hover .text {
  max-width: 250px; /* Adjust to fit full text */
}
.avatar {
  vertical-align: middle;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}
  @media only screen and (max-width: 600px) {
    .avatar {
        vertical-align: middle;
        width: 100px;
        height: 100px;
        border-radius: 50%;
      }
      #title-name{
        font-size: 25px;
        font-weight: bold;
        color: #001F3F;
      }
      #role-subtitle{
        font-size: 16px;
      }
    .start-link{
      font-size: 1.3em;
      margin-top: 3.3em;
    }
    .start-link:hover{
      font-size: 1.3em;
      margin-top: 3em;
      text-decoration: underline;
    }
    #role-subtitle {
  font-size: 15px;
  color: gray; 
}
.start-link{
  font-size: 1.3em;
  margin-top: 8em;
  position: relative;
}
.role-item {
  display: inline-block;
  overflow: hidden; 
  white-space: nowrap; 
  max-width: 50px; /* Increase max-width to fit larger icons */
  transition: max-width 1s ease; /* Smooth transition */
  margin-right: 10px; /* Add margin to separate icons */
}
.role-item:hover {
  max-width: 100px; /* Adjust to reveal full text */
}
.icon {
  display: inline;
}
.text {
  display: inline-block;
  max-width: 0; /* Initially hide the text */
  transition: max-width 1s ease; /* Smooth transition for text */
}
.role-item:hover .text {
  max-width: 100px; /* Adjust to fit full text */
}
   }

</style>

</html>



<!-- ![color](#D4F6FF)  -->