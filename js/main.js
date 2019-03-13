var counter = 0;
AFRAME.registerComponent('init-scene', {
  init: function () {
    if ((window.location.pathname == '/') && !document.referrer.match("load.html")) {
      window.location.href += 'load.html';
      return;
    }
    if (window.location.href.match("load.html")) {
      setTimeout(() => {
        window.location.href = window.location.href.replace('load.html', '')
      }, 1000);
      return;
    }

    console.log('init-scene: ' + counter);
    counter++;

    // initPaper();
  }
});


function initPaper() {
  const node = document.getElementById('paper');
  const width = 408;
  const height = 589;
  const y = 0

  const ratio = height / width;

  const scale = 1.1;

  node.setAttribute('width', 1);
  node.setAttribute('height', ratio);
  node.setAttribute('rotation', [-90, 0, 0].join(' '));
  node.setAttribute('scale', [scale, scale, scale].join(' '));

  node.object3D.position.set(0, 0.0001, 0);

}


function initEggplants() {
  const parent = document.getElementById('eggplants');
  parent.setAttribute('animation', {
    property: "rotation", 
    from: '0 0 0', 
    to: '0 -360 0', 
    dur: 5000, 
    loop: true, 
    easing: "linear"})

  const circle_num = 12;
  for (var i = 0; i < 12; i++) {
    // var elem = list[i];
    // // elem.object3D.position.set(i * 2, 0, 0);
    const radius = 1.5;
    const theta = i * Math.PI * 2 / circle_num;

    const x = radius * Math.cos(theta);
    const y = radius * Math.sin(theta);
    const height = 2.3;
    const scale = 0.005;

    const node = document.createElement('a-gltf-model');

    node.setAttribute('src', '#eggplant-gltf');
    node.setAttribute('scale', [scale, scale, scale].join(' '));
    node.setAttribute('position', [x, height, y].join(' '));
    node.setAttribute('animation', {
      property: "rotation", 
      from: '0 0 0', 
      to: '0 360 360', 
      dur: 1000, 
      loop: true, 
      easing: "linear"})

    parent.appendChild(node);
  }
}

function initHawks() {
  const parent = document.getElementById('hawks');
  parent.setAttribute('animation', {
    property: "rotation", 
    from: '0 0 0', 
    to: '0 360 0', 
    dur: 5000, 
    loop: true, 
    easing: "linear"})

  const circle_num = 16;
  for (var i = 0; i < 12; i++) {
    // var elem = list[i];
    // // elem.object3D.position.set(i * 2, 0, 0);
    const radius = 1.0;
    const theta = i * Math.PI * 12 / circle_num;

    const x = radius * Math.cos(theta);
    const y = radius * Math.sin(theta);
    const height = 3;
    const scale = 0.002;

    const node = document.createElement('a-gltf-model');

    node.setAttribute('src', '#hawk-gltf');
    node.setAttribute('scale', [scale, scale, scale].join(' '));
    node.setAttribute('position', [x, height, y].join(' '));
    node.setAttribute('rotation', [0, -theta / Math.PI * 180, 30].join(' '));

    parent.appendChild(node);
  }
}

function initFuji() {
}

function initDancer() {
  const parent = document.getElementById('dancers');
  if (parent) {
    const circle_num = 5;
    for (var i = 0; i < circle_num; i++) {
      const node = document.createElement('a-entity');

      node.setAttribute('mmd-model', {
                 model: 'models/me/me.pmx',
                 vmd: 'vmds/wavefile_v2.vmd',
                 physics: false,
               });
      node.setAttribute('audioDelayTime', "0");
      node.setAttribute('shadow', "cast:true");
      node.setAttribute('position', "0 0 0");
      node.setAttribute('scale', "0.03 0.03 0.03");

      const radius = 2.0;
      const theta = i * Math.PI / (circle_num - 1);

      x = radius * Math.cos(theta);
      y = radius * Math.sin(theta);

      node.setAttribute('position', [x, 0, y].join(' '));
      parent.appendChild(node);
    }
  }
}
