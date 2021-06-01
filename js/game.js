class Game{
        constructor(){

        }
      
      start(){
        bg = createSprite(200,300,400,800);
        bg.addImage(backgroundIMG);
        bg.scale = 2.5;
        
        startButton = createSprite(200,400,50,10);
        startButton.addImage(startButtonIMG);
        startButton.scale = 0.3;

      }

      setLevel1(){
        bg2 = createSprite(200,300,400,625);
        bg2.addImage(backgroundIMG);
        bg2.scale = 2.5
        bg2.visible = false;
        //bg2.velocityY = 2;

        astroJet = createSprite(200,550,10,10);
        astroJet.addImage(astroJetIMG);
        astroJet.visible=false;
        astroJet.scale = 0.2;

        helth1 = createSprite(200,20,10,10);
        helth1.addImage(helth1IMG);
        helth1.scale = 0.2;
        helth1.visible = false ;

        helth2 = createSprite(200,20,10,10);
        helth2.addImage(helth2IMG);
        helth2.scale = 0.25;
        helth2.visible = false ;


       
      
      }

      playLevel1(){

        fill("gold");
        textSize(10);
        text("score :"+score,350,30);
        textSize(10);
        text("XP :"+xp1,20,30);

        bg2.visible = true;
        astroJet.visible = true;
        helth1.visible = true;
        helth2.visible = false;
        astroJet.x = mouseX;

       

        if(keyDown("space")){
            var fireBall= createSprite(200,500,20, 20);
            fireBall.addImage(fireBallIMG);
            fireBall.x=astroJet.x;
            fireBall.velocityY = -4 ;
            fireBall.lifetime = 800;
            fireBall.scale = 0.1;
            fireBallGroup.add(fireBall);
        }

        if (frameCount % 100=== 0) {
          var alien = createSprite(100,-50,50,50);
          alien.x = Math.round(random(50,350));
          alien.addImage(alienIMG);
          alien.scale = 0.25;
          alien.velocityY = 8;
          alien.lifetime = 200;
          alienGroup.add(alien);
       }

       if (frameCount % 200=== 0) {
        var xp = createSprite(100,-50,50,50);
        xp.x = Math.round(random(50,350));
        xp.addImage(xpIMG);
        xp.scale = 0.04;
        xp.velocityY = 8;
        xp.lifetime = 200;
        xpGroup.add(xp);
     }

      if (frameCount % 50=== 0) {
        var meteor = createSprite(100,-50,50,50);
        meteor.x = Math.round(random(50,350));
        meteor.addImage(meteorIMG);
        meteor.scale = 0.1;
        meteor.velocityY = 8;
        meteor.lifetime = 200;
        meteorGroup.add(meteor);
    }
       
       if(fireBallGroup.isTouching(alienGroup)){
         alienGroup.destroyEach();
         fireBallGroup.destroyEach();
         score = score + 100
       }
       if(astroJet.isTouching(xpGroup)){
        xpGroup.destroyEach();
        xp1 = xp1 + 10
      }
      if(astroJet.isTouching(meteorGroup)){
        helth1.visible = false ;
        helth2.visible = true
      }
      
       
       //if (the fireball touches the alien){ it gets destroyed and score increases by 100}
      

       //create boost after every 200 frames
       
       //if (astrojet touches boost){ get bigger missile}

       //create meteors after every 150 frames

       //if (astrojet touches meteor or alien){ then lives reduce by 1}

       //if (score is 1000){ then gameState changes to 2}

       //if (lives is 0){ then go back to gameState 0}

      }


      
  }