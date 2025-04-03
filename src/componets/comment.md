<!-- @keyframes shine {
    0% {
      background-position-x: 0;
      background-position-y: 0;
    }
  
    50% {
      background-position-x: 800px;
      background-position-y: 0;
    }
  
    50% {
      background-position-x: 1;
      background-position-y: 0;
    }
  }
  
  
  @keyframes glow {
    0% {
      background-position-x: 0;
      background-position-y: 0;
  }
  
  50% {
      background-position-x: 800px;
      background-position-y: 0;
  }
  
  50% {
      background-position-x: 1;
      background-position-y: 0;
  }
    
  }
  margin-left: 20px;
          background-image: linear-gradient(to right, #7BE728, #F3265F, #7F40AC, #7BE728);
          background-size: 200% auto;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          animation: shine 10s linear infinite;



  z-index: -1;
            background: linear-gradient(135deg,
                #ff0000, #ff7300, #fffb00, #40ff00,
                #00ffd5, #002bff, #ff00c8, #ff0000);
            filter: blur(8px);
            transition: opacity 0.3s ease-in-out;





& span {
          margin-left: 20px;
          background-image: linear-gradient(to right, #7BE728, #F3265F, #7F40AC, #7BE728);
          background-size: 200% auto;
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          animation: shine 10s linear infinite;
        }


 & a {
          border: 1px solid white;
          padding: 12px 24px;
          position: relative;
          top: 50px;
          border-radius: 25px;
          text-decoration: none;
          color: var(--white);
          position: relative;
          z-index: 0;
          cursor: pointer;
      
         
          /*  */
          &::before {
            content: '';
            position: absolute;
            height: calc(100% + 5px);
            width: calc(100% + 5px);
            top: -2.5px;
            left: -2.5px;
            z-index: -1;
            background: linear-gradient(135deg,
                #ff0000, #ff7300, #fffb00, #40ff00,
                #00ffd5, #002bff, #ff00c8, #ff0000);
            filter: blur(8px);
            transition: opacity 0.3s ease-in-out;
            border-radius: 25px;
            opacity: 0;
            animation: glow 20s linear infinite;
            background-size: 600%;
          }
  
          &:active{
            border-color: black;
            color: rgb(0, 0, 0);
          }
  
          &:active::before {
            opacity: 1;
        }

             -->