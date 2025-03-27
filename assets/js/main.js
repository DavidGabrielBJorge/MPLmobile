AFRAME.registerComponent("toggle1", {
  init: function() {
    this.el.addEventListener("mouseenter", (e) => {
      let object2 = document.querySelector("#object2");
      let object3 = document.querySelector("#object3");

      
        object2.setAttribute("visible", true);
        object3.setAttribute("visible", false);
      
    });
  }
});

AFRAME.registerComponent("toggle2", {
  init: function() {
    this.el.addEventListener("mouseenter", (e) => {
      let object2 = document.querySelector("#object2");
      let object3 = document.querySelector("#object3");

      
        object2.setAttribute("visible", false);
        object3.setAttribute("visible", true);
      
    });
  }
});

      AFRAME.registerComponent("cameracontrol", {
        init: function () {
            let timeoutId = null;  // Variável para armazenar o ID do timeout
    
            this.el.addEventListener("mouseenter", () => {
                // Define um atraso de 3 segundos antes de mover a câmera
                timeoutId = setTimeout(() => {
                    switch (this.el.id) {
                        case "markerhome":
                            document.getElementById("rig").setAttribute('position', '0.25 0 0')
                            break;
                        case "marker1":
                            document.getElementById("rig").setAttribute('position', '0.25 0 -3.4');
                            break;
                        case "marker2":
                            document.getElementById("rig").setAttribute('position', '-2 0 -3.4');
                            break;
                        case "marker3":
                              document.getElementById("rig").setAttribute("position", "2.5 0 -3.4");
                              break;
                        case "marker4":
                              document.getElementById("rig").setAttribute("position", "3.6 0 -2.2");
                              break;
                        case "marker5":
                              document.getElementById("rig").setAttribute("position", "3.6 0 -0.4");
                              break;
                        case "marker6":
                              document.getElementById("rig").setAttribute("position", "6.1 0.07 -6.6");
                    }
                }, 2000); // 3000 milissegundos = 3 segundos
            });
    
            this.el.addEventListener("mouseleave", () => {
                // Se o usuário tirar o cursor antes do tempo, cancela o timeout
                clearTimeout(timeoutId);
            });
        },
    });

    // Criar o som 3D com Howler
  var sound1 = new Howl({
    src: ['./assets/sounds/bbc_bedford-li_07012047.mp3'],
    loop: true,
    volume: 0, // Começa mudo
    autoplay: true
  });

  var sound2 = new Howl({
    src: ['./assets/sounds/bbc_water---wa_07012126.mp3'],
    loop: true,
    volume: 0, // Começa mudo
    autoplay: true
  });

  function updateVolume() {
    let camera = document.getElementById("rig");
    let marker6 = document.getElementById("marker6");
    let marker2 = document.getElementById("marker2");
  
    if (!camera || !marker6 || !marker2) return;
  
    let cameraPos = camera.object3D.position;
    let markerPos1 = marker6.object3D.position;
    let markerPos2 = marker2.object3D.position;
  
    let maxDistance = 8; // Distância máxima para ouvir os sons
  
    // Calcula e ajusta o volume para marker6
    let distance1 = cameraPos.distanceTo(markerPos1);
    let volume1 = 1 - Math.min(distance1 / maxDistance, 1);
    sound1.volume(volume1);
  
    // Calcula e ajusta o volume para marker2
    let distance2 = cameraPos.distanceTo(markerPos2);
    let volume2 = 1 - Math.min(distance2 / maxDistance, 1);
    sound2.volume(volume2);
  }
  
  // Atualiza o volume a cada 200ms
  setInterval(updateVolume, 200);

    

    document.addEventListener("DOMContentLoaded", function () {
      let loadingElement = document.getElementById("loading");
      let scene = document.querySelector("a-scene");
  
      if (scene.hasLoaded) {
          loadingElement.style.display = "none"; // Se já carregou, esconde o loading
      } else {
          scene.addEventListener("loaded", function () {
              loadingElement.style.display = "none";
          });
      }
  });
    

     AFRAME.registerComponent("marker1move", {
   init: function() {
      this.el.addEventListener("click", (e)=>{
        document.getElementById("rig").setAttribute('position', '0.25 0 -3.4')
      })
   }
 })

    

     AFRAME.registerComponent("markerhomemove", {
   init: function() {
      this.el.addEventListener("click", (e)=>{
        document.getElementById("rig").setAttribute('position', '0.25 0 0')
      })
   }
 })

    

     AFRAME.registerComponent("marker2move", {
   init: function() {
      this.el.addEventListener("click", (e)=>{
        document.getElementById("rig").setAttribute('position', '-2 0 -3.4')
      })
   }
 })

    

     AFRAME.registerComponent("marker3move", {
   init: function() {
      this.el.addEventListener("click", (e)=>{
        document.getElementById("rig").setAttribute('position', '2.5 0 -3.4')
      })
   }
 })

    

     AFRAME.registerComponent("marker4move", {
   init: function() {
      this.el.addEventListener("click", (e)=>{
        document.getElementById("rig").setAttribute('position', '3.6 0 -2.2')
      })
   }
 })

    

     AFRAME.registerComponent("marker5move", {
   init: function() {
      this.el.addEventListener("click", (e)=>{
        document.getElementById("rig").setAttribute('position', '3.6 0 -0.4')
      })
   }
 })

    

     AFRAME.registerComponent("marker6move", {
   init: function() {
      this.el.addEventListener("click", (e)=>{
        document.getElementById("rig").setAttribute('position', '5.6 0 -5.5')
      })
   }
 })
