import { Component, VERSION } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  htmldata1;
  constructor(ds: DomSanitizer){
    this.htmldata1 = ds.sanitize(0, this.demo);
  }
  demo: any = `<div>
  <p>I am santosh</p>
  <h1>My First Heading</h1>
  <p>My second paragraph.</p>
  <input id=txt1 type=text value ='This is value of textbox' />
  <input type="radio">
  <input type="file">
  <p>My first paragraph.</p>
  <input type="checkbox">

    <div>
      this is div
      <input type="checkbox">
    </div>

    <div>
      <form>
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname" value="John"><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname" value="Doe">
      </form>
    </div>

    <div class="widget-content">
      <a target="_blank"  href=https://portal-bcnext-demo.azurewebsites.net/#/portal1>
        <img alt="" src="url(cgs_bc_wht.f23763320c00d2dc41df.svg) no-repeat">
        <span>BI</span>
      </a>
    </div>
  </div>`
}
