/**USAGE**/
//Save div element reference (it's faster to use reference than function call)
var div = document.getElementById("number");

//Set up ne instance of that class
var iterator = new NumberIterator();
//Configure waypoints
iterator.goals = [200];
//Set it to iterate indefinitely through waypoins (that's quite fun)
/* iterator.infinite = true; */
//On step callback
iterator.onstep = function(num) {
    div.innerHTML = num;
}
//Start the thingy
iterator.start();


/***THE CLASS**/
//Some iterator pseudo-class
    function NumberIterator() {
        //The number to start with
        this.number = 0;
        //List of numbers to pass through
        this.goals = [];
        //Private - current goal
        var currentGoal = 0;
        //Whether to infinitelly loop around
        this.infinite = false;
        //Pause between changing number
        this.delay = 10;

        //Timeout ID 
        var t_id = null;
        //Self-reference
        var _this = this;
        //Is running or not
        var running = false;
        
        //This method will be called automatically
        this.step = function() {
            //If out goal is smaller than number decrease it
            if(this.number>this.goals[currentGoal])
              this.number--;
            //if our goal is larger, increase
            else if(this.number<this.goals[currentGoal])
              this.number++;
            //If equals, perform ongoal actions
            else {
              currentGoal++;
              if(currentGoal>=this.goals.length) {
                  if(this.infinite)
                     currentGoal = 0;
                  else {
                      this.stop();
                  }
                  if(typeof this.ongoal == "function")
                     this.ongoal(this.number);
              }
            }

           

            if(typeof this.onstep == "function")
                this.onstep(this.number);

            if(running) {
                tick();
            }
            
        }
        this.stop = function() {
            if(t_id!=null) {
                clearTimeout(t_id);
                t_id = null;
            }
            running = false;
        }
     
        //Start counter with this:
        this.start = function() {
            this.stop();
            running = true;
            this.step();
        }
        //This one is heart of the program. It delays between iterations
        function tick() {
            if(t_id!=null) {
                clearTimeout(t_id);
                t_id = null;
            }
            if(running)
              t_id = setTimeout(function() {_this.step();}, _this.delay);
        }
    }