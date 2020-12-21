const view = document.getElementById('view');

// initialize rendering and set correct sizing
this.radio = window.devicePixelRatio;
this.renderer = PIXI.autoDetectRenderer({
  transparent: true,
  antialias: true,
  resolution: this.radio,
  width: view.clientWidth,
  height: view.clientHeight,
});
this.element = this.renderer.view;
this.element.style.width = `${this.renderer.width / this.radio}px`;
this.element.style.height = `${(this.renderer.height / this.radio)}px`;
view.appendChild(this.element);

// center stage and normalize scaling for all resolutions
this.stage = new PIXI.Container();
this.stage.position.set(view.clientWidth / 2, view.clientHeight / 2);
this.stage.scale.set(Math.max(this.renderer.width,
    this.renderer.height) / 1024);

// load a sprite from a svg file
this.sprite = PIXI.Sprite.from('triangle.svg');
this.sprite.anchor.set(0.5);
this.sprite.tint = 0x00FF00; // green
this.sprite.spin = true;
this.stage.addChild(this.sprite);

// toggle spin on touch events of the triangle
this.sprite.interactive = true;
this.sprite.buttonMode = true;
this.sprite.on('pointerdown', () => {
  this.sprite.spin = !this.sprite.spin;
});
