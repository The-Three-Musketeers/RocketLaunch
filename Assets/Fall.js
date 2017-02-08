#pragma strict

function Start () {
	
}

function Update () {
	if (transform.parent == null) {
		Debug.Log("Start Fall Motion");
	}
}
