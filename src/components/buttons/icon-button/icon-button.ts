import { NgStyle } from "@angular/common";
import { OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Component, Input } from "@angular/core";

/**
 * Generated class for the IconButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: "icon-button",
  templateUrl: "icon-button.html",
})
export class IconButtonComponent {
  //button image
  @Input() icon: string = "ph-user";
  @Input("image-url") image: string;

  //button action
  @Input() handleClick: (x: any) => void = () => {};

  //button text
  @Input() label: string;
  @Input("label-class") labelStyle: NgStyle["_ngStyle"] = "b4";

  //button style
  @Input() transparent: boolean = false;
  @Input("size") buttonSize: number = 36;
  @Input() shape: "circle" | "squircle" = "squircle";
  @Input() theme: "btn-light" | "btn-dark" | "btn-transparent" | "btn-blue" = "btn-light";
  @Input() fill: string;
  @Input("icon-fill") iconFill: string;

  buttonStyle: NgStyle["_ngStyle"];

  constructor() {}

  ngOnInit(): void {
    this.buttonStyle = {
      "width.px": this.buttonSize,
      "height.px": this.buttonSize,
      "borderRadius.px":
        this.shape == "circle" ? this.buttonSize : this.buttonSize / 3,
      "font-size.px": this.transparent
        ? this.buttonSize
        : this.buttonSize * (24 / 32),
      "background-image": `url(${this.image})`,
      "background-position": "center",
      "background-size": "100% 100%",
      "background-color": this.fill,
      color: this.iconFill,

      overflow: "hidden",
    };

    this.transparent ? (this.theme = "btn-transparent") : null;
  }
}
