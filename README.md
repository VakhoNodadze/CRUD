Git clone backend and front folders. Run npm/yarn install in each one seperately.
Run nodemon app.js in backend folder and npm/yarn start in frontend.
*Note you have to have nodejs installed first.

I used traditional class and functional components for this task. I also tried to separate it into different components.
Also, tried to use stateful components less so I only have two of them. 
In the Employee component, since I already had the employee information there passed as props, and since I needed the same exact 
info in the modals component, I reversed the flow from child to parent to first transfer it to Employees component and then pass it as 
props to Modals component. 
As for the styles I used css modules and bootstrap. I know mix of those two may be odd, but since I was in a bit of a hurry, 
I wanted some already made styles for easy use. 
If I had more time I would probably refactor the code a bit more and split it into more components, specificly put some of the form code in Employees.js to Modal.js and pass the Employees state down as props to the modals, get rid off bootstrap and use custom styles totally. I would also try to make the employee profile more realistic, with objects as field. (e.g. address could be a object with subfields). I would also definitely some validation.
