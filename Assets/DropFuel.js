#pragma strict



var smoke : Transform;

var numFuelPods = 3;

var fuelPos = 0;

var moveSpeed = 200.0;

var launch = false;

function Update () {
	// Listens for Lift Off Command
	if (Input.GetKeyDown(KeyCode.Return)) {
		Debug.Log("Lift Off!!!");

		launch = true;
	}

	// Handles Moving Rocket
	if (launch == true) {
		var move = Vector3(Input.GetAxis("Horizontal"),1,0);
		transform.position += move * moveSpeed * Time.deltaTime;
	}

	// Handles Droping Fuel Pods
	if (Input.GetKeyDown(KeyCode.Space) && fuelPos < numFuelPods) {
		var pod : Transform = transform.GetChild(0);
		var childPos = pod.position;
		var breakAway = Vector3(childPos.x,0,childPos.z);
		pod.parent = null;
		pod.gameObject.AddComponent.<Rigidbody>();
		pod.gameObject.GetComponent.<Rigidbody>().velocity = breakAway;
		fuelPos += 1;
	}
}


function Start () {
	transform.gameObject.GetComponent.<ParticleSystem>().Stop();
}