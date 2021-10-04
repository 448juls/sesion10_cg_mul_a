// create a scene, that will hold all our elements such as objects, cameras and lights.
    var scene = new THREE.Scene();

function cube(x, y, z, color, material, alambrado){
// create a cube
    var cubeGeometry = new THREE.BoxGeometry(x, y, z);
    var cubeMaterial;
    switch(material){	
	case 'Basic': cubeMaterial = new THREE.MeshBasicMaterial({color:color, wireframe:alambrado});
	break;
	case 'Standar': cubeMaterial = new THREE.MeshStandardMaterial({color:color, wireframe:alambrado});
	break;
	case 'Physical': cubeMaterial = new THREE.MeshPhysicalMaterial({color:color, wireframe:alambrado});
	break;
	case 'Phong': cubeMaterial = new THREE.MeshPhongMaterial({color:color, wireframe:alambrado});
	break;
	case 'Lambert': cubeMaterial = new THREE.MeshLambertMaterial({color:color, wireframe:alambrado});
	break;
    }
    
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    

    // position the cube
    cube.position.set(0, 0, 0);

    // add the cube to the scene
    scene.add(cube);
    return cube;

}
 
function init() {
    

    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // show axes in the screen
    var axes = new THREE.AxesHelper(20);
    scene.add(axes);

    var delta = 9;
    var dim = 4;

    //creación de cubos
    var cuboX = cube(dim, dim, dim, 0XEE7C28, 'Physical', false);
    var cuboY = cube(dim, dim, dim, 0X5BEE28, 'Physical', false);
    var cuboZ = cube(dim, dim, dim, 0XCDEE28, 'Physical', false);

    //translación de los cubos en cada eje
    cuboX.translateX(delta);
    cuboY.translateY(delta);
    cuboZ.translateZ(delta);
   
    //Luz (requerida para el material MeshLambertMaterial)
    light = new THREE.PointLight(0xFFFF00); //  Luz proveniente de un punto en el espacio, 
		                                //  semejante al sol.
    light.position.set( -10, 5, 10 );             //  Localización de la luz. (x, y, z).
    scene.add( light );


    // position and point the camera to the center of the scene
    camera.position.set(-30, 40, 30);
    camera.lookAt(scene.position);

    // add the output of the renderer to the html element
    document.getElementById("webgl-output").appendChild(renderer.domElement);

    // render the scene
    renderer.render(scene, camera);
}