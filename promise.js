let promise= new Promise(function (resolve,reject)
{
  const x='geeks  for geeks';
  const y= 'im a noob coder';


  if(x==y)
  {
    resolve();
  }

  else
  {
    reject();
  }
});

promise.then(function()
{
    console.log("Success,You're a geeek!!")
})
       .catch(function()
       {
        console.log("Sorry, you're not a geeek");
       });