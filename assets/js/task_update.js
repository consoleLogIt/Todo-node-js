function task(e)
{
    e.target.parentElement.classList.toggle("done");
  let status;
  let done  = $('#done').text();
  let tobedone = $('#to-be-done').text();
  if(e.target.checked)
  {
      status = true; 
      
      done++;
      tobedone--;
      $('#done').text(done);
      $('#to-be-done').text(tobedone);

  }
  else
  {
      status = false;
      done--;
      tobedone++;
      $('#done').text(done);
      $('#to-be-done').text(tobedone);
  }
  let url = `/update-task/${e.target.id}`;


  $.ajax({
    type:'post',
    url:url,
    data:{isDone:status}
    
    
  })





}