<template>
  <div class="info">
    <div class="name">
      <div>Your full given name:</div>
      <input class="input"/>
    </div>
    <div class="both">
      <div class="date">
        <div>Date of Birth</div>
        <input class="input"/>
      </div>
       <div class="country">
        <div>Country of residence or citizenship:</div>
        <input class="input"/>
      </div>
    </div>
    <div class="school">
      <div>What school do you plan to attend?</div>
      <input class="input"/>
    </div> 
    <div class="textarea">
      <div>Please take a moment to describe your intended area of study:</div>
      <textarea class="input" placeholder="Enter details here"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>
  
<style lang="less" scoped>

  .info {
    height: 541px;
    width: 529px;
    box-sizing: border-box;    
    background-color: #1779DB;
    font-family: 'Lato', sans-serif;
    font-style: italic;
    color: white;
    font-size: 18px;
    padding: 10px 29px;
    .input{
        box-sizing: border-box; 
        border: 1px solid #E0E2E5;
        color: white;
        background-color: #1779DB;
        font-size: 18px;
        font-family: 'Lato', sans-serif;
        margin-top: 6px;
        padding: 10px; 
    }
    .name {
      height: 95px;
      margin-top: 7px;
      .input{
        height: 44px;
        width: 471px;
      }
    }
    .both {
      height: 103px;
      margin-top: 7px;
      .date {
        float: left;
        .input {
          height: 44px;
          width: 194px;
          background: url('https://img.icons8.com/windows/32/ffffff/calendar-week.png') no-repeat 5% 50%;
          padding-left: 45px;
        }
      }
      .country {
        float: right;
        .input {
          height: 44px;
          width: 258px;
        }    
      }
    }
    .school {
      height: 95px;
      margin-top: 7px;
      .input{
        height: 44px;
        width: 471px;
      }
    }
    .textarea {
      margin-top: 7px;
      .input{
        height: 160px;
        width: 471px;
      }    
      ::placeholder {
        font-family: 'Lato', sans-serif;
        color: #78A8E7;
      }
    }
  }
</style>
