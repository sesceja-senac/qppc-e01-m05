/*
<div class="fbook d-none d-lg-block no-print">
    <div id="fpages" class="fpages">
        <div class="fpage" style="z-index: 4;">
            <img src="../img/jornal1.png" alt="">
        </div>
        <div class="fpage">
            <img src="../img/jornal2.png" alt="">
        </div>
        <div class="fpage" style="z-index: 2;">
            <img src="../img/jornal3.png" alt="">
        </div>
        <div class="fpage">
            <img src="../img/jornal4.png" alt="">
        </div>
    </div>
</div>
*/

var pages = document.getElementsByClassName('fpage');
for(var i = 0; i < pages.length; i++)
  {
    var page = pages[i];
    if (i % 2 === 0)
      {
        page.style.zIndex = (pages.length - i);
      }
  }

document.addEventListener('DOMContentLoaded', function(){
  for(var i = 0; i < pages.length; i++)
    {
      //Or var page = pages[i];
      pages[i].pageNum = i + 1;
      pages[i].onclick=function()
        {
          if (this.pageNum % 2 === 0)
            {
              this.classList.remove('flipped');
              this.previousElementSibling.classList.remove('flipped');
            }
          else
            {
              this.classList.add('flipped');
              this.nextElementSibling.classList.add('flipped');
            }
         }
      }
})