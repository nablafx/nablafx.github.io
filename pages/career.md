<html>

<style>

    .nav-item {
        margin-right: 20px;
        font-size: 18px;
        text-decoration: none;
        display:inline-block;
    }
    .nav-item:hover {
        margin-right: 20px;
        font-size: 18px;
        text-decoration: underline;
        text-decoration-thickness: 3px;
         display:inline-block;

    }  
    .nav-bar-mobile {
        display:none;
        margin-bottom: 20px;
    }

    .nav-bar-default {
        display:block;
        margin-bottom: 20px;
    }


    .current-page {
        font-weight: bold;
        text-decoration: underline;
        text-decoration-thickness: 3px;
        display:inline-block;
    }

    .nav-item-opener {
        font-size: 20px;
        cursor:pointer;
        text-decoration: none;
        display:none;
    }
    .card {
            background: white;
            border-radius: 8px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            width: 100px;
            padding: 20px;
            text-align: left;
        }
    .card h1 {
            font-size: 24px;
            margin: 10px 0;
        }
  .card h3 {
            font-size: 18px;
            color: #555;
            margin: 5px 0;}
  .container {
        margin-top: 50px; margin-bottom: 50px; width: 80%; margin: 0 auto;
        }
    @media only screen and (max-width: 600px) {
        .nav-bar{
          width: 20%;
          margin: 0 auto;
          /* overflow-x:scroll; */
        }

        .nav-bar-default{
          display:none;
          margin-bottom: 20px;
        }

        .nav-bar-mobile{
          display:block;
          margin-bottom: 20px;
        }

        .nav-item-mobile{
        margin-top: 15px;
        font-size: 30px;
        text-decoration: none;
        display:none;
       }

      .nav-item-mobile:hover {
        margin-right: 20px;
        font-size: 30px;
        text-decoration: underline;
        text-decoration-thickness: 3px;
        display:none;

    }
    .current-page {
        font-size: 30px;
        font-weight: bold;
        text-decoration: underline;
        text-decoration-thickness: 3px;
        display:none;
    }

    .nav-item-opener {
        font-size: 30px;
        cursor:pointer;
        text-decoration: none;
        display: block;
    }
    .container {
        margin-top: 10px; margin-bottom: 10px; width: 100%;
        margin-left: 0px; margin-right: 0px;
      }

  }

  </style>

<div class="container">
  <nav class="nav-bar-default">
    <a class="nav-item" href="/">Home</a>
    <a class="nav-item" href="/pages/hello">Intro</a>
    <a class="nav-item current-page" href="/pages/career">Career</a>
    <a class="nav-item" href="/pages/writing">Writing</a>
  </nav>


  <nav class="nav-bar-mobile">
    <a class="nav-item-opener" onclick="showCloseMenu()">Menu</a>
    <a class="nav-item-mobile" href="/">Home</a>
    <a class="nav-item" href="/pages/hello">Intro</a>
    <a class="nav-item-mobile current-page" href="/pages/career">Career</a>
    <a class="nav-item-mobile" href="/pages/writing">Writing</a>
  </nav>



# Career

###  Work Experience
<div style="display: flex; align-items: center; width: 100%; margin-top: 20px; margin-bottom: 20px; justify-content: flex-start;">
    <img width="40" height="40" src="https://img.icons8.com/dusk/64/microscope.png" alt="microscope" style="margin-right: 10px;"//>
    <div>
        <h4 style="margin: 0;">Research Assistant in HCI/HCC at <a style="color: red;" href="https://polyu.edu.hk/en/">The Hong Kong Polytechnic University</a></h4>
        <h5 style="margin: 5px 0 0 0; font-weight: normal; color: gray;">August 2024 - Present</h5>
    </div>
</div>


<div style="display: flex; align-items: center; width: 100%; margin-top: 20px; margin-bottom: 20px; justify-content: flex-start;">
    <img width="40" height="40" src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-programmer-computer-science-flaticons-lineal-color-flat-icons-3.png" alt="external-programmer-computer-science-flaticons-lineal-color-flat-icons-3" style="margin-right: 10px;"/>
    <div>
        <h4 style="margin: 0;">Software Engineer at <a style="color: red;" href="https://www.huawei.com/en/">Huawei Technologies Co., Ltd.</a></h4>
        <h5 style="margin: 5px 0 0 0; font-weight: normal; color: gray;">December 2021 - May 2023</h5>
    </div>
</div>


### Education
<div style="display: flex; align-items: center; width: 100%; margin-top: 20px; margin-bottom: 20px; justify-content: flex-start;">
    <img width="40" height="40" src="https://img.icons8.com/dotty/80/university.png" alt="university" style="margin-right: 10px;">
    <div>
        <h4 style="margin: 0;">Msc in Advanced Computing at <a style="color: red;"  href="https://www.kcl.ac.uk/">Kings College London</a></h4>
        <h5 style="margin: 5px 0 0 0; font-weight: normal; color: gray;">Graduated with a distinction in 2021</h5>
    </div>
</div>
<div style="display: flex; align-items: center; width: 100%; margin-top: 20px; margin-bottom: 20px; justify-content: flex-start;">
    <img width="40" height="40" src="https://img.icons8.com/dotty/80/university.png" alt="university" style="margin-right: 10px;">
    <div>
        <h4 style="margin: 0;">BEng in Electronic and Information Engineering at <a style="color: red;" href="https://www.kcl.ac.uk/">Kings College London</a></h4>
        <h5 style="margin: 5px 0 0 0; font-weight: normal; color: gray;">Graduated with First Class Honours in 2020 </h5>
    </div>
</div>



</div>
<footer style="font-size:12px; text-align:center; bottom:10px; width:100%;">(c) 2024 Fu Zhang. Icons by <a href="https://icons8.com/">Icons8</footer>
</div>
</html>