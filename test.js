var shooter = new VlcScreenshot();


shooter.format = program.format || 'png';
shooter.vlcPath = program.vlc || 'cvlc';
 
shooter.shoot(program.output, function(){
  console.error('All done  !');
});
 