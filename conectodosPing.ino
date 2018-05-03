// Conectodos Ping
// 

#include <ESP8266WiFi.h>
#include <FirebaseArduino.h>

#define FIREBASE_HOST "conectodosping.firebaseio.com"
#define FIREBASE_AUTH "Kwrq38oCDoe6V14UBe664euUv3lpMPbgnnVzFltj"//  secreto de la base de satos
#define WIFI_SSID "INFINITUM507C"//modificar credenciales
#define WIFI_PASSWORD "2626093633"


void setup()
{
	Serial.begin(9600);
	WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  	while (WiFi.status() != WL_CONNECTED) {
    	delay(500);
  	} 
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);
	
}



void loop()
{
	Firebase.setInt("torre_1/dato", 1);
	// Firebase.setInt("torre_2/dato", 1);
	delay(500);
	Firebase.setInt("torre_1/dato", 0);
	// Firebase.setInt("torre_2/dato", 0);
	delay(500);


}