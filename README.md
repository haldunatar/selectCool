<h3>Select Cool<h3>

<strong>SelectCool</strong> is created to be able to use more accessible Select Elements and improve UX. 

The idea is creating Select Elements with a div box and assigning Select Element behaviours with a little Js code.

Check a simple Select Element

http://haldunatar.github.io/selectCool/select_simple.html

Select Element with multi select options:

http://haldunatar.github.io/selectCool/select_multi.html


<h3>To Style or Not To Style<h3>

With <strong>SelectCool</strong> Select Element styling is extremely easy! Select Cool is created with simple Css and a little jQuery code!


<h3>Browser Compatibility<h3>

<strong>SelectCool</strong> works on any browser, included legacy browsers up to ie-6 and on mobile browsers!

<h3>Interaction with Server<h3>

<strong>SelectCool</strong> works great on client-side applications but we may want to send some data to database which is selected through <strong>SelectCool</strong> options.

Since <strong>SelectCool</strong> is not a Select Element or a form we need to add form behaviours too.

All we need to do is to add the input checkbox in a from element


```html
  <div class="option_box">
    <form action="" method="post" id="myForm">
      <input type="checkbox" name="user_group" id="autosave" value="UserA">
        <label for="UserA">User A</label>
    </form>             
  </div>
```
and to submit the form with jQeuery as an option is selected.

```javascript
  $("#autosave").click(function(){
      $("#myForm").submit();
  });
```
